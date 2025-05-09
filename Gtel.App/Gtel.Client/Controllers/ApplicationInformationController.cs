using Gtel.Client.EntityFrameworkCore;
using Gtel.Client.Extensions;
using Gtel.Client.Helpers;
using Gtel.Client.Models;
using Gtel.Client.ViewModels.ApplicationInformations;
using Gtel.Client.ViewModels.Common;
using Gtel.Client.ViewModels.NewsComments;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Persistence.EFCore.Scoping;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Authorization;

namespace Gtel.Client.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class ApplicationInformationController : Controller
    {
        private readonly IEFCoreScopeProvider<GtelPortalDbContext> _efCoreScopeProvider;
        private readonly UmbracoHelper _umbracoHelper;
        private readonly IMediaService _mediaService;
        private readonly MediaFileManager _mediaFileManager;
        private readonly MediaUrlGeneratorCollection _mediaUrlGeneratorCollection;
        private readonly IShortStringHelper _shortStringHelper;
        private readonly IContentTypeBaseServiceProvider _contentTypeBaseServiceProvider;
        private readonly IConfiguration _configuration;

        public ApplicationInformationController(IEFCoreScopeProvider<GtelPortalDbContext> efCoreScopeProvider
            , UmbracoHelper umbracoHelper
            , IMediaService mediaService
            , MediaFileManager mediaFileManager
            , MediaUrlGeneratorCollection mediaUrlGeneratorCollection
            , IShortStringHelper shortStringHelper
            , IContentTypeBaseServiceProvider contentTypeBaseServiceProvider
            , IConfiguration configuration)
        {
            _efCoreScopeProvider = efCoreScopeProvider;
            _umbracoHelper = umbracoHelper;
            _mediaService = mediaService;
            _mediaFileManager = mediaFileManager;
            _mediaUrlGeneratorCollection = mediaUrlGeneratorCollection;
            _shortStringHelper = shortStringHelper;
            _contentTypeBaseServiceProvider = contentTypeBaseServiceProvider;
            _configuration = configuration;
        }

        [HttpGet]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> GetAll()
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            IEnumerable<ApplicationInformation> applicationInformations = await scope.ExecuteWithContextAsync(async db => db.ApplicationInformations.ToArray());
            scope.Complete();
            return Ok(applicationInformations);
        }

        [HttpPost]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<PagedResultDto<GetApplicationInformationForViewDto>> GetPaged([FromBody] GetAllApplicationInformationsInput input)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            int totalCount = await scope.ExecuteWithContextAsync(async db =>
            {
                return db.ApplicationInformations.WhereIf(
                    !string.IsNullOrWhiteSpace(input.Filter),
                    x => input.Filter == null
                        || x.FullName.Contains(input.Filter)
                        || x.Address.Contains(input.Filter)
                        || x.Email.Contains(input.Filter)).Count();
            });

            var listItems = await scope.ExecuteWithContextAsync(async db =>
            {
                return db.ApplicationInformations.WhereIf(
                    !string.IsNullOrWhiteSpace(input.Filter),
                        x => input.Filter == null
                        || x.FullName.Contains(input.Filter)
                        || x.Email.Contains(input.Filter))
                    .OrderBy(x => x.Id)
                    .Skip(input.SkipCount)
                    .Take(input.MaxResultCount)
                    .Select(x => ItemToDto(x))
                    .ToList();
            });

            scope.Complete();

            var result = new List<GetApplicationInformationForViewDto>();
            foreach (var item in listItems)
            {
                if (item.JobPostingKey != null)
                {
                    var jobPosting = _umbracoHelper.Content(item.JobPostingKey.Value);
                    result.Add(new GetApplicationInformationForViewDto
                    {
                        ApplicationInformation = item,
                        JobPostingUrl = jobPosting?.Url(),
                        JobPostingTitle = jobPosting?.Value("title")?.ToString()
                    });
                }
                else
                {
                    result.Add(new GetApplicationInformationForViewDto
                    {
                        ApplicationInformation = item
                    });
                }
            }

            return new PagedResultDto<GetApplicationInformationForViewDto>(totalCount, result);
        }

        [HttpGet("{id}")]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> Get(long id)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            ApplicationInformationDto? appInfo = await scope.ExecuteWithContextAsync(async db => db.ApplicationInformations.Where(x => x.Id == id).Select(x => ItemToDto(x)).FirstOrDefault());
            scope.Complete();
            if (appInfo == null) return NotFound();
            var result = new GetApplicationInformationForViewDto { ApplicationInformation = appInfo };
            if (appInfo.JobPostingKey != null)
            {
                var jobPosting = _umbracoHelper.Content(appInfo.JobPostingKey.Value);
                result.JobPostingTitle = jobPosting?.Value("title")?.ToString();
                result.JobPostingUrl = jobPosting?.Url();
            }
            return Ok(result);
        }

        [HttpGet]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> GetApplicationInformations(Guid umbracoNodeKey)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            IEnumerable<ApplicationInformation> applicationInformations = await scope.ExecuteWithContextAsync(async db =>
            {
                return db.ApplicationInformations.Where(x => x.JobPostingKey == umbracoNodeKey).ToArray();
            });

            scope.Complete();
            return Ok(applicationInformations);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> InsertApplicationInformation([FromBody] ApplicationInformationDto input)
        {
            if (!ModelState.IsValid)
            {
                // Return a BadRequest with the validation errors
                return BadRequest(ModelState);
            }

            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();

            var applicationInformation = new ApplicationInformation()
            {
                JobPostingKey = input.JobPostingKey,
                FullName = input.FullName ?? string.Empty,
                Email = input.Email ?? string.Empty,
                Telephone = input.Telephone ?? string.Empty,
                Address = input.Address ?? string.Empty,
                Message = input.Message,
                FileId = input.FileId,
                FileKey = input.FileKey,
                FileName = input.FileName,
                FileContentType = input.FileContentType,
                FileType = input.FileType,
                FileUrl = input.FileUrl,
                CreationDate = DateTime.Now
            };

            await scope.ExecuteWithContextAsync<Task>(async db =>
            {
                db.ApplicationInformations.Add(applicationInformation);
                await db.SaveChangesAsync();
            });

            scope.Complete();

            return Ok(new { message = "Thông tin của bạn đã được gửi thành công!" });
        }

        [HttpPost]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> DeleteApplicationInformation([FromBody] DeleteApplicationInformationInput input)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            ApplicationInformation? appInfo = await scope.ExecuteWithContextAsync(async db => db.ApplicationInformations.Where(x => x.Id == input.Id).FirstOrDefault());
            scope.Complete();
            if (appInfo == null) return NotFound();

            appInfo.IsDeleted = true;
            appInfo.DeletedByUserId = input.CurrentUserId;
            appInfo.DeletedByUserName = input.CurrentUserName;

            await scope.ExecuteWithContextAsync<Task>(async db =>
            {
                db.ApplicationInformations.Update(appInfo);
                await db.SaveChangesAsync();
            });

            scope.Complete();

            return Ok(new { message = "Xóa thành công!" });
        }

        [HttpPost]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> DeleteApplicationInformations([FromBody] DeleteApplicationInformationsInput input)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            List<ApplicationInformation>? appInfos = await scope.ExecuteWithContextAsync(async db => db.ApplicationInformations.Where(x => input.Ids.Contains(x.Id ?? 0)).ToList());
            scope.Complete();
            if (appInfos == null || appInfos.Count == 0) return NotFound();

            foreach (var appInfo in appInfos)
            {
                appInfo.IsDeleted = true;
                appInfo.DeletedByUserId = input.CurrentUserId;
                appInfo.DeletedByUserName = input.CurrentUserName;
            }

            await scope.ExecuteWithContextAsync<Task>(async db =>
            {
                db.ApplicationInformations.UpdateRange(appInfos);
                await db.SaveChangesAsync();
            });

            scope.Complete();

            return Ok(new { message = "Xóa thành công!" });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("Không có file được tải lên.");
            }
            var maxSize = int.Parse(_configuration["CurriculumVitaeFile:MaxSize"]?.ToString() ?? "5");
            var allowedExtensions = _configuration.GetSection("CurriculumVitaeFile:AllowExtensions").Get<string[]>() ?? [".pdf", ".docx", ".doc"];
            
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();

            if (!allowedExtensions.Contains(extension))
            {
                return BadRequest($"Định dạng file không được cho phép ({string.Join(", ", allowedExtensions)}).");
            }

            if (file.Length > maxSize * 1024 * 1024) // => convert to Megabytes
            {
                return BadRequest($"File {file.FileName}không được lớn hơn {maxSize}MB.");
            }

            if (!await FileCommonHelpers.IsValidAsync(file))
            {
                return BadRequest($"File {file.FileName} bị giả mạo. Vui lòng kiểm tra lại.");
            }

            var folderKey = _configuration["CurriculumVitaeFile:FolderKey"]?.ToString() ?? "109f7b2a-177d-40d1-8282-9ea8f50f711b";
            var folderCV = _umbracoHelper.Media(folderKey);

            if (folderCV == null)
            {
                return BadRequest("The directory containing the CV does not exist.");
            }
            using (var fileStream = file.OpenReadStream())
            {                
                string fileName = FileHelpers.GenerateRandomFileName(extension);
                var mediaFile = _mediaService.CreateMediaWithIdentity(fileName, folderCV.Id, Constants.Conventions.MediaTypes.File);
                mediaFile.SetValue(_mediaFileManager
                                    , _mediaUrlGeneratorCollection
                                    , _shortStringHelper
                                    , _contentTypeBaseServiceProvider
                                    , Constants.Conventions.Media.File
                                    , fileName
                                    , fileStream);
                // Save the created media 
                _mediaService.Save(mediaFile);

                var publishedMedia = _umbracoHelper.Media(mediaFile.Id);
                var fileId = mediaFile.Id;
                var fileKey = mediaFile.Key;
                var fileUrl = publishedMedia?.MediaUrl();
                var fileType = extension;
                var fileContentType = file.ContentType;
                return Ok(new { fileId, fileKey, fileUrl, fileName, fileType, fileContentType });
            }
        }

        private static ApplicationInformationDto ItemToDto(ApplicationInformation item) => new ApplicationInformationDto
        {
            Id = item.Id,
            FullName = item.FullName,
            Email = item.Email,
            Address = item.Address,
            Message = item.Message,
            FileId = item.FileId,
            FileKey = item.FileKey,
            FileName = item.FileName,
            FileUrl = item.FileUrl,
            FileContentType = item.FileContentType,
            FileType = item.FileType,
            JobPostingKey = item.JobPostingKey
        };
    }
}

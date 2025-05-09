using Gtel.Client.EntityFrameworkCore;
using Gtel.Client.Extensions;
using Gtel.Client.Models;
using Gtel.Client.ViewModels.Common;
using Gtel.Client.ViewModels.NewsComments;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Persistence.EFCore.Scoping;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Authorization;

namespace Gtel.Client.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class NewsCommentController : Controller
    {
        private readonly IEFCoreScopeProvider<GtelPortalDbContext> _efCoreScopeProvider;
        private readonly UmbracoHelper _umbracoHelper;
        public NewsCommentController(
            IEFCoreScopeProvider<GtelPortalDbContext> efCoreScopeProvider,
            UmbracoHelper umbracoHelper)
        {
            _efCoreScopeProvider = efCoreScopeProvider;
            _umbracoHelper = umbracoHelper;
        }

        [HttpGet]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> GetAll()
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            IEnumerable<NewsComment> comments = await scope.ExecuteWithContextAsync(async db => db.NewsComments.ToArray());
            scope.Complete();
            return Ok(comments);
        }

        [HttpPost]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<PagedResultDto<GetNewsCommentForViewDto>> GetPaged([FromBody] GetAllNewsCommentsInput input)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            int totalCount = await scope.ExecuteWithContextAsync(async db =>
            {
                return db.NewsComments.WhereIf(
                    !string.IsNullOrWhiteSpace(input.Filter),
                    x => input.Filter == null
                        || x.Name.Contains(input.Filter)
                        || x.Email.Contains(input.Filter)).Count();
            });

            var listItems = await scope.ExecuteWithContextAsync(async db =>
                {
                    return db.NewsComments.WhereIf(
                        !string.IsNullOrWhiteSpace(input.Filter),
                        x => input.Filter == null
                            || x.Name.Contains(input.Filter)
                            || x.Email.Contains(input.Filter))
                        .OrderBy(x => x.Id)
                        .Skip(input.SkipCount)
                        .Take(input.MaxResultCount)
                        .Select(x => ItemToDto(x))
                        .ToList();
                });

            scope.Complete();

            var result = new List<GetNewsCommentForViewDto>();
            foreach (var item in listItems)
            {
                if (item.NewsUmbracoKey != null)
                {
                    var news = _umbracoHelper.Content(item.NewsUmbracoKey);
                    result.Add(new GetNewsCommentForViewDto
                    {
                        NewsComment = item,
                        NewsUrl = news?.Url(),
                        NewsTitle = news?.Value("title")?.ToString()
                    });
                }
            }

            return new PagedResultDto<GetNewsCommentForViewDto>(totalCount, result);
        }

        [HttpGet("{id}")]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> Get(long id)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            NewsCommentDto? comment = await scope.ExecuteWithContextAsync(async db => db.NewsComments.Where(x => x.Id == id).Select(x => ItemToDto(x)).FirstOrDefault());
            scope.Complete();
            if (comment == null) return NotFound();
            var result = new GetNewsCommentForViewDto { NewsComment = comment };
            if (comment.NewsUmbracoKey != null)
            {
                var article = _umbracoHelper.Content(comment.NewsUmbracoKey.Value);
                result.NewsTitle = article?.Value("title")?.ToString();
                result.NewsUrl = article?.Url();
            }
            return Ok(result);
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> GetComments(Guid umbracoNodeKey)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            IEnumerable<NewsComment> comments = await scope.ExecuteWithContextAsync(async db =>
            {
                return db.NewsComments.Where(x => x.NewsUmbracoKey == umbracoNodeKey).ToArray();
            });

            scope.Complete();
            return Ok(comments);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> InsertComment([FromForm] NewsComment comment)
        {
            if (!ModelState.IsValid)
            {
                // Return a BadRequest with the validation errors
                return BadRequest(ModelState);
            }

            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();

            comment.CreationDate = DateTime.Now;

            await scope.ExecuteWithContextAsync<Task>(async db =>
            {
                db.NewsComments.Add(comment);
                await db.SaveChangesAsync();
            });

            scope.Complete();

            return Ok(new { message = "Ý kiến của bạn đã được gửi thành công!" });
        }
        
        [HttpPost]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> DeleteComment([FromBody] DeleteNewsCommentInput input)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            NewsComment? comment = await scope.ExecuteWithContextAsync(async db => db.NewsComments.Where(x => x.Id == input.Id).FirstOrDefault());
            scope.Complete();
            if (comment == null) return NotFound();

            comment.IsDeleted = true;
            comment.DeletedByUserId = input.CurrentUserId;
            comment.DeletedByUserName = input.CurrentUserName;

            await scope.ExecuteWithContextAsync<Task>(async db =>
            {
                db.NewsComments.Update(comment);
                await db.SaveChangesAsync();
            });

            scope.Complete();

            return Ok(new { message = "Xóa thành công!" });
        }
        
        [HttpPost]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> DeleteComments([FromBody] DeleteNewsCommentsInput input)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            List<NewsComment>? comments = await scope.ExecuteWithContextAsync(async db => db.NewsComments.Where(x => input.Ids.Contains(x.Id)).ToList());
            scope.Complete();
            if (comments == null || comments.Count == 0) return NotFound();

            foreach (var comment in comments)
            {
                comment.IsDeleted = true;
                comment.DeletedByUserId = input.CurrentUserId;
                comment.DeletedByUserName = input.CurrentUserName;
            }

            await scope.ExecuteWithContextAsync<Task>(async db =>
            {
                db.NewsComments.UpdateRange(comments);
                await db.SaveChangesAsync();
            });

            scope.Complete();

            return Ok(new { message = "Xóa thành công!" });
        }
        
        [HttpPost]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> ApproveComment([FromBody] ApproveNewsCommentInput input)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            NewsComment? comment = await scope.ExecuteWithContextAsync(async db => db.NewsComments.Where(x => x.Id == input.Id).FirstOrDefault());
            scope.Complete();
            if (comment == null) return NotFound();

            comment.IsApproved = true;
            comment.ApprovedByUserId = input.CurrentUserId;
            comment.ApprovedByUserName = input.CurrentUserName;

            await scope.ExecuteWithContextAsync<Task>(async db =>
            {
                db.NewsComments.Update(comment);
                await db.SaveChangesAsync();
            });

            scope.Complete();

            return Ok(new { message = "Phê duyệt thành công!" });
        }
        
        [HttpPost]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public async Task<IActionResult> RejectComment([FromBody] RejectNewsCommentInput input)
        {
            using IEfCoreScope<GtelPortalDbContext> scope = _efCoreScopeProvider.CreateScope();
            NewsComment? comment = await scope.ExecuteWithContextAsync(async db => db.NewsComments.Where(x => x.Id == input.Id).FirstOrDefault());
            scope.Complete();
            if (comment == null) return NotFound();

            comment.IsApproved = false;
            comment.ApprovedByUserId = input.CurrentUserId;
            comment.ApprovedByUserName = input.CurrentUserName;

            await scope.ExecuteWithContextAsync<Task>(async db =>
            {
                db.NewsComments.Update(comment);
                await db.SaveChangesAsync();
            });

            scope.Complete();

            return Ok(new { message = "Hủy, không phê duyệt thành công!" });
        }

        private static NewsCommentDto ItemToDto(NewsComment item) => new NewsCommentDto
        {
            Id = item.Id,
            Name = item.Name,
            Email = item.Email,
            Message = item.Message,
            NewsUmbracoKey = item.NewsUmbracoKey,
            IsApproved = item.IsApproved
        };
    }
}

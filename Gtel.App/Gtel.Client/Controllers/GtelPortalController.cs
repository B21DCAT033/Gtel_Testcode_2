using Gtel.Client.ViewModels;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Media.EmbedProviders;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Security;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Authorization;

namespace Gtel.Client.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class GtelPortalController : Controller
    {
        private readonly UmbracoHelper _umbracoHelper;
        private readonly IBackOfficeSecurityAccessor _backOfficeSecurityAccessor;
        private readonly IAntiforgery _antiforgery;
        public GtelPortalController(UmbracoHelper umbracoHelper
        , IBackOfficeSecurityAccessor backOfficeSecurityAccessor
        , IAntiforgery antiforgery)
        {
            _umbracoHelper = umbracoHelper;
            _backOfficeSecurityAccessor = backOfficeSecurityAccessor;
            _antiforgery = antiforgery;
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public JsonResult SearchNewsByKeyword(string newsManagementKey, string? keyword, int page = 1, int pageSize = 5)
        {
            var news_management = _umbracoHelper.Content(newsManagementKey);
            var list_news = news_management?.DescendantsOfType("news")?
                                            .Where(x => string.IsNullOrEmpty(keyword)
                                                        || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                        || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                        || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true))
                                            .OrderByDescending(x => x.UpdateDate)
                                            .Skip((page - 1) * pageSize)
                                            .Take(pageSize)
                                            .Select(x => new NewsDto
                                            {
                                                Title = x.Value("title")?.ToString(),
                                                Description = x.Value("description")?.ToString(),
                                                Avatar = x.Value<MediaWithCrops>("avatar")?.GetCropUrl("newsLarge"),
                                                UpdateDateDate = x.UpdateDate.ToString("dd"),
                                                UpdateDateMonth = x.UpdateDate.ToString("MM"),
                                                Author = x.Value("author")?.ToString(),
                                                Url = x.Url(),
                                                Category = x.Value<IEnumerable<IPublishedContent>>("category")?.FirstOrDefault()?.Name,
                                                CategoryUrl = x.Value<IEnumerable<IPublishedContent>>("category")?.FirstOrDefault()?.Url(),
                                            })
                                            .ToList();

            var totalRecords = news_management?.DescendantsOfType("news")?
                                               .Where(x => string.IsNullOrEmpty(keyword)
                                                            || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                            || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                            || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true))
                                               .Count();

            return Json(new { items = list_news, total = totalRecords });
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public JsonResult SearchNewsOfCategoryByKeyword(string newsManagementKey, string categoryKey, string? keyword, int page = 1, int pageSize = 5)
        {
            var news_management = _umbracoHelper.Content(newsManagementKey);
            var list_news = news_management?.DescendantsOfType("news")?
                                            .Where(x => {
                                                var categories  = x.Value<IEnumerable<IPublishedContent>>("category");
                                                return categories != null 
                                                    && categories.Any(y => y.Key.ToString().Equals(categoryKey, StringComparison.OrdinalIgnoreCase))
                                                    && (string.IsNullOrEmpty(keyword)
                                                        || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                        || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                        || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true));
                                            })
                                            .OrderByDescending(x => x.UpdateDate)
                                            .Skip((page - 1) * pageSize)
                                            .Take(pageSize)
                                            .Select(x => new NewsDto
                                            {
                                                Title = x.Value("title")?.ToString(),
                                                Description = x.Value("description")?.ToString(),
                                                Avatar = x.Value<MediaWithCrops>("avatar")?.GetCropUrl("newsLarge"),
                                                UpdateDateDate = x.UpdateDate.ToString("dd"),
                                                UpdateDateMonth = x.UpdateDate.ToString("MM"),
                                                Author = x.Value("author")?.ToString(),
                                                Url = x.Url(),
                                                Category = x.Value<IEnumerable<IPublishedContent>>("category")?.FirstOrDefault()?.Name,
                                                CategoryUrl = x.Value<IEnumerable<IPublishedContent>>("category")?.FirstOrDefault()?.Url(),
                                            })
                                            .ToList();

            var totalRecords = news_management?.DescendantsOfType("news")?
                                                .Where(x => {
                                                    var categories  = x.Value<IEnumerable<IPublishedContent>>("category");
                                                    return categories != null 
                                                        && categories.Any(y => y.Key.ToString().Equals(categoryKey, StringComparison.OrdinalIgnoreCase))
                                                        && (string.IsNullOrEmpty(keyword)
                                                            || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                            || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                            || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true));
                                                })
                                               .Count();

            return Json(new { items = list_news, total = totalRecords });
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public JsonResult SearchGlobal(string? keyword, string? categoryKey, DateTime? fromDate, DateTime? toDate, int page = 1, int pageSize = 6)
        {
            var list_documents = _umbracoHelper.ContentAtRoot().FirstOrDefault()?.Descendants()?
                                               .Where(x => x.IsDocumentType("news") || x.IsDocumentType("videoNews"))
                                               .Where(x => {
                                                    if (string.IsNullOrEmpty(categoryKey))
                                                        return true;
                                                    
                                                    var categories = x.Value<IEnumerable<IPublishedContent>>("category");
                                                    return categories != null && 
                                                        categories.Any(y => y.Key.ToString().Equals(categoryKey, StringComparison.OrdinalIgnoreCase));
                                                })
                                               .Where(x => string.IsNullOrEmpty(keyword)
                                                           || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                           || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                           || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true))
                                               .Where(x => !fromDate.HasValue || x.UpdateDate.Date >= fromDate.Value.Date)
                                               .Where(x => !toDate.HasValue || x.UpdateDate.Date <= toDate.Value.Date)
                                               .OrderByDescending(x => x.UpdateDate)
                                               .Skip((page - 1) * pageSize)
                                               .Take(pageSize)
                                               .Select(x => new SearchedDocumentDto
                                               {
                                                   Title = x.Value("title")?.ToString(),
                                                   Description = x.Value("description")?.ToString(),
                                                   Avatar = x.Value<MediaWithCrops>("avatar")?.GetCropUrl("newsLarge"),
                                                   UpdateDateDate = x.UpdateDate.ToString("dd"),
                                                   UpdateDateMonth = x.UpdateDate.ToString("MM"),
                                                   Author = x.Value("author")?.ToString(),
                                                   Url = x.Url(),
                                                   Category = x.Value<IEnumerable<IPublishedContent>>("category")?.FirstOrDefault()?.Name,
                                                   CategoryUrl = x.Value<IEnumerable<IPublishedContent>>("category")?.FirstOrDefault()?.Url(),
                                                   DocumentTypeAlias = x.ContentType.Alias
                                               })
                                               .ToList();

            var totalRecords = _umbracoHelper.ContentAtRoot().FirstOrDefault()?.Descendants()?
                                             .Where(x => x.IsDocumentType("news") || x.IsDocumentType("videoNews"))
                                             .Where(x => {
                                                if (string.IsNullOrEmpty(categoryKey))
                                                    return true;
                                                
                                                var categories = x.Value<IEnumerable<IPublishedContent>>("category");
                                                return categories != null && 
                                                    categories.Any(y => y.Key.ToString().Equals(categoryKey, StringComparison.OrdinalIgnoreCase));
                                             })
                                             .Where(x => string.IsNullOrEmpty(keyword)
                                                         || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                         || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                         || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true))
                                             .Where(x => !fromDate.HasValue || x.UpdateDate.Date >= fromDate.Value.Date)
                                             .Where(x => !toDate.HasValue || x.UpdateDate.Date <= toDate.Value.Date)
                                             .Count();

            return Json(new { items = list_documents, total = totalRecords });
        }

        [HttpGet]
        public JsonResult SearchVideoNewsByKeyword(string videoLibraryKey, string? keyword, int page = 1, int pageSize = 6)
        {
            var video_library = _umbracoHelper.Content(videoLibraryKey);
            var list_video_news = video_library?.DescendantsOfType("videoNews")?
                                            .Where(x => string.IsNullOrEmpty(keyword)
                                                        || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                        || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                        || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true))
                                            .OrderByDescending(x => x.UpdateDate)
                                            .Skip((page - 1) * pageSize)
                                            .Take(pageSize)
                                            .Select(x => new VideoNewsDto
                                            {
                                                Title = x.Value("title")?.ToString(),
                                                Description = x.Value("description")?.ToString(),
                                                Avatar = x.Value<MediaWithCrops>("avatar")?.GetCropUrl("newsLarge"),
                                                VideoSrc = x.Value<MediaWithCrops>("video")?.MediaUrl(),
                                                UpdateDateDate = x.UpdateDate.ToString("dd"),
                                                UpdateDateMonth = x.UpdateDate.ToString("MM"),
                                                Author = x.Value("author")?.ToString(),
                                                Category = x.Value<IEnumerable<IPublishedContent>>("category")?.FirstOrDefault()?.Name,
                                                Url = x.Url()
                                            })
                                            .ToList();

            var totalRecords = video_library?.DescendantsOfType("videoNews")?
                                               .Where(x => string.IsNullOrEmpty(keyword)
                                                            || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                            || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                            || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true))
                                               .Count();

            return Json(new { items = list_video_news, total = totalRecords });
        }

        [HttpGet]
        public JsonResult SearchOtherVideoNewsByKeyword(string videoLibraryKey, string mainVideoKey, string? keyword, int page = 1, int pageSize = 5)
        {
            var video_library = _umbracoHelper.Content(videoLibraryKey);
            var list_video_news = video_library?.DescendantsOfType("videoNews")?
                                            .Where(x => !x.Key.ToString().Equals(mainVideoKey)
                                                        && (string.IsNullOrEmpty(keyword)
                                                        || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                        || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                        || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)))
                                            .OrderByDescending(x => x.UpdateDate)
                                            .Skip((page - 1) * pageSize)
                                            .Take(pageSize)
                                            .Select(x => new VideoNewsDto
                                            {
                                                Title = x.Value("title")?.ToString(),
                                                Description = x.Value("description")?.ToString(),
                                                Avatar = x.Value<MediaWithCrops>("avatar")?.GetCropUrl("newsLarge"),
                                                VideoSrc = x.Value<MediaWithCrops>("video")?.MediaUrl(),
                                                UpdateDateDate = x.UpdateDate.ToString("dd"),
                                                UpdateDateMonth = x.UpdateDate.ToString("MM"),
                                                Author = x.Value("author")?.ToString(),
                                                Category = x.Value<IEnumerable<IPublishedContent>>("category")?.FirstOrDefault()?.Name,
                                                Url = x.Url()
                                            })
                                            .ToList();

            var totalRecords = video_library?.DescendantsOfType("videoNews")?
                                               .Where(x => !x.Key.ToString().Equals(mainVideoKey)
                                                        && (string.IsNullOrEmpty(keyword)
                                                            || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                            || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                            || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)))
                                               .Count();

            return Json(new { items = list_video_news, total = totalRecords });
        }

        [HttpGet]
        public JsonResult SearchJobPostingByKeyword(string jobPostingManagementKey, string? keyword, string? address)
        {
            var jobPostingManagement = _umbracoHelper.Content(jobPostingManagementKey);
            var list_job_posting = jobPostingManagement?.DescendantsOfType("jobPosting")?
                                            .Where(x => (string.IsNullOrEmpty(keyword)
                                                        || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                        || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                        )
                                                        &&
                                                        (string.IsNullOrEmpty(address)
                                                        || (x.Value("address")?.ToString()?.Contains(address, StringComparison.OrdinalIgnoreCase) == true)
                                                        ))
                                            .OrderByDescending(x => x.Value("expirationDate"))
                                            .Select(x => new JobPostingDto
                                            {
                                                Title = x.Value("title")?.ToString(),
                                                Address = x.Value("address")?.ToString(),
                                                Quantity = x.Value("quantity")?.ToString(),
                                                Salary = x.Value("salary")?.ToString(),
                                                ExpirationDate = x.Value<DateTime>("expirationDate").ToString("dd/MM/yyyy").Equals("01/01/0001") ? "Vô thời hạn" : x.Value<DateTime?>("expirationDate")?.ToString("dd/MM/yyyy"),
                                                Url = x.Url()
                                            })
                                            .ToList();

            return Json(new { items = list_job_posting });
        }

        [HttpGet]
        public JsonResult SearchProductsByKeyword(string productManagementKey, string? categoryKey, string? keyword)
        {
            var product_management = _umbracoHelper.Content(productManagementKey);
            var list_product = product_management?.DescendantsOfType("product")?
                                            .Where(x => {
                                                bool categoryCondition = string.IsNullOrEmpty(categoryKey);

                                                if (!categoryCondition) {
                                                    var category = x.Value<IPublishedContent>("category");
                                                    categoryCondition = category != null && 
                                                                    category.Key.ToString().Equals(categoryKey, StringComparison.OrdinalIgnoreCase);
                                                }
                                                
                                                bool keywordCondition = string.IsNullOrEmpty(keyword)
                                                                        || x.Name.Contains(keyword, StringComparison.OrdinalIgnoreCase)
                                                                        || (x.Value("title")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true)
                                                                        || (x.Value("description")?.ToString()?.Contains(keyword, StringComparison.OrdinalIgnoreCase) == true);
                                                
                                                return categoryCondition && keywordCondition;
                                            })
                                            .OrderByDescending(x => x.UpdateDate)
                                            .Select(x => new ProductDto
                                            {
                                                Title = x.Value("title")?.ToString(),
                                                Description = x.Value("description")?.ToString(),
                                                Avatar = x.Value<MediaWithCrops>("avatar")?.GetCropUrl("newsLarge"),
                                                Category = x.Value<IPublishedContent>("category")?.Name,
                                                Url = x.Url()
                                            })
                                            .ToList();

            return Json(new { items = list_product });
        }
        
        [HttpGet]
        public JsonResult SearchFeaturedProducts(string libraryPageKey)
        {
            var libraryPage = _umbracoHelper.Content(libraryPageKey);
            var list_product = libraryPage?.Value<IEnumerable<IPublishedContent>>("featuredProducts")?
                                            .Select(x => new ProductDto
                                            {
                                                Title = x.Value("title")?.ToString(),
                                                Description = x.Value("description")?.ToString(),
                                                Avatar = x.Value<MediaWithCrops>("avatar")?.GetCropUrl("newsLarge"),
                                                Category = x.Value<IPublishedContent>("category")?.Name,
                                                Url = x.Url()
                                            })
                                            .ToList();

            return Json(new { items = list_product });
        }
    
        [HttpGet]
        [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
        public IActionResult GetCurrentUser()
        {
            IUser currentUser = _backOfficeSecurityAccessor.BackOfficeSecurity?.CurrentUser
                                ?? throw new InvalidOperationException("No backoffice user found");
                                
            return Ok(new { Id = currentUser.Id, Name = currentUser.Name, UserName = currentUser.Username});
        }

        [HttpGet]
        public IActionResult GetAntiforgeryToken()
        {
            var tokens = _antiforgery.GetAndStoreTokens(HttpContext);

            return Ok(new { token = tokens.RequestToken });
        }
    }
}

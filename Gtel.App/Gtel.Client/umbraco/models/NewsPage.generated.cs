//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder.Embedded v15.3.1--preview.17+2c0ebb5
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Linq.Expressions;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PublishedCache;
using Umbraco.Cms.Infrastructure.ModelsBuilder;
using Umbraco.Cms.Core;
using Umbraco.Extensions;

namespace Umbraco.Cms.Web.Common.PublishedModels
{
	/// <summary>Tin tức</summary>
	[PublishedModel("newsPage")]
	public partial class NewsPage : PublishedContentModel, IPage
	{
		// helpers
#pragma warning disable 0109 // new is redundant
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		public new const string ModelTypeAlias = "newsPage";
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		[return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
		public new static IPublishedContentType GetModelContentType(IPublishedContentTypeCache contentTypeCache)
			=> PublishedModelUtility.GetModelContentType(contentTypeCache, ModelItemType, ModelTypeAlias);
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		[return: global::System.Diagnostics.CodeAnalysis.MaybeNull]
		public static IPublishedPropertyType GetModelPropertyType<TValue>(IPublishedContentTypeCache contentTypeCache, Expression<Func<NewsPage, TValue>> selector)
			=> PublishedModelUtility.GetModelPropertyType(GetModelContentType(contentTypeCache), selector);
#pragma warning restore 0109

		private IPublishedValueFallback _publishedValueFallback;

		// ctor
		public NewsPage(IPublishedContent content, IPublishedValueFallback publishedValueFallback)
			: base(content, publishedValueFallback)
		{
			_publishedValueFallback = publishedValueFallback;
		}

		// properties

		///<summary>
		/// Tin nổi bật
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("featuredNews")]
		public virtual global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent> FeaturedNews => this.Value<global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent>>(_publishedValueFallback, "featuredNews");

		///<summary>
		/// Banner đầu trang
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("topBanners")]
		public virtual global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent> TopBanners => this.Value<global::System.Collections.Generic.IEnumerable<global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent>>(_publishedValueFallback, "topBanners");

		///<summary>
		/// Meta Description: Appears in Google search results. It should be descriptive and in complete sentences. Include value statements and a call-to-action (click here, learn more by clicking here, download here, view video, etc) so people click the link. Include relevant keywords. 50-155 characters.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("metaDescription")]
		public virtual string MetaDescription => global::Umbraco.Cms.Web.Common.PublishedModels.Page.GetMetaDescription(this, _publishedValueFallback);

		///<summary>
		/// Meta Image: Used mostly by social media services such as Twitter and Facebook. The image that should be displayed as a preview for this page. If one is not defined one will try to be worked out from the pages content where possible.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("metaImage")]
		public virtual global::Umbraco.Cms.Core.Models.MediaWithCrops MetaImage => global::Umbraco.Cms.Web.Common.PublishedModels.Page.GetMetaImage(this, _publishedValueFallback);

		///<summary>
		/// Page Summary
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("pageSummary")]
		public virtual string PageSummary => global::Umbraco.Cms.Web.Common.PublishedModels.Page.GetPageSummary(this, _publishedValueFallback);

		///<summary>
		/// Page title: Overrides the default page title.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "15.3.1--preview.17+2c0ebb5")]
		[global::System.Diagnostics.CodeAnalysis.MaybeNull]
		[ImplementPropertyType("pageTitle")]
		public virtual string PageTitle => global::Umbraco.Cms.Web.Common.PublishedModels.Page.GetPageTitle(this, _publishedValueFallback);
	}
}

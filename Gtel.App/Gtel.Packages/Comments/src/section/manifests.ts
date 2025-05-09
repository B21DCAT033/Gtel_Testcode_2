import { CMS_SECTION_COMMENT_ALIAS, CMS_MENU_COMMENT_ALIAS, CMS_SIDEBARMENU_COMMENT_ALIAS } from '../constants';

// Manifest definition for showing navigation button on appHeader
const sectionNavigation = {
	type: 'section',
	alias: CMS_SECTION_COMMENT_ALIAS,
	name: 'Comment Section',
	weight: 990,
	meta: {
		label: '#commentsPack_commentSectionName',
		pathname: 'comment'
	},
	conditions: [
		{
			alias: 'Umb.Condition.SectionUserPermission',
			match: CMS_SECTION_COMMENT_ALIAS
		}
	]
};

// Manifest definition for showing sidebar in left panel
const sectionSidebarApp = {
	type: 'sectionSidebarApp',
	kind: 'menuWithEntityActions',
	alias: CMS_SIDEBARMENU_COMMENT_ALIAS,
	name: 'Comment Sidebar Menu',
	weight: 100,
	meta: {
		label: '#commentsPack_information',
		menu: CMS_MENU_COMMENT_ALIAS,
		entityType: ''
	},
	conditions: [
		{
			alias: 'Umb.Condition.SectionAlias',
			match: CMS_SECTION_COMMENT_ALIAS
		}
	]
};

export const manifests: Array<UmbExtensionManifest> = [sectionNavigation, sectionSidebarApp];

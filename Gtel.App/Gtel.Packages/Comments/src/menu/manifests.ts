import {
    CMS_MENUITEM_NEWSCOMMENT_ALIAS,
    CMS_MENU_COMMENT_ALIAS,
	CMS_ENTITY_TYPE_NEWSCOMMENT,
    CMS_MENUITEM_APPLICATIONINFORMATION_ALIAS,
    CMS_ENTITY_TYPE_APPLICATIONINFORMATION
} from '../constants';

// Manifest definition for showing hierarchy menu of components on sidebar
export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'menu',
		alias: CMS_MENU_COMMENT_ALIAS,
		name: 'Comment Menu'
	},
	{
		type: 'menuItem',
		alias: CMS_MENUITEM_NEWSCOMMENT_ALIAS,
		name: 'Gtel portal Menu Item News Comment',
		weight: 2000,
		meta: {
			label: '#commentsPack_articleComments',
			icon: 'icon-list',
			menus: [CMS_MENU_COMMENT_ALIAS],
			entityType: CMS_ENTITY_TYPE_NEWSCOMMENT
		}
	},
	{
		type: 'menuItem',
		alias: CMS_MENUITEM_APPLICATIONINFORMATION_ALIAS,
		name: 'Gtel portal Menu Item Application Information',
		weight: 1000,
		meta: {
			label: '#commentsPack_applicationInformation',
			icon: 'icon-list',
			menus: [CMS_MENU_COMMENT_ALIAS],
			entityType: CMS_ENTITY_TYPE_APPLICATIONINFORMATION
		}
	}
];

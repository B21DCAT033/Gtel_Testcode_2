import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';
import { manifests as sectionManifests } from './src/section/manifests.js';
import { manifests as menuManifests } from './src/menu/manifests.js';
import { manifests as newsCommentsManifests } from './src/news-comments/manifests.js';
import { manifests as applicationInformationsManifests } from './src/application-informations/manifests.js';

export const manifests: Array<ManifestTypes> = [
	...sectionManifests,
	...menuManifests,
	...newsCommentsManifests,
	...applicationInformationsManifests
];

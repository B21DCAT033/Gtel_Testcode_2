import { loadManifestElement } from './load-manifest-element.function.js';
/**
 *
 * @param manifest
 * @param fallbackElement
 */
export async function createExtensionElement(manifest, fallbackElement) {
    const elementPropValue = manifest.element ?? manifest.js;
    if (elementPropValue) {
        const elementConstructor = await loadManifestElement(elementPropValue);
        if (elementConstructor) {
            return new elementConstructor();
        }
        else if (!manifest.elementName) {
            console.error(`-- Extension of alias "${manifest.alias}" did not succeed creating an element class instance via the extension manifest property '${elementPropValue}'. The imported Element JS file did not export a 'element' or 'default'. Alternatively define the 'elementName' in the manifest.`, manifest);
        }
    }
    if (manifest.elementName) {
        return document.createElement(manifest.elementName);
    }
    if (fallbackElement) {
        return document.createElement(fallbackElement);
    }
    console.error(`-- Extension of alias "${manifest.alias}" did not succeed creating an Element, missing a JavaScript file via the 'element' or 'js' property. Alternatively define a Element Name in 'elementName' in the manifest.`, manifest);
    return undefined;
}

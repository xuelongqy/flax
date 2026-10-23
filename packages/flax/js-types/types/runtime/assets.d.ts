import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type { AssetBundle } from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/core/navigation/_bindings/flutter_FlaxFont';
import type { FlaxFont } from '@flax/core/navigation/_bindings/flutter_FlaxFont';
/** Returns this session's native Flutter resource bundle, without a BuildContext. */
export declare function getAssetBundle(): AssetBundle;
/** A module registers its declared font when imported, before widgets are constructed. */
export declare function registerFont(options: {
    manifest: string;
    name: string;
}): FlaxFont;

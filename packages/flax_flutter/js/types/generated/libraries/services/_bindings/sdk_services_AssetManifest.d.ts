import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AssetMetadata';
import '@flax/flutter/services/_bindings/sdk_services_AssetMetadata';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AssetManifest extends Readonly<{
    "__flaxBound:package:flutter/src/services/asset_manifest.dart::AssetManifest": readonly [];
}> {
    readonly __AssetManifest: unique symbol;
    readonly [_flaxDartTypeValue]: AssetManifest;
    listAssets(): DartList<string>;
    getAssetVariants(key: string): DartList<upstream1.AssetMetadata> | null;
}
export declare namespace _AssetManifestFactory {
    function implement(args: [], implementation: {
        listAssets: (() => DartListInput<string, string>);
        getAssetVariants: ((key: string) => DartListInput<upstream1.AssetMetadata, Readonly<{
            "__flaxBound:package:flutter/src/services/asset_manifest.dart::AssetMetadata": readonly [];
        }>> | null);
    }): AssetManifest;
}
export declare namespace _AssetManifestFactory {
    function loadFromAssetBundle(bundle: Readonly<{
        "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
    }>): Promise<AssetManifest>;
}
export declare const AssetManifest: typeof _AssetManifestFactory & _FlaxInstanceType<AssetManifest> & _FlaxDartType<AssetManifest, readonly ["class", "flax.core/sdk_services#type:AssetManifest", readonly [], false]>;

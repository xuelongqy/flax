import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AssetBundleImageKey extends Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::AssetBundleImageKey": readonly [];
}> {
    readonly __AssetBundleImageKey: unique symbol;
    readonly [_flaxDartTypeValue]: AssetBundleImageKey;
}
export interface AssetBundleImageKey {
    readonly [_flaxDartTypeValue]: AssetBundleImageKey;
    toString(): string;
    get bundle(): upstream0.AssetBundle;
    get name(): string;
    get scale(): number;
}
export declare abstract class AssetBundleImageKey extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetBundleImageKey>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AssetBundleImageKey;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:AssetBundleImageKey", readonly [], false];
    constructor(options: {
        bundle: Readonly<{
            "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
        }>;
        name: string;
        scale: number;
    });
}
export declare namespace AssetBundleImageKey {
    function implement(args: [options: {
        bundle: Readonly<{
            "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [];
        }>;
        name: string;
        scale: number;
    }], implementation: {}): AssetBundleImageKey;
}

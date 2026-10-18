import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AssetMetadata extends Readonly<{
    "__flaxBound:package:flutter/src/services/asset_manifest.dart::AssetMetadata": readonly [];
}> {
    readonly __AssetMetadata: unique symbol;
    readonly [_flaxDartTypeValue]: AssetMetadata;
}
export interface AssetMetadata {
    readonly [_flaxDartTypeValue]: AssetMetadata;
    get targetDevicePixelRatio(): number | null;
    get key(): string;
    get main(): boolean;
}
export declare abstract class AssetMetadata extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetMetadata>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AssetMetadata;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AssetMetadata", readonly [], false];
    constructor(options: {
        key: string;
        targetDevicePixelRatio: number | null;
        main: boolean;
    });
}
export declare namespace AssetMetadata {
    function implement(args: [options: {
        key: string;
        targetDevicePixelRatio: number | null;
        main: boolean;
    }], implementation: {}): AssetMetadata;
}

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AssetMetadata extends Readonly<{
    "__flaxBound:package:flutter/src/services/asset_manifest.dart::AssetMetadata": readonly [];
}> {
    readonly __AssetMetadata: unique symbol;
    readonly [_flaxDartTypeValue]: AssetMetadata;
    readonly targetDevicePixelRatio: number | null;
    readonly key: string;
    readonly main: boolean;
}
export declare function _AssetMetadataFactory(options: {
    key: string;
    targetDevicePixelRatio: number | null;
    main: boolean;
}): AssetMetadata;
export interface _AssetMetadataNative extends AssetMetadata {
    readonly [_flaxDartTypeValue]: _AssetMetadataNative;
    get targetDevicePixelRatio(): number | null;
    get key(): string;
    get main(): boolean;
}
export declare abstract class _AssetMetadataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetMetadata>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AssetMetadata;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AssetMetadata", readonly [], false];
    constructor(options: {
        key: string;
        targetDevicePixelRatio: number | null;
        main: boolean;
    });
}
export declare namespace _AssetMetadataFactory {
    function implement(args: [options: {
        key: string;
        targetDevicePixelRatio: number | null;
        main: boolean;
    }], implementation: {}): AssetMetadata;
}
declare const _AssetMetadataBinding: typeof _AssetMetadataFactory & (new (options: {
    key: string;
    targetDevicePixelRatio: number | null;
    main: boolean;
}) => _AssetMetadataNative);
export declare const AssetMetadata: typeof _AssetMetadataBinding & _FlaxInstanceType<AssetMetadata> & _FlaxDartType<AssetMetadata, readonly ["class", "flax.core/sdk_services#type:AssetMetadata", readonly [], false]>;
export {};

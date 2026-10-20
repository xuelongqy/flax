import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PersistentHeaderShowOnScreenConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::PersistentHeaderShowOnScreenConfiguration": readonly [];
}> {
    readonly __PersistentHeaderShowOnScreenConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;
    readonly minShowOnScreenExtent: number;
    readonly maxShowOnScreenExtent: number;
}
export declare function _PersistentHeaderShowOnScreenConfigurationFactory(options?: {
    minShowOnScreenExtent?: number | undefined;
    maxShowOnScreenExtent?: number | undefined;
}): PersistentHeaderShowOnScreenConfiguration;
export interface _PersistentHeaderShowOnScreenConfigurationNative extends PersistentHeaderShowOnScreenConfiguration {
    readonly [_flaxDartTypeValue]: _PersistentHeaderShowOnScreenConfigurationNative;
    get minShowOnScreenExtent(): number;
    get maxShowOnScreenExtent(): number;
}
export declare abstract class _PersistentHeaderShowOnScreenConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PersistentHeaderShowOnScreenConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", readonly [], false];
    constructor(options?: {
        minShowOnScreenExtent?: number | undefined;
        maxShowOnScreenExtent?: number | undefined;
    });
}
export declare namespace _PersistentHeaderShowOnScreenConfigurationFactory {
    function implement(args: [options?: {
        minShowOnScreenExtent?: number | undefined;
        maxShowOnScreenExtent?: number | undefined;
    }], implementation: {}): PersistentHeaderShowOnScreenConfiguration;
}
declare const _PersistentHeaderShowOnScreenConfigurationBinding: typeof _PersistentHeaderShowOnScreenConfigurationFactory & (new (options?: {
    minShowOnScreenExtent?: number | undefined;
    maxShowOnScreenExtent?: number | undefined;
}) => _PersistentHeaderShowOnScreenConfigurationNative);
export declare const PersistentHeaderShowOnScreenConfiguration: typeof _PersistentHeaderShowOnScreenConfigurationBinding & _FlaxInstanceType<PersistentHeaderShowOnScreenConfiguration> & _FlaxDartType<PersistentHeaderShowOnScreenConfiguration, readonly ["class", "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", readonly [], false]>;
export {};

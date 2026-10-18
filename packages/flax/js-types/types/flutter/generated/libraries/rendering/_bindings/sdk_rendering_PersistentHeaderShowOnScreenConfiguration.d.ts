import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PersistentHeaderShowOnScreenConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::PersistentHeaderShowOnScreenConfiguration": readonly [];
}> {
    readonly __PersistentHeaderShowOnScreenConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;
}
export interface PersistentHeaderShowOnScreenConfiguration {
    readonly [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;
    get minShowOnScreenExtent(): number;
    get maxShowOnScreenExtent(): number;
}
export declare abstract class PersistentHeaderShowOnScreenConfiguration extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PersistentHeaderShowOnScreenConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PersistentHeaderShowOnScreenConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PersistentHeaderShowOnScreenConfiguration", readonly [], false];
    constructor(options?: {
        minShowOnScreenExtent?: number | undefined;
        maxShowOnScreenExtent?: number | undefined;
    });
}
export declare namespace PersistentHeaderShowOnScreenConfiguration {
    function implement(args: [options?: {
        minShowOnScreenExtent?: number | undefined;
        maxShowOnScreenExtent?: number | undefined;
    }], implementation: {}): PersistentHeaderShowOnScreenConfiguration;
}

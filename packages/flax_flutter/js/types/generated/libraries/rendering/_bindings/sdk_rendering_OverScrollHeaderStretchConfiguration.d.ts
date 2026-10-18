import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface OverScrollHeaderStretchConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::OverScrollHeaderStretchConfiguration": readonly [];
}> {
    readonly __OverScrollHeaderStretchConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: OverScrollHeaderStretchConfiguration;
}
export interface OverScrollHeaderStretchConfiguration {
    readonly [_flaxDartTypeValue]: OverScrollHeaderStretchConfiguration;
    get stretchTriggerOffset(): number;
    get onStretchTrigger(): (() => Promise<void>) | null;
}
export declare abstract class OverScrollHeaderStretchConfiguration extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverScrollHeaderStretchConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OverScrollHeaderStretchConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:OverScrollHeaderStretchConfiguration", readonly [], false];
    constructor(options?: {
        stretchTriggerOffset?: number | undefined;
        onStretchTrigger?: (() => Promise<void>) | null | undefined;
    });
}
export declare namespace OverScrollHeaderStretchConfiguration {
    function implement(args: [options?: {
        stretchTriggerOffset?: number | undefined;
        onStretchTrigger?: (() => Promise<void>) | null | undefined;
    }], implementation: {}): OverScrollHeaderStretchConfiguration;
}

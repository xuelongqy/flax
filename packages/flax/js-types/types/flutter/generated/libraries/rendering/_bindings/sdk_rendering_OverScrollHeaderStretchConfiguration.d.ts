import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverScrollHeaderStretchConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::OverScrollHeaderStretchConfiguration": readonly [];
}> {
    readonly __OverScrollHeaderStretchConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: OverScrollHeaderStretchConfiguration;
    readonly stretchTriggerOffset: number;
    readonly onStretchTrigger: (() => Promise<void>) | null;
}
export declare function _OverScrollHeaderStretchConfigurationFactory(options?: {
    stretchTriggerOffset?: number | undefined;
    onStretchTrigger?: (() => Promise<void>) | null | undefined;
}): OverScrollHeaderStretchConfiguration;
export interface _OverScrollHeaderStretchConfigurationNative extends OverScrollHeaderStretchConfiguration {
    readonly [_flaxDartTypeValue]: _OverScrollHeaderStretchConfigurationNative;
    get stretchTriggerOffset(): number;
    get onStretchTrigger(): (() => Promise<void>) | null;
}
export declare abstract class _OverScrollHeaderStretchConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverScrollHeaderStretchConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OverScrollHeaderStretchConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:OverScrollHeaderStretchConfiguration", readonly [], false];
    constructor(options?: {
        stretchTriggerOffset?: number | undefined;
        onStretchTrigger?: (() => Promise<void>) | null | undefined;
    });
}
export declare namespace _OverScrollHeaderStretchConfigurationFactory {
    function implement(args: [options?: {
        stretchTriggerOffset?: number | undefined;
        onStretchTrigger?: (() => Promise<void>) | null | undefined;
    }], implementation: {}): OverScrollHeaderStretchConfiguration;
}
declare const _OverScrollHeaderStretchConfigurationBinding: typeof _OverScrollHeaderStretchConfigurationFactory & (new (options?: {
    stretchTriggerOffset?: number | undefined;
    onStretchTrigger?: (() => Promise<void>) | null | undefined;
}) => _OverScrollHeaderStretchConfigurationNative);
export declare const OverScrollHeaderStretchConfiguration: typeof _OverScrollHeaderStretchConfigurationBinding & _FlaxInstanceType<OverScrollHeaderStretchConfiguration> & _FlaxDartType<OverScrollHeaderStretchConfiguration, readonly ["class", "flax.core/sdk_rendering#type:OverScrollHeaderStretchConfiguration", readonly [], false]>;
export {};

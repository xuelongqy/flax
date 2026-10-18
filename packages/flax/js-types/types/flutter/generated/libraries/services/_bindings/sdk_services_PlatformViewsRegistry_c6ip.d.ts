import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformViewsRegistry extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewsRegistry": readonly [];
}> {
    readonly __PlatformViewsRegistry: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformViewsRegistry;
    getNextPlatformViewId(): number;
}
export declare const PlatformViewsRegistry: object & _FlaxInstanceType<PlatformViewsRegistry> & _FlaxDartType<PlatformViewsRegistry, readonly ["class", "flax.core/sdk_services#type:PlatformViewsRegistry", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UiKitViewGestureBlockingPolicy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/platform_views.dart::UiKitViewGestureBlockingPolicy">, Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::UiKitViewGestureBlockingPolicy": readonly [];
}> {
    readonly __UiKitViewGestureBlockingPolicy: unique symbol;
    readonly [_flaxDartTypeValue]: UiKitViewGestureBlockingPolicy;
    readonly name: string;
    readonly index: number;
}
export declare const UiKitViewGestureBlockingPolicy: Readonly<{
    eager: UiKitViewGestureBlockingPolicy;
    waitUntilTouchesEnded: UiKitViewGestureBlockingPolicy;
    doNotBlockGesture: UiKitViewGestureBlockingPolicy;
    fallbackToPluginDefault: UiKitViewGestureBlockingPolicy;
    values: readonly UiKitViewGestureBlockingPolicy[];
} & _FlaxInstanceType<UiKitViewGestureBlockingPolicy> & _FlaxDartType<UiKitViewGestureBlockingPolicy, readonly ["class", "flax.core/sdk_services#type:UiKitViewGestureBlockingPolicy", readonly [], false]>>;

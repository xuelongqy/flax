import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_DarwinPlatformViewController';
import '@flax/flutter/services/_bindings/sdk_services_DarwinPlatformViewController';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AppKitViewController extends Omit<upstream0.DarwinPlatformViewController, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::AppKitViewController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::DarwinPlatformViewController": readonly [];
}> {
    readonly __AppKitViewController: unique symbol;
    readonly [_flaxDartTypeValue]: AppKitViewController;
    readonly id: number;
    setLayoutDirection(layoutDirection: upstream1.TextDirection): Promise<void>;
    acceptGesture(): Promise<void>;
    rejectGesture(): Promise<void>;
    dispose(): Promise<void>;
}
export declare const AppKitViewController: object & _FlaxInstanceType<AppKitViewController> & _FlaxDartType<AppKitViewController, readonly ["class", "flax.core/sdk_services#type:AppKitViewController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "id" | "setLayoutDirection" | "acceptGesture" | "rejectGesture" | "dispose" | "__flaxBound:package:flutter/src/services/platform_views.dart::AppKitViewController" | "__flaxBound:package:flutter/src/services/platform_views.dart::DarwinPlatformViewController";
export {};

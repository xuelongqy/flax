import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_AndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_SurfaceAndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_SurfaceAndroidViewController';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_ExpensiveAndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_ExpensiveAndroidViewController';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_HybridAndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_HybridAndroidViewController';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_UiKitViewController';
import '@flax/flutter/services/_bindings/sdk_services_UiKitViewController';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_UiKitViewGestureBlockingPolicy';
import '@flax/flutter/services/_bindings/sdk_services_UiKitViewGestureBlockingPolicy';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_AppKitViewController';
import '@flax/flutter/services/_bindings/sdk_services_AppKitViewController';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformViewsService extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewsService": readonly [];
}> {
    readonly __PlatformViewsService: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformViewsService;
}
export declare namespace _PlatformViewsServiceFactory {
    function initAndroidView(options: {
        creationParams?: unknown | null | undefined;
        creationParamsCodec?: Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }> | null | undefined;
        id: number;
        layoutDirection: upstream2.TextDirection;
        onFocus?: (() => void) | null | undefined;
        viewType: string;
    }): upstream0.AndroidViewController;
}
export declare namespace _PlatformViewsServiceFactory {
    function initSurfaceAndroidView(options: {
        creationParams?: unknown | null | undefined;
        creationParamsCodec?: Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }> | null | undefined;
        id: number;
        layoutDirection: upstream2.TextDirection;
        onFocus?: (() => void) | null | undefined;
        viewType: string;
    }): upstream3.SurfaceAndroidViewController;
}
export declare namespace _PlatformViewsServiceFactory {
    function initExpensiveAndroidView(options: {
        creationParams?: unknown | null | undefined;
        creationParamsCodec?: Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }> | null | undefined;
        id: number;
        layoutDirection: upstream2.TextDirection;
        onFocus?: (() => void) | null | undefined;
        viewType: string;
    }): upstream4.ExpensiveAndroidViewController;
}
export declare namespace _PlatformViewsServiceFactory {
    function initHybridAndroidView(options: {
        creationParams?: unknown | null | undefined;
        creationParamsCodec?: Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }> | null | undefined;
        id: number;
        layoutDirection: upstream2.TextDirection;
        onFocus?: (() => void) | null | undefined;
        viewType: string;
    }): upstream5.HybridAndroidViewController;
}
export declare namespace _PlatformViewsServiceFactory {
    function initUiKitView(options: {
        creationParams?: unknown | null | undefined;
        creationParamsCodec?: Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }> | null | undefined;
        gestureBlockingPolicy?: upstream7.UiKitViewGestureBlockingPolicy | undefined;
        id: number;
        layoutDirection: upstream2.TextDirection;
        onFocus?: (() => void) | null | undefined;
        viewType: string;
    }): Promise<upstream6.UiKitViewController>;
}
export declare namespace _PlatformViewsServiceFactory {
    function initAppKitView(options: {
        creationParams?: unknown | null | undefined;
        creationParamsCodec?: Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
        }> | null | undefined;
        id: number;
        layoutDirection: upstream2.TextDirection;
        onFocus?: (() => void) | null | undefined;
        viewType: string;
    }): Promise<upstream8.AppKitViewController>;
}
export declare const PlatformViewsService: typeof _PlatformViewsServiceFactory & _FlaxInstanceType<PlatformViewsService> & _FlaxDartType<PlatformViewsService, readonly ["class", "flax.core/sdk_services#type:PlatformViewsService", readonly [], false]>;

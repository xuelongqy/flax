import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_PlatformViewController';
import '@flax/flutter/services/_bindings/sdk_services_PlatformViewController';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/sdk_services_AndroidMotionEvent';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidViewController extends Omit<upstream0.PlatformViewController, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidViewController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController": readonly [];
}> {
    readonly __AndroidViewController: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidViewController;
    readonly viewId: number;
    readonly awaitingCreation: boolean;
    readonly textureId: number | null;
    readonly requiresViewComposition: boolean;
    get pointTransformer(): ((position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream1.Offset);
    readonly isCreated: boolean;
    dispatchPointerEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): Promise<void>;
    create(options?: {
        position?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }): Promise<void>;
    dispose(): Promise<void>;
    clearFocus(): Promise<void>;
    setSize(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): Promise<upstream3.Size>;
    setOffset(off: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): Promise<void>;
    sendMotionEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidMotionEvent": readonly [];
    }>): Promise<void>;
    addOnPlatformViewCreatedListener(listener: ((id: number) => void)): void;
    removeOnPlatformViewCreatedListener(listener: ((id: number) => void)): void;
    setLayoutDirection(layoutDirection: upstream5.TextDirection): Promise<void>;
    set pointTransformer(value: ((position: upstream1.Offset) => Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>));
}
export declare namespace _AndroidViewControllerFactory {
    const kActionDown: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kActionUp: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kActionMove: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kActionCancel: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kActionPointerDown: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kActionPointerUp: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kAndroidLayoutDirectionLtr: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kAndroidLayoutDirectionRtl: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kInputDeviceSourceUnknown: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kInputDeviceSourceTouchScreen: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kInputDeviceSourceMouse: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kInputDeviceSourceStylus: number;
}
export declare namespace _AndroidViewControllerFactory {
    const kInputDeviceSourceTouchPad: number;
}
export declare namespace _AndroidViewControllerFactory {
    function pointerAction(pointerId: number, action: number): number;
}
export declare const AndroidViewController: typeof _AndroidViewControllerFactory & _FlaxInstanceType<AndroidViewController> & _FlaxDartType<AndroidViewController, readonly ["class", "flax.core/sdk_services#type:AndroidViewController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "awaitingCreation" | "textureId" | "requiresViewComposition" | "pointTransformer" | "isCreated" | "dispatchPointerEvent" | "create" | "dispose" | "clearFocus" | "setSize" | "setOffset" | "sendMotionEvent" | "addOnPlatformViewCreatedListener" | "removeOnPlatformViewCreatedListener" | "setLayoutDirection" | "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidViewController" | "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController";
export {};

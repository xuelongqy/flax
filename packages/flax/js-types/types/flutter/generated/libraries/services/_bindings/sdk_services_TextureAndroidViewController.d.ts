import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AndroidViewController';
import '@flax/flutter/services/_bindings/sdk_services_AndroidViewController';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_PlatformViewController';
import '@flax/flutter/services/_bindings/sdk_services_PlatformViewController';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/sdk_services_AndroidMotionEvent';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextureAndroidViewController extends Omit<upstream0.AndroidViewController, _flaxOwnMembers0>, Omit<upstream1.PlatformViewController, _flaxOwnMembers0 | keyof upstream0.AndroidViewController>, Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::TextureAndroidViewController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidViewController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController": readonly [];
}> {
    readonly __TextureAndroidViewController: unique symbol;
    readonly [_flaxDartTypeValue]: TextureAndroidViewController;
    readonly viewId: number;
    readonly awaitingCreation: boolean;
    readonly textureId: number | null;
    readonly requiresViewComposition: boolean;
    get pointTransformer(): ((position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => upstream2.Offset);
    readonly isCreated: boolean;
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
    dispatchPointerEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): Promise<void>;
    clearFocus(): Promise<void>;
    dispose(): Promise<void>;
    set pointTransformer(value: ((position: upstream2.Offset) => Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>));
}
export declare const TextureAndroidViewController: object & _FlaxInstanceType<TextureAndroidViewController> & _FlaxDartType<TextureAndroidViewController, readonly ["class", "flax.core/sdk_services#type:TextureAndroidViewController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "awaitingCreation" | "textureId" | "requiresViewComposition" | "pointTransformer" | "isCreated" | "create" | "setSize" | "setOffset" | "sendMotionEvent" | "addOnPlatformViewCreatedListener" | "removeOnPlatformViewCreatedListener" | "setLayoutDirection" | "dispatchPointerEvent" | "clearFocus" | "dispose" | "__flaxBound:package:flutter/src/services/platform_views.dart::TextureAndroidViewController" | "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidViewController" | "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController";
export {};

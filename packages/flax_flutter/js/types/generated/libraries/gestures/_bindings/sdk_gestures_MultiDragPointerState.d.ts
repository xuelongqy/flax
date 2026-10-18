import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MultiDragPointerState extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/multidrag.dart::MultiDragPointerState": readonly [];
}> {
    readonly __MultiDragPointerState: unique symbol;
    readonly [_flaxDartTypeValue]: MultiDragPointerState;
}
export interface MultiDragPointerState {
    readonly [_flaxDartTypeValue]: MultiDragPointerState;
    resolve(disposition: upstream3.GestureDisposition): void;
    checkForResolutionAfterMove(): void;
    rejected(): void;
    dispose(): void;
    get gestureSettings(): upstream2.DeviceGestureSettings | null;
    get initialPosition(): upstream0.Offset;
    get kind(): upstream1.PointerDeviceKind;
    get pendingDelta(): upstream0.Offset | null;
}
export declare abstract class MultiDragPointerState extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiDragPointerState>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MultiDragPointerState;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:MultiDragPointerState", readonly [], false];
    constructor(initialPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, kind: upstream1.PointerDeviceKind, gestureSettings: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null);
    abstract accepted(starter: ((position: upstream0.Offset) => Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
    }> | null)): void;
}
export declare namespace MultiDragPointerState {
    function implement(args: [initialPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, kind: upstream1.PointerDeviceKind, gestureSettings: Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
    }> | null], implementation: {
        accepted: ((starter: ((position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) => upstream4.Drag | null)) => void);
    }): MultiDragPointerState;
}

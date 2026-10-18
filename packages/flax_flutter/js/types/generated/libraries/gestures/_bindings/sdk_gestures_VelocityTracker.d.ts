import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface VelocityTracker extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [];
}> {
    readonly __VelocityTracker: unique symbol;
    readonly [_flaxDartTypeValue]: VelocityTracker;
}
export interface VelocityTracker {
    readonly [_flaxDartTypeValue]: VelocityTracker;
    addPosition(time: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    getVelocityEstimate(): upstream3.VelocityEstimate | null;
    getVelocity(): upstream4.Velocity;
    get kind(): upstream0.PointerDeviceKind;
}
export declare abstract class VelocityTracker extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VelocityTracker>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VelocityTracker;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:VelocityTracker", readonly [], false];
    constructor(kind: upstream0.PointerDeviceKind);
}
export declare namespace VelocityTracker {
    function implement(args: [kind: upstream0.PointerDeviceKind], implementation: {}): VelocityTracker;
}

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface IOSScrollViewFlingVelocityTracker extends Omit<upstream0.VelocityTracker, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [];
}> {
    readonly __IOSScrollViewFlingVelocityTracker: unique symbol;
    readonly [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;
}
export interface IOSScrollViewFlingVelocityTracker {
    readonly [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;
    addPosition(time: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration];
    }>, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    getVelocityEstimate(): upstream4.VelocityEstimate;
    getVelocity(): upstream5.Velocity;
    get kind(): upstream1.PointerDeviceKind;
}
export declare abstract class IOSScrollViewFlingVelocityTracker extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IOSScrollViewFlingVelocityTracker>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", readonly [], false];
    constructor(kind: upstream1.PointerDeviceKind);
}
export declare namespace IOSScrollViewFlingVelocityTracker {
    function implement(args: [kind: upstream1.PointerDeviceKind], implementation: {}): IOSScrollViewFlingVelocityTracker;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "kind" | "addPosition" | "getVelocityEstimate" | "getVelocity" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker";
export {};

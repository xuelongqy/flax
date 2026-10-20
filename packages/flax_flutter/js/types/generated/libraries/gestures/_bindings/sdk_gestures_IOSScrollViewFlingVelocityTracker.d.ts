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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IOSScrollViewFlingVelocityTracker extends Omit<upstream0.VelocityTracker, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [];
}> {
    readonly __IOSScrollViewFlingVelocityTracker: unique symbol;
    readonly [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;
    readonly kind: upstream1.PointerDeviceKind;
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
}
export declare function _IOSScrollViewFlingVelocityTrackerFactory(kind: upstream1.PointerDeviceKind): IOSScrollViewFlingVelocityTracker;
export interface _IOSScrollViewFlingVelocityTrackerNative extends IOSScrollViewFlingVelocityTracker {
    readonly [_flaxDartTypeValue]: _IOSScrollViewFlingVelocityTrackerNative;
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
export declare abstract class _IOSScrollViewFlingVelocityTrackerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IOSScrollViewFlingVelocityTracker>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: IOSScrollViewFlingVelocityTracker;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", readonly [], false];
    constructor(kind: upstream1.PointerDeviceKind);
}
export declare namespace _IOSScrollViewFlingVelocityTrackerFactory {
    function implement(args: [kind: upstream1.PointerDeviceKind], implementation: {}): IOSScrollViewFlingVelocityTracker;
}
declare const _IOSScrollViewFlingVelocityTrackerBinding: typeof _IOSScrollViewFlingVelocityTrackerFactory & (new (kind: upstream1.PointerDeviceKind) => _IOSScrollViewFlingVelocityTrackerNative);
export declare const IOSScrollViewFlingVelocityTracker: typeof _IOSScrollViewFlingVelocityTrackerBinding & _FlaxInstanceType<IOSScrollViewFlingVelocityTracker> & _FlaxDartType<IOSScrollViewFlingVelocityTracker, readonly ["class", "flax.core/sdk_gestures#type:IOSScrollViewFlingVelocityTracker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "kind" | "addPosition" | "getVelocityEstimate" | "getVelocity" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker";
export {};

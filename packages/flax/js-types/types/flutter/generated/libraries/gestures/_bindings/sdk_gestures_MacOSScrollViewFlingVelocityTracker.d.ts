import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_IOSScrollViewFlingVelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_IOSScrollViewFlingVelocityTracker';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityEstimate';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MacOSScrollViewFlingVelocityTracker extends Omit<upstream0.IOSScrollViewFlingVelocityTracker, _flaxOwnMembers0>, Omit<upstream1.VelocityTracker, _flaxOwnMembers0 | keyof upstream0.IOSScrollViewFlingVelocityTracker>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::MacOSScrollViewFlingVelocityTracker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [];
}> {
    readonly __MacOSScrollViewFlingVelocityTracker: unique symbol;
    readonly [_flaxDartTypeValue]: MacOSScrollViewFlingVelocityTracker;
    readonly kind: upstream2.PointerDeviceKind;
    addPosition(time: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
    }>, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    getVelocityEstimate(): upstream5.VelocityEstimate;
    getVelocity(): upstream6.Velocity;
}
export declare function _MacOSScrollViewFlingVelocityTrackerFactory(kind: upstream2.PointerDeviceKind): MacOSScrollViewFlingVelocityTracker;
export interface _MacOSScrollViewFlingVelocityTrackerNative extends MacOSScrollViewFlingVelocityTracker {
    readonly [_flaxDartTypeValue]: _MacOSScrollViewFlingVelocityTrackerNative;
    addPosition(time: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration];
    }>, position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    getVelocityEstimate(): upstream5.VelocityEstimate;
    getVelocity(): upstream6.Velocity;
    get kind(): upstream2.PointerDeviceKind;
}
export declare abstract class _MacOSScrollViewFlingVelocityTrackerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MacOSScrollViewFlingVelocityTracker>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MacOSScrollViewFlingVelocityTracker;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:MacOSScrollViewFlingVelocityTracker", readonly [], false];
    constructor(kind: upstream2.PointerDeviceKind);
}
export declare namespace _MacOSScrollViewFlingVelocityTrackerFactory {
    function implement(args: [kind: upstream2.PointerDeviceKind], implementation: {}): MacOSScrollViewFlingVelocityTracker;
}
declare const _MacOSScrollViewFlingVelocityTrackerBinding: typeof _MacOSScrollViewFlingVelocityTrackerFactory & (new (kind: upstream2.PointerDeviceKind) => _MacOSScrollViewFlingVelocityTrackerNative);
export declare const MacOSScrollViewFlingVelocityTracker: typeof _MacOSScrollViewFlingVelocityTrackerBinding & _FlaxInstanceType<MacOSScrollViewFlingVelocityTracker> & _FlaxDartType<MacOSScrollViewFlingVelocityTracker, readonly ["class", "flax.core/sdk_gestures#type:MacOSScrollViewFlingVelocityTracker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "kind" | "addPosition" | "getVelocityEstimate" | "getVelocity" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::MacOSScrollViewFlingVelocityTracker" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::IOSScrollViewFlingVelocityTracker" | "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker";
export {};

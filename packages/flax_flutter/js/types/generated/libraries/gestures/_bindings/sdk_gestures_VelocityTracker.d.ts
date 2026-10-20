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
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VelocityTracker extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityTracker": readonly [];
}> {
    readonly __VelocityTracker: unique symbol;
    readonly [_flaxDartTypeValue]: VelocityTracker;
    readonly kind: upstream0.PointerDeviceKind;
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
}
export declare namespace _VelocityTrackerFactory {
    function withKind(kind: upstream0.PointerDeviceKind): VelocityTracker;
}
export interface _VelocityTrackerNative extends VelocityTracker {
    readonly [_flaxDartTypeValue]: _VelocityTrackerNative;
    readonly [_flaxDartConstructors]?: {
        "withKind": (kind: upstream0.PointerDeviceKind) => void;
    };
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
export declare abstract class _VelocityTrackerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VelocityTracker>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VelocityTracker;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:VelocityTracker", readonly [], false];
    constructor(kind: upstream0.PointerDeviceKind);
    constructor(call: _FlaxProxySuper<_VelocityTrackerNative>);
}
export declare namespace _VelocityTrackerFactory {
    function implement(args: [kind: upstream0.PointerDeviceKind], implementation: {}): VelocityTracker;
}
declare const _VelocityTrackerBinding: typeof _VelocityTrackerFactory & (new (kind: upstream0.PointerDeviceKind) => _VelocityTrackerNative) & (new (call: _FlaxProxySuper<_VelocityTrackerNative>) => _VelocityTrackerNative);
export declare const VelocityTracker: typeof _VelocityTrackerBinding & _FlaxInstanceType<VelocityTracker> & _FlaxDartType<VelocityTracker, readonly ["class", "flax.core/sdk_gestures#type:VelocityTracker", readonly [], false]>;
export {};

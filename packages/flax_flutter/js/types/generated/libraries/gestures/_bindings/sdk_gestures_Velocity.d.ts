import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Velocity extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
}> {
    readonly __Velocity: unique symbol;
    readonly [_flaxDartTypeValue]: Velocity;
    readonly pixelsPerSecond: upstream0.Offset;
    clampMagnitude(minValue: number, maxValue: number): Velocity;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }>): Velocity;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }>): Velocity;
    operatorNegate(): Velocity;
}
export declare function _VelocityFactory(options: {
    pixelsPerSecond: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): Velocity;
export interface _VelocityNative extends Velocity {
    readonly [_flaxDartTypeValue]: _VelocityNative;
    clampMagnitude(minValue: number, maxValue: number): Velocity;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }>): Velocity;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
    }>): Velocity;
    operatorNegate(): Velocity;
    get pixelsPerSecond(): upstream0.Offset;
}
export declare abstract class _VelocityNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Velocity>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Velocity;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:Velocity", readonly [], false];
    constructor(options: {
        pixelsPerSecond: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace _VelocityFactory {
    function implement(args: [options: {
        pixelsPerSecond: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): Velocity;
}
declare const _VelocityBinding: typeof _VelocityFactory & (new (options: {
    pixelsPerSecond: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _VelocityNative);
export declare namespace _VelocityFactory {
    const zero: Velocity;
}
export declare const Velocity: typeof _VelocityBinding & _FlaxInstanceType<Velocity> & _FlaxDartType<Velocity, readonly ["class", "flax.core/sdk_gestures#type:Velocity", readonly [], false]>;
export {};

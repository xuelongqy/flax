import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Velocity extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [];
}> {
    readonly __Velocity: unique symbol;
    readonly [_flaxDartTypeValue]: Velocity;
}
export interface Velocity {
    readonly [_flaxDartTypeValue]: Velocity;
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
export declare abstract class Velocity extends _FlaxProxyBase {
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
export declare namespace Velocity {
    function implement(args: [options: {
        pixelsPerSecond: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): Velocity;
}
export declare namespace Velocity {
    const zero: Velocity;
}

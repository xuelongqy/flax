import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface VelocityEstimate extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::VelocityEstimate": readonly [];
}> {
    readonly __VelocityEstimate: unique symbol;
    readonly [_flaxDartTypeValue]: VelocityEstimate;
}
export interface VelocityEstimate {
    readonly [_flaxDartTypeValue]: VelocityEstimate;
    toString(): string;
    get pixelsPerSecond(): upstream0.Offset;
    get confidence(): number;
    get duration(): upstream1.Duration;
    get offset(): upstream0.Offset;
}
export declare abstract class VelocityEstimate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VelocityEstimate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VelocityEstimate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:VelocityEstimate", readonly [], false];
    constructor(options: {
        pixelsPerSecond: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        confidence: number;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace VelocityEstimate {
    function implement(args: [options: {
        pixelsPerSecond: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        confidence: number;
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): VelocityEstimate;
}

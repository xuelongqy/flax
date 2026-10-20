import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Threshold extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Threshold": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __Threshold: unique symbol;
    readonly [_flaxDartTypeValue]: Threshold;
    readonly flipped: upstream0.Curve;
    readonly threshold: number;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _ThresholdFactory(threshold: number): Threshold;
export interface _ThresholdNative extends Threshold {
    readonly [_flaxDartTypeValue]: _ThresholdNative;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get threshold(): number;
    get flipped(): upstream0.Curve;
}
export declare abstract class _ThresholdNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Threshold>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Threshold;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Threshold", readonly [], false];
    constructor(threshold: number);
}
export declare namespace _ThresholdFactory {
    function implement(args: [threshold: number], implementation: {}): Threshold;
}
declare const _ThresholdBinding: typeof _ThresholdFactory & (new (threshold: number) => _ThresholdNative);
export declare const Threshold: typeof _ThresholdBinding & _FlaxInstanceType<Threshold> & _FlaxDartType<Threshold, readonly ["class", "flax.core/sdk_animation#type:Threshold", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "threshold" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::Threshold" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};

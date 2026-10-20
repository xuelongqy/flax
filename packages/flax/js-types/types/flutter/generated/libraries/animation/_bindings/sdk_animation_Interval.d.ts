import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Interval extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Interval": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __Interval: unique symbol;
    readonly [_flaxDartTypeValue]: Interval;
    readonly flipped: upstream0.Curve;
    readonly begin: number;
    readonly end: number;
    readonly curve: upstream0.Curve;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _IntervalFactory(begin: number, end: number, options?: {
    curve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
}): Interval;
export interface _IntervalNative extends Interval {
    readonly [_flaxDartTypeValue]: _IntervalNative;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get begin(): number;
    get end(): number;
    get curve(): upstream0.Curve;
    get flipped(): upstream0.Curve;
}
export declare abstract class _IntervalNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Interval>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Interval;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Interval", readonly [], false];
    constructor(begin: number, end: number, options?: {
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    });
}
export declare namespace _IntervalFactory {
    function implement(args: [begin: number, end: number, options?: {
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    }], implementation: {}): Interval;
}
declare const _IntervalBinding: typeof _IntervalFactory & (new (begin: number, end: number, options?: {
    curve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
}) => _IntervalNative);
export declare const Interval: typeof _IntervalBinding & _FlaxInstanceType<Interval> & _FlaxDartType<Interval, readonly ["class", "flax.core/sdk_animation#type:Interval", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "begin" | "end" | "curve" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::Interval" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};

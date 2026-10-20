import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ElasticInOutCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ElasticInOutCurve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __ElasticInOutCurve: unique symbol;
    readonly [_flaxDartTypeValue]: ElasticInOutCurve;
    readonly flipped: upstream0.Curve;
    readonly period: number;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _ElasticInOutCurveFactory(period?: number): ElasticInOutCurve;
export interface _ElasticInOutCurveNative extends ElasticInOutCurve {
    readonly [_flaxDartTypeValue]: _ElasticInOutCurveNative;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get period(): number;
    get flipped(): upstream0.Curve;
}
export declare abstract class _ElasticInOutCurveNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ElasticInOutCurve>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ElasticInOutCurve;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ElasticInOutCurve", readonly [], false];
    constructor(period?: number);
}
export declare namespace _ElasticInOutCurveFactory {
    function implement(args: [period?: number], implementation: {}): ElasticInOutCurve;
}
declare const _ElasticInOutCurveBinding: typeof _ElasticInOutCurveFactory & (new (period?: number) => _ElasticInOutCurveNative);
export declare const ElasticInOutCurve: typeof _ElasticInOutCurveBinding & _FlaxInstanceType<ElasticInOutCurve> & _FlaxDartType<ElasticInOutCurve, readonly ["class", "flax.core/sdk_animation#type:ElasticInOutCurve", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "period" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::ElasticInOutCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ElasticInCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ElasticInCurve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __ElasticInCurve: unique symbol;
    readonly [_flaxDartTypeValue]: ElasticInCurve;
    readonly flipped: upstream0.Curve;
    readonly period: number;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _ElasticInCurveFactory(period?: number): ElasticInCurve;
export interface _ElasticInCurveNative extends ElasticInCurve {
    readonly [_flaxDartTypeValue]: _ElasticInCurveNative;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get period(): number;
    get flipped(): upstream0.Curve;
}
export declare abstract class _ElasticInCurveNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ElasticInCurve>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ElasticInCurve;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ElasticInCurve", readonly [], false];
    constructor(period?: number);
}
export declare namespace _ElasticInCurveFactory {
    function implement(args: [period?: number], implementation: {}): ElasticInCurve;
}
declare const _ElasticInCurveBinding: typeof _ElasticInCurveFactory & (new (period?: number) => _ElasticInCurveNative);
export declare const ElasticInCurve: typeof _ElasticInCurveBinding & _FlaxInstanceType<ElasticInCurve> & _FlaxDartType<ElasticInCurve, readonly ["class", "flax.core/sdk_animation#type:ElasticInCurve", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "period" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::ElasticInCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};

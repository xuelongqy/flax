import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ElasticOutCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ElasticOutCurve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __ElasticOutCurve: unique symbol;
    readonly [_flaxDartTypeValue]: ElasticOutCurve;
    readonly flipped: upstream0.Curve;
    readonly period: number;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _ElasticOutCurveFactory(period?: number): ElasticOutCurve;
export interface _ElasticOutCurveNative extends ElasticOutCurve {
    readonly [_flaxDartTypeValue]: _ElasticOutCurveNative;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get period(): number;
    get flipped(): upstream0.Curve;
}
export declare abstract class _ElasticOutCurveNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ElasticOutCurve>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ElasticOutCurve;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ElasticOutCurve", readonly [], false];
    constructor(period?: number);
}
export declare namespace _ElasticOutCurveFactory {
    function implement(args: [period?: number], implementation: {}): ElasticOutCurve;
}
declare const _ElasticOutCurveBinding: typeof _ElasticOutCurveFactory & (new (period?: number) => _ElasticOutCurveNative);
export declare const ElasticOutCurve: typeof _ElasticOutCurveBinding & _FlaxInstanceType<ElasticOutCurve> & _FlaxDartType<ElasticOutCurve, readonly ["class", "flax.core/sdk_animation#type:ElasticOutCurve", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "period" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::ElasticOutCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};

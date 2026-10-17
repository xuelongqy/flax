import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Cubic extends Omit<upstream0.Curve, typeof _flaxDartTypeValue | "flipped" | "a" | "b" | "c" | "d" | "transform" | "transformInternal" | "toString">, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Cubic": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __Cubic: unique symbol;
    readonly flipped: upstream0.Curve;
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _CubicFactory(a: number, b: number, c: number, d: number): Cubic;
export declare const Cubic: typeof _CubicFactory & _FlaxInstanceType<Cubic> & _FlaxDartType<Cubic, readonly ["class", "flax.core/flutter#type:Cubic", readonly [], false]>;

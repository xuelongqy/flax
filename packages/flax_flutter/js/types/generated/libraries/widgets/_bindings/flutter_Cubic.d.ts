import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
export interface Cubic extends upstream0.Curve, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Cubic": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __Cubic: unique symbol;
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    transform(t: number): number;
}
export declare function Cubic(a: number, b: number, c: number, d: number): Cubic;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface Curve extends Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __Curve: unique symbol;
    transform(t: number): number;
}
export declare const Curve: object & _FlaxInstanceType<Curve>;

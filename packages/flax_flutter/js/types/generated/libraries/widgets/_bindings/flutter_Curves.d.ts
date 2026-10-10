import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Cubic';
import '@flax/flutter/widgets/_bindings/flutter_Cubic';
export interface Curves extends Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curves": readonly [];
}> {
    readonly __Curves: unique symbol;
}
declare const _CurvesFactory: {
    readonly linear: upstream0.Curve;
    readonly ease: upstream1.Cubic;
    readonly easeIn: upstream1.Cubic;
    readonly easeOut: upstream1.Cubic;
    readonly easeInOut: upstream1.Cubic;
};
export declare const Curves: typeof _CurvesFactory & _FlaxInstanceType<Curves>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Easing extends Readonly<{
    "__flaxBound:package:flutter/src/material/motion.dart::Easing": readonly [];
}> {
    readonly __Easing: unique symbol;
    readonly [_flaxDartTypeValue]: Easing;
}
declare const _EasingFactory: {
    readonly emphasizedAccelerate: upstream0.Curve;
    readonly emphasizedDecelerate: upstream0.Curve;
    readonly linear: upstream0.Curve;
    readonly standard: upstream0.Curve;
    readonly standardAccelerate: upstream0.Curve;
    readonly standardDecelerate: upstream0.Curve;
    readonly legacyDecelerate: upstream0.Curve;
    readonly legacyAccelerate: upstream0.Curve;
    readonly legacy: upstream0.Curve;
};
export declare const Easing: typeof _EasingFactory & _FlaxInstanceType<Easing> & _FlaxDartType<Easing, readonly ["class", "flax.core/sdk_material#type:Easing", readonly [], false]>;
export {};

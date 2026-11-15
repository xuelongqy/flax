import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Springs extends Readonly<{
    "__flaxBound:package:material_ui/src/motion.dart::Springs": readonly [];
}> {
    readonly __Springs: unique symbol;
    readonly [_flaxDartTypeValue]: Springs;
}
declare const _SpringsFactory: {
    readonly standardDefaultSpatial: upstream0.SpringDescription;
    readonly standardFastSpatial: upstream0.SpringDescription;
    readonly standardSlowSpatial: upstream0.SpringDescription;
    readonly standardDefaultEffects: upstream0.SpringDescription;
    readonly standardFastEffects: upstream0.SpringDescription;
    readonly standardSlowEffects: upstream0.SpringDescription;
    readonly expressiveDefaultSpatial: upstream0.SpringDescription;
    readonly expressiveFastSpatial: upstream0.SpringDescription;
    readonly expressiveSlowSpatial: upstream0.SpringDescription;
    readonly expressiveDefaultEffects: upstream0.SpringDescription;
    readonly expressiveFastEffects: upstream0.SpringDescription;
    readonly expressiveSlowEffects: upstream0.SpringDescription;
};
export declare const Springs: typeof _SpringsFactory & _FlaxInstanceType<Springs> & _FlaxDartType<Springs, readonly ["class", "flax.material/material#type:Springs", readonly [], false]>;
export {};

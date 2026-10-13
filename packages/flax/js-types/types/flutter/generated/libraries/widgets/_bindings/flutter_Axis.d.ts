import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface Axis extends DartEnum {
    readonly __Axis: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const Axis: Readonly<{
    horizontal: Axis;
    vertical: Axis;
    values: readonly Axis[];
} & _FlaxInstanceType<Axis> & _FlaxDartType<Axis, readonly ["class", "flax.core/flutter#type:Axis", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';

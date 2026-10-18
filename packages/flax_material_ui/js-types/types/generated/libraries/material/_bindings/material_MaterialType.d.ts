import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface MaterialType extends DartEnum {
    readonly __MaterialType: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const MaterialType: Readonly<{
    canvas: MaterialType;
    card: MaterialType;
    circle: MaterialType;
    button: MaterialType;
    transparency: MaterialType;
    values: readonly MaterialType[];
} & _FlaxInstanceType<MaterialType> & _FlaxDartType<MaterialType, readonly ["class", "flax.material/material#type:MaterialType", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';

import { type DartEnum } from '@flax/core/bindings';
export interface MaterialType extends DartEnum {
    readonly type: "flax.material/material#type:MaterialType";
}
export declare const MaterialType: Readonly<{
    canvas: MaterialType;
    card: MaterialType;
    circle: MaterialType;
    button: MaterialType;
    transparency: MaterialType;
}>;

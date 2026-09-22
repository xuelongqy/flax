import { type DartEnum } from '@flax/core/bindings';
export interface Brightness extends DartEnum {
    readonly type: "flax.material/material#type:Brightness";
}
export declare const Brightness: Readonly<{
    dark: Brightness;
    light: Brightness;
}>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface Brightness extends DartEnum {
    readonly __Brightness: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const Brightness: Readonly<{
    dark: Brightness;
    light: Brightness;
    values: readonly Brightness[];
} & _FlaxInstanceType<Brightness> & _FlaxDartType<Brightness, readonly ["class", "flax.material/material#type:Brightness", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';

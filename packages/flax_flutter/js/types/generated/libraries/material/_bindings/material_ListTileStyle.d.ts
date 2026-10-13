import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface ListTileStyle extends DartEnum {
    readonly __ListTileStyle: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const ListTileStyle: Readonly<{
    list: ListTileStyle;
    drawer: ListTileStyle;
    values: readonly ListTileStyle[];
} & _FlaxInstanceType<ListTileStyle> & _FlaxDartType<ListTileStyle, readonly ["class", "flax.material/material#type:ListTileStyle", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';

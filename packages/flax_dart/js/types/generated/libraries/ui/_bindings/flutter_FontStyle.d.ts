import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface FontStyle extends DartEnum {
    readonly __FontStyle: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const FontStyle: Readonly<{
    normal: FontStyle;
    italic: FontStyle;
    values: readonly FontStyle[];
} & _FlaxInstanceType<FontStyle> & _FlaxDartType<FontStyle, readonly ["class", "flax.core/flutter#type:FontStyle", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';

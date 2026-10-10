import { type DartEnum } from '@flax/core/bindings';
export interface FontStyle extends DartEnum {
    readonly __FontStyle: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const FontStyle: Readonly<{
    normal: FontStyle;
    italic: FontStyle;
    values: readonly FontStyle[];
}>;

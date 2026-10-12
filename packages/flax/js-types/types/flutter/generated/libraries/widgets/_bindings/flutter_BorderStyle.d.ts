import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface BorderStyle extends DartEnum {
    readonly __BorderStyle: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const BorderStyle: Readonly<{
    none: BorderStyle;
    solid: BorderStyle;
    values: readonly BorderStyle[];
} & _FlaxInstanceType<BorderStyle>>;

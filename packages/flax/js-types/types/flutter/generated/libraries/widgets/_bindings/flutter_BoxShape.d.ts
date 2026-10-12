import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface BoxShape extends DartEnum {
    readonly __BoxShape: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const BoxShape: Readonly<{
    rectangle: BoxShape;
    circle: BoxShape;
    values: readonly BoxShape[];
} & _FlaxInstanceType<BoxShape>>;

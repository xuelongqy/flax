import { type DartEnum } from '@flax/core/bindings';
export interface Axis extends DartEnum {
    readonly __Axis: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const Axis: Readonly<{
    horizontal: Axis;
    vertical: Axis;
    values: readonly Axis[];
}>;

import { type DartEnum } from '@flax/core/bindings';
export interface VerticalDirection extends DartEnum {
    readonly __VerticalDirection: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const VerticalDirection: Readonly<{
    up: VerticalDirection;
    down: VerticalDirection;
    values: readonly VerticalDirection[];
}>;

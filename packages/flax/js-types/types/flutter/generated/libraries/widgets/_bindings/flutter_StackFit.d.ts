import { type DartEnum } from '@flax/core/bindings';
export interface StackFit extends DartEnum {
    readonly __StackFit: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const StackFit: Readonly<{
    loose: StackFit;
    expand: StackFit;
    passthrough: StackFit;
    values: readonly StackFit[];
}>;

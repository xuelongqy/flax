import { type DartEnum } from '@flax/core/bindings';
export interface FlexFit extends DartEnum {
    readonly __FlexFit: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const FlexFit: Readonly<{
    tight: FlexFit;
    loose: FlexFit;
    values: readonly FlexFit[];
}>;

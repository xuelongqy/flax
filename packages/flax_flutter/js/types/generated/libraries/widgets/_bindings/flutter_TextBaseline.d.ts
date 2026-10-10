import { type DartEnum } from '@flax/core/bindings';
export interface TextBaseline extends DartEnum {
    readonly __TextBaseline: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextBaseline: Readonly<{
    alphabetic: TextBaseline;
    ideographic: TextBaseline;
    values: readonly TextBaseline[];
}>;

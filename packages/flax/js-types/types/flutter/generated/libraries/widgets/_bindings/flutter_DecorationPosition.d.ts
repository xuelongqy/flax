import { type DartEnum } from '@flax/core/bindings';
export interface DecorationPosition extends DartEnum {
    readonly __DecorationPosition: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const DecorationPosition: Readonly<{
    background: DecorationPosition;
    foreground: DecorationPosition;
    values: readonly DecorationPosition[];
}>;

import { type DartEnum } from '@flax/core/bindings';
export interface MaxLengthEnforcement extends DartEnum {
    readonly __MaxLengthEnforcement: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const MaxLengthEnforcement: Readonly<{
    none: MaxLengthEnforcement;
    enforced: MaxLengthEnforcement;
    truncateAfterCompositionEnds: MaxLengthEnforcement;
    values: readonly MaxLengthEnforcement[];
}>;

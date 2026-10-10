import { type DartEnum } from '@flax/core/bindings';
export interface Clip extends DartEnum {
    readonly __Clip: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const Clip: Readonly<{
    none: Clip;
    hardEdge: Clip;
    antiAlias: Clip;
    antiAliasWithSaveLayer: Clip;
    values: readonly Clip[];
}>;

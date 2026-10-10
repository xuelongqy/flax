import { type DartEnum } from '@flax/core/bindings';
export interface BoxFit extends DartEnum {
    readonly __BoxFit: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const BoxFit: Readonly<{
    fill: BoxFit;
    contain: BoxFit;
    cover: BoxFit;
    fitWidth: BoxFit;
    fitHeight: BoxFit;
    none: BoxFit;
    scaleDown: BoxFit;
    values: readonly BoxFit[];
}>;

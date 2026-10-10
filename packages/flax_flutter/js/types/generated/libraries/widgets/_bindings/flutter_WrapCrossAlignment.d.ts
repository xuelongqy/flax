import { type DartEnum } from '@flax/core/bindings';
export interface WrapCrossAlignment extends DartEnum {
    readonly __WrapCrossAlignment: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const WrapCrossAlignment: Readonly<{
    start: WrapCrossAlignment;
    end: WrapCrossAlignment;
    center: WrapCrossAlignment;
    values: readonly WrapCrossAlignment[];
}>;

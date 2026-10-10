import { type DartEnum } from '@flax/core/bindings';
export interface TextDirection extends DartEnum {
    readonly __TextDirection: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextDirection: Readonly<{
    rtl: TextDirection;
    ltr: TextDirection;
    values: readonly TextDirection[];
}>;

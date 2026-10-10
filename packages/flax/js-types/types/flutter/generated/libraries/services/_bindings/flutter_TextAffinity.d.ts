import { type DartEnum } from '@flax/core/bindings';
export interface TextAffinity extends DartEnum {
    readonly __TextAffinity: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextAffinity: Readonly<{
    upstream: TextAffinity;
    downstream: TextAffinity;
    values: readonly TextAffinity[];
}>;

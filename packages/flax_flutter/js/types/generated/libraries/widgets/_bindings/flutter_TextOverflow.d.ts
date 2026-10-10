import { type DartEnum } from '@flax/core/bindings';
export interface TextOverflow extends DartEnum {
    readonly __TextOverflow: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TextOverflow: Readonly<{
    clip: TextOverflow;
    fade: TextOverflow;
    ellipsis: TextOverflow;
    visible: TextOverflow;
    values: readonly TextOverflow[];
}>;

import { type DartEnum } from '@flax/core/bindings';
export interface UnfocusDisposition extends DartEnum {
    readonly __UnfocusDisposition: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const UnfocusDisposition: Readonly<{
    scope: UnfocusDisposition;
    previouslyFocusedChild: UnfocusDisposition;
    values: readonly UnfocusDisposition[];
}>;

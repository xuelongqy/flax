import { type DartEnum } from '@flax/core/bindings';
export interface AutovalidateMode extends DartEnum {
    readonly __AutovalidateMode: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const AutovalidateMode: Readonly<{
    disabled: AutovalidateMode;
    always: AutovalidateMode;
    onUserInteraction: AutovalidateMode;
    onUnfocus: AutovalidateMode;
    onUserInteractionIfError: AutovalidateMode;
    values: readonly AutovalidateMode[];
}>;

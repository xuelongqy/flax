import { type DartEnum } from '@flax/core/bindings';
export interface AutovalidateMode extends DartEnum {
    readonly type: "flax.core/flutter#type:AutovalidateMode";
}
export declare const AutovalidateMode: Readonly<{
    disabled: AutovalidateMode;
    always: AutovalidateMode;
    onUserInteraction: AutovalidateMode;
    onUnfocus: AutovalidateMode;
    onUserInteractionIfError: AutovalidateMode;
}>;

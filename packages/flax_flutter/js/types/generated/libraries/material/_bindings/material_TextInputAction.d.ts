import { type DartEnum } from '@flax/core/bindings';
export interface TextInputAction extends DartEnum {
    readonly type: "flax.material/material#type:TextInputAction";
}
export declare const TextInputAction: Readonly<{
    none: TextInputAction;
    unspecified: TextInputAction;
    done: TextInputAction;
    go: TextInputAction;
    search: TextInputAction;
    send: TextInputAction;
    next: TextInputAction;
    previous: TextInputAction;
    continueAction: TextInputAction;
    join: TextInputAction;
    route: TextInputAction;
    emergencyCall: TextInputAction;
    newline: TextInputAction;
}>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface TextInputAction extends DartEnum {
    readonly __TextInputAction: unique symbol;
    readonly name: string;
    readonly index: number;
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
    values: readonly TextInputAction[];
} & _FlaxInstanceType<TextInputAction> & _FlaxDartType<TextInputAction, readonly ["class", "flax.material/material#type:TextInputAction", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';

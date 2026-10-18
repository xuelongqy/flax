import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextInputAction extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::TextInputAction">, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputAction": readonly [];
}> {
    readonly __TextInputAction: unique symbol;
    readonly [_flaxDartTypeValue]: TextInputAction;
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
} & _FlaxInstanceType<TextInputAction> & _FlaxDartType<TextInputAction, readonly ["class", "flax.core/sdk_services#type:TextInputAction", readonly [], false]>>;

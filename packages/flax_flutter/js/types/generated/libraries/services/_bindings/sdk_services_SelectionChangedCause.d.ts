import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionChangedCause extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::SelectionChangedCause">, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::SelectionChangedCause": readonly [];
}> {
    readonly __SelectionChangedCause: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionChangedCause;
    readonly name: string;
    readonly index: number;
}
export declare const SelectionChangedCause: Readonly<{
    tap: SelectionChangedCause;
    doubleTap: SelectionChangedCause;
    longPress: SelectionChangedCause;
    forcePress: SelectionChangedCause;
    keyboard: SelectionChangedCause;
    toolbar: SelectionChangedCause;
    drag: SelectionChangedCause;
    stylusHandwriting: SelectionChangedCause;
    values: readonly SelectionChangedCause[];
    readonly scribble: SelectionChangedCause;
} & _FlaxInstanceType<SelectionChangedCause> & _FlaxDartType<SelectionChangedCause, readonly ["class", "flax.core/sdk_services#type:SelectionChangedCause", readonly [], false]>>;

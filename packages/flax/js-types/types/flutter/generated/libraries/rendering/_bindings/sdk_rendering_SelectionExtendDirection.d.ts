import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionExtendDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionExtendDirection">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionExtendDirection": readonly [];
}> {
    readonly __SelectionExtendDirection: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionExtendDirection;
    readonly name: string;
    readonly index: number;
}
export declare const SelectionExtendDirection: Readonly<{
    previousLine: SelectionExtendDirection;
    nextLine: SelectionExtendDirection;
    forward: SelectionExtendDirection;
    backward: SelectionExtendDirection;
    values: readonly SelectionExtendDirection[];
} & _FlaxInstanceType<SelectionExtendDirection> & _FlaxDartType<SelectionExtendDirection, readonly ["class", "flax.core/sdk_rendering#type:SelectionExtendDirection", readonly [], false]>>;

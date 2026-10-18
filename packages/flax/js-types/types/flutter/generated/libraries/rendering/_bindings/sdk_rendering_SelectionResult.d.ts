import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionResult extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionResult">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionResult": readonly [];
}> {
    readonly __SelectionResult: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionResult;
    readonly name: string;
    readonly index: number;
}
export declare const SelectionResult: Readonly<{
    next: SelectionResult;
    previous: SelectionResult;
    end: SelectionResult;
    pending: SelectionResult;
    none: SelectionResult;
    values: readonly SelectionResult[];
} & _FlaxInstanceType<SelectionResult> & _FlaxDartType<SelectionResult, readonly ["class", "flax.core/sdk_rendering#type:SelectionResult", readonly [], false]>>;

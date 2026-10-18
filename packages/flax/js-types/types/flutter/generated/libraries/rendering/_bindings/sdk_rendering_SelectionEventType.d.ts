import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionEventType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEventType">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEventType": readonly [];
}> {
    readonly __SelectionEventType: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionEventType;
    readonly name: string;
    readonly index: number;
}
export declare const SelectionEventType: Readonly<{
    startEdgeUpdate: SelectionEventType;
    endEdgeUpdate: SelectionEventType;
    clear: SelectionEventType;
    selectAll: SelectionEventType;
    selectWord: SelectionEventType;
    selectParagraph: SelectionEventType;
    granularlyExtendSelection: SelectionEventType;
    directionallyExtendSelection: SelectionEventType;
    values: readonly SelectionEventType[];
} & _FlaxInstanceType<SelectionEventType> & _FlaxDartType<SelectionEventType, readonly ["class", "flax.core/sdk_rendering#type:SelectionEventType", readonly [], false]>>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionStatus extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionStatus">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionStatus": readonly [];
}> {
    readonly __SelectionStatus: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionStatus;
    readonly name: string;
    readonly index: number;
}
export declare const SelectionStatus: Readonly<{
    uncollapsed: SelectionStatus;
    collapsed: SelectionStatus;
    none: SelectionStatus;
    values: readonly SelectionStatus[];
} & _FlaxInstanceType<SelectionStatus> & _FlaxDartType<SelectionStatus, readonly ["class", "flax.core/sdk_rendering#type:SelectionStatus", readonly [], false]>>;

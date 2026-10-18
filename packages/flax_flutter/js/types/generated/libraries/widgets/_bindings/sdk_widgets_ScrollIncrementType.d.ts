import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollIncrementType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIncrementType">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIncrementType": readonly [];
}> {
    readonly __ScrollIncrementType: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollIncrementType;
    readonly name: string;
    readonly index: number;
}
export declare const ScrollIncrementType: Readonly<{
    line: ScrollIncrementType;
    page: ScrollIncrementType;
    values: readonly ScrollIncrementType[];
} & _FlaxInstanceType<ScrollIncrementType> & _FlaxDartType<ScrollIncrementType, readonly ["class", "flax.core/sdk_widgets#type:ScrollIncrementType", readonly [], false]>>;

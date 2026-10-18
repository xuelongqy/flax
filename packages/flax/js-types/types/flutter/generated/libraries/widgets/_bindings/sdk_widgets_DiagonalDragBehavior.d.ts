import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagonalDragBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/scrollable.dart::DiagonalDragBehavior">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable.dart::DiagonalDragBehavior": readonly [];
}> {
    readonly __DiagonalDragBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: DiagonalDragBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const DiagonalDragBehavior: Readonly<{
    none: DiagonalDragBehavior;
    weightedEvent: DiagonalDragBehavior;
    weightedContinuous: DiagonalDragBehavior;
    free: DiagonalDragBehavior;
    values: readonly DiagonalDragBehavior[];
} & _FlaxInstanceType<DiagonalDragBehavior> & _FlaxDartType<DiagonalDragBehavior, readonly ["class", "flax.core/sdk_widgets#type:DiagonalDragBehavior", readonly [], false]>>;

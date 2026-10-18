import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MultitouchDragStrategy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/gestures/recognizer.dart::MultitouchDragStrategy">, Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::MultitouchDragStrategy": readonly [];
}> {
    readonly __MultitouchDragStrategy: unique symbol;
    readonly [_flaxDartTypeValue]: MultitouchDragStrategy;
    readonly name: string;
    readonly index: number;
}
export declare const MultitouchDragStrategy: Readonly<{
    latestPointer: MultitouchDragStrategy;
    averageBoundaryPointers: MultitouchDragStrategy;
    sumAllPointers: MultitouchDragStrategy;
    values: readonly MultitouchDragStrategy[];
} & _FlaxInstanceType<MultitouchDragStrategy> & _FlaxDartType<MultitouchDragStrategy, readonly ["class", "flax.core/sdk_gestures#type:MultitouchDragStrategy", readonly [], false]>>;

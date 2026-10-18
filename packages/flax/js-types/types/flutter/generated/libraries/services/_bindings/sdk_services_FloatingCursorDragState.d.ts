import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FloatingCursorDragState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::FloatingCursorDragState">, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::FloatingCursorDragState": readonly [];
}> {
    readonly __FloatingCursorDragState: unique symbol;
    readonly [_flaxDartTypeValue]: FloatingCursorDragState;
    readonly name: string;
    readonly index: number;
}
export declare const FloatingCursorDragState: Readonly<{
    Start: FloatingCursorDragState;
    Update: FloatingCursorDragState;
    End: FloatingCursorDragState;
    values: readonly FloatingCursorDragState[];
} & _FlaxInstanceType<FloatingCursorDragState> & _FlaxDartType<FloatingCursorDragState, readonly ["class", "flax.core/sdk_services#type:FloatingCursorDragState", readonly [], false]>>;

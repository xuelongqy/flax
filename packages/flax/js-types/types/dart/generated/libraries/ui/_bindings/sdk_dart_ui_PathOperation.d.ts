import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PathOperation extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PathOperation">, Readonly<{
    "__flaxBound:dart:ui::PathOperation": readonly [];
}> {
    readonly __PathOperation: unique symbol;
    readonly [_flaxDartTypeValue]: PathOperation;
    readonly name: string;
    readonly index: number;
}
export declare const PathOperation: Readonly<{
    difference: PathOperation;
    intersect: PathOperation;
    union: PathOperation;
    xor: PathOperation;
    reverseDifference: PathOperation;
    values: readonly PathOperation[];
} & _FlaxInstanceType<PathOperation> & _FlaxDartType<PathOperation, readonly ["class", "flax.core/sdk_dart_ui#type:PathOperation", readonly [], false]>>;

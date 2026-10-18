import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClipOp extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::ClipOp">, Readonly<{
    "__flaxBound:dart:ui::ClipOp": readonly [];
}> {
    readonly __ClipOp: unique symbol;
    readonly [_flaxDartTypeValue]: ClipOp;
    readonly name: string;
    readonly index: number;
}
export declare const ClipOp: Readonly<{
    difference: ClipOp;
    intersect: ClipOp;
    values: readonly ClipOp[];
} & _FlaxInstanceType<ClipOp> & _FlaxDartType<ClipOp, readonly ["class", "flax.core/sdk_dart_ui#type:ClipOp", readonly [], false]>>;

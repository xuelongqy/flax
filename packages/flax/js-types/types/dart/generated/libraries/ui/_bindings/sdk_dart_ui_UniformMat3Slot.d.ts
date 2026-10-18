import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UniformMat3Slot extends Omit<upstream0.UniformType, typeof _flaxDartTypeValue | "set" | "__flaxBound:dart:ui::UniformMat3Slot" | "__flaxBound:dart:ui::UniformType">, Readonly<{
    "__flaxBound:dart:ui::UniformMat3Slot": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::UniformType": readonly [];
}> {
    readonly __UniformMat3Slot: unique symbol;
    readonly [_flaxDartTypeValue]: UniformMat3Slot;
    set(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void;
}
export declare const UniformMat3Slot: object & _FlaxInstanceType<UniformMat3Slot> & _FlaxDartType<UniformMat3Slot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformMat3Slot", readonly [], false]>;

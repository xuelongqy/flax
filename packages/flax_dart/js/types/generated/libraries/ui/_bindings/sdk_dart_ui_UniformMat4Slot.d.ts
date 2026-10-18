import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UniformMat4Slot extends Omit<upstream0.UniformType, typeof _flaxDartTypeValue | "set" | "__flaxBound:dart:ui::UniformMat4Slot" | "__flaxBound:dart:ui::UniformType">, Readonly<{
    "__flaxBound:dart:ui::UniformMat4Slot": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::UniformType": readonly [];
}> {
    readonly __UniformMat4Slot: unique symbol;
    readonly [_flaxDartTypeValue]: UniformMat4Slot;
    set(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): void;
}
export declare const UniformMat4Slot: object & _FlaxInstanceType<UniformMat4Slot> & _FlaxDartType<UniformMat4Slot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformMat4Slot", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UniformMat2Slot extends Omit<upstream0.UniformType, typeof _flaxDartTypeValue | "set" | "__flaxBound:dart:ui::UniformMat2Slot" | "__flaxBound:dart:ui::UniformType">, Readonly<{
    "__flaxBound:dart:ui::UniformMat2Slot": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::UniformType": readonly [];
}> {
    readonly __UniformMat2Slot: unique symbol;
    readonly [_flaxDartTypeValue]: UniformMat2Slot;
    set(m00: number, m01: number, m10: number, m11: number): void;
}
export declare const UniformMat2Slot: object & _FlaxInstanceType<UniformMat2Slot> & _FlaxDartType<UniformMat2Slot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformMat2Slot", readonly [], false]>;

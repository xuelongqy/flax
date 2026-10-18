import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UniformVec3Slot extends Omit<upstream0.UniformType, typeof _flaxDartTypeValue | "set" | "__flaxBound:dart:ui::UniformVec3Slot" | "__flaxBound:dart:ui::UniformType">, Readonly<{
    "__flaxBound:dart:ui::UniformVec3Slot": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::UniformType": readonly [];
}> {
    readonly __UniformVec3Slot: unique symbol;
    readonly [_flaxDartTypeValue]: UniformVec3Slot;
    set(x: number, y: number, z: number): void;
}
export declare const UniformVec3Slot: object & _FlaxInstanceType<UniformVec3Slot> & _FlaxDartType<UniformVec3Slot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformVec3Slot", readonly [], false]>;

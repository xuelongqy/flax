import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UniformVec4Slot extends Omit<upstream0.UniformType, typeof _flaxDartTypeValue | "set" | "__flaxBound:dart:ui::UniformVec4Slot" | "__flaxBound:dart:ui::UniformType">, Readonly<{
    "__flaxBound:dart:ui::UniformVec4Slot": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::UniformType": readonly [];
}> {
    readonly __UniformVec4Slot: unique symbol;
    readonly [_flaxDartTypeValue]: UniformVec4Slot;
    set(x: number, y: number, z: number, w: number): void;
}
export declare const UniformVec4Slot: object & _FlaxInstanceType<UniformVec4Slot> & _FlaxDartType<UniformVec4Slot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformVec4Slot", readonly [], false]>;

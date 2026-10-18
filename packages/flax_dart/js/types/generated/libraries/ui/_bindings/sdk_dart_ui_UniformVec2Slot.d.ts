import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UniformVec2Slot extends Omit<upstream0.UniformType, typeof _flaxDartTypeValue | "set" | "__flaxBound:dart:ui::UniformVec2Slot" | "__flaxBound:dart:ui::UniformType">, Readonly<{
    "__flaxBound:dart:ui::UniformVec2Slot": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::UniformType": readonly [];
}> {
    readonly __UniformVec2Slot: unique symbol;
    readonly [_flaxDartTypeValue]: UniformVec2Slot;
    set(x: number, y: number): void;
}
export declare const UniformVec2Slot: object & _FlaxInstanceType<UniformVec2Slot> & _FlaxDartType<UniformVec2Slot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformVec2Slot", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UniformFloatSlot extends Omit<upstream0.UniformType, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::UniformFloatSlot": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::UniformType": readonly [];
}> {
    readonly __UniformFloatSlot: unique symbol;
    readonly [_flaxDartTypeValue]: UniformFloatSlot;
    readonly shaderIndex: number;
    readonly name: string;
    readonly index: number;
    set(val: number): void;
}
export declare const UniformFloatSlot: object & _FlaxInstanceType<UniformFloatSlot> & _FlaxDartType<UniformFloatSlot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformFloatSlot", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "shaderIndex" | "name" | "index" | "set" | "__flaxBound:dart:ui::UniformFloatSlot" | "__flaxBound:dart:ui::UniformType";
export {};

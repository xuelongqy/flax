import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformFloatSlot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformFloatSlot';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformVec2Slot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformVec2Slot';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformVec3Slot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformVec3Slot';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformVec4Slot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformVec4Slot';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformMat2Slot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformMat2Slot';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformMat3Slot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformMat3Slot';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformMat4Slot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformMat4Slot';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformArray';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformArray';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImageSamplerSlot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImageSamplerSlot';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FragmentShader extends Omit<upstream0.Shader, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::FragmentShader": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::Shader": readonly [];
}> {
    readonly __FragmentShader: unique symbol;
    readonly [_flaxDartTypeValue]: FragmentShader;
    readonly debugDisposed: boolean;
    dispose(): void;
    setFloat(index: number, value: number): void;
    getUniformFloat(name: string, index?: number | null): upstream1.UniformFloatSlot;
    getUniformVec2(name: string): upstream2.UniformVec2Slot;
    getUniformVec3(name: string): upstream3.UniformVec3Slot;
    getUniformVec4(name: string): upstream4.UniformVec4Slot;
    getUniformMat2(name: string): upstream5.UniformMat2Slot;
    getUniformMat3(name: string): upstream6.UniformMat3Slot;
    getUniformMat4(name: string): upstream7.UniformMat4Slot;
    getUniformFloatArray(name: string): upstream8.UniformArray<upstream1.UniformFloatSlot>;
    getUniformVec2Array(name: string): upstream8.UniformArray<upstream2.UniformVec2Slot>;
    getUniformVec3Array(name: string): upstream8.UniformArray<upstream3.UniformVec3Slot>;
    getUniformVec4Array(name: string): upstream8.UniformArray<upstream4.UniformVec4Slot>;
    getUniformMat2Array(name: string): upstream8.UniformArray<upstream5.UniformMat2Slot>;
    getUniformMat3Array(name: string): upstream8.UniformArray<upstream6.UniformMat3Slot>;
    getUniformMat4Array(name: string): upstream8.UniformArray<upstream7.UniformMat4Slot>;
    getImageSampler(name: string): upstream9.ImageSamplerSlot;
    setImageSampler(index: number, image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, options?: {
        filterQuality?: upstream11.FilterQuality | undefined;
    }): void;
}
export declare const FragmentShader: object & _FlaxInstanceType<FragmentShader> & _FlaxDartType<FragmentShader, readonly ["class", "flax.core/sdk_dart_ui#type:FragmentShader", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDisposed" | "dispose" | "setFloat" | "getUniformFloat" | "getUniformVec2" | "getUniformVec3" | "getUniformVec4" | "getUniformMat2" | "getUniformMat3" | "getUniformMat4" | "getUniformFloatArray" | "getUniformVec2Array" | "getUniformVec3Array" | "getUniformVec4Array" | "getUniformMat2Array" | "getUniformMat3Array" | "getUniformMat4Array" | "getImageSampler" | "setImageSampler" | "__flaxBound:dart:ui::FragmentShader" | "__flaxBound:dart:ui::Shader";
export {};

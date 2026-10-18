import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UniformArray<T extends upstream0.UniformType = upstream0.UniformType> extends Readonly<{
    "__flaxBound:dart:ui::UniformArray": readonly [T];
}> {
    readonly __UniformArray: unique symbol;
    readonly [_flaxDartTypeValue]: UniformArray<T>;
    readonly length: number;
    operatorGetIndex(index: number): T;
}
export declare const UniformArray: object & _FlaxInstanceType<UniformArray<upstream0.UniformType>> & _FlaxDartType<UniformArray<upstream0.UniformType>, readonly ["class", "flax.core/sdk_dart_ui#type:UniformArray", readonly [readonly ["class", "flax.core/sdk_dart_ui#type:UniformType", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.UniformType] ? {
        readonly prototype: UniformArray<_Selected0>;
    } & _FlaxInstanceType<UniformArray<_Selected0>> & _FlaxDartType<UniformArray<_Selected0>> : never : never;
}
export {};

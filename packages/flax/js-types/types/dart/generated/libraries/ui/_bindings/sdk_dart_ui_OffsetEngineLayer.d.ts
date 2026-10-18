import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_EngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_EngineLayer';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OffsetEngineLayer extends Omit<upstream0.EngineLayer, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::OffsetEngineLayer": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::EngineLayer": readonly [];
}> {
    readonly __OffsetEngineLayer: unique symbol;
    readonly [_flaxDartTypeValue]: OffsetEngineLayer;
    dispose(): void;
}
export declare const OffsetEngineLayer: object & _FlaxInstanceType<OffsetEngineLayer> & _FlaxDartType<OffsetEngineLayer, readonly ["class", "flax.core/sdk_dart_ui#type:OffsetEngineLayer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispose" | "__flaxBound:dart:ui::OffsetEngineLayer" | "__flaxBound:dart:ui::_EngineLayerWrapper" | "__flaxBound:dart:ui::EngineLayer";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_EngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_EngineLayer';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClipRectEngineLayer extends Omit<upstream0.EngineLayer, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::ClipRectEngineLayer": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::EngineLayer": readonly [];
}> {
    readonly __ClipRectEngineLayer: unique symbol;
    readonly [_flaxDartTypeValue]: ClipRectEngineLayer;
    dispose(): void;
}
export declare const ClipRectEngineLayer: object & _FlaxInstanceType<ClipRectEngineLayer> & _FlaxDartType<ClipRectEngineLayer, readonly ["class", "flax.core/sdk_dart_ui#type:ClipRectEngineLayer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispose" | "__flaxBound:dart:ui::ClipRectEngineLayer" | "__flaxBound:dart:ui::_EngineLayerWrapper" | "__flaxBound:dart:ui::EngineLayer";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_EngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_EngineLayer';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BackdropFilterEngineLayer extends Omit<upstream0.EngineLayer, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:ui::BackdropFilterEngineLayer": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::EngineLayer": readonly [];
}> {
    readonly __BackdropFilterEngineLayer: unique symbol;
    readonly [_flaxDartTypeValue]: BackdropFilterEngineLayer;
    dispose(): void;
}
export declare const BackdropFilterEngineLayer: object & _FlaxInstanceType<BackdropFilterEngineLayer> & _FlaxDartType<BackdropFilterEngineLayer, readonly ["class", "flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispose" | "__flaxBound:dart:ui::BackdropFilterEngineLayer" | "__flaxBound:dart:ui::_EngineLayerWrapper" | "__flaxBound:dart:ui::EngineLayer";
export {};

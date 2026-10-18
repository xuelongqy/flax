import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface EngineLayer extends Readonly<{
    "__flaxBound:dart:ui::EngineLayer": readonly [];
}> {
    readonly __EngineLayer: unique symbol;
    readonly [_flaxDartTypeValue]: EngineLayer;
    dispose(): void;
}
export declare namespace _EngineLayerFactory {
    function implement(args: [], implementation: {
        dispose: (() => void);
    }): EngineLayer;
}
export declare const EngineLayer: typeof _EngineLayerFactory & _FlaxInstanceType<EngineLayer> & _FlaxDartType<EngineLayer, readonly ["class", "flax.core/sdk_dart_ui#type:EngineLayer", readonly [], false]>;

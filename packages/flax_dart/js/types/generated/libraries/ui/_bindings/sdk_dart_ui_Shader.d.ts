import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Shader extends Readonly<{
    "__flaxBound:dart:ui::Shader": readonly [];
}> {
    readonly __Shader: unique symbol;
    readonly [_flaxDartTypeValue]: Shader;
    readonly debugDisposed: boolean;
    dispose(): void;
}
export declare const Shader: object & _FlaxInstanceType<Shader> & _FlaxDartType<Shader, readonly ["class", "flax.core/sdk_dart_ui#type:Shader", readonly [], false]>;

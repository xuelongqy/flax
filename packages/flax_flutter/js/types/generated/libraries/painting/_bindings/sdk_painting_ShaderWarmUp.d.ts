import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ShaderWarmUp extends Readonly<{
    "__flaxBound:package:flutter/src/painting/shader_warm_up.dart::ShaderWarmUp": readonly [];
}> {
    readonly __ShaderWarmUp: unique symbol;
    readonly [_flaxDartTypeValue]: ShaderWarmUp;
}
export interface ShaderWarmUp {
    readonly [_flaxDartTypeValue]: ShaderWarmUp;
    execute(): Promise<void>;
    get size(): upstream0.Size;
}
export declare abstract class ShaderWarmUp extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShaderWarmUp>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ShaderWarmUp;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ShaderWarmUp", readonly [], false];
    constructor();
    abstract warmUpOnCanvas(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>): Promise<void>;
}
export declare namespace ShaderWarmUp {
    function implement(args: [], implementation: {
        warmUpOnCanvas: ((canvas: upstream1.Canvas) => Promise<void>);
    }): ShaderWarmUp;
}

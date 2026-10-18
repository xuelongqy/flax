import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TileMode';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ImageShader extends Omit<upstream0.Shader, typeof _flaxDartTypeValue | "debugDisposed" | "dispose" | "__flaxBound:dart:ui::ImageShader" | "__flaxBound:dart:ui::Shader">, Readonly<{
    "__flaxBound:dart:ui::ImageShader": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::Shader": readonly [];
}> {
    readonly __ImageShader: unique symbol;
    readonly [_flaxDartTypeValue]: ImageShader;
}
export interface ImageShader {
    readonly [_flaxDartTypeValue]: ImageShader;
    dispose(): void;
    get debugDisposed(): boolean;
}
export declare abstract class ImageShader extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageShader>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageShader;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ImageShader", readonly [], false];
    constructor(image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, tmx: upstream2.TileMode, tmy: upstream2.TileMode, matrix4: globalThis.Float64Array, options?: {
        filterQuality?: upstream3.FilterQuality | null | undefined;
    });
}
export declare namespace ImageShader {
    function implement(args: [image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, tmx: upstream2.TileMode, tmy: upstream2.TileMode, matrix4: globalThis.Float64Array, options?: {
        filterQuality?: upstream3.FilterQuality | null | undefined;
    }], implementation: {}): ImageShader;
}

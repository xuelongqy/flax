import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DecorationImagePainter extends Readonly<{
    "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImagePainter": readonly [];
}> {
    readonly __DecorationImagePainter: unique symbol;
    readonly [_flaxDartTypeValue]: DecorationImagePainter;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, clipPath: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }> | null, configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>, options?: {
        blend?: number | undefined;
        blendMode?: upstream4.BlendMode | undefined;
    }): void;
    dispose(): void;
}
export declare namespace _DecorationImagePainterFactory {
    function implement(args: [], implementation: {
        paint: ((canvas: upstream0.Canvas, rect: upstream1.Rect, clipPath: upstream2.Path | null, configuration: upstream3.ImageConfiguration, options?: {
            blend?: number | undefined;
            blendMode?: upstream4.BlendMode | undefined;
        }) => void);
        dispose: (() => void);
    }): DecorationImagePainter;
}
export declare const DecorationImagePainter: typeof _DecorationImagePainterFactory & _FlaxInstanceType<DecorationImagePainter> & _FlaxDartType<DecorationImagePainter, readonly ["class", "flax.core/sdk_painting#type:DecorationImagePainter", readonly [], false]>;

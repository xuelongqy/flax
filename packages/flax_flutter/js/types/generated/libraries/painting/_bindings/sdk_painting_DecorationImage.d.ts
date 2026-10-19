import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BoxFit';
import '@flax/flutter/painting/_bindings/flutter_BoxFit';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_DecorationImagePainter';
import '@flax/flutter/painting/_bindings/sdk_painting_DecorationImagePainter';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DecorationImage extends Readonly<{
    "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [];
}> {
    readonly __DecorationImage: unique symbol;
    readonly [_flaxDartTypeValue]: DecorationImage;
}
export interface DecorationImage {
    readonly [_flaxDartTypeValue]: DecorationImage;
    createPainter(onChanged: (() => void)): upstream8.DecorationImagePainter;
    toString(): string;
    get image(): upstream0.ImageProvider<any>;
    get onError(): ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    get colorFilter(): upstream2.ColorFilter | null;
    get fit(): upstream3.BoxFit | null;
    get alignment(): upstream4.AlignmentGeometry;
    get centerSlice(): upstream5.Rect | null;
    get repeat(): upstream6.ImageRepeat;
    get matchTextDirection(): boolean;
    get scale(): number;
    get opacity(): number;
    get filterQuality(): upstream7.FilterQuality;
    get invertColors(): boolean;
    get isAntiAlias(): boolean;
}
export declare abstract class DecorationImage extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DecorationImage>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DecorationImage;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:DecorationImage", readonly [], false];
    constructor(options: {
        image: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
        }>;
        onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined;
        colorFilter?: (Readonly<{
            "__flaxBound:dart:ui::ColorFilter": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }>) | null | undefined;
        fit?: upstream3.BoxFit | null | undefined;
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        centerSlice?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
        repeat?: upstream6.ImageRepeat | undefined;
        matchTextDirection?: boolean | undefined;
        scale?: number | undefined;
        opacity?: number | undefined;
        filterQuality?: upstream7.FilterQuality | undefined;
        invertColors?: boolean | undefined;
        isAntiAlias?: boolean | undefined;
    });
}
export declare namespace DecorationImage {
    function implement(args: [options: {
        image: Readonly<{
            "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
        }>;
        onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined;
        colorFilter?: (Readonly<{
            "__flaxBound:dart:ui::ColorFilter": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::ImageFilter": readonly [];
        }>) | null | undefined;
        fit?: upstream3.BoxFit | null | undefined;
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | undefined;
        centerSlice?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
        repeat?: upstream6.ImageRepeat | undefined;
        matchTextDirection?: boolean | undefined;
        scale?: number | undefined;
        opacity?: number | undefined;
        filterQuality?: upstream7.FilterQuality | undefined;
        invertColors?: boolean | undefined;
        isAntiAlias?: boolean | undefined;
    }], implementation: {}): DecorationImage;
}
export declare namespace DecorationImage {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [];
    }> | null, t: number): DecorationImage | null;
}

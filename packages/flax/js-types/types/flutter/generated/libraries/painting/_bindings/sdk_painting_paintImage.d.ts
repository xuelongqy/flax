import '@flax/flutter/painting/_bindings/flutter_Alignment';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BoxFit';
import '@flax/flutter/painting/_bindings/flutter_BoxFit';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
declare function _flaxTopLevel_paintImage(options: {
    alignment?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>) | undefined;
    blendMode?: upstream1.BlendMode | undefined;
    canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>;
    centerSlice?: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null | undefined;
    colorFilter?: (Readonly<{
        "__flaxBound:dart:ui::ColorFilter": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::ImageFilter": readonly [];
    }>) | null | undefined;
    debugImageLabel?: string | null | undefined;
    filterQuality?: upstream5.FilterQuality | undefined;
    fit?: upstream6.BoxFit | null | undefined;
    flipHorizontally?: boolean | undefined;
    image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>;
    invertColors?: boolean | undefined;
    isAntiAlias?: boolean | undefined;
    opacity?: number | undefined;
    rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>;
    repeat?: upstream8.ImageRepeat | undefined;
    scale?: number | undefined;
}): void;
export { _flaxTopLevel_paintImage as paintImage };

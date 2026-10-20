import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream6 from '@flax/material-ui/_bindings/material_SliderThemeData';
import '@flax/material-ui/_bindings/material_SliderThemeData';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream8 from '@flax/material-ui/_bindings/material_Thumb';
import '@flax/material-ui/_bindings/material_Thumb';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RangeSliderValueIndicatorShape extends Readonly<{
    "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeSliderValueIndicatorShape": readonly [];
}> {
    readonly __RangeSliderValueIndicatorShape: unique symbol;
    readonly [_flaxDartTypeValue]: RangeSliderValueIndicatorShape;
}
export interface RangeSliderValueIndicatorShape {
    readonly [_flaxDartTypeValue]: RangeSliderValueIndicatorShape;
    getHorizontalShift(options?: {
        parentBox?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        center?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        labelPainter?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }> | null | undefined;
        activationAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>) | null | undefined;
        textScaleFactor?: number | null | undefined;
        sizeWithOverflow?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }): number;
}
export declare abstract class RangeSliderValueIndicatorShape extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeSliderValueIndicatorShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RangeSliderValueIndicatorShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:RangeSliderValueIndicatorShape", readonly [], false];
    constructor();
    abstract getPreferredSize(isEnabled: boolean, isDiscrete: boolean, options: {
        labelPainter: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }>;
        textScaleFactor: number;
    }): upstream0.Size;
    abstract paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, center: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        activationAnimation: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
        enableAnimation: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
        isDiscrete?: boolean | undefined;
        isOnTop?: boolean | undefined;
        labelPainter: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }>;
        textScaleFactor?: number | undefined;
        sizeWithOverflow?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        parentBox: Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        sliderTheme: Readonly<{
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textDirection?: upstream7.TextDirection | undefined;
        value?: number | undefined;
        thumb?: upstream8.Thumb | undefined;
    }): void;
}
export declare namespace RangeSliderValueIndicatorShape {
    function implement(args: [], implementation: {
        getPreferredSize: ((isEnabled: boolean, isDiscrete: boolean, options: {
            labelPainter: upstream1.TextPainter;
            textScaleFactor: number;
        }) => Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
        paint: ((context: upstream5.PaintingContext, center: upstream3.Offset, options: {
            activationAnimation: upstream2.Animation<number>;
            enableAnimation: upstream2.Animation<number>;
            isDiscrete?: boolean | undefined;
            isOnTop?: boolean | undefined;
            labelPainter: upstream1.TextPainter;
            textScaleFactor?: number | undefined;
            sizeWithOverflow?: upstream0.Size | undefined;
            parentBox: upstream4.RenderBox;
            sliderTheme: upstream6.SliderThemeData;
            textDirection?: upstream7.TextDirection | undefined;
            value?: number | undefined;
            thumb?: upstream8.Thumb | undefined;
        }) => void);
    }): RangeSliderValueIndicatorShape;
}

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_RangeSliderValueIndicatorShape';
import '@flax/material-ui/_bindings/material_RangeSliderValueIndicatorShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/material-ui/_bindings/material_SliderThemeData';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream9 from '@flax/material-ui/_bindings/material_Thumb';
import '@flax/material-ui/_bindings/material_Thumb';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RectangularRangeSliderValueIndicatorShape extends Omit<upstream0.RangeSliderValueIndicatorShape, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/slider_value_indicator_shape.dart::RectangularRangeSliderValueIndicatorShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeSliderValueIndicatorShape": readonly [];
}> {
    readonly __RectangularRangeSliderValueIndicatorShape: unique symbol;
    readonly [_flaxDartTypeValue]: RectangularRangeSliderValueIndicatorShape;
    getPreferredSize(isEnabled: boolean, isDiscrete: boolean, options: {
        labelPainter: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }>;
        textScaleFactor: number;
    }): upstream1.Size;
    getHorizontalShift(options?: {
        activationAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>) | null | undefined;
        center?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        labelPainter?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }> | null | undefined;
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
        sizeWithOverflow?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        textScaleFactor?: number | null | undefined;
    }): number;
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, center: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        activationAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>) | null | undefined;
        enableAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>) | null | undefined;
        isDiscrete?: boolean | null | undefined;
        isOnTop?: boolean | null | undefined;
        labelPainter?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }> | null | undefined;
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
        sizeWithOverflow?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        sliderTheme?: (Readonly<{
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textDirection?: upstream8.TextDirection | null | undefined;
        textScaleFactor?: number | null | undefined;
        thumb?: upstream9.Thumb | null | undefined;
        value?: number | null | undefined;
    }): void;
}
export declare function _RectangularRangeSliderValueIndicatorShapeFactory(): RectangularRangeSliderValueIndicatorShape;
export interface _RectangularRangeSliderValueIndicatorShapeNative extends RectangularRangeSliderValueIndicatorShape {
    readonly [_flaxDartTypeValue]: _RectangularRangeSliderValueIndicatorShapeNative;
    getPreferredSize(isEnabled: boolean, isDiscrete: boolean, options: {
        labelPainter: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }>;
        textScaleFactor: number;
    }): upstream1.Size;
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
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, center: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        activationAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>) | null | undefined;
        enableAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>) | null | undefined;
        isDiscrete?: boolean | null | undefined;
        isOnTop?: boolean | null | undefined;
        labelPainter?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }> | null | undefined;
        textScaleFactor?: number | null | undefined;
        sizeWithOverflow?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
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
        sliderTheme?: (Readonly<{
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textDirection?: upstream8.TextDirection | null | undefined;
        value?: number | null | undefined;
        thumb?: upstream9.Thumb | null | undefined;
    }): void;
}
export declare abstract class _RectangularRangeSliderValueIndicatorShapeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RectangularRangeSliderValueIndicatorShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RectangularRangeSliderValueIndicatorShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:RectangularRangeSliderValueIndicatorShape", readonly [], false];
    constructor();
}
export declare namespace _RectangularRangeSliderValueIndicatorShapeFactory {
    function implement(args: [], implementation: {}): RectangularRangeSliderValueIndicatorShape;
}
declare const _RectangularRangeSliderValueIndicatorShapeBinding: typeof _RectangularRangeSliderValueIndicatorShapeFactory & (new () => _RectangularRangeSliderValueIndicatorShapeNative);
export declare const RectangularRangeSliderValueIndicatorShape: typeof _RectangularRangeSliderValueIndicatorShapeBinding & _FlaxInstanceType<RectangularRangeSliderValueIndicatorShape> & _FlaxDartType<RectangularRangeSliderValueIndicatorShape, readonly ["class", "flax.material/material#type:RectangularRangeSliderValueIndicatorShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getPreferredSize" | "getHorizontalShift" | "paint" | "__flaxBound:package:material_ui/src/slider_value_indicator_shape.dart::RectangularRangeSliderValueIndicatorShape" | "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeSliderValueIndicatorShape";
export {};

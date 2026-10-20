import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderTrackShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderTrackShape';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_BaseRangeSliderTrackShape';
import '@flax/flutter/material/_bindings/sdk_material_BaseRangeSliderTrackShape';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GappedRangeSliderTrackShape extends Omit<upstream0.RangeSliderTrackShape, _flaxOwnMembers0>, Omit<upstream1.BaseRangeSliderTrackShape, _flaxOwnMembers0 | keyof upstream0.RangeSliderTrackShape>, Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::GappedRangeSliderTrackShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTrackShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::BaseRangeSliderTrackShape": readonly [];
}> {
    readonly __GappedRangeSliderTrackShape: unique symbol;
    readonly [_flaxDartTypeValue]: GappedRangeSliderTrackShape;
    readonly isRounded: boolean;
    getPreferredRect(options: {
        isDiscrete?: boolean | undefined;
        isEnabled?: boolean | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
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
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    }): upstream2.Rect;
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
        additionalActiveTrackHeight?: number | undefined;
        enableAnimation: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
        endThumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        isDiscrete?: boolean | undefined;
        isEnabled?: boolean | undefined;
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
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        startThumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        textDirection: upstream8.TextDirection;
    }): void;
}
export declare function _GappedRangeSliderTrackShapeFactory(): GappedRangeSliderTrackShape;
export interface _GappedRangeSliderTrackShapeNative extends GappedRangeSliderTrackShape {
    readonly [_flaxDartTypeValue]: _GappedRangeSliderTrackShapeNative;
    getPreferredRect(options: {
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
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        sliderTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        isEnabled?: boolean | undefined;
        isDiscrete?: boolean | undefined;
    }): upstream2.Rect;
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
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
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        enableAnimation: Readonly<{
            "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
        }>;
        startThumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        endThumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        isEnabled?: boolean | undefined;
        isDiscrete?: boolean | undefined;
        textDirection: upstream8.TextDirection;
        additionalActiveTrackHeight?: number | undefined;
    }): void;
    get isRounded(): boolean;
}
export declare abstract class _GappedRangeSliderTrackShapeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GappedRangeSliderTrackShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GappedRangeSliderTrackShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:GappedRangeSliderTrackShape", readonly [], false];
    constructor();
}
export declare namespace _GappedRangeSliderTrackShapeFactory {
    function implement(args: [], implementation: {}): GappedRangeSliderTrackShape;
}
declare const _GappedRangeSliderTrackShapeBinding: typeof _GappedRangeSliderTrackShapeFactory & (new () => _GappedRangeSliderTrackShapeNative);
export declare const GappedRangeSliderTrackShape: typeof _GappedRangeSliderTrackShapeBinding & _FlaxInstanceType<GappedRangeSliderTrackShape> & _FlaxDartType<GappedRangeSliderTrackShape, readonly ["class", "flax.core/sdk_material#type:GappedRangeSliderTrackShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isRounded" | "getPreferredRect" | "paint" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::GappedRangeSliderTrackShape" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTrackShape" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::BaseRangeSliderTrackShape";
export {};

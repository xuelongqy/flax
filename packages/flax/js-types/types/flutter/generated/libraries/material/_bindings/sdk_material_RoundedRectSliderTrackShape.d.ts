import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_SliderTrackShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderTrackShape';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_BaseSliderTrackShape';
import '@flax/flutter/material/_bindings/sdk_material_BaseSliderTrackShape';
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
export interface RoundedRectSliderTrackShape extends Omit<upstream0.SliderTrackShape, _flaxOwnMembers0>, Omit<upstream1.BaseSliderTrackShape, _flaxOwnMembers0 | keyof upstream0.SliderTrackShape>, Readonly<{
    "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundedRectSliderTrackShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTrackShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/slider_parts.dart::BaseSliderTrackShape": readonly [];
}> {
    readonly __RoundedRectSliderTrackShape: unique symbol;
    readonly [_flaxDartTypeValue]: RoundedRectSliderTrackShape;
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
        secondaryOffset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        sliderTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textDirection: upstream8.TextDirection;
        thumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): void;
}
export declare function _RoundedRectSliderTrackShapeFactory(): RoundedRectSliderTrackShape;
export interface _RoundedRectSliderTrackShapeNative extends RoundedRectSliderTrackShape {
    readonly [_flaxDartTypeValue]: _RoundedRectSliderTrackShapeNative;
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
        textDirection: upstream8.TextDirection;
        thumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        secondaryOffset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        isDiscrete?: boolean | undefined;
        isEnabled?: boolean | undefined;
        additionalActiveTrackHeight?: number | undefined;
    }): void;
    get isRounded(): boolean;
}
export declare abstract class _RoundedRectSliderTrackShapeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundedRectSliderTrackShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RoundedRectSliderTrackShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundedRectSliderTrackShape", readonly [], false];
    constructor();
}
export declare namespace _RoundedRectSliderTrackShapeFactory {
    function implement(args: [], implementation: {}): RoundedRectSliderTrackShape;
}
declare const _RoundedRectSliderTrackShapeBinding: typeof _RoundedRectSliderTrackShapeFactory & (new () => _RoundedRectSliderTrackShapeNative);
export declare const RoundedRectSliderTrackShape: typeof _RoundedRectSliderTrackShapeBinding & _FlaxInstanceType<RoundedRectSliderTrackShape> & _FlaxDartType<RoundedRectSliderTrackShape, readonly ["class", "flax.core/sdk_material#type:RoundedRectSliderTrackShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isRounded" | "getPreferredRect" | "paint" | "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundedRectSliderTrackShape" | "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTrackShape" | "__flaxBound:package:flutter/src/material/slider_parts.dart::BaseSliderTrackShape";
export {};

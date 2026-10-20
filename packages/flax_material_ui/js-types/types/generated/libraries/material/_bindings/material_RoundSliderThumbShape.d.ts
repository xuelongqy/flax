import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_SliderComponentShape';
import '@flax/material-ui/_bindings/material_SliderComponentShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/material-ui/_bindings/material_SliderThemeData';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RoundSliderThumbShape extends Omit<upstream0.SliderComponentShape, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/slider_parts.dart::RoundSliderThumbShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
}> {
    readonly __RoundSliderThumbShape: unique symbol;
    readonly [_flaxDartTypeValue]: RoundSliderThumbShape;
    readonly enabledThumbRadius: number;
    readonly disabledThumbRadius: number | null;
    readonly elevation: number;
    readonly pressedElevation: number;
    getPreferredSize(isEnabled: boolean, isDiscrete: boolean): upstream1.Size;
    paint(context: Readonly<{
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
        isDiscrete: boolean;
        labelPainter: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }>;
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
        sizeWithOverflow: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        sliderTheme: Readonly<{
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textDirection: upstream8.TextDirection;
        textScaleFactor: number;
        value: number;
    }): void;
}
export declare function _RoundSliderThumbShapeFactory(options?: {
    enabledThumbRadius?: number | undefined;
    disabledThumbRadius?: number | null | undefined;
    elevation?: number | undefined;
    pressedElevation?: number | undefined;
}): RoundSliderThumbShape;
export interface _RoundSliderThumbShapeNative extends RoundSliderThumbShape {
    readonly [_flaxDartTypeValue]: _RoundSliderThumbShapeNative;
    getPreferredSize(isEnabled: boolean, isDiscrete: boolean): upstream1.Size;
    paint(context: Readonly<{
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
        isDiscrete: boolean;
        labelPainter: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [];
        }>;
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
        textDirection: upstream8.TextDirection;
        value: number;
        textScaleFactor: number;
        sizeWithOverflow: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): void;
    get enabledThumbRadius(): number;
    get disabledThumbRadius(): number | null;
    get elevation(): number;
    get pressedElevation(): number;
}
export declare abstract class _RoundSliderThumbShapeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundSliderThumbShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RoundSliderThumbShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:RoundSliderThumbShape", readonly [], false];
    constructor(options?: {
        enabledThumbRadius?: number | undefined;
        disabledThumbRadius?: number | null | undefined;
        elevation?: number | undefined;
        pressedElevation?: number | undefined;
    });
}
export declare namespace _RoundSliderThumbShapeFactory {
    function implement(args: [options?: {
        enabledThumbRadius?: number | undefined;
        disabledThumbRadius?: number | null | undefined;
        elevation?: number | undefined;
        pressedElevation?: number | undefined;
    }], implementation: {}): RoundSliderThumbShape;
}
declare const _RoundSliderThumbShapeBinding: typeof _RoundSliderThumbShapeFactory & (new (options?: {
    enabledThumbRadius?: number | undefined;
    disabledThumbRadius?: number | null | undefined;
    elevation?: number | undefined;
    pressedElevation?: number | undefined;
}) => _RoundSliderThumbShapeNative);
export declare const RoundSliderThumbShape: typeof _RoundSliderThumbShapeBinding & _FlaxInstanceType<RoundSliderThumbShape> & _FlaxDartType<RoundSliderThumbShape, readonly ["class", "flax.material/material#type:RoundSliderThumbShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabledThumbRadius" | "disabledThumbRadius" | "elevation" | "pressedElevation" | "getPreferredSize" | "paint" | "__flaxBound:package:material_ui/src/slider_parts.dart::RoundSliderThumbShape" | "__flaxBound:package:material_ui/src/slider_value_indicator_shape.dart::SliderComponentShape";
export {};

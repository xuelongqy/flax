import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderTickMarkShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderTickMarkShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RoundRangeSliderTickMarkShape extends Omit<upstream0.RangeSliderTickMarkShape, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RoundRangeSliderTickMarkShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTickMarkShape": readonly [];
}> {
    readonly __RoundRangeSliderTickMarkShape: unique symbol;
    readonly [_flaxDartTypeValue]: RoundRangeSliderTickMarkShape;
    readonly tickMarkRadius: number | null;
    getPreferredSize(options: {
        isEnabled?: boolean | undefined;
        sliderTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    }): upstream1.Size;
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, center: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options: {
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
        textDirection: upstream7.TextDirection;
    }): void;
}
export declare function _RoundRangeSliderTickMarkShapeFactory(options?: {
    tickMarkRadius?: number | null | undefined;
}): RoundRangeSliderTickMarkShape;
export interface _RoundRangeSliderTickMarkShapeNative extends RoundRangeSliderTickMarkShape {
    readonly [_flaxDartTypeValue]: _RoundRangeSliderTickMarkShapeNative;
    getPreferredSize(options: {
        sliderTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        isEnabled?: boolean | undefined;
    }): upstream1.Size;
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, center: Readonly<{
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
        textDirection: upstream7.TextDirection;
    }): void;
    get tickMarkRadius(): number | null;
}
export declare abstract class _RoundRangeSliderTickMarkShapeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundRangeSliderTickMarkShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RoundRangeSliderTickMarkShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundRangeSliderTickMarkShape", readonly [], false];
    constructor(options?: {
        tickMarkRadius?: number | null | undefined;
    });
}
export declare namespace _RoundRangeSliderTickMarkShapeFactory {
    function implement(args: [options?: {
        tickMarkRadius?: number | null | undefined;
    }], implementation: {}): RoundRangeSliderTickMarkShape;
}
declare const _RoundRangeSliderTickMarkShapeBinding: typeof _RoundRangeSliderTickMarkShapeFactory & (new (options?: {
    tickMarkRadius?: number | null | undefined;
}) => _RoundRangeSliderTickMarkShapeNative);
export declare const RoundRangeSliderTickMarkShape: typeof _RoundRangeSliderTickMarkShapeBinding & _FlaxInstanceType<RoundRangeSliderTickMarkShape> & _FlaxDartType<RoundRangeSliderTickMarkShape, readonly ["class", "flax.core/sdk_material#type:RoundRangeSliderTickMarkShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tickMarkRadius" | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RoundRangeSliderTickMarkShape" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTickMarkShape";
export {};

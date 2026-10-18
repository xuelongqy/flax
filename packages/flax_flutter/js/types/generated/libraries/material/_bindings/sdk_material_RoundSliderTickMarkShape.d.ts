import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_SliderTickMarkShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderTickMarkShape';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RoundSliderTickMarkShape extends Omit<upstream0.SliderTickMarkShape, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundSliderTickMarkShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTickMarkShape": readonly [];
}> {
    readonly __RoundSliderTickMarkShape: unique symbol;
    readonly [_flaxDartTypeValue]: RoundSliderTickMarkShape;
}
export interface RoundSliderTickMarkShape {
    readonly [_flaxDartTypeValue]: RoundSliderTickMarkShape;
    getPreferredSize(options: {
        sliderTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        isEnabled: boolean;
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
        textDirection: upstream7.TextDirection;
        thumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        isEnabled: boolean;
    }): void;
    get tickMarkRadius(): number | null;
}
export declare abstract class RoundSliderTickMarkShape extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundSliderTickMarkShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RoundSliderTickMarkShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundSliderTickMarkShape", readonly [], false];
    constructor(options?: {
        tickMarkRadius?: number | null | undefined;
    });
}
export declare namespace RoundSliderTickMarkShape {
    function implement(args: [options?: {
        tickMarkRadius?: number | null | undefined;
    }], implementation: {}): RoundSliderTickMarkShape;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tickMarkRadius" | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/slider_parts.dart::RoundSliderTickMarkShape" | "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTickMarkShape";
export {};

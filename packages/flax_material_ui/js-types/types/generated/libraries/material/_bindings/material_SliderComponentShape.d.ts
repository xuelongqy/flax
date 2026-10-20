import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import '@flax/flutter/painting/_bindings/sdk_painting_TextPainter';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream6 from '@flax/material-ui/_bindings/material_SliderThemeData';
import '@flax/material-ui/_bindings/material_SliderThemeData';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliderComponentShape extends Readonly<{
    "__flaxBound:package:material_ui/src/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
}> {
    readonly __SliderComponentShape: unique symbol;
    readonly [_flaxDartTypeValue]: SliderComponentShape;
    getPreferredSize(isEnabled: boolean, isDiscrete: boolean): upstream0.Size;
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
        textDirection: upstream7.TextDirection;
        textScaleFactor: number;
        value: number;
    }): void;
}
export declare namespace _SliderComponentShapeFactory {
    function implement(args: [], implementation: {
        getPreferredSize: ((isEnabled: boolean, isDiscrete: boolean) => Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
        paint: ((context: upstream1.PaintingContext, center: upstream2.Offset, options: {
            activationAnimation: upstream3.Animation<number>;
            enableAnimation: upstream3.Animation<number>;
            isDiscrete: boolean;
            labelPainter: upstream4.TextPainter;
            parentBox: upstream5.RenderBox;
            sliderTheme: upstream6.SliderThemeData;
            textDirection: upstream7.TextDirection;
            value: number;
            textScaleFactor: number;
            sizeWithOverflow: upstream0.Size;
        }) => void);
    }): SliderComponentShape;
}
export declare namespace _SliderComponentShapeFactory {
    const noThumb: SliderComponentShape;
}
export declare namespace _SliderComponentShapeFactory {
    const noOverlay: SliderComponentShape;
}
export declare const SliderComponentShape: typeof _SliderComponentShapeFactory & _FlaxInstanceType<SliderComponentShape> & _FlaxDartType<SliderComponentShape, readonly ["class", "flax.material/material#type:SliderComponentShape", readonly [], false]>;

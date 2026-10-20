import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/material-ui/_bindings/material_SliderThemeData';
import '@flax/material-ui/_bindings/material_SliderThemeData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RangeSliderTickMarkShape extends Readonly<{
    "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeSliderTickMarkShape": readonly [];
}> {
    readonly __RangeSliderTickMarkShape: unique symbol;
    readonly [_flaxDartTypeValue]: RangeSliderTickMarkShape;
    getPreferredSize(options: {
        isEnabled?: boolean | undefined;
        sliderTheme: Readonly<{
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    }): upstream0.Size;
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
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        startThumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        textDirection: upstream6.TextDirection;
    }): void;
}
export declare namespace _RangeSliderTickMarkShapeFactory {
    function implement(args: [], implementation: {
        getPreferredSize: ((options: {
            sliderTheme: upstream1.SliderThemeData;
            isEnabled?: boolean | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
        paint: ((context: upstream2.PaintingContext, center: upstream3.Offset, options: {
            parentBox: upstream5.RenderBox;
            sliderTheme: upstream1.SliderThemeData;
            enableAnimation: upstream4.Animation<number>;
            startThumbCenter: upstream3.Offset;
            endThumbCenter: upstream3.Offset;
            isEnabled?: boolean | undefined;
            textDirection: upstream6.TextDirection;
        }) => void);
    }): RangeSliderTickMarkShape;
}
export declare const RangeSliderTickMarkShape: typeof _RangeSliderTickMarkShapeFactory & _FlaxInstanceType<RangeSliderTickMarkShape> & _FlaxDartType<RangeSliderTickMarkShape, readonly ["class", "flax.material/material#type:RangeSliderTickMarkShape", readonly [], false]>;

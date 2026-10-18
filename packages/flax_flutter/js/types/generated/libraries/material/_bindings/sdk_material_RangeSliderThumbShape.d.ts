import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_Thumb';
import '@flax/flutter/material/_bindings/sdk_material_Thumb';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RangeSliderThumbShape extends Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape": readonly [];
}> {
    readonly __RangeSliderThumbShape: unique symbol;
    readonly [_flaxDartTypeValue]: RangeSliderThumbShape;
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
        isDiscrete?: boolean | undefined;
        isEnabled?: boolean | undefined;
        isOnTop?: boolean | undefined;
        isPressed?: boolean | undefined;
        sliderTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textDirection?: upstream5.TextDirection | undefined;
        thumb?: upstream6.Thumb | undefined;
    }): void;
}
export declare namespace _RangeSliderThumbShapeFactory {
    function implement(args: [], implementation: {
        getPreferredSize: ((isEnabled: boolean, isDiscrete: boolean) => Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
        paint: ((context: upstream1.PaintingContext, center: upstream2.Offset, options: {
            activationAnimation: upstream3.Animation<number>;
            enableAnimation: upstream3.Animation<number>;
            isDiscrete?: boolean | undefined;
            isEnabled?: boolean | undefined;
            isOnTop?: boolean | undefined;
            textDirection?: upstream5.TextDirection | undefined;
            sliderTheme: upstream4.SliderThemeData;
            thumb?: upstream6.Thumb | undefined;
            isPressed?: boolean | undefined;
        }) => void);
    }): RangeSliderThumbShape;
}
export declare const RangeSliderThumbShape: typeof _RangeSliderThumbShapeFactory & _FlaxInstanceType<RangeSliderThumbShape> & _FlaxDartType<RangeSliderThumbShape, readonly ["class", "flax.core/sdk_material#type:RangeSliderThumbShape", readonly [], false]>;

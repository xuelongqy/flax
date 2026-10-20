import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderThumbShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderThumbShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/material/_bindings/sdk_material_SliderThemeData';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_Thumb';
import '@flax/flutter/material/_bindings/sdk_material_Thumb';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RoundRangeSliderThumbShape extends Omit<upstream0.RangeSliderThumbShape, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RoundRangeSliderThumbShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape": readonly [];
}> {
    readonly __RoundRangeSliderThumbShape: unique symbol;
    readonly [_flaxDartTypeValue]: RoundRangeSliderThumbShape;
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
        isDiscrete?: boolean | undefined;
        isEnabled?: boolean | undefined;
        isOnTop?: boolean | null | undefined;
        isPressed?: boolean | null | undefined;
        sliderTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textDirection?: upstream6.TextDirection | null | undefined;
        thumb?: upstream7.Thumb | null | undefined;
    }): void;
}
export declare function _RoundRangeSliderThumbShapeFactory(options?: {
    enabledThumbRadius?: number | undefined;
    disabledThumbRadius?: number | null | undefined;
    elevation?: number | undefined;
    pressedElevation?: number | undefined;
}): RoundRangeSliderThumbShape;
export interface _RoundRangeSliderThumbShapeNative extends RoundRangeSliderThumbShape {
    readonly [_flaxDartTypeValue]: _RoundRangeSliderThumbShapeNative;
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
        isDiscrete?: boolean | undefined;
        isEnabled?: boolean | undefined;
        isOnTop?: boolean | null | undefined;
        sliderTheme: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textDirection?: upstream6.TextDirection | null | undefined;
        thumb?: upstream7.Thumb | null | undefined;
        isPressed?: boolean | null | undefined;
    }): void;
    get enabledThumbRadius(): number;
    get disabledThumbRadius(): number | null;
    get elevation(): number;
    get pressedElevation(): number;
}
export declare abstract class _RoundRangeSliderThumbShapeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RoundRangeSliderThumbShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RoundRangeSliderThumbShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RoundRangeSliderThumbShape", readonly [], false];
    constructor(options?: {
        enabledThumbRadius?: number | undefined;
        disabledThumbRadius?: number | null | undefined;
        elevation?: number | undefined;
        pressedElevation?: number | undefined;
    });
}
export declare namespace _RoundRangeSliderThumbShapeFactory {
    function implement(args: [options?: {
        enabledThumbRadius?: number | undefined;
        disabledThumbRadius?: number | null | undefined;
        elevation?: number | undefined;
        pressedElevation?: number | undefined;
    }], implementation: {}): RoundRangeSliderThumbShape;
}
declare const _RoundRangeSliderThumbShapeBinding: typeof _RoundRangeSliderThumbShapeFactory & (new (options?: {
    enabledThumbRadius?: number | undefined;
    disabledThumbRadius?: number | null | undefined;
    elevation?: number | undefined;
    pressedElevation?: number | undefined;
}) => _RoundRangeSliderThumbShapeNative);
export declare const RoundRangeSliderThumbShape: typeof _RoundRangeSliderThumbShapeBinding & _FlaxInstanceType<RoundRangeSliderThumbShape> & _FlaxDartType<RoundRangeSliderThumbShape, readonly ["class", "flax.core/sdk_material#type:RoundRangeSliderThumbShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabledThumbRadius" | "disabledThumbRadius" | "elevation" | "pressedElevation" | "getPreferredSize" | "paint" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RoundRangeSliderThumbShape" | "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape";
export {};

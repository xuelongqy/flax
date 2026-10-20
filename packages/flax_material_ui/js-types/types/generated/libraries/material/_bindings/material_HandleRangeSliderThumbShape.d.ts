import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_RangeSliderThumbShape';
import '@flax/material-ui/_bindings/material_RangeSliderThumbShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/material-ui/_bindings/material_SliderThemeData';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/material-ui/_bindings/material_Thumb';
import '@flax/material-ui/_bindings/material_Thumb';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HandleRangeSliderThumbShape extends Omit<upstream0.RangeSliderThumbShape, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/range_slider_parts.dart::HandleRangeSliderThumbShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeSliderThumbShape": readonly [];
}> {
    readonly __HandleRangeSliderThumbShape: unique symbol;
    readonly [_flaxDartTypeValue]: HandleRangeSliderThumbShape;
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
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textDirection?: upstream6.TextDirection | null | undefined;
        thumb?: upstream7.Thumb | null | undefined;
    }): void;
}
export declare function _HandleRangeSliderThumbShapeFactory(): HandleRangeSliderThumbShape;
export interface _HandleRangeSliderThumbShapeNative extends HandleRangeSliderThumbShape {
    readonly [_flaxDartTypeValue]: _HandleRangeSliderThumbShapeNative;
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
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        textDirection?: upstream6.TextDirection | null | undefined;
        thumb?: upstream7.Thumb | null | undefined;
        isPressed?: boolean | null | undefined;
    }): void;
}
export declare abstract class _HandleRangeSliderThumbShapeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HandleRangeSliderThumbShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HandleRangeSliderThumbShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:HandleRangeSliderThumbShape", readonly [], false];
    constructor();
}
export declare namespace _HandleRangeSliderThumbShapeFactory {
    function implement(args: [], implementation: {}): HandleRangeSliderThumbShape;
}
declare const _HandleRangeSliderThumbShapeBinding: typeof _HandleRangeSliderThumbShapeFactory & (new () => _HandleRangeSliderThumbShapeNative);
export declare const HandleRangeSliderThumbShape: typeof _HandleRangeSliderThumbShapeBinding & _FlaxInstanceType<HandleRangeSliderThumbShape> & _FlaxDartType<HandleRangeSliderThumbShape, readonly ["class", "flax.material/material#type:HandleRangeSliderThumbShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getPreferredSize" | "paint" | "__flaxBound:package:material_ui/src/range_slider_parts.dart::HandleRangeSliderThumbShape" | "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeSliderThumbShape";
export {};

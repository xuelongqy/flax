import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream3 from '@flax/material-ui/_bindings/material_SliderThemeData';
import '@flax/material-ui/_bindings/material_SliderThemeData';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RangeSliderTrackShape extends Readonly<{
    "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeSliderTrackShape": readonly [];
}> {
    readonly __RangeSliderTrackShape: unique symbol;
    readonly [_flaxDartTypeValue]: RangeSliderTrackShape;
}
export interface RangeSliderTrackShape {
    readonly [_flaxDartTypeValue]: RangeSliderTrackShape;
    get isRounded(): boolean;
}
export declare abstract class RangeSliderTrackShape extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RangeSliderTrackShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RangeSliderTrackShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:RangeSliderTrackShape", readonly [], false];
    constructor();
    abstract getPreferredRect(options: {
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
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        isEnabled?: boolean | undefined;
        isDiscrete?: boolean | undefined;
    }): upstream0.Rect;
    abstract paint(context: Readonly<{
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
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
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
        textDirection: upstream6.TextDirection;
    }): void;
}
export declare namespace RangeSliderTrackShape {
    function implement(args: [], implementation: {
        getPreferredRect: ((options: {
            parentBox: upstream2.RenderBox;
            offset?: upstream1.Offset | undefined;
            sliderTheme: upstream3.SliderThemeData;
            isEnabled?: boolean | undefined;
            isDiscrete?: boolean | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>);
        paint: ((context: upstream4.PaintingContext, offset: upstream1.Offset, options: {
            parentBox: upstream2.RenderBox;
            sliderTheme: upstream3.SliderThemeData;
            enableAnimation: upstream5.Animation<number>;
            startThumbCenter: upstream1.Offset;
            endThumbCenter: upstream1.Offset;
            isEnabled?: boolean | undefined;
            isDiscrete?: boolean | undefined;
            textDirection: upstream6.TextDirection;
        }) => void);
    }): RangeSliderTrackShape;
}

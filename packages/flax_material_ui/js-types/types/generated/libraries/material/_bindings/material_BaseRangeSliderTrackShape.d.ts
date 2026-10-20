import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/material-ui/_bindings/material_SliderThemeData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BaseRangeSliderTrackShape extends Readonly<{
    "__flaxBound:package:material_ui/src/range_slider_parts.dart::BaseRangeSliderTrackShape": readonly [];
}> {
    readonly __BaseRangeSliderTrackShape: unique symbol;
    readonly [_flaxDartTypeValue]: BaseRangeSliderTrackShape;
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
            "__flaxBound:package:material_ui/src/slider_theme.dart::SliderThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    }): upstream0.Rect;
}
export declare const BaseRangeSliderTrackShape: object & _FlaxInstanceType<BaseRangeSliderTrackShape> & _FlaxDartType<BaseRangeSliderTrackShape, readonly ["class", "flax.material/material#type:BaseRangeSliderTrackShape", readonly [], false]>;

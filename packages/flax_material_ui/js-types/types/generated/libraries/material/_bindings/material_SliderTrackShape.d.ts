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
export interface SliderTrackShape extends Readonly<{
    "__flaxBound:package:material_ui/src/slider_parts.dart::SliderTrackShape": readonly [];
}> {
    readonly __SliderTrackShape: unique symbol;
    readonly [_flaxDartTypeValue]: SliderTrackShape;
}
export interface SliderTrackShape {
    readonly [_flaxDartTypeValue]: SliderTrackShape;
    get isRounded(): boolean;
}
export declare abstract class SliderTrackShape extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliderTrackShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliderTrackShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:SliderTrackShape", readonly [], false];
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
        thumbCenter: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        secondaryOffset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        isEnabled?: boolean | undefined;
        isDiscrete?: boolean | undefined;
        textDirection: upstream6.TextDirection;
    }): void;
}
export declare namespace SliderTrackShape {
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
            thumbCenter: upstream1.Offset;
            secondaryOffset?: upstream1.Offset | null | undefined;
            isEnabled?: boolean | undefined;
            isDiscrete?: boolean | undefined;
            textDirection: upstream6.TextDirection;
        }) => void);
    }): SliderTrackShape;
}

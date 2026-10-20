import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_InteractiveInkFeature';
import '@flax/material-ui/_bindings/material_InteractiveInkFeature';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/material-ui/_bindings/material_MaterialInkController';
import '@flax/material-ui/_bindings/material_MaterialInkController';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InteractiveInkFeatureFactory extends Readonly<{
    "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
}> {
    readonly __InteractiveInkFeatureFactory: unique symbol;
    readonly [_flaxDartTypeValue]: InteractiveInkFeatureFactory;
    create(options: {
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        color: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        containedInkWell?: boolean | undefined;
        controller: Readonly<{
            "__flaxBound:package:material_ui/src/material.dart::MaterialInkController": readonly [];
        }>;
        customBorder?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        onRemoved?: (() => void) | null | undefined;
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        radius?: number | null | undefined;
        rectCallback?: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>) | null | undefined;
        referenceBox: Readonly<{
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
        textDirection: upstream8.TextDirection;
    }): upstream0.InteractiveInkFeature;
}
export declare namespace _InteractiveInkFeatureFactoryFactory {
    function implement(args: [], implementation: {
        create: ((options: {
            controller: upstream3.MaterialInkController;
            referenceBox: upstream7.RenderBox;
            position: upstream5.Offset;
            color: upstream2.Color;
            textDirection: upstream8.TextDirection;
            containedInkWell?: boolean | undefined;
            rectCallback?: (() => upstream6.Rect) | null | undefined;
            borderRadius?: upstream1.BorderRadius | null | undefined;
            customBorder?: upstream4.ShapeBorder | null | undefined;
            radius?: number | null | undefined;
            onRemoved?: (() => void) | null | undefined;
        }) => Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeature": readonly [];
        }> & Readonly<{
            "__flaxBound:package:material_ui/src/material.dart::InkFeature": readonly [];
        }>);
    }): InteractiveInkFeatureFactory;
}
export declare const InteractiveInkFeatureFactory: typeof _InteractiveInkFeatureFactoryFactory & _FlaxInstanceType<InteractiveInkFeatureFactory> & _FlaxDartType<InteractiveInkFeatureFactory, readonly ["class", "flax.material/material#type:InteractiveInkFeatureFactory", readonly [], false]>;

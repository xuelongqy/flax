import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeature';
import '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeature';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import '@flax/flutter/material/_bindings/sdk_material_MaterialInkController';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream10 from '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeatureFactory';
import '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeatureFactory';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface InkSparkle extends Omit<upstream0.InteractiveInkFeature, _flaxOwnMembers0>, Omit<upstream1.InkFeature, _flaxOwnMembers0 | keyof upstream0.InteractiveInkFeature>, Readonly<{
    "__flaxBound:package:flutter/src/material/ink_sparkle.dart::InkSparkle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [];
}> {
    readonly __InkSparkle: unique symbol;
    readonly [_flaxDartTypeValue]: InkSparkle;
}
export interface InkSparkle {
    readonly [_flaxDartTypeValue]: InkSparkle;
    confirm(): void;
    cancel(): void;
    paintInkCircle(options: {
        canvas: Readonly<{
            "__flaxBound:dart:ui::Canvas": readonly [];
        }>;
        transform: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }>;
        paint: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }>;
        center: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        radius: number;
        textDirection?: upstream6.TextDirection | null | undefined;
        customBorder?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | undefined;
        clipCallback?: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>) | null | undefined;
    }): void;
    dispose(): void;
    paintFeature(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    toString(): string;
    get color(): upstream4.Color;
    get customBorder(): upstream9.ShapeBorder | null;
    get controller(): upstream2.MaterialInkController;
    get referenceBox(): upstream3.RenderBox;
    get onRemoved(): (() => void) | null;
    set color(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set customBorder(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null);
}
export declare abstract class InkSparkle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InkSparkle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InkSparkle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:InkSparkle", readonly [], false];
    constructor(options: {
        controller: Readonly<{
            "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [];
        }>;
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
        color: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        textDirection: upstream6.TextDirection;
        containedInkWell?: boolean | undefined;
        rectCallback?: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>) | null | undefined;
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        customBorder?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        radius?: number | null | undefined;
        onRemoved?: (() => void) | null | undefined;
        turbulenceSeed?: number | null | undefined;
    });
}
export declare namespace InkSparkle {
    function implement(args: [options: {
        controller: Readonly<{
            "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [];
        }>;
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
        color: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        textDirection: upstream6.TextDirection;
        containedInkWell?: boolean | undefined;
        rectCallback?: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>) | null | undefined;
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        customBorder?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        radius?: number | null | undefined;
        onRemoved?: (() => void) | null | undefined;
        turbulenceSeed?: number | null | undefined;
    }], implementation: {}): InkSparkle;
}
export declare namespace InkSparkle {
    const splashFactory: upstream10.InteractiveInkFeatureFactory;
}
export declare namespace InkSparkle {
    const constantTurbulenceSeedSplashFactory: upstream10.InteractiveInkFeatureFactory;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "customBorder" | "controller" | "referenceBox" | "onRemoved" | "confirm" | "cancel" | "paintInkCircle" | "dispose" | "paintFeature" | "toString" | "__flaxBound:package:flutter/src/material/ink_sparkle.dart::InkSparkle" | "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature" | "__flaxBound:package:flutter/src/material/material.dart::InkFeature";
export {};

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
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BoxShape';
import '@flax/flutter/painting/_bindings/flutter_BoxShape';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InkHighlight extends Omit<upstream0.InteractiveInkFeature, _flaxOwnMembers0>, Omit<upstream1.InkFeature, _flaxOwnMembers0 | keyof upstream0.InteractiveInkFeature>, Readonly<{
    "__flaxBound:package:flutter/src/material/ink_highlight.dart::InkHighlight": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [];
}> {
    readonly __InkHighlight: unique symbol;
    readonly [_flaxDartTypeValue]: InkHighlight;
    get color(): upstream4.Color;
    get customBorder(): upstream8.ShapeBorder | null;
    readonly controller: upstream2.MaterialInkController;
    readonly referenceBox: upstream3.RenderBox;
    readonly onRemoved: (() => void) | null;
    readonly active: boolean;
    confirm(): void;
    cancel(): void;
    paintInkCircle(options: {
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | undefined;
        canvas: Readonly<{
            "__flaxBound:dart:ui::Canvas": readonly [];
        }>;
        center: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        clipCallback?: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>) | null | undefined;
        customBorder?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        paint: Readonly<{
            "__flaxBound:dart:ui::Paint": readonly [];
        }>;
        radius: number;
        textDirection?: upstream5.TextDirection | null | undefined;
        transform: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }>;
    }): void;
    dispose(): void;
    paintFeature(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    toString(): string;
    activate(): void;
    deactivate(): void;
    set color(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set customBorder(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null);
}
export declare function _InkHighlightFactory(options: {
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
    textDirection: upstream5.TextDirection;
    shape?: upstream6.BoxShape | undefined;
    radius?: number | null | undefined;
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    customBorder?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    rectCallback?: (() => Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>) | null | undefined;
    onRemoved?: (() => void) | null | undefined;
    fadeDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>) | undefined;
}): InkHighlight;
export interface _InkHighlightNative extends InkHighlight {
    readonly [_flaxDartTypeValue]: _InkHighlightNative;
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
        textDirection?: upstream5.TextDirection | null | undefined;
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
    activate(): void;
    deactivate(): void;
    get active(): boolean;
    get color(): upstream4.Color;
    get customBorder(): upstream8.ShapeBorder | null;
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
export declare abstract class _InkHighlightNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InkHighlight>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InkHighlight;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:InkHighlight", readonly [], false];
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
        textDirection: upstream5.TextDirection;
        shape?: upstream6.BoxShape | undefined;
        radius?: number | null | undefined;
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        customBorder?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        rectCallback?: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>) | null | undefined;
        onRemoved?: (() => void) | null | undefined;
        fadeDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
        }>) | undefined;
    });
}
export declare namespace _InkHighlightFactory {
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
        textDirection: upstream5.TextDirection;
        shape?: upstream6.BoxShape | undefined;
        radius?: number | null | undefined;
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        customBorder?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        rectCallback?: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>) | null | undefined;
        onRemoved?: (() => void) | null | undefined;
        fadeDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
        }>) | undefined;
    }], implementation: {}): InkHighlight;
}
declare const _InkHighlightBinding: typeof _InkHighlightFactory & (new (options: {
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
    textDirection: upstream5.TextDirection;
    shape?: upstream6.BoxShape | undefined;
    radius?: number | null | undefined;
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    customBorder?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    rectCallback?: (() => Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>) | null | undefined;
    onRemoved?: (() => void) | null | undefined;
    fadeDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream10.Duration];
    }>) | undefined;
}) => _InkHighlightNative);
export declare const InkHighlight: typeof _InkHighlightBinding & _FlaxInstanceType<InkHighlight> & _FlaxDartType<InkHighlight, readonly ["class", "flax.core/sdk_material#type:InkHighlight", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "customBorder" | "controller" | "referenceBox" | "onRemoved" | "active" | "confirm" | "cancel" | "paintInkCircle" | "dispose" | "paintFeature" | "toString" | "activate" | "deactivate" | "__flaxBound:package:flutter/src/material/ink_highlight.dart::InkHighlight" | "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature" | "__flaxBound:package:flutter/src/material/material.dart::InkFeature";
export {};

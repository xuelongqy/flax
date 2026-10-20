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
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeatureFactory';
import '@flax/flutter/material/_bindings/sdk_material_InteractiveInkFeatureFactory';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NoSplash extends Omit<upstream0.InteractiveInkFeature, _flaxOwnMembers0>, Omit<upstream1.InkFeature, _flaxOwnMembers0 | keyof upstream0.InteractiveInkFeature>, Readonly<{
    "__flaxBound:package:flutter/src/material/no_splash.dart::NoSplash": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [];
}> {
    readonly __NoSplash: unique symbol;
    readonly [_flaxDartTypeValue]: NoSplash;
    get color(): upstream4.Color;
    get customBorder(): upstream5.ShapeBorder | null;
    readonly controller: upstream2.MaterialInkController;
    readonly referenceBox: upstream3.RenderBox;
    readonly onRemoved: (() => void) | null;
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
        textDirection?: upstream12.TextDirection | null | undefined;
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
    set color(value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>);
    set customBorder(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null);
}
export declare function _NoSplashFactory(options: {
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
    onRemoved?: (() => void) | null | undefined;
}): NoSplash;
export interface _NoSplashNative extends NoSplash {
    readonly [_flaxDartTypeValue]: _NoSplashNative;
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
        textDirection?: upstream12.TextDirection | null | undefined;
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
    get customBorder(): upstream5.ShapeBorder | null;
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
export declare abstract class _NoSplashNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NoSplash>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NoSplash;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:NoSplash", readonly [], false];
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
        onRemoved?: (() => void) | null | undefined;
    });
}
export declare namespace _NoSplashFactory {
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
        onRemoved?: (() => void) | null | undefined;
    }], implementation: {}): NoSplash;
}
declare const _NoSplashBinding: typeof _NoSplashFactory & (new (options: {
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
    onRemoved?: (() => void) | null | undefined;
}) => _NoSplashNative);
export declare namespace _NoSplashFactory {
    const splashFactory: upstream6.InteractiveInkFeatureFactory;
}
export declare const NoSplash: typeof _NoSplashBinding & _FlaxInstanceType<NoSplash> & _FlaxDartType<NoSplash, readonly ["class", "flax.core/sdk_material#type:NoSplash", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "customBorder" | "controller" | "referenceBox" | "onRemoved" | "confirm" | "cancel" | "paintInkCircle" | "dispose" | "paintFeature" | "toString" | "__flaxBound:package:flutter/src/material/no_splash.dart::NoSplash" | "__flaxBound:package:flutter/src/material/ink_well.dart::InteractiveInkFeature" | "__flaxBound:package:flutter/src/material/material.dart::InkFeature";
export {};

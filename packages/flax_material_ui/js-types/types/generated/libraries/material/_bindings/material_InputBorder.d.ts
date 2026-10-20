import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface InputBorder extends Omit<upstream0.ShapeBorder, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> {
    readonly __InputBorder: unique symbol;
    readonly [_flaxDartTypeValue]: InputBorder;
}
export interface InputBorder {
    readonly [_flaxDartTypeValue]: InputBorder;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream0.ShapeBorder | null;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream0.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream0.ShapeBorder | null;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream5.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream0.ShapeBorder;
    get borderSide(): upstream1.BorderSide;
    get preferPaintInterior(): boolean;
}
export declare abstract class InputBorder extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InputBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InputBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:InputBorder", readonly [], false];
    constructor(options?: {
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
    });
    abstract scale(t: number): upstream0.ShapeBorder;
    abstract getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream5.TextDirection | null | undefined;
    }): upstream3.Path;
    abstract getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream5.TextDirection | null | undefined;
    }): upstream3.Path;
    abstract paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        gapStart?: number | null | undefined;
        gapExtent?: number | undefined;
        gapPercentage?: number | undefined;
        textDirection?: upstream5.TextDirection | null | undefined;
    }): void;
    abstract copyWith(options?: {
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): InputBorder;
    abstract get isOutline(): boolean;
    abstract get dimensions(): upstream2.EdgeInsetsGeometry;
}
export declare namespace InputBorder {
    function implement(args: [options?: {
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
    }], implementation: {
        scale: ((t: number) => Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>);
        getOuterPath: ((rect: upstream4.Rect, options?: {
            textDirection?: upstream5.TextDirection | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::Path": readonly [];
        }>);
        getInnerPath: ((rect: upstream4.Rect, options?: {
            textDirection?: upstream5.TextDirection | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::Path": readonly [];
        }>);
        paint: ((canvas: upstream6.Canvas, rect: upstream4.Rect, options?: {
            gapStart?: number | null | undefined;
            gapExtent?: number | undefined;
            gapPercentage?: number | undefined;
            textDirection?: upstream5.TextDirection | null | undefined;
        }) => void);
        copyWith: ((options?: {
            borderSide?: upstream1.BorderSide | null | undefined;
        }) => Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>);
        get isOutline(): boolean;
        get dimensions(): Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>;
    }): InputBorder;
}
export declare namespace InputBorder {
    const none: InputBorder;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "borderSide" | "isOutline" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "copyWith" | "operatorAdd" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
export {};

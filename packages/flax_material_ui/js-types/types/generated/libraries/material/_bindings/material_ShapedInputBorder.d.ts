import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_InputBorder';
import '@flax/material-ui/_bindings/material_InputBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ShapedInputBorder extends Omit<upstream0.InputBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.InputBorder>, Readonly<{
    "__flaxBound:package:material_ui/src/input_border.dart::ShapedInputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> {
    readonly __ShapedInputBorder: unique symbol;
    readonly [_flaxDartTypeValue]: ShapedInputBorder;
    readonly borderSide: upstream2.BorderSide;
    readonly isOutline: boolean;
    readonly dimensions: upstream3.EdgeInsetsGeometry;
    readonly preferPaintInterior: boolean;
    readonly gapPadding: number;
    readonly shape: upstream1.ShapeBorder;
    copyWith(options?: {
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        gapPadding?: number | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
    }): ShapedInputBorder;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        gapExtent?: number | undefined;
        gapPercentage?: number | undefined;
        gapStart?: number | null | undefined;
        textDirection?: upstream6.TextDirection | null | undefined;
    }): void;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream1.ShapeBorder | null;
    scale(t: number): ShapedInputBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): upstream7.Path;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): upstream7.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
}
export declare function _ShapedInputBorderFactory(options: {
    borderSide?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    shape: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>;
    gapPadding?: number | undefined;
}): ShapedInputBorder;
export interface _ShapedInputBorderNative extends ShapedInputBorder {
    readonly [_flaxDartTypeValue]: _ShapedInputBorderNative;
    copyWith(options?: {
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        gapPadding?: number | null | undefined;
    }): ShapedInputBorder;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        gapStart?: number | null | undefined;
        gapExtent?: number | undefined;
        gapPercentage?: number | undefined;
        textDirection?: upstream6.TextDirection | null | undefined;
    }): void;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream1.ShapeBorder | null;
    scale(t: number): ShapedInputBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): upstream7.Path;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): upstream7.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
    get gapPadding(): number;
    get shape(): upstream1.ShapeBorder;
    get isOutline(): boolean;
    get dimensions(): upstream3.EdgeInsetsGeometry;
    get preferPaintInterior(): boolean;
    get borderSide(): upstream2.BorderSide;
}
export declare abstract class _ShapedInputBorderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapedInputBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ShapedInputBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ShapedInputBorder", readonly [], false];
    constructor(options: {
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        shape: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>;
        gapPadding?: number | undefined;
    });
}
export declare namespace _ShapedInputBorderFactory {
    function implement(args: [options: {
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        shape: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>;
        gapPadding?: number | undefined;
    }], implementation: {}): ShapedInputBorder;
}
declare const _ShapedInputBorderBinding: typeof _ShapedInputBorderFactory & (new (options: {
    borderSide?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    shape: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>;
    gapPadding?: number | undefined;
}) => _ShapedInputBorderNative);
export declare const ShapedInputBorder: typeof _ShapedInputBorderBinding & _FlaxInstanceType<ShapedInputBorder> & _FlaxDartType<ShapedInputBorder, readonly ["class", "flax.material/material#type:ShapedInputBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "borderSide" | "isOutline" | "dimensions" | "preferPaintInterior" | "gapPadding" | "shape" | "copyWith" | "paint" | "add" | "scale" | "lerpFrom" | "lerpTo" | "getOuterPath" | "getInnerPath" | "paintInterior" | "toString" | "operatorAdd" | "__flaxBound:package:material_ui/src/input_border.dart::ShapedInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
export {};

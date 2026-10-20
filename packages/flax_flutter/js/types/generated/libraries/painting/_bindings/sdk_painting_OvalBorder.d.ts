import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_CircleBorder';
import '@flax/flutter/painting/_bindings/flutter_CircleBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OvalBorder extends Omit<upstream0.CircleBorder, _flaxOwnMembers0>, Omit<upstream1.OutlinedBorder, _flaxOwnMembers0 | keyof upstream0.CircleBorder>, Omit<upstream2.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.CircleBorder | keyof upstream1.OutlinedBorder>, Readonly<{
    "__flaxBound:package:flutter/src/painting/oval_border.dart::OvalBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/circle_border.dart::CircleBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> {
    readonly __OvalBorder: unique symbol;
    readonly [_flaxDartTypeValue]: OvalBorder;
    readonly eccentricity: number;
    readonly preferPaintInterior: boolean;
    readonly dimensions: upstream4.EdgeInsetsGeometry;
    readonly side: upstream3.BorderSide;
    scale(t: number): upstream2.ShapeBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    copyWith(options?: {
        eccentricity?: number | null | undefined;
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): OvalBorder;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    toString(): string;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream2.ShapeBorder | null;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream2.ShapeBorder;
}
export declare function _OvalBorderFactory(options?: {
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    eccentricity?: number | undefined;
}): OvalBorder;
export interface _OvalBorderNative extends OvalBorder {
    readonly [_flaxDartTypeValue]: _OvalBorderNative;
    scale(t: number): upstream2.ShapeBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    copyWith(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        eccentricity?: number | null | undefined;
    }): OvalBorder;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    toString(): string;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream2.ShapeBorder | null;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream2.ShapeBorder;
    get eccentricity(): number;
    get preferPaintInterior(): boolean;
    get dimensions(): upstream4.EdgeInsetsGeometry;
    get side(): upstream3.BorderSide;
}
export declare abstract class _OvalBorderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OvalBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OvalBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:OvalBorder", readonly [], false];
    constructor(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        eccentricity?: number | undefined;
    });
}
export declare namespace _OvalBorderFactory {
    function implement(args: [options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        eccentricity?: number | undefined;
    }], implementation: {}): OvalBorder;
}
declare const _OvalBorderBinding: typeof _OvalBorderFactory & (new (options?: {
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    eccentricity?: number | undefined;
}) => _OvalBorderNative);
export declare const OvalBorder: typeof _OvalBorderBinding & _FlaxInstanceType<OvalBorder> & _FlaxDartType<OvalBorder, readonly ["class", "flax.core/sdk_painting#type:OvalBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "eccentricity" | "preferPaintInterior" | "dimensions" | "side" | "scale" | "lerpFrom" | "lerpTo" | "getInnerPath" | "getOuterPath" | "paintInterior" | "copyWith" | "paint" | "toString" | "add" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/oval_border.dart::OvalBorder" | "__flaxBound:package:flutter/src/painting/circle_border.dart::CircleBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_LinearBorderEdge';
import '@flax/flutter/painting/_bindings/sdk_painting_LinearBorderEdge';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LinearBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Readonly<{
    "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> {
    readonly __LinearBorder: unique symbol;
    readonly [_flaxDartTypeValue]: LinearBorder;
}
export interface LinearBorder {
    readonly [_flaxDartTypeValue]: LinearBorder;
    copyWith(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        start?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        top?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        bottom?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
    }): LinearBorder;
    scale(t: number): LinearBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream1.ShapeBorder | null;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    getInnerPath(rect: Readonly<{
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
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
    get start(): upstream3.LinearBorderEdge | null;
    get end(): upstream3.LinearBorderEdge | null;
    get top(): upstream3.LinearBorderEdge | null;
    get bottom(): upstream3.LinearBorderEdge | null;
    get dimensions(): upstream4.EdgeInsetsGeometry;
    get side(): upstream2.BorderSide;
    get preferPaintInterior(): boolean;
}
export declare abstract class LinearBorder extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LinearBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearBorder", readonly [], false];
    constructor(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        start?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        top?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        bottom?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
    });
}
export declare namespace LinearBorder {
    function implement(args: [options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        start?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        top?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        bottom?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
    }], implementation: {}): LinearBorder;
}
export declare namespace LinearBorder {
    const none: LinearBorder;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "start" | "end" | "top" | "bottom" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StarBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Readonly<{
    "__flaxBound:package:flutter/src/painting/star_border.dart::StarBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> {
    readonly __StarBorder: unique symbol;
    readonly [_flaxDartTypeValue]: StarBorder;
    readonly dimensions: upstream3.EdgeInsetsGeometry;
    readonly side: upstream2.BorderSide;
    readonly preferPaintInterior: boolean;
    readonly points: number;
    readonly innerRadiusRatio: number;
    readonly pointRounding: number;
    readonly valleyRounding: number;
    readonly rotation: number;
    readonly squash: number;
    copyWith(options?: {
        innerRadiusRatio?: number | null | undefined;
        pointRounding?: number | null | undefined;
        points?: number | null | undefined;
        rotation?: number | null | undefined;
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        squash?: number | null | undefined;
        valleyRounding?: number | null | undefined;
    }): StarBorder;
    scale(t: number): upstream1.ShapeBorder;
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
        textDirection?: upstream6.TextDirection | null | undefined;
    }): upstream4.Path;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): upstream4.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): void;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
}
export declare function _StarBorderFactory(options?: {
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    points?: number | undefined;
    innerRadiusRatio?: number | undefined;
    pointRounding?: number | undefined;
    valleyRounding?: number | undefined;
    rotation?: number | undefined;
    squash?: number | undefined;
}): StarBorder;
export declare namespace _StarBorderFactory {
    function polygon(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        sides?: number | undefined;
        pointRounding?: number | undefined;
        rotation?: number | undefined;
        squash?: number | undefined;
    }): StarBorder;
}
export interface _StarBorderNative extends StarBorder {
    readonly [_flaxDartTypeValue]: _StarBorderNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | undefined;
            points?: number | undefined;
            innerRadiusRatio?: number | undefined;
            pointRounding?: number | undefined;
            valleyRounding?: number | undefined;
            rotation?: number | undefined;
            squash?: number | undefined;
        }) => void;
        "polygon": (options?: {
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | undefined;
            sides?: number | undefined;
            pointRounding?: number | undefined;
            rotation?: number | undefined;
            squash?: number | undefined;
        }) => void;
    };
    copyWith(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        points?: number | null | undefined;
        innerRadiusRatio?: number | null | undefined;
        pointRounding?: number | null | undefined;
        valleyRounding?: number | null | undefined;
        rotation?: number | null | undefined;
        squash?: number | null | undefined;
    }): StarBorder;
    scale(t: number): upstream1.ShapeBorder;
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
        textDirection?: upstream6.TextDirection | null | undefined;
    }): upstream4.Path;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): upstream4.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): void;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream6.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
    get points(): number;
    get innerRadiusRatio(): number;
    get pointRounding(): number;
    get valleyRounding(): number;
    get rotation(): number;
    get squash(): number;
    get dimensions(): upstream3.EdgeInsetsGeometry;
    get side(): upstream2.BorderSide;
    get preferPaintInterior(): boolean;
}
export declare abstract class _StarBorderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StarBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StarBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:StarBorder", readonly [], false];
    constructor(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        points?: number | undefined;
        innerRadiusRatio?: number | undefined;
        pointRounding?: number | undefined;
        valleyRounding?: number | undefined;
        rotation?: number | undefined;
        squash?: number | undefined;
    });
    constructor(call: _FlaxProxySuper<_StarBorderNative>);
}
export declare namespace _StarBorderFactory {
    function implement(args: [options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        points?: number | undefined;
        innerRadiusRatio?: number | undefined;
        pointRounding?: number | undefined;
        valleyRounding?: number | undefined;
        rotation?: number | undefined;
        squash?: number | undefined;
    }], implementation: {}): StarBorder;
}
declare const _StarBorderBinding: typeof _StarBorderFactory & (new (options?: {
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    points?: number | undefined;
    innerRadiusRatio?: number | undefined;
    pointRounding?: number | undefined;
    valleyRounding?: number | undefined;
    rotation?: number | undefined;
    squash?: number | undefined;
}) => _StarBorderNative) & (new (call: _FlaxProxySuper<_StarBorderNative>) => _StarBorderNative);
export declare const StarBorder: typeof _StarBorderBinding & _FlaxInstanceType<StarBorder> & _FlaxDartType<StarBorder, readonly ["class", "flax.core/sdk_painting#type:StarBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "points" | "innerRadiusRatio" | "pointRounding" | "valleyRounding" | "rotation" | "squash" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/star_border.dart::StarBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
export {};

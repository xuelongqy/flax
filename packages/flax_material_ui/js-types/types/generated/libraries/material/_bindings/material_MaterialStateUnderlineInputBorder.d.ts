import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_UnderlineInputBorder';
import '@flax/material-ui/_bindings/material_UnderlineInputBorder';
import type * as upstream1 from '@flax/material-ui/_bindings/material_InputBorder';
import '@flax/material-ui/_bindings/material_InputBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialStateUnderlineInputBorder extends Omit<upstream0.UnderlineInputBorder, _flaxOwnMembers0>, Omit<upstream1.InputBorder, _flaxOwnMembers0 | keyof upstream0.UnderlineInputBorder>, Omit<upstream2.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.UnderlineInputBorder | keyof upstream1.InputBorder>, Omit<upstream3.WidgetStateProperty<upstream1.InputBorder>, _flaxOwnMembers0 | keyof upstream0.UnderlineInputBorder | keyof upstream1.InputBorder | keyof upstream2.ShapeBorder>, Readonly<{
    "__flaxBound:package:material_ui/src/material_state.dart::MaterialStateUnderlineInputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/input_border.dart::UnderlineInputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.InputBorder];
}> {
    readonly __MaterialStateUnderlineInputBorder: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialStateUnderlineInputBorder;
    readonly borderRadius: upstream5.BorderRadius;
    readonly isOutline: boolean;
    readonly dimensions: upstream6.EdgeInsetsGeometry;
    readonly preferPaintInterior: boolean;
    readonly borderSide: upstream7.BorderSide;
    copyWith(options?: {
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream0.UnderlineInputBorder;
    scale(t: number): upstream0.UnderlineInputBorder;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream10.TextDirection | null | undefined;
    }): upstream8.Path;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream10.TextDirection | null | undefined;
    }): upstream8.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream10.TextDirection | null | undefined;
    }): void;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        gapExtent?: number | undefined;
        gapPercentage?: number | undefined;
        gapStart?: number | null | undefined;
        textDirection?: upstream10.TextDirection | null | undefined;
    }): void;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream2.ShapeBorder | null;
    toString(): string;
    resolve(states: DartSetInput<upstream4.WidgetState, upstream4.WidgetState>): upstream1.InputBorder;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream2.ShapeBorder;
}
export declare namespace _MaterialStateUnderlineInputBorderFactory {
    function resolveWith(callback: ((states: DartSet<upstream4.WidgetState>) => Readonly<{
        "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>)): MaterialStateUnderlineInputBorder;
}
export interface _MaterialStateUnderlineInputBorderNative extends MaterialStateUnderlineInputBorder {
    readonly [_flaxDartTypeValue]: _MaterialStateUnderlineInputBorderNative;
    copyWith(options?: {
        borderSide?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        borderRadius?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
    }): upstream0.UnderlineInputBorder;
    scale(t: number): upstream0.UnderlineInputBorder;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream10.TextDirection | null | undefined;
    }): upstream8.Path;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream10.TextDirection | null | undefined;
    }): upstream8.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream10.TextDirection | null | undefined;
    }): void;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        gapStart?: number | null | undefined;
        gapExtent?: number | undefined;
        gapPercentage?: number | undefined;
        textDirection?: upstream10.TextDirection | null | undefined;
    }): void;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream2.ShapeBorder | null;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream2.ShapeBorder;
    get borderRadius(): upstream5.BorderRadius;
    get isOutline(): boolean;
    get dimensions(): upstream6.EdgeInsetsGeometry;
    get preferPaintInterior(): boolean;
    get borderSide(): upstream7.BorderSide;
}
export declare abstract class _MaterialStateUnderlineInputBorderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialStateUnderlineInputBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialStateUnderlineInputBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialStateUnderlineInputBorder", readonly [], false];
    constructor();
    abstract resolve(states: DartSetInput<upstream4.WidgetState, upstream4.WidgetState>): upstream1.InputBorder;
}
export declare namespace _MaterialStateUnderlineInputBorderFactory {
    function implement(args: [], implementation: {
        resolve: ((states: DartSet<upstream4.WidgetState>) => Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>);
    }): MaterialStateUnderlineInputBorder;
}
declare const _MaterialStateUnderlineInputBorderBinding: typeof _MaterialStateUnderlineInputBorderFactory & (abstract new () => _MaterialStateUnderlineInputBorderNative);
export declare const MaterialStateUnderlineInputBorder: typeof _MaterialStateUnderlineInputBorderBinding & _FlaxInstanceType<MaterialStateUnderlineInputBorder> & _FlaxDartType<MaterialStateUnderlineInputBorder, readonly ["class", "flax.material/material#type:MaterialStateUnderlineInputBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "borderRadius" | "isOutline" | "dimensions" | "preferPaintInterior" | "borderSide" | "copyWith" | "scale" | "getInnerPath" | "getOuterPath" | "paintInterior" | "lerpFrom" | "lerpTo" | "paint" | "add" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:material_ui/src/material_state.dart::MaterialStateUnderlineInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::UnderlineInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};

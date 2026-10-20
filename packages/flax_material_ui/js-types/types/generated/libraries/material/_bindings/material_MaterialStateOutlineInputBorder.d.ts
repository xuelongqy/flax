import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_OutlineInputBorder';
import '@flax/material-ui/_bindings/material_OutlineInputBorder';
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
export interface MaterialStateOutlineInputBorder extends Omit<upstream0.OutlineInputBorder, _flaxOwnMembers0>, Omit<upstream1.InputBorder, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder>, Omit<upstream2.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder | keyof upstream1.InputBorder>, Omit<upstream3.WidgetStateProperty<upstream1.InputBorder>, _flaxOwnMembers0 | keyof upstream0.OutlineInputBorder | keyof upstream1.InputBorder | keyof upstream2.ShapeBorder>, Readonly<{
    "__flaxBound:package:material_ui/src/material_state.dart::MaterialStateOutlineInputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/input_border.dart::OutlineInputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream1.InputBorder];
}> {
    readonly __MaterialStateOutlineInputBorder: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialStateOutlineInputBorder;
    readonly gapPadding: number;
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
        gapPadding?: number | null | undefined;
    }): upstream0.OutlineInputBorder;
    scale(t: number): upstream0.OutlineInputBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
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
export declare namespace _MaterialStateOutlineInputBorderFactory {
    function resolveWith(callback: ((states: DartSet<upstream4.WidgetState>) => Readonly<{
        "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>)): MaterialStateOutlineInputBorder;
}
export interface _MaterialStateOutlineInputBorderNative extends MaterialStateOutlineInputBorder {
    readonly [_flaxDartTypeValue]: _MaterialStateOutlineInputBorderNative;
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
        gapPadding?: number | null | undefined;
    }): upstream0.OutlineInputBorder;
    scale(t: number): upstream0.OutlineInputBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream2.ShapeBorder | null;
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
    get gapPadding(): number;
    get borderRadius(): upstream5.BorderRadius;
    get isOutline(): boolean;
    get dimensions(): upstream6.EdgeInsetsGeometry;
    get preferPaintInterior(): boolean;
    get borderSide(): upstream7.BorderSide;
}
export declare abstract class _MaterialStateOutlineInputBorderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialStateOutlineInputBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaterialStateOutlineInputBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialStateOutlineInputBorder", readonly [], false];
    constructor();
    abstract resolve(states: DartSetInput<upstream4.WidgetState, upstream4.WidgetState>): upstream1.InputBorder;
}
export declare namespace _MaterialStateOutlineInputBorderFactory {
    function implement(args: [], implementation: {
        resolve: ((states: DartSet<upstream4.WidgetState>) => Readonly<{
            "__flaxBound:package:material_ui/src/input_border.dart::InputBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>);
    }): MaterialStateOutlineInputBorder;
}
declare const _MaterialStateOutlineInputBorderBinding: typeof _MaterialStateOutlineInputBorderFactory & (abstract new () => _MaterialStateOutlineInputBorderNative);
export declare const MaterialStateOutlineInputBorder: typeof _MaterialStateOutlineInputBorderBinding & _FlaxInstanceType<MaterialStateOutlineInputBorder> & _FlaxDartType<MaterialStateOutlineInputBorder, readonly ["class", "flax.material/material#type:MaterialStateOutlineInputBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "gapPadding" | "borderRadius" | "isOutline" | "dimensions" | "preferPaintInterior" | "borderSide" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "getInnerPath" | "getOuterPath" | "paintInterior" | "paint" | "add" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:material_ui/src/material_state.dart::MaterialStateOutlineInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::OutlineInputBorder" | "__flaxBound:package:material_ui/src/input_border.dart::InputBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};

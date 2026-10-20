import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetStateOutlinedBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Omit<upstream2.WidgetStateProperty<upstream0.OutlinedBorder | null>, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder | keyof upstream1.ShapeBorder>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateOutlinedBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.OutlinedBorder | null];
}> {
    readonly __WidgetStateOutlinedBorder: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStateOutlinedBorder;
    readonly dimensions: upstream5.EdgeInsetsGeometry;
    readonly side: upstream6.BorderSide;
    readonly preferPaintInterior: boolean;
    copyWith(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream0.OutlinedBorder;
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
        textDirection?: upstream9.TextDirection | null | undefined;
    }): upstream7.Path;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream9.TextDirection | null | undefined;
    }): upstream7.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream9.TextDirection | null | undefined;
    }): void;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream9.TextDirection | null | undefined;
    }): void;
    toString(): string;
    resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.OutlinedBorder | null;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
}
export declare namespace _WidgetStateOutlinedBorderFactory {
    function resolveWith(callback: ((states: DartSet<upstream3.WidgetState>) => (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null)): WidgetStateOutlinedBorder;
}
export declare namespace _WidgetStateOutlinedBorderFactory {
    function fromMap(map: DartMapInput<upstream4.WidgetStatesConstraint, upstream0.OutlinedBorder | null, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null>): WidgetStateOutlinedBorder;
}
export interface _WidgetStateOutlinedBorderNative extends WidgetStateOutlinedBorder {
    readonly [_flaxDartTypeValue]: _WidgetStateOutlinedBorderNative;
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
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream9.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
    get dimensions(): upstream5.EdgeInsetsGeometry;
    get side(): upstream6.BorderSide;
    get preferPaintInterior(): boolean;
}
export declare abstract class _WidgetStateOutlinedBorderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateOutlinedBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateOutlinedBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", readonly [], false];
    constructor();
    abstract copyWith(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream0.OutlinedBorder;
    abstract scale(t: number): upstream1.ShapeBorder;
    abstract getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream9.TextDirection | null | undefined;
    }): upstream7.Path;
    abstract getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream9.TextDirection | null | undefined;
    }): upstream7.Path;
    abstract paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream9.TextDirection | null | undefined;
    }): void;
    abstract resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.OutlinedBorder | null;
}
export declare namespace _WidgetStateOutlinedBorderFactory {
    function implement(args: [], implementation: {
        copyWith: ((options?: {
            side?: upstream6.BorderSide | null | undefined;
        }) => Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>);
        scale: ((t: number) => Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>);
        getOuterPath: ((rect: upstream8.Rect, options?: {
            textDirection?: upstream9.TextDirection | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::Path": readonly [];
        }>);
        getInnerPath: ((rect: upstream8.Rect, options?: {
            textDirection?: upstream9.TextDirection | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::Path": readonly [];
        }>);
        paint: ((canvas: upstream10.Canvas, rect: upstream8.Rect, options?: {
            textDirection?: upstream9.TextDirection | null | undefined;
        }) => void);
        resolve: ((states: DartSet<upstream3.WidgetState>) => (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null);
    }): WidgetStateOutlinedBorder;
}
declare const _WidgetStateOutlinedBorderBinding: typeof _WidgetStateOutlinedBorderFactory & (abstract new () => _WidgetStateOutlinedBorderNative);
export declare const WidgetStateOutlinedBorder: typeof _WidgetStateOutlinedBorderBinding & _FlaxInstanceType<WidgetStateOutlinedBorder> & _FlaxDartType<WidgetStateOutlinedBorder, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateOutlinedBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "resolve" | "operatorAdd" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateOutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
export {};

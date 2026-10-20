import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BottomAppBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/bottom_app_bar_theme.dart::BottomAppBarThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __BottomAppBarThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: BottomAppBarThemeData;
    readonly color: upstream1.Color | null;
    readonly elevation: number | null;
    readonly shape: upstream2.NotchedShape | null;
    readonly height: number | null;
    readonly surfaceTintColor: upstream1.Color | null;
    readonly shadowColor: upstream1.Color | null;
    readonly padding: upstream3.EdgeInsetsGeometry | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        height?: number | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): BottomAppBarThemeData;
}
export declare function _BottomAppBarThemeDataFactory(options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    elevation?: number | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
    }> | null | undefined;
    height?: number | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}): BottomAppBarThemeData;
export interface _BottomAppBarThemeDataNative extends BottomAppBarThemeData {
    readonly [_flaxDartTypeValue]: _BottomAppBarThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
        }> | null | undefined;
        height?: number | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }): BottomAppBarThemeData;
    get color(): upstream1.Color | null;
    get elevation(): number | null;
    get shape(): upstream2.NotchedShape | null;
    get height(): number | null;
    get surfaceTintColor(): upstream1.Color | null;
    get shadowColor(): upstream1.Color | null;
    get padding(): upstream3.EdgeInsetsGeometry | null;
}
export declare abstract class _BottomAppBarThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BottomAppBarThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BottomAppBarThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:BottomAppBarThemeData", readonly [], false];
    constructor(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
        }> | null | undefined;
        height?: number | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _BottomAppBarThemeDataFactory {
    function implement(args: [options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
        }> | null | undefined;
        height?: number | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }], implementation: {}): BottomAppBarThemeData;
}
declare const _BottomAppBarThemeDataBinding: typeof _BottomAppBarThemeDataFactory & (new (options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    elevation?: number | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
    }> | null | undefined;
    height?: number | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}) => _BottomAppBarThemeDataNative);
export declare namespace _BottomAppBarThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/bottom_app_bar_theme.dart::BottomAppBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/bottom_app_bar_theme.dart::BottomAppBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): BottomAppBarThemeData;
}
export declare const BottomAppBarThemeData: typeof _BottomAppBarThemeDataBinding & _FlaxInstanceType<BottomAppBarThemeData> & _FlaxDartType<BottomAppBarThemeData, readonly ["class", "flax.material/material#type:BottomAppBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "elevation" | "shape" | "height" | "surfaceTintColor" | "shadowColor" | "padding" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/bottom_app_bar_theme.dart::BottomAppBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

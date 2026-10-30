import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/material-ui/_bindings/material_BottomAppBarThemeData';
import '@flax/material-ui/_bindings/material_BottomAppBarThemeData';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BottomAppBarTheme extends _FlaxDartWidget, Omit<upstream0.InheritedTheme, _flaxOwnMembers0>, Omit<upstream1.InheritedWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget | keyof upstream2.ProxyWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/bottom_app_bar_theme.dart::BottomAppBarTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __BottomAppBarTheme: unique symbol;
    readonly [_flaxDartTypeValue]: BottomAppBarTheme;
    readonly color: upstream4.Color | null;
    readonly elevation: number | null;
    readonly shape: upstream5.NotchedShape | null;
    readonly height: number | null;
    readonly surfaceTintColor: upstream4.Color | null;
    readonly shadowColor: upstream4.Color | null;
    readonly padding: upstream6.EdgeInsetsGeometry | null;
    readonly data: upstream7.BottomAppBarThemeData;
    readonly child: Widget;
    readonly key: upstream3.Key | null;
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
    }): BottomAppBarTheme;
    updateShouldNotify(oldWidget: BottomAppBarTheme): boolean;
    wrap(context: upstream8.BuildContext, child: Widget): Widget;
    createElement(): upstream9.InheritedElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
export declare function _BottomAppBarThemeFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
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
    data?: (Readonly<{
        "__flaxBound:package:material_ui/src/bottom_app_bar_theme.dart::BottomAppBarThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    child?: Widget | null | undefined;
}): BottomAppBarTheme;
export declare namespace _BottomAppBarThemeFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _BottomAppBarThemeFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _BottomAppBarThemeFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _BottomAppBarThemeFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _BottomAppBarThemeFactory {
    function of(context: upstream8.BuildContext): upstream7.BottomAppBarThemeData;
}
export declare namespace _BottomAppBarThemeFactory {
    function lerp(a: BottomAppBarTheme | null, b: BottomAppBarTheme | null, t: number): BottomAppBarTheme;
}
export declare const BottomAppBarTheme: typeof _BottomAppBarThemeFactory & _FlaxInstanceType<BottomAppBarTheme> & _FlaxDartType<BottomAppBarTheme, readonly ["class", "flax.material/material#type:BottomAppBarTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "color" | "elevation" | "shape" | "height" | "surfaceTintColor" | "shadowColor" | "padding" | "data" | "child" | "key" | "copyWith" | "updateShouldNotify" | "wrap" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/bottom_app_bar_theme.dart::BottomAppBarTheme" | "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DefaultSelectionStyle extends _FlaxDartWidget, Omit<upstream0.InheritedTheme, _flaxOwnMembers0>, Omit<upstream1.InheritedWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget | keyof upstream2.ProxyWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/default_selection_style.dart::DefaultSelectionStyle": readonly [];
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
    readonly __DefaultSelectionStyle: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultSelectionStyle;
    readonly cursorColor: upstream4.Color | null;
    readonly selectionColor: upstream4.Color | null;
    readonly mouseCursor: upstream5.MouseCursor | null;
    readonly child: Widget;
    readonly key: upstream3.Key | null;
    wrap(context: upstream6.BuildContext, child: Widget): Widget;
    updateShouldNotify(oldWidget: DefaultSelectionStyle): boolean;
    createElement(): upstream7.InheritedElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
export declare function _DefaultSelectionStyleFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    cursorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    child: Widget;
}): DefaultSelectionStyle;
export declare namespace _DefaultSelectionStyleFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _DefaultSelectionStyleFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _DefaultSelectionStyleFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _DefaultSelectionStyleFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _DefaultSelectionStyleFactory {
    function fallback(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    }): DefaultSelectionStyle;
    namespace fallback {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof fallback>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _DefaultSelectionStyleFactory {
    const defaultColor: upstream4.Color;
}
export declare namespace _DefaultSelectionStyleFactory {
    function merge(options: {
        child: Widget;
        cursorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        mouseCursor?: (Readonly<{
            "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): Widget;
}
export declare namespace _DefaultSelectionStyleFactory {
    function of(context: upstream6.BuildContext): DefaultSelectionStyle;
}
export declare const DefaultSelectionStyle: typeof _DefaultSelectionStyleFactory & _FlaxInstanceType<DefaultSelectionStyle> & _FlaxDartType<DefaultSelectionStyle, readonly ["class", "flax.core/sdk_widgets#type:DefaultSelectionStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "cursorColor" | "selectionColor" | "mouseCursor" | "child" | "key" | "wrap" | "updateShouldNotify" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/default_selection_style.dart::DefaultSelectionStyle" | "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

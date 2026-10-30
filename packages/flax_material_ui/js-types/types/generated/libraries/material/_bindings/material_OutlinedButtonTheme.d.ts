import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/material-ui/_bindings/material_OutlinedButtonThemeData';
import '@flax/material-ui/_bindings/material_OutlinedButtonThemeData';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OutlinedButtonTheme extends _FlaxDartWidget, Omit<upstream0.InheritedTheme, _flaxOwnMembers0>, Omit<upstream1.InheritedWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget | keyof upstream2.ProxyWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/outlined_button_theme.dart::OutlinedButtonTheme": readonly [];
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
    readonly __OutlinedButtonTheme: unique symbol;
    readonly [_flaxDartTypeValue]: OutlinedButtonTheme;
    readonly data: upstream4.OutlinedButtonThemeData;
    readonly child: Widget;
    readonly key: upstream3.Key | null;
    wrap(context: upstream5.BuildContext, child: Widget): Widget;
    updateShouldNotify(oldWidget: OutlinedButtonTheme): boolean;
    createElement(): upstream6.InheritedElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
export declare function _OutlinedButtonThemeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    data: Readonly<{
        "__flaxBound:package:material_ui/src/outlined_button_theme.dart::OutlinedButtonThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    child: Widget;
}): OutlinedButtonTheme;
export declare namespace _OutlinedButtonThemeFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _OutlinedButtonThemeFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _OutlinedButtonThemeFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _OutlinedButtonThemeFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _OutlinedButtonThemeFactory {
    function of(context: upstream5.BuildContext): upstream4.OutlinedButtonThemeData;
}
export declare const OutlinedButtonTheme: typeof _OutlinedButtonThemeFactory & _FlaxInstanceType<OutlinedButtonTheme> & _FlaxDartType<OutlinedButtonTheme, readonly ["class", "flax.material/material#type:OutlinedButtonTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "data" | "child" | "key" | "wrap" | "updateShouldNotify" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/outlined_button_theme.dart::OutlinedButtonTheme" | "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

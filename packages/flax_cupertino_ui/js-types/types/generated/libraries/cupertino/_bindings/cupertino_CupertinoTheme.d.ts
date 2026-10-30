import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoThemeData';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoTheme extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoTheme: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoTheme;
    readonly data: upstream2.CupertinoThemeData;
    readonly child: Widget;
    readonly key: upstream1.Key | null;
    build(context: upstream3.BuildContext): Widget;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream6.StatelessElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
export declare function _CupertinoThemeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    data: Readonly<{
        "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    child: Widget;
}): CupertinoTheme;
export declare namespace _CupertinoThemeFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoThemeFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoThemeFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoThemeFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _CupertinoThemeFactory {
    function of(context: upstream3.BuildContext): upstream2.CupertinoThemeData;
}
export declare namespace _CupertinoThemeFactory {
    function brightnessOf(context: upstream3.BuildContext): upstream4.Brightness;
}
export declare namespace _CupertinoThemeFactory {
    function maybeBrightnessOf(context: upstream3.BuildContext): upstream4.Brightness | null;
}
export declare const CupertinoTheme: typeof _CupertinoThemeFactory & _FlaxInstanceType<CupertinoTheme> & _FlaxDartType<CupertinoTheme, readonly ["class", "flax.cupertino/cupertino#type:CupertinoTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "data" | "child" | "key" | "build" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

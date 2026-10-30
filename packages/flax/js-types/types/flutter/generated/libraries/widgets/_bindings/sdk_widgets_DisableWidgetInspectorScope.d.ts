import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DisableWidgetInspectorScope extends _FlaxDartWidget, Omit<upstream0.ProxyWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ProxyWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::DisableWidgetInspectorScope": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DisableWidgetInspectorScope: unique symbol;
    readonly [_flaxDartTypeValue]: DisableWidgetInspectorScope;
    readonly child: Widget;
    readonly key: upstream1.Key | null;
    createElement(): upstream2.Element;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream5.DiagnosticsNode>;
}
export declare function _DisableWidgetInspectorScopeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Widget;
}): DisableWidgetInspectorScope;
export declare namespace _DisableWidgetInspectorScopeFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _DisableWidgetInspectorScopeFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _DisableWidgetInspectorScopeFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _DisableWidgetInspectorScopeFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const DisableWidgetInspectorScope: typeof _DisableWidgetInspectorScopeFactory & _FlaxInstanceType<DisableWidgetInspectorScope> & _FlaxDartType<DisableWidgetInspectorScope, readonly ["class", "flax.core/sdk_widgets#type:DisableWidgetInspectorScope", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "key" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::DisableWidgetInspectorScope" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusOrder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusOrder';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FocusTraversalOrder extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusTraversalOrder": readonly [];
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
    readonly __FocusTraversalOrder: unique symbol;
    readonly [_flaxDartTypeValue]: FocusTraversalOrder;
    readonly order: upstream3.FocusOrder;
    readonly child: Widget;
    readonly key: upstream2.Key | null;
    updateShouldNotify(oldWidget: upstream0.InheritedWidget): boolean;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream6.InheritedElement;
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
export declare function _FocusTraversalOrderFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    order: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    child: Widget;
}): FocusTraversalOrder;
export declare namespace _FocusTraversalOrderFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _FocusTraversalOrderFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _FocusTraversalOrderFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _FocusTraversalOrderFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _FocusTraversalOrderFactory {
    function of(context: upstream4.BuildContext): upstream3.FocusOrder;
}
export declare namespace _FocusTraversalOrderFactory {
    function maybeOf(context: upstream4.BuildContext): upstream3.FocusOrder | null;
}
export declare const FocusTraversalOrder: typeof _FocusTraversalOrderFactory & _FlaxInstanceType<FocusTraversalOrder> & _FlaxDartType<FocusTraversalOrder, readonly ["class", "flax.core/sdk_widgets#type:FocusTraversalOrder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "order" | "child" | "key" | "updateShouldNotify" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusTraversalOrder" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

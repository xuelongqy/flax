import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DefaultTextHeightBehavior extends _FlaxDartWidget, Omit<upstream0.InheritedTheme, _flaxOwnMembers0>, Omit<upstream1.InheritedWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget | keyof upstream2.ProxyWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text.dart::DefaultTextHeightBehavior": readonly [];
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
    readonly __DefaultTextHeightBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultTextHeightBehavior;
    readonly textHeightBehavior: upstream4.TextHeightBehavior;
    readonly child: Widget;
    readonly key: upstream3.Key | null;
    updateShouldNotify(oldWidget: DefaultTextHeightBehavior): boolean;
    wrap(context: upstream5.BuildContext, child: Widget): Widget;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream7.InheritedElement;
    toStringShort(): string;
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
export declare function _DefaultTextHeightBehaviorFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    textHeightBehavior: Readonly<{
        "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
    }>;
    child: Widget;
}): DefaultTextHeightBehavior;
export declare namespace _DefaultTextHeightBehaviorFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _DefaultTextHeightBehaviorFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _DefaultTextHeightBehaviorFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _DefaultTextHeightBehaviorFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _DefaultTextHeightBehaviorFactory {
    function maybeOf(context: upstream5.BuildContext): upstream4.TextHeightBehavior | null;
}
export declare namespace _DefaultTextHeightBehaviorFactory {
    function of(context: upstream5.BuildContext): upstream4.TextHeightBehavior;
}
export declare const DefaultTextHeightBehavior: typeof _DefaultTextHeightBehaviorFactory & _FlaxInstanceType<DefaultTextHeightBehavior> & _FlaxDartType<DefaultTextHeightBehavior, readonly ["class", "flax.core/sdk_widgets#type:DefaultTextHeightBehavior", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "textHeightBehavior" | "child" | "key" | "updateShouldNotify" | "wrap" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/text.dart::DefaultTextHeightBehavior" | "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

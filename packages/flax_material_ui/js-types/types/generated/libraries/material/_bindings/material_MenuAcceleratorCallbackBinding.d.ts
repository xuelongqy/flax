import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MenuAcceleratorCallbackBinding extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/menu_anchor.dart::MenuAcceleratorCallbackBinding": readonly [];
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
    readonly __MenuAcceleratorCallbackBinding: unique symbol;
    readonly [_flaxDartTypeValue]: MenuAcceleratorCallbackBinding;
    readonly onInvoke: (() => void) | null;
    readonly hasSubmenu: boolean;
    readonly child: Widget;
    readonly key: upstream2.Key | null;
    updateShouldNotify(oldWidget: MenuAcceleratorCallbackBinding): boolean;
    createElement(): upstream4.InheritedElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
}
export declare function _MenuAcceleratorCallbackBindingFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onInvoke?: (() => void) | null | undefined;
    hasSubmenu?: boolean | undefined;
    child: Widget;
}): MenuAcceleratorCallbackBinding;
export declare namespace _MenuAcceleratorCallbackBindingFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _MenuAcceleratorCallbackBindingFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _MenuAcceleratorCallbackBindingFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _MenuAcceleratorCallbackBindingFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _MenuAcceleratorCallbackBindingFactory {
    function maybeOf(context: upstream3.BuildContext): MenuAcceleratorCallbackBinding | null;
}
export declare namespace _MenuAcceleratorCallbackBindingFactory {
    function of(context: upstream3.BuildContext): MenuAcceleratorCallbackBinding;
}
export declare const MenuAcceleratorCallbackBinding: typeof _MenuAcceleratorCallbackBindingFactory & _FlaxInstanceType<MenuAcceleratorCallbackBinding> & _FlaxDartType<MenuAcceleratorCallbackBinding, readonly ["class", "flax.material/material#type:MenuAcceleratorCallbackBinding", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onInvoke" | "hasSubmenu" | "child" | "key" | "updateShouldNotify" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/menu_anchor.dart::MenuAcceleratorCallbackBinding" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

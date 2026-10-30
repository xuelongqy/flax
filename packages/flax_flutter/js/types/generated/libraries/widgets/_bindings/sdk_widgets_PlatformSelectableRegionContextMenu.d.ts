import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionContainerDelegate';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlatformSelectableRegionContextMenu extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/_platform_selectable_region_context_menu_io.dart::PlatformSelectableRegionContextMenu": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PlatformSelectableRegionContextMenu: unique symbol;
    readonly [_flaxDartTypeValue]: PlatformSelectableRegionContextMenu;
    readonly key: upstream1.Key | null;
    build(context: upstream3.BuildContext): Widget;
    createElement(): upstream4.StatelessElement;
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
export declare function _PlatformSelectableRegionContextMenuFactory(options: {
    child: Widget;
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
}): PlatformSelectableRegionContextMenu;
export declare namespace _PlatformSelectableRegionContextMenuFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _PlatformSelectableRegionContextMenuFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _PlatformSelectableRegionContextMenuFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _PlatformSelectableRegionContextMenuFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _PlatformSelectableRegionContextMenuFactory {
    function setDebugOverrideRegisterViewFactory(value: ((p0: string, p1: ((viewId: number) => {}), options?: {
        isVisible?: boolean | undefined;
    }) => void) | null): void;
}
export declare namespace _PlatformSelectableRegionContextMenuFactory {
    const debugOverrideRegisterViewFactory: ((p0: string, p1: ((viewId: number) => {}), options?: {
        isVisible?: boolean | undefined;
    }) => void) | null;
}
export declare namespace _PlatformSelectableRegionContextMenuFactory {
    function attach(client: Readonly<{
        "__flaxBound:package:flutter/src/widgets/selection_container.dart::SelectionContainerDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream9.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
    }>): void;
}
export declare namespace _PlatformSelectableRegionContextMenuFactory {
    function detach(client: Readonly<{
        "__flaxBound:package:flutter/src/widgets/selection_container.dart::SelectionContainerDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream9.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
    }>): void;
}
export declare const PlatformSelectableRegionContextMenu: typeof _PlatformSelectableRegionContextMenuFactory & _FlaxInstanceType<PlatformSelectableRegionContextMenu> & _FlaxDartType<PlatformSelectableRegionContextMenu, readonly ["class", "flax.core/sdk_widgets#type:PlatformSelectableRegionContextMenu", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/_platform_selectable_region_context_menu_io.dart::PlatformSelectableRegionContextMenu" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

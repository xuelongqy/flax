import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoDesktopTextSelectionToolbarButton extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/desktop_text_selection_toolbar_button.dart::CupertinoDesktopTextSelectionToolbarButton": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoDesktopTextSelectionToolbarButton: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoDesktopTextSelectionToolbarButton;
    readonly onPressed: (() => void) | null;
    readonly child: Widget | null;
    readonly buttonItem: upstream2.ContextMenuButtonItem | null;
    readonly text: string | null;
    readonly key: upstream1.Key | null;
    createState(): upstream3.State<CupertinoDesktopTextSelectionToolbarButton>;
    createElement(): upstream4.StatefulElement;
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
export declare function _CupertinoDesktopTextSelectionToolbarButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onPressed: (() => void) | null;
    child: Widget;
}): CupertinoDesktopTextSelectionToolbarButton;
export declare namespace _CupertinoDesktopTextSelectionToolbarButtonFactory {
    function text(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        onPressed: (() => void) | null;
        text: string | null;
    }): CupertinoDesktopTextSelectionToolbarButton;
}
export declare namespace _CupertinoDesktopTextSelectionToolbarButtonFactory {
    function buttonItem(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        buttonItem: Readonly<{
            "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [];
        }>;
    }): CupertinoDesktopTextSelectionToolbarButton;
}
export declare const CupertinoDesktopTextSelectionToolbarButton: typeof _CupertinoDesktopTextSelectionToolbarButtonFactory & _FlaxInstanceType<CupertinoDesktopTextSelectionToolbarButton> & _FlaxDartType<CupertinoDesktopTextSelectionToolbarButton, readonly ["class", "flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionToolbarButton", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onPressed" | "child" | "buttonItem" | "text" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/desktop_text_selection_toolbar_button.dart::CupertinoDesktopTextSelectionToolbarButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

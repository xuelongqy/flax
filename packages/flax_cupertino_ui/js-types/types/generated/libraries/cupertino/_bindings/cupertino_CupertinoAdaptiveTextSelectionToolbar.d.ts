import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ClipboardStatus';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoAdaptiveTextSelectionToolbar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/adaptive_text_selection_toolbar.dart::CupertinoAdaptiveTextSelectionToolbar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoAdaptiveTextSelectionToolbar: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoAdaptiveTextSelectionToolbar;
    readonly anchors: upstream2.TextSelectionToolbarAnchors;
    readonly children: DartList<Widget> | null;
    readonly buttonItems: DartList<upstream3.ContextMenuButtonItem> | null;
    readonly key: upstream1.Key | null;
    build(context: upstream7.BuildContext): Widget;
    createElement(): upstream8.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
export declare function _CupertinoAdaptiveTextSelectionToolbarFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    children: DartListInput<Widget, Widget> | null;
    anchors: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [];
    }>;
}): CupertinoAdaptiveTextSelectionToolbar;
export declare namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
    function buttonItems(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{
            "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [];
        }>> | null;
        anchors: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [];
        }>;
    }): CupertinoAdaptiveTextSelectionToolbar;
}
export declare namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
    function editable(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        clipboardStatus: upstream4.ClipboardStatus;
        onCopy: (() => void) | null;
        onCut: (() => void) | null;
        onPaste: (() => void) | null;
        onSelectAll: (() => void) | null;
        onLookUp: (() => void) | null;
        onSearchWeb: (() => void) | null;
        onShare: (() => void) | null;
        onLiveTextInput: (() => void) | null;
        anchors: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [];
        }>;
    }): CupertinoAdaptiveTextSelectionToolbar;
}
export declare namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
    function editableText(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        editableTextState: Readonly<{
            "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream13.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream13.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream13.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
        }>;
    }): CupertinoAdaptiveTextSelectionToolbar;
}
export declare namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
    function selectable(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        onCopy: (() => void);
        onSelectAll: (() => void);
        selectionGeometry: Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        anchors: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [];
        }>;
    }): CupertinoAdaptiveTextSelectionToolbar;
}
export declare namespace _CupertinoAdaptiveTextSelectionToolbarFactory {
    function getAdaptiveButtons(context: upstream7.BuildContext, buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{
        "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [];
    }>>): DartIterable<Widget>;
}
export declare const CupertinoAdaptiveTextSelectionToolbar: typeof _CupertinoAdaptiveTextSelectionToolbarFactory & _FlaxInstanceType<CupertinoAdaptiveTextSelectionToolbar> & _FlaxDartType<CupertinoAdaptiveTextSelectionToolbar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoAdaptiveTextSelectionToolbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "anchors" | "children" | "buttonItems" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/adaptive_text_selection_toolbar.dart::CupertinoAdaptiveTextSelectionToolbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

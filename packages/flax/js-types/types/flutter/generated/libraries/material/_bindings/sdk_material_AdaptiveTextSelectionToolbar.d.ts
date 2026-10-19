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
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegion';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AdaptiveTextSelectionToolbar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/adaptive_text_selection_toolbar.dart::AdaptiveTextSelectionToolbar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AdaptiveTextSelectionToolbar: unique symbol;
    readonly [_flaxDartTypeValue]: AdaptiveTextSelectionToolbar;
    readonly buttonItems: DartList<upstream3.ContextMenuButtonItem> | null;
    readonly children: DartList<Widget> | null;
    readonly anchors: upstream2.TextSelectionToolbarAnchors;
    readonly key: upstream1.Key | null;
    build(context: upstream8.BuildContext): Widget;
    createElement(): upstream9.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
export declare function _AdaptiveTextSelectionToolbarFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    children: DartListInput<Widget, Widget> | null;
    anchors: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [];
    }>;
}): AdaptiveTextSelectionToolbar;
export declare namespace _AdaptiveTextSelectionToolbarFactory {
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
    }): AdaptiveTextSelectionToolbar;
}
export declare namespace _AdaptiveTextSelectionToolbarFactory {
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
    }): AdaptiveTextSelectionToolbar;
}
export declare namespace _AdaptiveTextSelectionToolbarFactory {
    function editableText(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        editableTextState: Readonly<{
            "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream14.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream14.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream14.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
        }>;
    }): AdaptiveTextSelectionToolbar;
}
export declare namespace _AdaptiveTextSelectionToolbarFactory {
    function selectable(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        onCopy: (() => void);
        onSelectAll: (() => void);
        onShare: (() => void) | null;
        selectionGeometry: Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        anchors: Readonly<{
            "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [];
        }>;
    }): AdaptiveTextSelectionToolbar;
}
export declare namespace _AdaptiveTextSelectionToolbarFactory {
    function selectableRegion(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        selectableRegionState: Readonly<{
            "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionState": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream15.SelectableRegion];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
        }>;
    }): AdaptiveTextSelectionToolbar;
}
export declare namespace _AdaptiveTextSelectionToolbarFactory {
    function getButtonLabel(context: upstream8.BuildContext, buttonItem: Readonly<{
        "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [];
    }>): string;
}
export declare namespace _AdaptiveTextSelectionToolbarFactory {
    function getAdaptiveButtons(context: upstream8.BuildContext, buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{
        "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [];
    }>>): DartIterable<Widget>;
}
export declare const AdaptiveTextSelectionToolbar: typeof _AdaptiveTextSelectionToolbarFactory & _FlaxInstanceType<AdaptiveTextSelectionToolbar> & _FlaxDartType<AdaptiveTextSelectionToolbar, readonly ["class", "flax.core/sdk_material#type:AdaptiveTextSelectionToolbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "buttonItems" | "children" | "anchors" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/adaptive_text_selection_toolbar.dart::AdaptiveTextSelectionToolbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

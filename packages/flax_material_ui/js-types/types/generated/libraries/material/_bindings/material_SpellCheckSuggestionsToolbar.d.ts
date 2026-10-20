import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SpellCheckSuggestionsToolbar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/spell_check_suggestions_toolbar.dart::SpellCheckSuggestionsToolbar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SpellCheckSuggestionsToolbar: unique symbol;
    readonly [_flaxDartTypeValue]: SpellCheckSuggestionsToolbar;
    readonly anchor: upstream2.Offset;
    readonly buttonItems: DartList<upstream3.ContextMenuButtonItem>;
    readonly key: upstream1.Key | null;
    build(context: upstream6.BuildContext): Widget;
    createElement(): upstream7.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
export declare function _SpellCheckSuggestionsToolbarFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    anchor: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    buttonItems: DartListInput<upstream3.ContextMenuButtonItem, Readonly<{
        "__flaxBound:package:flutter/src/widgets/context_menu_button_item.dart::ContextMenuButtonItem": readonly [];
    }>>;
}): SpellCheckSuggestionsToolbar;
export declare namespace _SpellCheckSuggestionsToolbarFactory {
    function editableText(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        editableTextState: Readonly<{
            "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream12.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream12.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream12.EditableText];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
        }>;
    }): SpellCheckSuggestionsToolbar;
}
export declare namespace _SpellCheckSuggestionsToolbarFactory {
    function buildButtonItems(editableTextState: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream12.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream12.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream12.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
    }>): DartList<upstream3.ContextMenuButtonItem> | null;
}
export declare namespace _SpellCheckSuggestionsToolbarFactory {
    function getToolbarAnchor(anchors: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [];
    }>): upstream2.Offset;
}
export declare const SpellCheckSuggestionsToolbar: typeof _SpellCheckSuggestionsToolbarFactory & _FlaxInstanceType<SpellCheckSuggestionsToolbar> & _FlaxDartType<SpellCheckSuggestionsToolbar, readonly ["class", "flax.material/material#type:SpellCheckSuggestionsToolbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "anchor" | "buttonItems" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/spell_check_suggestions_toolbar.dart::SpellCheckSuggestionsToolbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

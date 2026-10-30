import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemContextMenu extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::SystemContextMenu": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SystemContextMenu: unique symbol;
    readonly [_flaxDartTypeValue]: SystemContextMenu;
    readonly anchor: upstream4.Rect;
    readonly items: DartList<upstream3.IOSSystemContextMenuItem>;
    readonly onSystemHide: (() => void) | null;
    readonly key: upstream1.Key | null;
    createState(): upstream6.State<SystemContextMenu>;
    createElement(): upstream7.StatefulElement;
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
export declare namespace _SystemContextMenuFactory {
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
        items?: DartListInput<upstream3.IOSSystemContextMenuItem, Readonly<{
            "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [];
        }>> | null | undefined;
    }): SystemContextMenu;
    namespace editableText {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof editableText>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _SystemContextMenuFactory {
    function isSupported(context: upstream5.BuildContext): boolean;
}
export declare namespace _SystemContextMenuFactory {
    function isSupportedByField(editableTextState: Readonly<{
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
    }>): boolean;
}
export declare namespace _SystemContextMenuFactory {
    function getDefaultItems(editableTextState: Readonly<{
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
    }>): DartList<upstream3.IOSSystemContextMenuItem>;
}
export declare const SystemContextMenu: typeof _SystemContextMenuFactory & _FlaxInstanceType<SystemContextMenu> & _FlaxDartType<SystemContextMenu, readonly ["class", "flax.core/sdk_widgets#type:SystemContextMenu", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "anchor" | "items" | "onSystemHide" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::SystemContextMenu" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_DropdownMenuItem';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream10 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DropdownButton<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/dropdown.dart::DropdownButton": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DropdownButton: unique symbol;
    readonly [_flaxDartTypeValue]: DropdownButton<T>;
    readonly items: DartList<upstream2.DropdownMenuItem<T>> | null;
    readonly value: T | null;
    readonly hint: Widget | null;
    readonly disabledHint: Widget | null;
    readonly onChanged: ((value: (T | DartInput<T>) | null) => void) | null;
    readonly onTap: (() => void) | null;
    readonly selectedItemBuilder: ((context: upstream3.BuildContext) => DartList<Widget>) | null;
    readonly elevation: number;
    readonly style: upstream4.TextStyle | null;
    readonly underline: Widget | null;
    readonly icon: Widget | null;
    readonly iconDisabledColor: upstream5.Color | null;
    readonly iconEnabledColor: upstream5.Color | null;
    readonly iconSize: number;
    readonly isDense: boolean;
    readonly isExpanded: boolean;
    readonly itemHeight: number | null;
    readonly menuWidth: number | null;
    readonly focusColor: upstream5.Color | null;
    readonly focusNode: upstream6.FocusNode | null;
    readonly autofocus: boolean;
    readonly dropdownColor: upstream5.Color | null;
    readonly padding: upstream9.EdgeInsetsGeometry | null;
    readonly menuMaxHeight: number | null;
    readonly enableFeedback: boolean | null;
    readonly alignment: upstream7.AlignmentGeometry;
    readonly borderRadius: upstream8.BorderRadius | null;
    readonly barrierDismissible: boolean;
    readonly mouseCursor: upstream10.MouseCursor | null;
    readonly dropdownMenuItemMouseCursor: upstream10.MouseCursor | null;
    readonly key: upstream1.Key | null;
    createState(): upstream11.State<DropdownButton<T>>;
    createElement(): upstream12.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
export declare function _DropdownButtonFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    items: DartListInput<upstream2.DropdownMenuItem<_FlaxDartOutput<T>>, upstream2.DropdownMenuItem<_FlaxDartOutput<T>>> | null;
    selectedItemBuilder?: ((context: upstream3.BuildContext) => DartListInput<Widget, Widget>) | null | undefined;
    value?: (T | _FlaxDartOutput<T>) | null | undefined;
    hint?: Widget | null | undefined;
    disabledHint?: Widget | null | undefined;
    onChanged: ((value: _FlaxDartOutput<T> | null) => void) | null;
    onTap?: (() => void) | null | undefined;
    elevation?: number | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    underline?: Widget | null | undefined;
    icon?: Widget | null | undefined;
    iconDisabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconEnabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconSize?: number | undefined;
    isDense?: boolean | undefined;
    isExpanded?: boolean | undefined;
    itemHeight?: number | null | undefined;
    menuWidth?: number | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    focusNode?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    autofocus?: boolean | undefined;
    dropdownColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    menuMaxHeight?: number | null | undefined;
    enableFeedback?: boolean | null | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dropdownMenuItemMouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): DropdownButton<T>;
export declare function _DropdownButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    items: DartListInput<upstream2.DropdownMenuItem<unknown | null>, upstream2.DropdownMenuItem<unknown | null>> | null;
    selectedItemBuilder?: ((context: upstream3.BuildContext) => DartListInput<Widget, Widget>) | null | undefined;
    value?: unknown | null | undefined;
    hint?: Widget | null | undefined;
    disabledHint?: Widget | null | undefined;
    onChanged: ((value: unknown | null) => void) | null;
    onTap?: (() => void) | null | undefined;
    elevation?: number | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    underline?: Widget | null | undefined;
    icon?: Widget | null | undefined;
    iconDisabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconEnabledColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconSize?: number | undefined;
    isDense?: boolean | undefined;
    isExpanded?: boolean | undefined;
    itemHeight?: number | null | undefined;
    menuWidth?: number | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    focusNode?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    autofocus?: boolean | undefined;
    dropdownColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    menuMaxHeight?: number | null | undefined;
    enableFeedback?: boolean | null | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | undefined;
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    mouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dropdownMenuItemMouseCursor?: (Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): DropdownButton<unknown | null>;
export declare const DropdownButton: typeof _DropdownButtonFactory & _FlaxInstanceType<DropdownButton<unknown | null>> & _FlaxDartType<DropdownButton<unknown | null>, readonly ["class", "flax.core/sdk_material#type:DropdownButton", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "items" | "value" | "hint" | "disabledHint" | "onChanged" | "onTap" | "selectedItemBuilder" | "elevation" | "style" | "underline" | "icon" | "iconDisabledColor" | "iconEnabledColor" | "iconSize" | "isDense" | "isExpanded" | "itemHeight" | "menuWidth" | "focusColor" | "focusNode" | "autofocus" | "dropdownColor" | "padding" | "menuMaxHeight" | "enableFeedback" | "alignment" | "borderRadius" | "barrierDismissible" | "mouseCursor" | "dropdownMenuItemMouseCursor" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/dropdown.dart::DropdownButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            items: DartListInput<upstream2.DropdownMenuItem<_Selected0>, upstream2.DropdownMenuItem<_Selected0>> | null;
            selectedItemBuilder?: ((context: upstream3.BuildContext) => DartListInput<Widget, Widget>) | null | undefined;
            value?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            hint?: Widget | null | undefined;
            disabledHint?: Widget | null | undefined;
            onChanged: ((value: _Selected0 | null) => void) | null;
            onTap?: (() => void) | null | undefined;
            elevation?: number | undefined;
            style?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            underline?: Widget | null | undefined;
            icon?: Widget | null | undefined;
            iconDisabledColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            iconEnabledColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            iconSize?: number | undefined;
            isDense?: boolean | undefined;
            isExpanded?: boolean | undefined;
            itemHeight?: number | null | undefined;
            menuWidth?: number | null | undefined;
            focusColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            focusNode?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }>) | null | undefined;
            autofocus?: boolean | undefined;
            dropdownColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            menuMaxHeight?: number | null | undefined;
            enableFeedback?: boolean | null | undefined;
            alignment?: Readonly<{
                "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
            }> | undefined;
            borderRadius?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
            }>) | null | undefined;
            padding?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | null | undefined;
            barrierDismissible?: boolean | undefined;
            mouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            dropdownMenuItemMouseCursor?: (Readonly<{
                "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
        }): DropdownButton<_Selected0>;
        readonly prototype: DropdownButton<_Selected0>;
    } & _FlaxInstanceType<DropdownButton<_Selected0>> & _FlaxDartType<DropdownButton<_Selected0>> : never : never;
}
export {};

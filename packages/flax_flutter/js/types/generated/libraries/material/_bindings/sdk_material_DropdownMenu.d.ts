import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_InputDecoration';
import '@flax/flutter/material/_bindings/sdk_material_InputDecoration';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import type * as upstream9 from '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream11 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream12 from '@flax/flutter/material/_bindings/sdk_material_DropdownMenuEntry';
import '@flax/flutter/material/_bindings/sdk_material_DropdownMenuEntry';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream14 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream15 from '@flax/flutter/material/_bindings/sdk_material_DropdownMenuCloseBehavior';
import '@flax/flutter/material/_bindings/sdk_material_DropdownMenuCloseBehavior';
import type * as upstream16 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import type * as upstream17 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream18 from '@flax/flutter/material/_bindings/sdk_material_InputDecorationThemeData';
import '@flax/flutter/material/_bindings/sdk_material_InputDecorationThemeData';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream23 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream24 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream25 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DropdownMenu<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenu": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DropdownMenu: unique symbol;
    readonly [_flaxDartTypeValue]: DropdownMenu<T>;
    readonly enabled: boolean;
    readonly width: number | null;
    readonly menuHeight: number | null;
    readonly leadingIcon: Widget | null;
    readonly trailingIcon: Widget | null;
    readonly showTrailingIcon: boolean;
    readonly trailingIconFocusNode: upstream2.FocusNode | null;
    readonly label: Widget | null;
    readonly hintText: string | null;
    readonly helperText: string | null;
    readonly errorText: string | null;
    readonly selectedTrailingIcon: Widget | null;
    readonly enableFilter: boolean;
    readonly enableSearch: boolean;
    readonly keyboardType: upstream3.TextInputType | null;
    readonly textStyle: upstream4.TextStyle | null;
    readonly textAlign: upstream5.TextAlign;
    readonly inputDecorationTheme: upstream18.InputDecorationThemeData | null;
    readonly decorationBuilder: ((context: upstream7.BuildContext, controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
    }>) => upstream6.InputDecoration) | null;
    readonly menuStyle: upstream9.MenuStyle | null;
    readonly controller: upstream10.TextEditingController | null;
    readonly initialSelection: T | null;
    readonly onSelected: ((value: (T | DartInput<T>) | null) => void) | null;
    readonly focusNode: upstream2.FocusNode | null;
    readonly requestFocusOnTap: boolean | null;
    readonly selectOnly: boolean;
    readonly dropdownMenuEntries: DartList<upstream12.DropdownMenuEntry<T>>;
    readonly expandedInsets: upstream11.EdgeInsetsGeometry | null;
    readonly filterCallback: ((entries: DartListInput<upstream12.DropdownMenuEntry<T>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [T];
    }>>, filter: string) => DartList<upstream12.DropdownMenuEntry<T>>) | null;
    readonly searchCallback: ((entries: DartListInput<upstream12.DropdownMenuEntry<T>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [T];
    }>>, query: string) => number | null) | null;
    readonly inputFormatters: DartList<upstream14.TextInputFormatter> | null;
    readonly alignmentOffset: upstream13.Offset | null;
    readonly closeBehavior: upstream15.DropdownMenuCloseBehavior;
    readonly maxLines: number | null;
    readonly textInputAction: upstream16.TextInputAction | null;
    readonly cursorHeight: number | null;
    readonly restorationId: string | null;
    readonly menuController: upstream8.MenuController | null;
    readonly scrollPadding: upstream17.EdgeInsets;
    readonly key: upstream1.Key | null;
    createState(): upstream19.State<DropdownMenu<T>>;
    createElement(): upstream20.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream22.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream22.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream24.DiagnosticsTreeStyle | null | undefined;
    }): upstream23.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream23.DiagnosticsNode>;
}
export declare function _DropdownMenuFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    enabled?: boolean | undefined;
    width?: number | null | undefined;
    menuHeight?: number | null | undefined;
    leadingIcon?: Widget | null | undefined;
    trailingIcon?: Widget | null | undefined;
    showTrailingIcon?: boolean | undefined;
    trailingIconFocusNode?: (Readonly<{
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
    label?: Widget | null | undefined;
    hintText?: string | null | undefined;
    helperText?: string | null | undefined;
    errorText?: string | null | undefined;
    selectedTrailingIcon?: Widget | null | undefined;
    enableFilter?: boolean | undefined;
    enableSearch?: boolean | undefined;
    keyboardType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | null | undefined;
    textStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textAlign?: upstream5.TextAlign | undefined;
    inputDecorationTheme?: unknown | null | undefined;
    decorationBuilder?: ((context: upstream7.BuildContext, controller: upstream8.MenuController) => Readonly<{
        "__flaxBound:package:flutter/src/material/input_decorator.dart::InputDecoration": readonly [];
    }>) | null | undefined;
    menuStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream25.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream25.TextEditingValue];
    }>) | null | undefined;
    initialSelection?: (T | _FlaxDartOutput<T>) | null | undefined;
    onSelected?: ((value: _FlaxDartOutput<T> | null) => void) | null | undefined;
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
    requestFocusOnTap?: boolean | null | undefined;
    selectOnly?: boolean | undefined;
    expandedInsets?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    filterCallback?: ((entries: DartList<upstream12.DropdownMenuEntry<_FlaxDartOutput<T>>>, filter: string) => DartListInput<upstream12.DropdownMenuEntry<_FlaxDartOutput<T>>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [_FlaxDartOutput<T>];
    }>>) | null | undefined;
    searchCallback?: ((entries: DartList<upstream12.DropdownMenuEntry<_FlaxDartOutput<T>>>, query: string) => number | null) | null | undefined;
    alignmentOffset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    dropdownMenuEntries: DartListInput<upstream12.DropdownMenuEntry<_FlaxDartOutput<T>>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [_FlaxDartOutput<T>];
    }>>;
    inputFormatters?: DartListInput<upstream14.TextInputFormatter, Readonly<{
        "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
    }>> | null | undefined;
    closeBehavior?: upstream15.DropdownMenuCloseBehavior | undefined;
    maxLines?: number | null | undefined;
    textInputAction?: upstream16.TextInputAction | null | undefined;
    cursorHeight?: number | null | undefined;
    restorationId?: string | null | undefined;
    menuController?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
    }> | null | undefined;
    scrollPadding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | undefined;
}): DropdownMenu<T>;
export declare function _DropdownMenuFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    enabled?: boolean | undefined;
    width?: number | null | undefined;
    menuHeight?: number | null | undefined;
    leadingIcon?: Widget | null | undefined;
    trailingIcon?: Widget | null | undefined;
    showTrailingIcon?: boolean | undefined;
    trailingIconFocusNode?: (Readonly<{
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
    label?: Widget | null | undefined;
    hintText?: string | null | undefined;
    helperText?: string | null | undefined;
    errorText?: string | null | undefined;
    selectedTrailingIcon?: Widget | null | undefined;
    enableFilter?: boolean | undefined;
    enableSearch?: boolean | undefined;
    keyboardType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | null | undefined;
    textStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textAlign?: upstream5.TextAlign | undefined;
    inputDecorationTheme?: unknown | null | undefined;
    decorationBuilder?: ((context: upstream7.BuildContext, controller: upstream8.MenuController) => Readonly<{
        "__flaxBound:package:flutter/src/material/input_decorator.dart::InputDecoration": readonly [];
    }>) | null | undefined;
    menuStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream25.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream25.TextEditingValue];
    }>) | null | undefined;
    initialSelection?: unknown | null | undefined;
    onSelected?: ((value: unknown | null) => void) | null | undefined;
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
    requestFocusOnTap?: boolean | null | undefined;
    selectOnly?: boolean | undefined;
    expandedInsets?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    filterCallback?: ((entries: DartList<upstream12.DropdownMenuEntry<unknown | null>>, filter: string) => DartListInput<upstream12.DropdownMenuEntry<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [unknown | null];
    }>>) | null | undefined;
    searchCallback?: ((entries: DartList<upstream12.DropdownMenuEntry<unknown | null>>, query: string) => number | null) | null | undefined;
    alignmentOffset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    dropdownMenuEntries: DartListInput<upstream12.DropdownMenuEntry<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [unknown | null];
    }>>;
    inputFormatters?: DartListInput<upstream14.TextInputFormatter, Readonly<{
        "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
    }>> | null | undefined;
    closeBehavior?: upstream15.DropdownMenuCloseBehavior | undefined;
    maxLines?: number | null | undefined;
    textInputAction?: upstream16.TextInputAction | null | undefined;
    cursorHeight?: number | null | undefined;
    restorationId?: string | null | undefined;
    menuController?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
    }> | null | undefined;
    scrollPadding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | undefined;
}): DropdownMenu<unknown | null>;
export declare const DropdownMenu: typeof _DropdownMenuFactory & _FlaxInstanceType<DropdownMenu<unknown | null>> & _FlaxDartType<DropdownMenu<unknown | null>, readonly ["class", "flax.core/sdk_material#type:DropdownMenu", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "enabled" | "width" | "menuHeight" | "leadingIcon" | "trailingIcon" | "showTrailingIcon" | "trailingIconFocusNode" | "label" | "hintText" | "helperText" | "errorText" | "selectedTrailingIcon" | "enableFilter" | "enableSearch" | "keyboardType" | "textStyle" | "textAlign" | "inputDecorationTheme" | "decorationBuilder" | "menuStyle" | "controller" | "initialSelection" | "onSelected" | "focusNode" | "requestFocusOnTap" | "selectOnly" | "dropdownMenuEntries" | "expandedInsets" | "filterCallback" | "searchCallback" | "inputFormatters" | "alignmentOffset" | "closeBehavior" | "maxLines" | "textInputAction" | "cursorHeight" | "restorationId" | "menuController" | "scrollPadding" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenu" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            enabled?: boolean | undefined;
            width?: number | null | undefined;
            menuHeight?: number | null | undefined;
            leadingIcon?: Widget | null | undefined;
            trailingIcon?: Widget | null | undefined;
            showTrailingIcon?: boolean | undefined;
            trailingIconFocusNode?: (Readonly<{
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
            label?: Widget | null | undefined;
            hintText?: string | null | undefined;
            helperText?: string | null | undefined;
            errorText?: string | null | undefined;
            selectedTrailingIcon?: Widget | null | undefined;
            enableFilter?: boolean | undefined;
            enableSearch?: boolean | undefined;
            keyboardType?: Readonly<{
                "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
            }> | null | undefined;
            textStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            textAlign?: upstream5.TextAlign | undefined;
            inputDecorationTheme?: unknown | null | undefined;
            decorationBuilder?: ((context: upstream7.BuildContext, controller: upstream8.MenuController) => Readonly<{
                "__flaxBound:package:flutter/src/material/input_decorator.dart::InputDecoration": readonly [];
            }>) | null | undefined;
            menuStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            controller?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream25.TextEditingValue];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream25.TextEditingValue];
            }>) | null | undefined;
            initialSelection?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            onSelected?: ((value: _Selected0 | null) => void) | null | undefined;
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
            requestFocusOnTap?: boolean | null | undefined;
            selectOnly?: boolean | undefined;
            expandedInsets?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | null | undefined;
            filterCallback?: ((entries: DartList<upstream12.DropdownMenuEntry<_Selected0>>, filter: string) => DartListInput<upstream12.DropdownMenuEntry<_Selected0>, Readonly<{
                "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [_Selected0];
            }>>) | null | undefined;
            searchCallback?: ((entries: DartList<upstream12.DropdownMenuEntry<_Selected0>>, query: string) => number | null) | null | undefined;
            alignmentOffset?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            dropdownMenuEntries: DartListInput<upstream12.DropdownMenuEntry<_Selected0>, Readonly<{
                "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [_Selected0];
            }>>;
            inputFormatters?: DartListInput<upstream14.TextInputFormatter, Readonly<{
                "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
            }>> | null | undefined;
            closeBehavior?: upstream15.DropdownMenuCloseBehavior | undefined;
            maxLines?: number | null | undefined;
            textInputAction?: upstream16.TextInputAction | null | undefined;
            cursorHeight?: number | null | undefined;
            restorationId?: string | null | undefined;
            menuController?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
            }> | null | undefined;
            scrollPadding?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }>) | undefined;
        }): DropdownMenu<_Selected0>;
        readonly prototype: DropdownMenu<_Selected0>;
    } & _FlaxInstanceType<DropdownMenu<_Selected0>> & _FlaxDartType<DropdownMenu<_Selected0>> : never : never;
}
export {};

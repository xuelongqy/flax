import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormField';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/flutter/material/_bindings/sdk_material_InputDecoration';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream14 from '@flax/flutter/material/_bindings/sdk_material_DropdownMenuEntry';
import '@flax/flutter/material/_bindings/sdk_material_DropdownMenuEntry';
import type * as upstream15 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream16 from '@flax/flutter/material/_bindings/sdk_material_DropdownMenuCloseBehavior';
import '@flax/flutter/material/_bindings/sdk_material_DropdownMenuCloseBehavior';
import type * as upstream17 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
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
export interface DropdownMenuFormField<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.FormField<T>, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.FormField<T>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.FormField<T> | keyof upstream1.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/dropdown_menu_form_field.dart::DropdownMenuFormField": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/form.dart::FormField": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DropdownMenuFormField: unique symbol;
    readonly [_flaxDartTypeValue]: DropdownMenuFormField<T>;
    readonly onSelected: ((value: (T | DartInput<T>) | null) => void) | null;
    readonly controller: upstream11.TextEditingController | null;
    readonly dropdownMenuEntries: DartList<upstream14.DropdownMenuEntry<T>>;
    readonly builder: ((field: Readonly<{
        "__flaxBound:package:flutter/src/widgets/form.dart::FormFieldState": readonly [T];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream0.FormField<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream0.FormField<T>];
    }>) => Widget);
    readonly onSaved: ((newValue: (T | DartInput<T>) | null) => void) | null;
    readonly onReset: (() => void) | null;
    readonly forceErrorText: string | null;
    readonly validator: ((value: (T | DartInput<T>) | null) => string | null) | null;
    readonly errorBuilder: ((context: upstream8.BuildContext, errorText: string) => Widget) | null;
    readonly initialValue: T | null;
    readonly enabled: boolean;
    readonly autovalidateMode: upstream18.AutovalidateMode;
    readonly restorationId: string | null;
    readonly key: upstream2.Key | null;
    createState(): upstream19.FormFieldState<T>;
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
export declare function _DropdownMenuFormFieldFactory<T extends unknown | null = unknown | null>(options: {
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
    textAlign?: upstream6.TextAlign | undefined;
    inputDecorationTheme?: unknown | null | undefined;
    decorationBuilder?: ((context: upstream8.BuildContext, controller: upstream9.MenuController) => Readonly<{
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
    alignmentOffset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    filterCallback?: ((entries: DartList<upstream14.DropdownMenuEntry<_FlaxDartOutput<T>>>, filter: string) => DartListInput<upstream14.DropdownMenuEntry<_FlaxDartOutput<T>>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [_FlaxDartOutput<T>];
    }>>) | null | undefined;
    searchCallback?: ((entries: DartList<upstream14.DropdownMenuEntry<_FlaxDartOutput<T>>>, query: string) => number | null) | null | undefined;
    dropdownMenuEntries: DartListInput<upstream14.DropdownMenuEntry<_FlaxDartOutput<T>>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [_FlaxDartOutput<T>];
    }>>;
    inputFormatters?: DartListInput<upstream15.TextInputFormatter, Readonly<{
        "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
    }>> | null | undefined;
    closeBehavior?: upstream16.DropdownMenuCloseBehavior | undefined;
    maxLines?: number | undefined;
    textInputAction?: upstream17.TextInputAction | null | undefined;
    cursorHeight?: number | null | undefined;
    menuController?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
    }> | null | undefined;
    restorationId?: string | null | undefined;
    onSaved?: ((newValue: _FlaxDartOutput<T> | null) => void) | null | undefined;
    autovalidateMode?: upstream18.AutovalidateMode | undefined;
    validator?: ((value: _FlaxDartOutput<T> | null) => string | null) | null | undefined;
    forceErrorText?: string | null | undefined;
    errorBuilder?: ((context: upstream8.BuildContext, errorText: string) => Widget) | null | undefined;
}): DropdownMenuFormField<T>;
export declare function _DropdownMenuFormFieldFactory(options: {
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
    textAlign?: upstream6.TextAlign | undefined;
    inputDecorationTheme?: unknown | null | undefined;
    decorationBuilder?: ((context: upstream8.BuildContext, controller: upstream9.MenuController) => Readonly<{
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
    alignmentOffset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    filterCallback?: ((entries: DartList<upstream14.DropdownMenuEntry<unknown | null>>, filter: string) => DartListInput<upstream14.DropdownMenuEntry<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [unknown | null];
    }>>) | null | undefined;
    searchCallback?: ((entries: DartList<upstream14.DropdownMenuEntry<unknown | null>>, query: string) => number | null) | null | undefined;
    dropdownMenuEntries: DartListInput<upstream14.DropdownMenuEntry<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [unknown | null];
    }>>;
    inputFormatters?: DartListInput<upstream15.TextInputFormatter, Readonly<{
        "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
    }>> | null | undefined;
    closeBehavior?: upstream16.DropdownMenuCloseBehavior | undefined;
    maxLines?: number | undefined;
    textInputAction?: upstream17.TextInputAction | null | undefined;
    cursorHeight?: number | null | undefined;
    menuController?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
    }> | null | undefined;
    restorationId?: string | null | undefined;
    onSaved?: ((newValue: unknown | null) => void) | null | undefined;
    autovalidateMode?: upstream18.AutovalidateMode | undefined;
    validator?: ((value: unknown | null) => string | null) | null | undefined;
    forceErrorText?: string | null | undefined;
    errorBuilder?: ((context: upstream8.BuildContext, errorText: string) => Widget) | null | undefined;
}): DropdownMenuFormField<unknown | null>;
export declare const DropdownMenuFormField: typeof _DropdownMenuFormFieldFactory & _FlaxInstanceType<DropdownMenuFormField<unknown | null>> & _FlaxDartType<DropdownMenuFormField<unknown | null>, readonly ["class", "flax.core/sdk_material#type:DropdownMenuFormField", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onSelected" | "controller" | "dropdownMenuEntries" | "builder" | "onSaved" | "onReset" | "forceErrorText" | "validator" | "errorBuilder" | "initialValue" | "enabled" | "autovalidateMode" | "restorationId" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/dropdown_menu_form_field.dart::DropdownMenuFormField" | "__flaxBound:package:flutter/src/widgets/form.dart::FormField" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
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
            textAlign?: upstream6.TextAlign | undefined;
            inputDecorationTheme?: unknown | null | undefined;
            decorationBuilder?: ((context: upstream8.BuildContext, controller: upstream9.MenuController) => Readonly<{
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
            alignmentOffset?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | null | undefined;
            filterCallback?: ((entries: DartList<upstream14.DropdownMenuEntry<_Selected0>>, filter: string) => DartListInput<upstream14.DropdownMenuEntry<_Selected0>, Readonly<{
                "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [_Selected0];
            }>>) | null | undefined;
            searchCallback?: ((entries: DartList<upstream14.DropdownMenuEntry<_Selected0>>, query: string) => number | null) | null | undefined;
            dropdownMenuEntries: DartListInput<upstream14.DropdownMenuEntry<_Selected0>, Readonly<{
                "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [_Selected0];
            }>>;
            inputFormatters?: DartListInput<upstream15.TextInputFormatter, Readonly<{
                "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
            }>> | null | undefined;
            closeBehavior?: upstream16.DropdownMenuCloseBehavior | undefined;
            maxLines?: number | undefined;
            textInputAction?: upstream17.TextInputAction | null | undefined;
            cursorHeight?: number | null | undefined;
            menuController?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
            }> | null | undefined;
            restorationId?: string | null | undefined;
            onSaved?: ((newValue: _Selected0 | null) => void) | null | undefined;
            autovalidateMode?: upstream18.AutovalidateMode | undefined;
            validator?: ((value: _Selected0 | null) => string | null) | null | undefined;
            forceErrorText?: string | null | undefined;
            errorBuilder?: ((context: upstream8.BuildContext, errorText: string) => Widget) | null | undefined;
        }): DropdownMenuFormField<_Selected0>;
        readonly prototype: DropdownMenuFormField<_Selected0>;
    } & _FlaxInstanceType<DropdownMenuFormField<_Selected0>> & _FlaxDartType<DropdownMenuFormField<_Selected0>> : never : never;
}
export {};

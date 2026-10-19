import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormField';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream8 from '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import type * as upstream9 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/flutter/painting/_bindings/sdk_painting_TextAlignVertical';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ToolbarOptions';
import type * as upstream16 from '@flax/flutter/services/_bindings/sdk_services_SmartDashesType';
import '@flax/flutter/services/_bindings/sdk_services_SmartDashesType';
import type * as upstream17 from '@flax/flutter/services/_bindings/sdk_services_SmartQuotesType';
import '@flax/flutter/services/_bindings/sdk_services_SmartQuotesType';
import type * as upstream18 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream20 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionControls';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream24 from '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import type * as upstream25 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream26 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SpellCheckConfiguration';
import type * as upstream28 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import type * as upstream29 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import type * as upstream30 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import type * as upstream31 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream33 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream34 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream35 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import type * as upstream37 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoTextFormFieldRow extends _FlaxDartWidget, Omit<upstream0.FormField<string>, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.FormField<string>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.FormField<string> | keyof upstream1.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/text_form_field_row.dart::CupertinoTextFormFieldRow": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/form.dart::FormField": readonly [string];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoTextFormFieldRow: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoTextFormFieldRow;
    readonly prefix: Widget | null;
    readonly padding: upstream3.EdgeInsetsGeometry | null;
    readonly controller: upstream4.TextEditingController | null;
    readonly onChanged: ((value: string) => void) | null;
    readonly builder: ((field: Readonly<{
        "__flaxBound:package:flutter/src/widgets/form.dart::FormFieldState": readonly [string];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream0.FormField<string>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream0.FormField<string>];
    }>) => Widget);
    readonly onSaved: ((newValue: string | null) => void) | null;
    readonly onReset: (() => void) | null;
    readonly forceErrorText: string | null;
    readonly validator: ((value: string | null) => string | null) | null;
    readonly errorBuilder: ((context: upstream25.BuildContext, errorText: string) => Widget) | null;
    readonly initialValue: string | null;
    readonly enabled: boolean;
    readonly autovalidateMode: upstream24.AutovalidateMode;
    readonly restorationId: string | null;
    readonly key: upstream2.Key | null;
    createState(): upstream30.FormFieldState<string>;
    createElement(): upstream31.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream33.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream33.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream35.DiagnosticsTreeStyle | null | undefined;
    }): upstream34.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream34.DiagnosticsNode>;
}
export declare function _CupertinoTextFormFieldRowFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    prefix?: Widget | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream37.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream37.TextEditingValue];
    }>) | null | undefined;
    initialValue?: string | null | undefined;
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
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    keyboardType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | null | undefined;
    textCapitalization?: upstream8.TextCapitalization | undefined;
    textInputAction?: upstream9.TextInputAction | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    strutStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textDirection?: upstream12.TextDirection | null | undefined;
    textAlign?: upstream13.TextAlign | undefined;
    textAlignVertical?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::TextAlignVertical": readonly [];
    }> | null | undefined;
    autofocus?: boolean | undefined;
    readOnly?: boolean | undefined;
    toolbarOptions?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::ToolbarOptions": readonly [];
    }> | null | undefined;
    showCursor?: boolean | null | undefined;
    obscuringCharacter?: string | undefined;
    obscureText?: boolean | undefined;
    autocorrect?: boolean | undefined;
    smartDashesType?: upstream16.SmartDashesType | null | undefined;
    smartQuotesType?: upstream17.SmartQuotesType | null | undefined;
    enableSuggestions?: boolean | undefined;
    maxLines?: number | null | undefined;
    minLines?: number | null | undefined;
    expands?: boolean | undefined;
    maxLength?: number | null | undefined;
    onChanged?: ((value: string) => void) | null | undefined;
    onTap?: (() => void) | null | undefined;
    onEditingComplete?: (() => void) | null | undefined;
    onFieldSubmitted?: ((value: string) => void) | null | undefined;
    onSaved?: ((newValue: string | null) => void) | null | undefined;
    validator?: ((value: string | null) => string | null) | null | undefined;
    inputFormatters?: DartListInput<upstream18.TextInputFormatter, Readonly<{
        "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
    }>> | null | undefined;
    enabled?: boolean | null | undefined;
    cursorWidth?: number | undefined;
    cursorHeight?: number | null | undefined;
    cursorColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    keyboardAppearance?: upstream20.Brightness | null | undefined;
    scrollPadding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | undefined;
    enableInteractiveSelection?: boolean | undefined;
    selectionControls?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionControls": readonly [];
    }> | null | undefined;
    scrollPhysics?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
    autofillHints?: DartIterableInput<string, string> | null | undefined;
    autovalidateMode?: upstream24.AutovalidateMode | undefined;
    placeholder?: string | null | undefined;
    placeholderStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    contextMenuBuilder?: ((context: upstream25.BuildContext, editableTextState: upstream26.EditableTextState) => Widget) | null | undefined;
    spellCheckConfiguration?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/spell_check.dart::SpellCheckConfiguration": readonly [];
    }> | null | undefined;
    selectionHeightStyle?: upstream28.BoxHeightStyle | null | undefined;
    selectionWidthStyle?: upstream29.BoxWidthStyle | null | undefined;
    restorationId?: string | null | undefined;
}): CupertinoTextFormFieldRow;
export declare const CupertinoTextFormFieldRow: typeof _CupertinoTextFormFieldRowFactory & _FlaxInstanceType<CupertinoTextFormFieldRow> & _FlaxDartType<CupertinoTextFormFieldRow, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTextFormFieldRow", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "prefix" | "padding" | "controller" | "onChanged" | "builder" | "onSaved" | "onReset" | "forceErrorText" | "validator" | "errorBuilder" | "initialValue" | "enabled" | "autovalidateMode" | "restorationId" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/cupertino/text_form_field_row.dart::CupertinoTextFormFieldRow" | "__flaxBound:package:flutter/src/widgets/form.dart::FormField" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

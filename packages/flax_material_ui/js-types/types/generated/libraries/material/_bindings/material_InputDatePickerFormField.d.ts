import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream5 from '@flax/material-ui/_bindings/material_CalendarDelegate';
import '@flax/material-ui/_bindings/material_CalendarDelegate';
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
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InputDatePickerFormField extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/input_date_picker_form_field.dart::InputDatePickerFormField": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __InputDatePickerFormField: unique symbol;
    readonly [_flaxDartTypeValue]: InputDatePickerFormField;
    readonly initialDate: upstream2.DateTime | null;
    readonly firstDate: upstream2.DateTime;
    readonly lastDate: upstream2.DateTime;
    readonly onDateSubmitted: ((value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => void) | null;
    readonly onDateSaved: ((value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => void) | null;
    readonly selectableDayPredicate: ((day: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => boolean) | null;
    readonly errorFormatText: string | null;
    readonly errorInvalidText: string | null;
    readonly fieldHintText: string | null;
    readonly fieldLabelText: string | null;
    readonly keyboardType: upstream3.TextInputType | null;
    readonly autofocus: boolean;
    readonly acceptEmptyDate: boolean;
    readonly focusNode: upstream4.FocusNode | null;
    readonly calendarDelegate: upstream5.CalendarDelegate<upstream2.DateTime>;
    readonly key: upstream1.Key | null;
    createState(): upstream6.State<InputDatePickerFormField>;
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
export declare function _InputDatePickerFormFieldFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    initialDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    firstDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    lastDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    onDateSubmitted?: ((value: upstream2.DateTime) => void) | null | undefined;
    onDateSaved?: ((value: upstream2.DateTime) => void) | null | undefined;
    selectableDayPredicate?: ((day: upstream2.DateTime) => boolean) | null | undefined;
    errorFormatText?: string | null | undefined;
    errorInvalidText?: string | null | undefined;
    fieldHintText?: string | null | undefined;
    fieldLabelText?: string | null | undefined;
    keyboardType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | null | undefined;
    autofocus?: boolean | undefined;
    acceptEmptyDate?: boolean | undefined;
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
    calendarDelegate?: Readonly<{
        "__flaxBound:package:material_ui/src/date.dart::CalendarDelegate": readonly [upstream2.DateTime];
    }> | undefined;
}): InputDatePickerFormField;
export declare const InputDatePickerFormField: typeof _InputDatePickerFormFieldFactory & _FlaxInstanceType<InputDatePickerFormField> & _FlaxDartType<InputDatePickerFormField, readonly ["class", "flax.material/material#type:InputDatePickerFormField", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "initialDate" | "firstDate" | "lastDate" | "onDateSubmitted" | "onDateSaved" | "selectableDayPredicate" | "errorFormatText" | "errorInvalidText" | "fieldHintText" | "fieldLabelText" | "keyboardType" | "autofocus" | "acceptEmptyDate" | "focusNode" | "calendarDelegate" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/input_date_picker_form_field.dart::InputDatePickerFormField" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

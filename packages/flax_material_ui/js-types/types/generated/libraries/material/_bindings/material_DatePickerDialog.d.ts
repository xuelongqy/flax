import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream3 from '@flax/material-ui/_bindings/material_DatePickerEntryMode';
import '@flax/material-ui/_bindings/material_DatePickerEntryMode';
import type * as upstream4 from '@flax/material-ui/_bindings/material_DatePickerMode';
import '@flax/material-ui/_bindings/material_DatePickerMode';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/material-ui/_bindings/material_CalendarDatePickerDayDetails';
import '@flax/material-ui/_bindings/material_CalendarDatePickerDayDetails';
import type * as upstream10 from '@flax/material-ui/_bindings/material_CalendarDatePickerWeekdayDetails';
import '@flax/material-ui/_bindings/material_CalendarDatePickerWeekdayDetails';
import type * as upstream11 from '@flax/material-ui/_bindings/material_CalendarDelegate';
import '@flax/material-ui/_bindings/material_CalendarDelegate';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DatePickerDialog extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/date_picker.dart::DatePickerDialog": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DatePickerDialog: unique symbol;
    readonly [_flaxDartTypeValue]: DatePickerDialog;
    readonly initialDate: upstream2.DateTime | null;
    readonly firstDate: upstream2.DateTime;
    readonly lastDate: upstream2.DateTime;
    readonly currentDate: upstream2.DateTime;
    readonly initialEntryMode: upstream3.DatePickerEntryMode;
    readonly selectableDayPredicate: ((day: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => boolean) | null;
    readonly cancelText: string | null;
    readonly confirmText: string | null;
    readonly helpText: string | null;
    readonly initialCalendarMode: upstream4.DatePickerMode;
    readonly errorFormatText: string | null;
    readonly errorInvalidText: string | null;
    readonly fieldHintText: string | null;
    readonly fieldLabelText: string | null;
    readonly keyboardType: upstream5.TextInputType | null;
    readonly restorationId: string | null;
    readonly onDatePickerModeChange: ((value: upstream3.DatePickerEntryMode) => void) | null;
    readonly switchToInputEntryModeIcon: upstream6.Icon | null;
    readonly switchToCalendarEntryModeIcon: upstream6.Icon | null;
    readonly insetPadding: upstream7.EdgeInsets;
    readonly dayBuilder: ((context: upstream8.BuildContext, details: Readonly<{
        "__flaxBound:package:material_ui/src/calendar_date_picker.dart::CalendarDatePickerDayDetails": readonly [];
    }>) => Widget) | null;
    readonly weekdayBuilder: ((context: upstream8.BuildContext, details: Readonly<{
        "__flaxBound:package:material_ui/src/calendar_date_picker.dart::CalendarDatePickerWeekdayDetails": readonly [];
    }>) => Widget) | null;
    readonly calendarDelegate: upstream11.CalendarDelegate<upstream2.DateTime>;
    readonly key: upstream1.Key | null;
    createState(): upstream12.State<DatePickerDialog>;
    createElement(): upstream13.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream17.DiagnosticsTreeStyle | null | undefined;
    }): upstream16.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream16.DiagnosticsNode>;
}
export declare function _DatePickerDialogFactory(options: {
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
    currentDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    initialEntryMode?: upstream3.DatePickerEntryMode | undefined;
    selectableDayPredicate?: ((day: upstream2.DateTime) => boolean) | null | undefined;
    cancelText?: string | null | undefined;
    confirmText?: string | null | undefined;
    helpText?: string | null | undefined;
    initialCalendarMode?: upstream4.DatePickerMode | undefined;
    errorFormatText?: string | null | undefined;
    errorInvalidText?: string | null | undefined;
    fieldHintText?: string | null | undefined;
    fieldLabelText?: string | null | undefined;
    keyboardType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | null | undefined;
    restorationId?: string | null | undefined;
    onDatePickerModeChange?: ((value: upstream3.DatePickerEntryMode) => void) | null | undefined;
    switchToInputEntryModeIcon?: upstream6.Icon | null | undefined;
    switchToCalendarEntryModeIcon?: upstream6.Icon | null | undefined;
    insetPadding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | undefined;
    dayBuilder?: ((context: upstream8.BuildContext, details: upstream9.CalendarDatePickerDayDetails) => Widget) | null | undefined;
    weekdayBuilder?: ((context: upstream8.BuildContext, details: upstream10.CalendarDatePickerWeekdayDetails) => Widget) | null | undefined;
    calendarDelegate?: Readonly<{
        "__flaxBound:package:material_ui/src/date.dart::CalendarDelegate": readonly [upstream2.DateTime];
    }> | undefined;
}): DatePickerDialog;
export declare namespace _DatePickerDialogFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _DatePickerDialogFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const DatePickerDialog: typeof _DatePickerDialogFactory & _FlaxInstanceType<DatePickerDialog> & _FlaxDartType<DatePickerDialog, readonly ["class", "flax.material/material#type:DatePickerDialog", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "initialDate" | "firstDate" | "lastDate" | "currentDate" | "initialEntryMode" | "selectableDayPredicate" | "cancelText" | "confirmText" | "helpText" | "initialCalendarMode" | "errorFormatText" | "errorInvalidText" | "fieldHintText" | "fieldLabelText" | "keyboardType" | "restorationId" | "onDatePickerModeChange" | "switchToInputEntryModeIcon" | "switchToCalendarEntryModeIcon" | "insetPadding" | "dayBuilder" | "weekdayBuilder" | "calendarDelegate" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/date_picker.dart::DatePickerDialog" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

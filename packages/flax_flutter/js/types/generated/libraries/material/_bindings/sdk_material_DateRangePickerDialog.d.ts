import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_DateTimeRange';
import '@flax/flutter/material/_bindings/sdk_material_DateTimeRange';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_DatePickerEntryMode';
import '@flax/flutter/material/_bindings/sdk_material_DatePickerEntryMode';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DateRangePickerDialog extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/date_picker.dart::DateRangePickerDialog": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DateRangePickerDialog: unique symbol;
    readonly [_flaxDartTypeValue]: DateRangePickerDialog;
    readonly initialDateRange: upstream2.DateTimeRange<upstream3.DateTime> | null;
    readonly firstDate: upstream3.DateTime;
    readonly lastDate: upstream3.DateTime;
    readonly currentDate: upstream3.DateTime;
    readonly initialEntryMode: upstream4.DatePickerEntryMode;
    readonly cancelText: string | null;
    readonly confirmText: string | null;
    readonly saveText: string | null;
    readonly helpText: string | null;
    readonly errorInvalidRangeText: string | null;
    readonly errorFormatText: string | null;
    readonly errorInvalidText: string | null;
    readonly fieldStartHintText: string | null;
    readonly fieldEndHintText: string | null;
    readonly fieldStartLabelText: string | null;
    readonly fieldEndLabelText: string | null;
    readonly keyboardType: upstream5.TextInputType;
    readonly restorationId: string | null;
    readonly switchToInputEntryModeIcon: upstream6.Icon | null;
    readonly switchToCalendarEntryModeIcon: upstream6.Icon | null;
    readonly selectableDayPredicate: ((day: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>, selectedStartDay: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null, selectedEndDay: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null) => boolean) | null;
    readonly calendarDelegate: upstream7.CalendarDelegate<upstream3.DateTime>;
    readonly key: upstream1.Key | null;
    createState(): upstream8.State<DateRangePickerDialog>;
    createElement(): upstream9.StatefulElement;
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
export declare function _DateRangePickerDialogFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    initialDateRange?: Readonly<{
        "__flaxBound:package:flutter/src/material/date.dart::DateTimeRange": readonly [upstream3.DateTime];
    }> | null | undefined;
    firstDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    lastDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    currentDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    initialEntryMode?: upstream4.DatePickerEntryMode | undefined;
    helpText?: string | null | undefined;
    cancelText?: string | null | undefined;
    confirmText?: string | null | undefined;
    saveText?: string | null | undefined;
    errorInvalidRangeText?: string | null | undefined;
    errorFormatText?: string | null | undefined;
    errorInvalidText?: string | null | undefined;
    fieldStartHintText?: string | null | undefined;
    fieldEndHintText?: string | null | undefined;
    fieldStartLabelText?: string | null | undefined;
    fieldEndLabelText?: string | null | undefined;
    keyboardType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | undefined;
    restorationId?: string | null | undefined;
    switchToInputEntryModeIcon?: upstream6.Icon | null | undefined;
    switchToCalendarEntryModeIcon?: upstream6.Icon | null | undefined;
    selectableDayPredicate?: ((day: upstream3.DateTime, selectedStartDay: upstream3.DateTime | null, selectedEndDay: upstream3.DateTime | null) => boolean) | null | undefined;
    calendarDelegate?: Readonly<{
        "__flaxBound:package:flutter/src/material/date.dart::CalendarDelegate": readonly [upstream3.DateTime];
    }> | undefined;
}): DateRangePickerDialog;
export declare const DateRangePickerDialog: typeof _DateRangePickerDialogFactory & _FlaxInstanceType<DateRangePickerDialog> & _FlaxDartType<DateRangePickerDialog, readonly ["class", "flax.core/sdk_material#type:DateRangePickerDialog", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "initialDateRange" | "firstDate" | "lastDate" | "currentDate" | "initialEntryMode" | "cancelText" | "confirmText" | "saveText" | "helpText" | "errorInvalidRangeText" | "errorFormatText" | "errorInvalidText" | "fieldStartHintText" | "fieldEndHintText" | "fieldStartLabelText" | "fieldEndLabelText" | "keyboardType" | "restorationId" | "switchToInputEntryModeIcon" | "switchToCalendarEntryModeIcon" | "selectableDayPredicate" | "calendarDelegate" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/date_picker.dart::DateRangePickerDialog" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

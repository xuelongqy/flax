import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_DatePickerMode';
import '@flax/flutter/material/_bindings/sdk_material_DatePickerMode';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CalendarDatePicker extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/calendar_date_picker.dart::CalendarDatePicker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CalendarDatePicker: unique symbol;
    readonly [_flaxDartTypeValue]: CalendarDatePicker;
    readonly initialDate: upstream2.DateTime | null;
    readonly firstDate: upstream2.DateTime;
    readonly lastDate: upstream2.DateTime;
    readonly currentDate: upstream2.DateTime;
    readonly onDateChanged: ((value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => void);
    readonly onDisplayedMonthChanged: ((value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => void) | null;
    readonly initialCalendarMode: upstream3.DatePickerMode;
    readonly selectableDayPredicate: ((day: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => boolean) | null;
    readonly calendarDelegate: upstream4.CalendarDelegate<upstream2.DateTime>;
    readonly key: upstream1.Key | null;
    createState(): upstream5.State<CalendarDatePicker>;
    createElement(): upstream6.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
export declare function _CalendarDatePickerFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    initialDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null;
    firstDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    lastDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    currentDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    onDateChanged: ((value: upstream2.DateTime) => void);
    onDisplayedMonthChanged?: ((value: upstream2.DateTime) => void) | null | undefined;
    initialCalendarMode?: upstream3.DatePickerMode | undefined;
    selectableDayPredicate?: ((day: upstream2.DateTime) => boolean) | null | undefined;
    calendarDelegate?: Readonly<{
        "__flaxBound:package:flutter/src/material/date.dart::CalendarDelegate": readonly [upstream2.DateTime];
    }> | undefined;
}): CalendarDatePicker;
export declare const CalendarDatePicker: typeof _CalendarDatePickerFactory & _FlaxInstanceType<CalendarDatePicker> & _FlaxDartType<CalendarDatePicker, readonly ["class", "flax.core/sdk_material#type:CalendarDatePicker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "initialDate" | "firstDate" | "lastDate" | "currentDate" | "onDateChanged" | "onDisplayedMonthChanged" | "initialCalendarMode" | "selectableDayPredicate" | "calendarDelegate" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/calendar_date_picker.dart::CalendarDatePicker" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

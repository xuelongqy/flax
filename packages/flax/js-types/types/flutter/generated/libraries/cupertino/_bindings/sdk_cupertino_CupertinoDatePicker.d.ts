import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoDatePickerMode';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoDatePickerMode';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream4 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateOrder';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_DatePickerDateOrder';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChangeReportingBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChangeReportingBehavior';
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
export interface CupertinoDatePicker extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/date_picker.dart::CupertinoDatePicker": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoDatePicker: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoDatePicker;
    readonly mode: upstream2.CupertinoDatePickerMode;
    readonly initialDateTime: upstream3.DateTime;
    readonly minimumDate: upstream3.DateTime | null;
    readonly maximumDate: upstream3.DateTime | null;
    readonly minimumYear: number;
    readonly maximumYear: number | null;
    readonly minuteInterval: number;
    readonly use24hFormat: boolean;
    readonly dateOrder: upstream4.DatePickerDateOrder | null;
    readonly onDateTimeChanged: ((value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => void);
    readonly backgroundColor: upstream5.Color | null;
    readonly showDayOfWeek: boolean;
    readonly showTimeSeparator: boolean;
    readonly selectableDayPredicate: ((day: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>) => boolean) | null;
    readonly itemExtent: number;
    readonly selectionOverlayBuilder: ((context: upstream6.BuildContext, options: {
        columnCount: number;
        selectedIndex: number;
    }) => Widget | null) | null;
    readonly changeReportingBehavior: upstream7.ChangeReportingBehavior;
    readonly key: upstream1.Key | null;
    createState(): upstream8.State<upstream0.StatefulWidget>;
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
export declare function _CupertinoDatePickerFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    mode?: upstream2.CupertinoDatePickerMode | undefined;
    onDateTimeChanged: ((value: upstream3.DateTime) => void);
    initialDateTime?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    minimumDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    maximumDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    minimumYear?: number | undefined;
    maximumYear?: number | null | undefined;
    minuteInterval?: number | undefined;
    use24hFormat?: boolean | undefined;
    dateOrder?: upstream4.DatePickerDateOrder | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    showDayOfWeek?: boolean | undefined;
    showTimeSeparator?: boolean | undefined;
    itemExtent?: number | undefined;
    selectionOverlayBuilder?: ((context: upstream6.BuildContext, options: {
        columnCount: number;
        selectedIndex: number;
    }) => Widget | null) | null | undefined;
    selectableDayPredicate?: ((day: upstream3.DateTime) => boolean) | null | undefined;
    changeReportingBehavior?: upstream7.ChangeReportingBehavior | undefined;
}): CupertinoDatePicker;
export declare const CupertinoDatePicker: typeof _CupertinoDatePickerFactory & _FlaxInstanceType<CupertinoDatePicker> & _FlaxDartType<CupertinoDatePicker, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoDatePicker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "mode" | "initialDateTime" | "minimumDate" | "maximumDate" | "minimumYear" | "maximumYear" | "minuteInterval" | "use24hFormat" | "dateOrder" | "onDateTimeChanged" | "backgroundColor" | "showDayOfWeek" | "showTimeSeparator" | "selectableDayPredicate" | "itemExtent" | "selectionOverlayBuilder" | "changeReportingBehavior" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/cupertino/date_picker.dart::CupertinoDatePicker" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

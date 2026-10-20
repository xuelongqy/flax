import { type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_DateTimeRange';
import '@flax/material-ui/_bindings/material_DateTimeRange';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/material-ui/_bindings/material_CalendarDelegate';
import type * as upstream6 from '@flax/material-ui/_bindings/material_DatePickerEntryMode';
import '@flax/material-ui/_bindings/material_DatePickerEntryMode';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
declare function _flaxTopLevel_showDateRangePicker(options: {
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    barrierLabel?: string | null | undefined;
    builder?: ((context: upstream4.BuildContext, child: Widget | null) => Widget) | null | undefined;
    calendarDelegate?: Readonly<{
        "__flaxBound:package:material_ui/src/date.dart::CalendarDelegate": readonly [upstream1.DateTime];
    }> | undefined;
    cancelText?: string | null | undefined;
    confirmText?: string | null | undefined;
    context: upstream4.BuildContext;
    currentDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    errorFormatText?: string | null | undefined;
    errorInvalidRangeText?: string | null | undefined;
    errorInvalidText?: string | null | undefined;
    fieldEndHintText?: string | null | undefined;
    fieldEndLabelText?: string | null | undefined;
    fieldStartHintText?: string | null | undefined;
    fieldStartLabelText?: string | null | undefined;
    firstDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    helpText?: string | null | undefined;
    initialDateRange?: Readonly<{
        "__flaxBound:package:material_ui/src/date.dart::DateTimeRange": readonly [upstream1.DateTime];
    }> | null | undefined;
    initialEntryMode?: upstream6.DatePickerEntryMode | undefined;
    keyboardType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | undefined;
    lastDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    saveText?: string | null | undefined;
    selectableDayPredicate?: ((day: upstream1.DateTime, selectedStartDay: upstream1.DateTime | null, selectedEndDay: upstream1.DateTime | null) => boolean) | null | undefined;
    switchToCalendarEntryModeIcon?: upstream10.Icon | null | undefined;
    switchToInputEntryModeIcon?: upstream10.Icon | null | undefined;
    textDirection?: upstream11.TextDirection | null | undefined;
    useRootNavigator?: boolean | undefined;
}): Promise<upstream0.DateTimeRange<upstream1.DateTime> | null>;
export { _flaxTopLevel_showDateRangePicker as showDateRangePicker };

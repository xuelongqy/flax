import { type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_DatePickerMode';
import '@flax/flutter/material/_bindings/sdk_material_DatePickerMode';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_DatePickerEntryMode';
import '@flax/flutter/material/_bindings/sdk_material_DatePickerEntryMode';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
declare function _flaxTopLevel_showDatePicker(options: {
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
    builder?: ((context: upstream3.BuildContext, child: Widget | null) => Widget) | null | undefined;
    calendarDelegate?: Readonly<{
        "__flaxBound:package:flutter/src/material/date.dart::CalendarDelegate": readonly [upstream0.DateTime];
    }> | undefined;
    cancelText?: string | null | undefined;
    confirmText?: string | null | undefined;
    context: upstream3.BuildContext;
    currentDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    errorFormatText?: string | null | undefined;
    errorInvalidText?: string | null | undefined;
    fieldHintText?: string | null | undefined;
    fieldLabelText?: string | null | undefined;
    firstDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    helpText?: string | null | undefined;
    initialDate?: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null | undefined;
    initialDatePickerMode?: upstream5.DatePickerMode | undefined;
    initialEntryMode?: upstream6.DatePickerEntryMode | undefined;
    keyboardType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | null | undefined;
    lastDate: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    onDatePickerModeChange?: ((value: upstream6.DatePickerEntryMode) => void) | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    selectableDayPredicate?: ((day: upstream0.DateTime) => boolean) | null | undefined;
    switchToCalendarEntryModeIcon?: upstream10.Icon | null | undefined;
    switchToInputEntryModeIcon?: upstream10.Icon | null | undefined;
    textDirection?: upstream11.TextDirection | null | undefined;
    useRootNavigator?: boolean | undefined;
}): Promise<upstream0.DateTime | null>;
export { _flaxTopLevel_showDatePicker as showDatePicker };

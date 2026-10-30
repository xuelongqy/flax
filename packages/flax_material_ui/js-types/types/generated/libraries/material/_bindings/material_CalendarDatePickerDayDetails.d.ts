import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CalendarDatePickerDayDetails extends Readonly<{
    "__flaxBound:package:material_ui/src/calendar_date_picker.dart::CalendarDatePickerDayDetails": readonly [];
}> {
    readonly __CalendarDatePickerDayDetails: unique symbol;
    readonly [_flaxDartTypeValue]: CalendarDatePickerDayDetails;
    readonly day: upstream0.DateTime;
    readonly states: DartSet<upstream1.WidgetState>;
    readonly child: Widget;
}
export declare const CalendarDatePickerDayDetails: object & _FlaxInstanceType<CalendarDatePickerDayDetails> & _FlaxDartType<CalendarDatePickerDayDetails, readonly ["class", "flax.material/material#type:CalendarDatePickerDayDetails", readonly [], false]>;

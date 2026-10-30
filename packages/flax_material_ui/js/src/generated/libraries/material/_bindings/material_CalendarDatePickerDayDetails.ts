// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CalendarDatePickerDayDetails extends Readonly<{ "__flaxBound:package:material_ui/src/calendar_date_picker.dart::CalendarDatePickerDayDetails": readonly [] }> { readonly __CalendarDatePickerDayDetails: unique symbol;
readonly [_flaxDartTypeValue]: CalendarDatePickerDayDetails;

readonly day: upstream0.DateTime;
readonly states: DartSet<upstream1.WidgetState>;
readonly child: Widget;
}
defineObject("flax.material/material#type:CalendarDatePickerDayDetails", ["day","states","child"], [], _flaxBindingMethods("flax.material/material#type:CalendarDatePickerDayDetails", "object", {}, {}), []);
export const CalendarDatePickerDayDetails: object & _FlaxInstanceType<CalendarDatePickerDayDetails> & _FlaxDartType<CalendarDatePickerDayDetails, readonly ["class", "flax.material/material#type:CalendarDatePickerDayDetails", readonly [], false]> = _flaxBindInstanceType<CalendarDatePickerDayDetails, object>({}, "flax.material/material#type:CalendarDatePickerDayDetails", ["dart:core::Object"]) as object & _FlaxInstanceType<CalendarDatePickerDayDetails> & _FlaxDartType<CalendarDatePickerDayDetails, readonly ["class", "flax.material/material#type:CalendarDatePickerDayDetails", readonly [], false]>;

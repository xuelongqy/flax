// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DatePickerDateTimeOrder extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/cupertino/localizations.dart::DatePickerDateTimeOrder">, Readonly<{ "__flaxBound:package:flutter/src/cupertino/localizations.dart::DatePickerDateTimeOrder": readonly [] }> { readonly __DatePickerDateTimeOrder: unique symbol;
readonly [_flaxDartTypeValue]: DatePickerDateTimeOrder;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", ["date_time_dayPeriod","date_dayPeriod_time","time_dayPeriod_date","dayPeriod_time_date"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_DatePickerDateTimeOrder_api = {
date_time_dayPeriod: enumValue<DatePickerDateTimeOrder>("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", "date_time_dayPeriod"),
date_dayPeriod_time: enumValue<DatePickerDateTimeOrder>("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", "date_dayPeriod_time"),
time_dayPeriod_date: enumValue<DatePickerDateTimeOrder>("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", "time_dayPeriod_date"),
dayPeriod_time_date: enumValue<DatePickerDateTimeOrder>("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", "dayPeriod_time_date"),
values: Object.freeze([enumValue<DatePickerDateTimeOrder>("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", "date_time_dayPeriod"), enumValue<DatePickerDateTimeOrder>("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", "date_dayPeriod_time"), enumValue<DatePickerDateTimeOrder>("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", "time_dayPeriod_date"), enumValue<DatePickerDateTimeOrder>("flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", "dayPeriod_time_date")]),
};
export const DatePickerDateTimeOrder = Object.freeze(_flaxBindInstanceType<DatePickerDateTimeOrder, typeof _flaxEnum_DatePickerDateTimeOrder_api>(_flaxEnum_DatePickerDateTimeOrder_api, "flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_DatePickerDateTimeOrder_api & _FlaxInstanceType<DatePickerDateTimeOrder> & _FlaxDartType<DatePickerDateTimeOrder, readonly ["class", "flax.core/sdk_cupertino#type:DatePickerDateTimeOrder", readonly [], false]>);

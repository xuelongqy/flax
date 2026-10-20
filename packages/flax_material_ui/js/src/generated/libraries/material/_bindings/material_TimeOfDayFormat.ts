// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TimeOfDayFormat extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/time.dart::TimeOfDayFormat">, Readonly<{ "__flaxBound:package:material_ui/src/time.dart::TimeOfDayFormat": readonly [] }> { readonly __TimeOfDayFormat: unique symbol;
readonly [_flaxDartTypeValue]: TimeOfDayFormat;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:TimeOfDayFormat", ["HH_colon_mm","HH_dot_mm","frenchCanadian","H_colon_mm","h_colon_mm_space_a","a_space_h_colon_mm"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TimeOfDayFormat_api = {
HH_colon_mm: enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "HH_colon_mm"),
HH_dot_mm: enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "HH_dot_mm"),
frenchCanadian: enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "frenchCanadian"),
H_colon_mm: enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "H_colon_mm"),
h_colon_mm_space_a: enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "h_colon_mm_space_a"),
a_space_h_colon_mm: enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "a_space_h_colon_mm"),
values: Object.freeze([enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "HH_colon_mm"), enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "HH_dot_mm"), enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "frenchCanadian"), enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "H_colon_mm"), enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "h_colon_mm_space_a"), enumValue<TimeOfDayFormat>("flax.material/material#type:TimeOfDayFormat", "a_space_h_colon_mm")]),
};
export const TimeOfDayFormat = Object.freeze(_flaxBindInstanceType<TimeOfDayFormat, typeof _flaxEnum_TimeOfDayFormat_api>(_flaxEnum_TimeOfDayFormat_api, "flax.material/material#type:TimeOfDayFormat", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TimeOfDayFormat_api & _FlaxInstanceType<TimeOfDayFormat> & _FlaxDartType<TimeOfDayFormat, readonly ["class", "flax.material/material#type:TimeOfDayFormat", readonly [], false]>);

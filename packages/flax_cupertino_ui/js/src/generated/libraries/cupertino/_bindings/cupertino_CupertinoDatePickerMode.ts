// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoDatePickerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/date_picker.dart::CupertinoDatePickerMode">, Readonly<{ "__flaxBound:package:cupertino_ui/src/date_picker.dart::CupertinoDatePickerMode": readonly [] }> { readonly __CupertinoDatePickerMode: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoDatePickerMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.cupertino/cupertino#type:CupertinoDatePickerMode", ["time","date","dateAndTime","monthYear"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_CupertinoDatePickerMode_api = {
time: enumValue<CupertinoDatePickerMode>("flax.cupertino/cupertino#type:CupertinoDatePickerMode", "time"),
date: enumValue<CupertinoDatePickerMode>("flax.cupertino/cupertino#type:CupertinoDatePickerMode", "date"),
dateAndTime: enumValue<CupertinoDatePickerMode>("flax.cupertino/cupertino#type:CupertinoDatePickerMode", "dateAndTime"),
monthYear: enumValue<CupertinoDatePickerMode>("flax.cupertino/cupertino#type:CupertinoDatePickerMode", "monthYear"),
values: Object.freeze([enumValue<CupertinoDatePickerMode>("flax.cupertino/cupertino#type:CupertinoDatePickerMode", "time"), enumValue<CupertinoDatePickerMode>("flax.cupertino/cupertino#type:CupertinoDatePickerMode", "date"), enumValue<CupertinoDatePickerMode>("flax.cupertino/cupertino#type:CupertinoDatePickerMode", "dateAndTime"), enumValue<CupertinoDatePickerMode>("flax.cupertino/cupertino#type:CupertinoDatePickerMode", "monthYear")]),
};
export const CupertinoDatePickerMode = Object.freeze(_flaxBindInstanceType<CupertinoDatePickerMode, typeof _flaxEnum_CupertinoDatePickerMode_api>(_flaxEnum_CupertinoDatePickerMode_api, "flax.cupertino/cupertino#type:CupertinoDatePickerMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_CupertinoDatePickerMode_api & _FlaxInstanceType<CupertinoDatePickerMode> & _FlaxDartType<CupertinoDatePickerMode, readonly ["class", "flax.cupertino/cupertino#type:CupertinoDatePickerMode", readonly [], false]>);

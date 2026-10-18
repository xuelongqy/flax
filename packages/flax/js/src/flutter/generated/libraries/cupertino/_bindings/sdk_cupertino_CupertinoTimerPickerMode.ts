// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoTimerPickerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/cupertino/date_picker.dart::CupertinoTimerPickerMode">, Readonly<{ "__flaxBound:package:flutter/src/cupertino/date_picker.dart::CupertinoTimerPickerMode": readonly [] }> { readonly __CupertinoTimerPickerMode: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoTimerPickerMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", ["hm","ms","hms"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_CupertinoTimerPickerMode_api = {
hm: enumValue<CupertinoTimerPickerMode>("flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", "hm"),
ms: enumValue<CupertinoTimerPickerMode>("flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", "ms"),
hms: enumValue<CupertinoTimerPickerMode>("flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", "hms"),
values: Object.freeze([enumValue<CupertinoTimerPickerMode>("flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", "hm"), enumValue<CupertinoTimerPickerMode>("flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", "ms"), enumValue<CupertinoTimerPickerMode>("flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", "hms")]),
};
export const CupertinoTimerPickerMode = Object.freeze(_flaxBindInstanceType<CupertinoTimerPickerMode, typeof _flaxEnum_CupertinoTimerPickerMode_api>(_flaxEnum_CupertinoTimerPickerMode_api, "flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_CupertinoTimerPickerMode_api & _FlaxInstanceType<CupertinoTimerPickerMode> & _FlaxDartType<CupertinoTimerPickerMode, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTimerPickerMode", readonly [], false]>);

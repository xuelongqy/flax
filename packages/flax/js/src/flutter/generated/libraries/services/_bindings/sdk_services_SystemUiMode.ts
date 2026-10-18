// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemUiMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiMode">, Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiMode": readonly [] }> { readonly __SystemUiMode: unique symbol;
readonly [_flaxDartTypeValue]: SystemUiMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:SystemUiMode", ["leanBack","immersive","immersiveSticky","edgeToEdge","manual"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SystemUiMode_api = {
leanBack: enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "leanBack"),
immersive: enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "immersive"),
immersiveSticky: enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "immersiveSticky"),
edgeToEdge: enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "edgeToEdge"),
manual: enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "manual"),
values: Object.freeze([enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "leanBack"), enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "immersive"), enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "immersiveSticky"), enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "edgeToEdge"), enumValue<SystemUiMode>("flax.core/sdk_services#type:SystemUiMode", "manual")]),
};
export const SystemUiMode = Object.freeze(_flaxBindInstanceType<SystemUiMode, typeof _flaxEnum_SystemUiMode_api>(_flaxEnum_SystemUiMode_api, "flax.core/sdk_services#type:SystemUiMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SystemUiMode_api & _FlaxInstanceType<SystemUiMode> & _FlaxDartType<SystemUiMode, readonly ["class", "flax.core/sdk_services#type:SystemUiMode", readonly [], false]>);

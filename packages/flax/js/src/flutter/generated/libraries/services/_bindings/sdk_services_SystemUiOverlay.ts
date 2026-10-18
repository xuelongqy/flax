// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemUiOverlay extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlay">, Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlay": readonly [] }> { readonly __SystemUiOverlay: unique symbol;
readonly [_flaxDartTypeValue]: SystemUiOverlay;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:SystemUiOverlay", ["top","bottom"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SystemUiOverlay_api = {
top: enumValue<SystemUiOverlay>("flax.core/sdk_services#type:SystemUiOverlay", "top"),
bottom: enumValue<SystemUiOverlay>("flax.core/sdk_services#type:SystemUiOverlay", "bottom"),
values: Object.freeze([enumValue<SystemUiOverlay>("flax.core/sdk_services#type:SystemUiOverlay", "top"), enumValue<SystemUiOverlay>("flax.core/sdk_services#type:SystemUiOverlay", "bottom")]),
};
export const SystemUiOverlay = Object.freeze(_flaxBindInstanceType<SystemUiOverlay, typeof _flaxEnum_SystemUiOverlay_api>(_flaxEnum_SystemUiOverlay_api, "flax.core/sdk_services#type:SystemUiOverlay", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SystemUiOverlay_api & _FlaxInstanceType<SystemUiOverlay> & _FlaxDartType<SystemUiOverlay, readonly ["class", "flax.core/sdk_services#type:SystemUiOverlay", readonly [], false]>);

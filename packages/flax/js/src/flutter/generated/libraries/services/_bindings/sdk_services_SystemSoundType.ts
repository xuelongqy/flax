// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SystemSoundType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/system_sound.dart::SystemSoundType">, Readonly<{ "__flaxBound:package:flutter/src/services/system_sound.dart::SystemSoundType": readonly [] }> { readonly __SystemSoundType: unique symbol;
readonly [_flaxDartTypeValue]: SystemSoundType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:SystemSoundType", ["click","tick","alert"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SystemSoundType_api = {
click: enumValue<SystemSoundType>("flax.core/sdk_services#type:SystemSoundType", "click"),
tick: enumValue<SystemSoundType>("flax.core/sdk_services#type:SystemSoundType", "tick"),
alert: enumValue<SystemSoundType>("flax.core/sdk_services#type:SystemSoundType", "alert"),
values: Object.freeze([enumValue<SystemSoundType>("flax.core/sdk_services#type:SystemSoundType", "click"), enumValue<SystemSoundType>("flax.core/sdk_services#type:SystemSoundType", "tick"), enumValue<SystemSoundType>("flax.core/sdk_services#type:SystemSoundType", "alert")]),
};
export const SystemSoundType = Object.freeze(_flaxBindInstanceType<SystemSoundType, typeof _flaxEnum_SystemSoundType_api>(_flaxEnum_SystemSoundType_api, "flax.core/sdk_services#type:SystemSoundType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SystemSoundType_api & _FlaxInstanceType<SystemSoundType> & _FlaxDartType<SystemSoundType, readonly ["class", "flax.core/sdk_services#type:SystemSoundType", readonly [], false]>);

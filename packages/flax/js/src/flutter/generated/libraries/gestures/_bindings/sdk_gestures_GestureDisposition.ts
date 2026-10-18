// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureDisposition extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureDisposition">, Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureDisposition": readonly [] }> { readonly __GestureDisposition: unique symbol;
readonly [_flaxDartTypeValue]: GestureDisposition;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_gestures#type:GestureDisposition", ["accepted","rejected"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_GestureDisposition_api = {
accepted: enumValue<GestureDisposition>("flax.core/sdk_gestures#type:GestureDisposition", "accepted"),
rejected: enumValue<GestureDisposition>("flax.core/sdk_gestures#type:GestureDisposition", "rejected"),
values: Object.freeze([enumValue<GestureDisposition>("flax.core/sdk_gestures#type:GestureDisposition", "accepted"), enumValue<GestureDisposition>("flax.core/sdk_gestures#type:GestureDisposition", "rejected")]),
};
export const GestureDisposition = Object.freeze(_flaxBindInstanceType<GestureDisposition, typeof _flaxEnum_GestureDisposition_api>(_flaxEnum_GestureDisposition_api, "flax.core/sdk_gestures#type:GestureDisposition", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_GestureDisposition_api & _FlaxInstanceType<GestureDisposition> & _FlaxDartType<GestureDisposition, readonly ["class", "flax.core/sdk_gestures#type:GestureDisposition", readonly [], false]>);

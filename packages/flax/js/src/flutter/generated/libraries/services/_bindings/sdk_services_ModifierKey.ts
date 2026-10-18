// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ModifierKey extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::ModifierKey">, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::ModifierKey": readonly [] }> { readonly __ModifierKey: unique symbol;
readonly [_flaxDartTypeValue]: ModifierKey;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:ModifierKey", ["controlModifier","shiftModifier","altModifier","metaModifier","capsLockModifier","numLockModifier","scrollLockModifier","functionModifier","symbolModifier"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ModifierKey_api = {
controlModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "controlModifier"),
shiftModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "shiftModifier"),
altModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "altModifier"),
metaModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "metaModifier"),
capsLockModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "capsLockModifier"),
numLockModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "numLockModifier"),
scrollLockModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "scrollLockModifier"),
functionModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "functionModifier"),
symbolModifier: enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "symbolModifier"),
values: Object.freeze([enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "controlModifier"), enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "shiftModifier"), enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "altModifier"), enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "metaModifier"), enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "capsLockModifier"), enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "numLockModifier"), enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "scrollLockModifier"), enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "functionModifier"), enumValue<ModifierKey>("flax.core/sdk_services#type:ModifierKey", "symbolModifier")]),
};
export const ModifierKey = Object.freeze(_flaxBindInstanceType<ModifierKey, typeof _flaxEnum_ModifierKey_api>(_flaxEnum_ModifierKey_api, "flax.core/sdk_services#type:ModifierKey", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ModifierKey_api & _FlaxInstanceType<ModifierKey> & _FlaxDartType<ModifierKey, readonly ["class", "flax.core/sdk_services#type:ModifierKey", readonly [], false]>);

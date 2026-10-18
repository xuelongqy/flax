// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyboardSide extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/raw_keyboard.dart::KeyboardSide">, Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::KeyboardSide": readonly [] }> { readonly __KeyboardSide: unique symbol;
readonly [_flaxDartTypeValue]: KeyboardSide;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:KeyboardSide", ["any","left","right","all"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_KeyboardSide_api = {
any: enumValue<KeyboardSide>("flax.core/sdk_services#type:KeyboardSide", "any"),
left: enumValue<KeyboardSide>("flax.core/sdk_services#type:KeyboardSide", "left"),
right: enumValue<KeyboardSide>("flax.core/sdk_services#type:KeyboardSide", "right"),
all: enumValue<KeyboardSide>("flax.core/sdk_services#type:KeyboardSide", "all"),
values: Object.freeze([enumValue<KeyboardSide>("flax.core/sdk_services#type:KeyboardSide", "any"), enumValue<KeyboardSide>("flax.core/sdk_services#type:KeyboardSide", "left"), enumValue<KeyboardSide>("flax.core/sdk_services#type:KeyboardSide", "right"), enumValue<KeyboardSide>("flax.core/sdk_services#type:KeyboardSide", "all")]),
};
export const KeyboardSide = Object.freeze(_flaxBindInstanceType<KeyboardSide, typeof _flaxEnum_KeyboardSide_api>(_flaxEnum_KeyboardSide_api, "flax.core/sdk_services#type:KeyboardSide", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_KeyboardSide_api & _FlaxInstanceType<KeyboardSide> & _FlaxDartType<KeyboardSide, readonly ["class", "flax.core/sdk_services#type:KeyboardSide", readonly [], false]>);

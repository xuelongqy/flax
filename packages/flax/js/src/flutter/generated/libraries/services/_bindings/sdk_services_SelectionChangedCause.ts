// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionChangedCause extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::SelectionChangedCause">, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::SelectionChangedCause": readonly [] }> { readonly __SelectionChangedCause: unique symbol;
readonly [_flaxDartTypeValue]: SelectionChangedCause;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:SelectionChangedCause", ["tap","doubleTap","longPress","forcePress","keyboard","toolbar","drag","stylusHandwriting"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SelectionChangedCause_api = {
tap: enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "tap"),
doubleTap: enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "doubleTap"),
longPress: enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "longPress"),
forcePress: enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "forcePress"),
keyboard: enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "keyboard"),
toolbar: enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "toolbar"),
drag: enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "drag"),
stylusHandwriting: enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "stylusHandwriting"),
values: Object.freeze([enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "tap"), enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "doubleTap"), enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "longPress"), enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "forcePress"), enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "keyboard"), enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "toolbar"), enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "drag"), enumValue<SelectionChangedCause>("flax.core/sdk_services#type:SelectionChangedCause", "stylusHandwriting")]),
get scribble(): SelectionChangedCause { return invokeTopLevel("flax.core/sdk_services#read:SelectionChangedCause.scribble", []) as SelectionChangedCause; },
};
export const SelectionChangedCause = Object.freeze(_flaxBindInstanceType<SelectionChangedCause, typeof _flaxEnum_SelectionChangedCause_api>(_flaxEnum_SelectionChangedCause_api, "flax.core/sdk_services#type:SelectionChangedCause", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SelectionChangedCause_api & _FlaxInstanceType<SelectionChangedCause> & _FlaxDartType<SelectionChangedCause, readonly ["class", "flax.core/sdk_services#type:SelectionChangedCause", readonly [], false]>);

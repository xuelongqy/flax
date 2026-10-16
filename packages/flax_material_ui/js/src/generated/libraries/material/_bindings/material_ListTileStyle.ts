// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface ListTileStyle extends DartEnum { readonly __ListTileStyle: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.material/material#type:ListTileStyle", ["list","drawer"]);
const _flaxEnum_ListTileStyle_api = {
list: enumValue<ListTileStyle>("flax.material/material#type:ListTileStyle", "list"),
drawer: enumValue<ListTileStyle>("flax.material/material#type:ListTileStyle", "drawer"),
values: Object.freeze([enumValue<ListTileStyle>("flax.material/material#type:ListTileStyle", "list"), enumValue<ListTileStyle>("flax.material/material#type:ListTileStyle", "drawer")]),
};
export const ListTileStyle = Object.freeze(_flaxBindInstanceType<ListTileStyle, typeof _flaxEnum_ListTileStyle_api>(_flaxEnum_ListTileStyle_api, "flax.material/material#type:ListTileStyle", []) as typeof _flaxEnum_ListTileStyle_api & _FlaxInstanceType<ListTileStyle> & _FlaxDartType<ListTileStyle, readonly ["class", "flax.material/material#type:ListTileStyle", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

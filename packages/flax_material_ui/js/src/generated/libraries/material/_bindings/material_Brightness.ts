// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface Brightness extends DartEnum { readonly __Brightness: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.material/material#type:Brightness", ["dark","light"]);
const _flaxEnum_Brightness_api = {
dark: enumValue<Brightness>("flax.material/material#type:Brightness", "dark"),
light: enumValue<Brightness>("flax.material/material#type:Brightness", "light"),
values: Object.freeze([enumValue<Brightness>("flax.material/material#type:Brightness", "dark"), enumValue<Brightness>("flax.material/material#type:Brightness", "light")]),
};
export const Brightness = Object.freeze(_flaxBindInstanceType<Brightness, typeof _flaxEnum_Brightness_api>(_flaxEnum_Brightness_api, "flax.material/material#type:Brightness", []) as typeof _flaxEnum_Brightness_api & _FlaxInstanceType<Brightness> & _FlaxDartType<Brightness, readonly ["class", "flax.material/material#type:Brightness", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BorderStyle extends DartEnum { readonly __BorderStyle: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:BorderStyle", ["none","solid"]);
const _flaxEnum_BorderStyle_api = {
none: enumValue<BorderStyle>("flax.core/flutter#type:BorderStyle", "none"),
solid: enumValue<BorderStyle>("flax.core/flutter#type:BorderStyle", "solid"),
values: Object.freeze([enumValue<BorderStyle>("flax.core/flutter#type:BorderStyle", "none"), enumValue<BorderStyle>("flax.core/flutter#type:BorderStyle", "solid")]),
};
export const BorderStyle = Object.freeze(_flaxBindInstanceType<BorderStyle, typeof _flaxEnum_BorderStyle_api>(_flaxEnum_BorderStyle_api, "flax.core/flutter#type:BorderStyle", []) as typeof _flaxEnum_BorderStyle_api & _FlaxInstanceType<BorderStyle> & _FlaxDartType<BorderStyle, readonly ["class", "flax.core/flutter#type:BorderStyle", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

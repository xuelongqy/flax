// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BoxFit extends DartEnum { readonly __BoxFit: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:BoxFit", ["fill","contain","cover","fitWidth","fitHeight","none","scaleDown"]);
const _flaxEnum_BoxFit_api = {
fill: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fill"),
contain: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "contain"),
cover: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "cover"),
fitWidth: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fitWidth"),
fitHeight: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fitHeight"),
none: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "none"),
scaleDown: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "scaleDown"),
values: Object.freeze([enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fill"), enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "contain"), enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "cover"), enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fitWidth"), enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fitHeight"), enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "none"), enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "scaleDown")]),
};
export const BoxFit = Object.freeze(_flaxBindInstanceType<BoxFit, typeof _flaxEnum_BoxFit_api>(_flaxEnum_BoxFit_api, "flax.core/flutter#type:BoxFit", []) as typeof _flaxEnum_BoxFit_api & _FlaxInstanceType<BoxFit> & _FlaxDartType<BoxFit, readonly ["class", "flax.core/flutter#type:BoxFit", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Clip extends DartEnum { readonly __Clip: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:Clip", ["none","hardEdge","antiAlias","antiAliasWithSaveLayer"]);
const _flaxEnum_Clip_api = {
none: enumValue<Clip>("flax.core/flutter#type:Clip", "none"),
hardEdge: enumValue<Clip>("flax.core/flutter#type:Clip", "hardEdge"),
antiAlias: enumValue<Clip>("flax.core/flutter#type:Clip", "antiAlias"),
antiAliasWithSaveLayer: enumValue<Clip>("flax.core/flutter#type:Clip", "antiAliasWithSaveLayer"),
values: Object.freeze([enumValue<Clip>("flax.core/flutter#type:Clip", "none"), enumValue<Clip>("flax.core/flutter#type:Clip", "hardEdge"), enumValue<Clip>("flax.core/flutter#type:Clip", "antiAlias"), enumValue<Clip>("flax.core/flutter#type:Clip", "antiAliasWithSaveLayer")]),
};
export const Clip = Object.freeze(_flaxBindInstanceType<Clip, typeof _flaxEnum_Clip_api>(_flaxEnum_Clip_api, "flax.core/flutter#type:Clip", []) as typeof _flaxEnum_Clip_api & _FlaxInstanceType<Clip> & _FlaxDartType<Clip, readonly ["class", "flax.core/flutter#type:Clip", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

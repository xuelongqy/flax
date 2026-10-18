// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface MainAxisSize extends DartEnum { readonly __MainAxisSize: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:MainAxisSize", ["min","max"]);
const _flaxEnum_MainAxisSize_api = {
min: enumValue<MainAxisSize>("flax.core/flutter#type:MainAxisSize", "min"),
max: enumValue<MainAxisSize>("flax.core/flutter#type:MainAxisSize", "max"),
values: Object.freeze([enumValue<MainAxisSize>("flax.core/flutter#type:MainAxisSize", "min"), enumValue<MainAxisSize>("flax.core/flutter#type:MainAxisSize", "max")]),
};
export const MainAxisSize = Object.freeze(_flaxBindInstanceType<MainAxisSize, typeof _flaxEnum_MainAxisSize_api>(_flaxEnum_MainAxisSize_api, "flax.core/flutter#type:MainAxisSize", []) as typeof _flaxEnum_MainAxisSize_api & _FlaxInstanceType<MainAxisSize> & _FlaxDartType<MainAxisSize, readonly ["class", "flax.core/flutter#type:MainAxisSize", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

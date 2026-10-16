// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StackFit extends DartEnum { readonly __StackFit: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:StackFit", ["loose","expand","passthrough"]);
const _flaxEnum_StackFit_api = {
loose: enumValue<StackFit>("flax.core/flutter#type:StackFit", "loose"),
expand: enumValue<StackFit>("flax.core/flutter#type:StackFit", "expand"),
passthrough: enumValue<StackFit>("flax.core/flutter#type:StackFit", "passthrough"),
values: Object.freeze([enumValue<StackFit>("flax.core/flutter#type:StackFit", "loose"), enumValue<StackFit>("flax.core/flutter#type:StackFit", "expand"), enumValue<StackFit>("flax.core/flutter#type:StackFit", "passthrough")]),
};
export const StackFit = Object.freeze(_flaxBindInstanceType<StackFit, typeof _flaxEnum_StackFit_api>(_flaxEnum_StackFit_api, "flax.core/flutter#type:StackFit", []) as typeof _flaxEnum_StackFit_api & _FlaxInstanceType<StackFit> & _FlaxDartType<StackFit, readonly ["class", "flax.core/flutter#type:StackFit", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

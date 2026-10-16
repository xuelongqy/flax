// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface ConnectionState extends DartEnum { readonly __ConnectionState: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:ConnectionState", ["none","waiting","active","done"]);
const _flaxEnum_ConnectionState_api = {
none: enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "none"),
waiting: enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "waiting"),
active: enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "active"),
done: enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "done"),
values: Object.freeze([enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "none"), enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "waiting"), enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "active"), enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "done")]),
};
export const ConnectionState = Object.freeze(_flaxBindInstanceType<ConnectionState, typeof _flaxEnum_ConnectionState_api>(_flaxEnum_ConnectionState_api, "flax.core/flutter#type:ConnectionState", []) as typeof _flaxEnum_ConnectionState_api & _FlaxInstanceType<ConnectionState> & _FlaxDartType<ConnectionState, readonly ["class", "flax.core/flutter#type:ConnectionState", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

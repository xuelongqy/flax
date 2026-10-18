// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface WidgetState extends DartEnum { readonly __WidgetState: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:WidgetState", ["hovered","focused","pressed","dragged","selected","scrolledUnder","disabled","error"]);
const _flaxEnum_WidgetState_api = {
hovered: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "hovered"),
focused: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "focused"),
pressed: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "pressed"),
dragged: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "dragged"),
selected: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "selected"),
scrolledUnder: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "scrolledUnder"),
disabled: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "disabled"),
error: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "error"),
values: Object.freeze([enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "hovered"), enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "focused"), enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "pressed"), enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "dragged"), enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "selected"), enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "scrolledUnder"), enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "disabled"), enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "error")]),
};
export const WidgetState = Object.freeze(_flaxBindInstanceType<WidgetState, typeof _flaxEnum_WidgetState_api>(_flaxEnum_WidgetState_api, "flax.core/flutter#type:WidgetState", []) as typeof _flaxEnum_WidgetState_api & _FlaxInstanceType<WidgetState> & _FlaxDartType<WidgetState, readonly ["class", "flax.core/flutter#type:WidgetState", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

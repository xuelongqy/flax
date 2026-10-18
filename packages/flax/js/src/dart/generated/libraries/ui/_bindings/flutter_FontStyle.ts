// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface FontStyle extends DartEnum { readonly __FontStyle: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:FontStyle", ["normal","italic"]);
const _flaxEnum_FontStyle_api = {
normal: enumValue<FontStyle>("flax.core/flutter#type:FontStyle", "normal"),
italic: enumValue<FontStyle>("flax.core/flutter#type:FontStyle", "italic"),
values: Object.freeze([enumValue<FontStyle>("flax.core/flutter#type:FontStyle", "normal"), enumValue<FontStyle>("flax.core/flutter#type:FontStyle", "italic")]),
};
export const FontStyle = Object.freeze(_flaxBindInstanceType<FontStyle, typeof _flaxEnum_FontStyle_api>(_flaxEnum_FontStyle_api, "flax.core/flutter#type:FontStyle", []) as typeof _flaxEnum_FontStyle_api & _FlaxInstanceType<FontStyle> & _FlaxDartType<FontStyle, readonly ["class", "flax.core/flutter#type:FontStyle", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

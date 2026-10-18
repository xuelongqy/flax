// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface TextDirection extends DartEnum { readonly __TextDirection: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.core/flutter#type:TextDirection", ["rtl","ltr"]);
const _flaxEnum_TextDirection_api = {
rtl: enumValue<TextDirection>("flax.core/flutter#type:TextDirection", "rtl"),
ltr: enumValue<TextDirection>("flax.core/flutter#type:TextDirection", "ltr"),
values: Object.freeze([enumValue<TextDirection>("flax.core/flutter#type:TextDirection", "rtl"), enumValue<TextDirection>("flax.core/flutter#type:TextDirection", "ltr")]),
};
export const TextDirection = Object.freeze(_flaxBindInstanceType<TextDirection, typeof _flaxEnum_TextDirection_api>(_flaxEnum_TextDirection_api, "flax.core/flutter#type:TextDirection", []) as typeof _flaxEnum_TextDirection_api & _FlaxInstanceType<TextDirection> & _FlaxDartType<TextDirection, readonly ["class", "flax.core/flutter#type:TextDirection", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';

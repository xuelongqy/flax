// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextGranularity extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/selection.dart::TextGranularity">, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::TextGranularity": readonly [] }> { readonly __TextGranularity: unique symbol;
readonly [_flaxDartTypeValue]: TextGranularity;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_rendering#type:TextGranularity", ["character","word","paragraph","line","document"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TextGranularity_api = {
character: enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "character"),
word: enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "word"),
paragraph: enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "paragraph"),
line: enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "line"),
document: enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "document"),
values: Object.freeze([enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "character"), enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "word"), enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "paragraph"), enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "line"), enumValue<TextGranularity>("flax.core/sdk_rendering#type:TextGranularity", "document")]),
};
export const TextGranularity = Object.freeze(_flaxBindInstanceType<TextGranularity, typeof _flaxEnum_TextGranularity_api>(_flaxEnum_TextGranularity_api, "flax.core/sdk_rendering#type:TextGranularity", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TextGranularity_api & _FlaxInstanceType<TextGranularity> & _FlaxDartType<TextGranularity, readonly ["class", "flax.core/sdk_rendering#type:TextGranularity", readonly [], false]>);

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextCapitalization extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::TextCapitalization">, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextCapitalization": readonly [] }> { readonly __TextCapitalization: unique symbol;
readonly [_flaxDartTypeValue]: TextCapitalization;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:TextCapitalization", ["words","sentences","characters","none"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TextCapitalization_api = {
words: enumValue<TextCapitalization>("flax.core/sdk_services#type:TextCapitalization", "words"),
sentences: enumValue<TextCapitalization>("flax.core/sdk_services#type:TextCapitalization", "sentences"),
characters: enumValue<TextCapitalization>("flax.core/sdk_services#type:TextCapitalization", "characters"),
none: enumValue<TextCapitalization>("flax.core/sdk_services#type:TextCapitalization", "none"),
values: Object.freeze([enumValue<TextCapitalization>("flax.core/sdk_services#type:TextCapitalization", "words"), enumValue<TextCapitalization>("flax.core/sdk_services#type:TextCapitalization", "sentences"), enumValue<TextCapitalization>("flax.core/sdk_services#type:TextCapitalization", "characters"), enumValue<TextCapitalization>("flax.core/sdk_services#type:TextCapitalization", "none")]),
};
export const TextCapitalization = Object.freeze(_flaxBindInstanceType<TextCapitalization, typeof _flaxEnum_TextCapitalization_api>(_flaxEnum_TextCapitalization_api, "flax.core/sdk_services#type:TextCapitalization", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TextCapitalization_api & _FlaxInstanceType<TextCapitalization> & _FlaxDartType<TextCapitalization, readonly ["class", "flax.core/sdk_services#type:TextCapitalization", readonly [], false]>);

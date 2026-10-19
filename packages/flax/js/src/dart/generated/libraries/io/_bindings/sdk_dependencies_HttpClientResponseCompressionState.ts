// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HttpClientResponseCompressionState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:_http::HttpClientResponseCompressionState">, Readonly<{ "__flaxBound:dart:_http::HttpClientResponseCompressionState": readonly [] }> { readonly __HttpClientResponseCompressionState: unique symbol;
readonly [_flaxDartTypeValue]: HttpClientResponseCompressionState;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", ["notCompressed","decompressed","compressed"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_HttpClientResponseCompressionState_api = {
notCompressed: enumValue<HttpClientResponseCompressionState>("flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", "notCompressed"),
decompressed: enumValue<HttpClientResponseCompressionState>("flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", "decompressed"),
compressed: enumValue<HttpClientResponseCompressionState>("flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", "compressed"),
values: Object.freeze([enumValue<HttpClientResponseCompressionState>("flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", "notCompressed"), enumValue<HttpClientResponseCompressionState>("flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", "decompressed"), enumValue<HttpClientResponseCompressionState>("flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", "compressed")]),
};
export const HttpClientResponseCompressionState = Object.freeze(_flaxBindInstanceType<HttpClientResponseCompressionState, typeof _flaxEnum_HttpClientResponseCompressionState_api>(_flaxEnum_HttpClientResponseCompressionState_api, "flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_HttpClientResponseCompressionState_api & _FlaxInstanceType<HttpClientResponseCompressionState> & _FlaxDartType<HttpClientResponseCompressionState, readonly ["class", "flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", readonly [], false]>);

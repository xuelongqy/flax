// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_HttpClient';
import '@flax/dart/io/_bindings/sdk_dependencies_HttpClient';
import { _flaxMemberParameters68 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export function getDebugNetworkImageHttpClientProvider(): (() => upstream0.HttpClient) | null { return invokeTopLevel("flax.core/sdk_painting#read:debugNetworkImageHttpClientProvider", []) as (() => upstream0.HttpClient) | null; }
function _flaxTopLevel_setDebugNetworkImageHttpClientProvider(value: (() => Readonly<{ "__flaxBound:dart:_http::HttpClient": readonly [] }>) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:debugNetworkImageHttpClientProvider%3D", [value], _flaxMemberParameters68);
}
export { _flaxTopLevel_setDebugNetworkImageHttpClientProvider as setDebugNetworkImageHttpClientProvider };

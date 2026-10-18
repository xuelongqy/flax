// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageStreamListener extends Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [] }> { readonly __ImageStreamListener: unique symbol;
readonly [_flaxDartTypeValue]: ImageStreamListener;

}
defineObject("flax.core/sdk_painting#type:ImageStreamListener", ["onImage","onChunk","onError","reportErrors"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageStreamListener", "object", {}, {}), []);
const _ImageStreamListenerProxy = {type: "flax.core/sdk_painting#type:ImageStreamListener", parameters: [{"name":"onImage","required":true,"positional":true},{"name":"onChunk","required":false,"positional":false},{"name":"onError","required":false,"positional":false},{"name":"reportErrors","required":false,"positional":false}], constructors: {"":[{"name":"onImage","required":true,"positional":true},{"name":"onChunk","required":false,"positional":false},{"name":"onError","required":false,"positional":false},{"name":"reportErrors","required":false,"positional":false}]}, methods: {}, getters: ["onImage","onChunk","onError","reportErrors"], setters: [], contextMembers: [], superMembers: ["get:onImage","get:onChunk","get:onError","get:reportErrors"]} as const;
export interface ImageStreamListener {
readonly [_flaxDartTypeValue]: ImageStreamListener;

get onImage(): ((image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [] }>, synchronousCall: boolean) => void);
get onChunk(): ((event: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => void) | null;
get onError(): ((exception: {}, stackTrace: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null) => void) | null;
get reportErrors(): boolean;
}
export abstract class ImageStreamListener extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageStreamListener>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageStreamListener;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageStreamListener", readonly [], false];
constructor(onImage: ((image: upstream0.ImageInfo, synchronousCall: boolean) => void), options?: {onChunk?: ((event: upstream1.ImageChunkEvent) => void) | null | undefined; onError?: ((exception: {}, stackTrace: upstream2.StackTrace | null) => void) | null | undefined; reportErrors?: boolean | undefined}) { super(_ImageStreamListenerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ImageStreamListener.prototype, _ImageStreamListenerProxy);
export namespace ImageStreamListener { export function implement(args: [onImage: ((image: upstream0.ImageInfo, synchronousCall: boolean) => void), options?: {onChunk?: ((event: upstream1.ImageChunkEvent) => void) | null | undefined; onError?: ((exception: {}, stackTrace: upstream2.StackTrace | null) => void) | null | undefined; reportErrors?: boolean | undefined}], implementation: {}): ImageStreamListener {
return constructProxy(_ImageStreamListenerProxy, args, implementation) as ImageStreamListener; } }
_flaxBindInstanceType<ImageStreamListener, typeof ImageStreamListener>(ImageStreamListener, "flax.core/sdk_painting#type:ImageStreamListener", ["dart:core::Object"]);

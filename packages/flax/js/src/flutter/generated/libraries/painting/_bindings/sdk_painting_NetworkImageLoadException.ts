// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { _flaxMemberParameters2, _flaxMemberParameters105 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NetworkImageLoadException extends Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::NetworkImageLoadException": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Exception": readonly [] }> { readonly __NetworkImageLoadException: unique symbol;
readonly [_flaxDartTypeValue]: NetworkImageLoadException;

readonly statusCode: number;
readonly uri: upstream0.Uri;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:NetworkImageLoadException", ["statusCode","uri"], [], _flaxBindingMethods("flax.core/sdk_painting#type:NetworkImageLoadException", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _NetworkImageLoadExceptionFactory(options: { statusCode: number; uri: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> }): NetworkImageLoadException {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:NetworkImageLoadException", "", [{"name":"statusCode","required":true},{"name":"uri","required":true}], [], options) as NetworkImageLoadException;
}
const _NetworkImageLoadExceptionProxy = {type: "flax.core/sdk_painting#type:NetworkImageLoadException", parameters: _flaxMemberParameters105, constructors: {"": _flaxMemberParameters105}, methods: {"toString":_flaxMemberParameters2}, getters: ["statusCode","uri"], setters: [], contextMembers: [], superMembers: ["get:statusCode","get:uri","toString"]} as const;
export interface _NetworkImageLoadExceptionNative extends NetworkImageLoadException {
readonly [_flaxDartTypeValue]: _NetworkImageLoadExceptionNative;

toString(): string;
get statusCode(): number;
get uri(): upstream0.Uri;
}
export abstract class _NetworkImageLoadExceptionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NetworkImageLoadException>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NetworkImageLoadException;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:NetworkImageLoadException", readonly [], false];
constructor(options: {statusCode: number; uri: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>}) { super(_NetworkImageLoadExceptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_NetworkImageLoadExceptionNative.prototype, _NetworkImageLoadExceptionProxy);
export namespace _NetworkImageLoadExceptionFactory { export function implement(args: [options: {statusCode: number; uri: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>}], implementation: {}): NetworkImageLoadException {
return constructProxy(_NetworkImageLoadExceptionProxy, args, implementation) as NetworkImageLoadException; } }
const _NetworkImageLoadExceptionBinding = _flaxProxyFactory(_NetworkImageLoadExceptionFactory, _NetworkImageLoadExceptionNative) as unknown as typeof _NetworkImageLoadExceptionFactory & (new(options: {statusCode: number; uri: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>}) => _NetworkImageLoadExceptionNative);
export const NetworkImageLoadException: typeof _NetworkImageLoadExceptionBinding & _FlaxInstanceType<NetworkImageLoadException> & _FlaxDartType<NetworkImageLoadException, readonly ["class", "flax.core/sdk_painting#type:NetworkImageLoadException", readonly [], false]> = _flaxBindInstanceType<NetworkImageLoadException, typeof _NetworkImageLoadExceptionBinding>(_NetworkImageLoadExceptionBinding, "flax.core/sdk_painting#type:NetworkImageLoadException", ["dart:core::Object","dart:core::Exception"]) as typeof _NetworkImageLoadExceptionBinding & _FlaxInstanceType<NetworkImageLoadException> & _FlaxDartType<NetworkImageLoadException, readonly ["class", "flax.core/sdk_painting#type:NetworkImageLoadException", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "statusCode" | "uri" | "toString" | "__flaxBound:package:flutter/src/painting/image_provider.dart::NetworkImageLoadException" | "__flaxBound:dart:core::Exception";

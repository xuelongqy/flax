// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters64 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformException extends Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::PlatformException": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Exception": readonly [] }> { readonly __PlatformException: unique symbol;
readonly [_flaxDartTypeValue]: PlatformException;

readonly code: string;
readonly message: string | null;
readonly details: unknown | null;
readonly stacktrace: string | null;
toString(): string;
}
defineObject("flax.core/sdk_services#type:PlatformException", ["code","message","details","stacktrace"], [], _flaxBindingMethods("flax.core/sdk_services#type:PlatformException", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _PlatformExceptionFactory(options: { code: string; message?: string | null | undefined; details?: unknown | null | undefined; stacktrace?: string | null | undefined }): PlatformException {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:PlatformException", "", [{"name":"code","required":true},{"name":"message"},{"name":"details"},{"name":"stacktrace"}], [], options) as PlatformException;
}
const _PlatformExceptionProxy = {type: "flax.core/sdk_services#type:PlatformException", parameters: _flaxMemberParameters64, constructors: {"": _flaxMemberParameters64}, methods: {"toString":_flaxMemberParameters0}, getters: ["code","message","details","stacktrace"], setters: [], contextMembers: [], superMembers: ["get:code","get:message","get:details","get:stacktrace","toString"]} as const;
export interface _PlatformExceptionNative extends PlatformException {
readonly [_flaxDartTypeValue]: _PlatformExceptionNative;

toString(): string;
get code(): string;
get message(): string | null;
get details(): unknown | null;
get stacktrace(): string | null;
}
export abstract class _PlatformExceptionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformException>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformException;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:PlatformException", readonly [], false];
constructor(options: {code: string; message?: string | null | undefined; details?: unknown | null | undefined; stacktrace?: string | null | undefined}) { super(_PlatformExceptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PlatformExceptionNative.prototype, _PlatformExceptionProxy);
export namespace _PlatformExceptionFactory { export function implement(args: [options: {code: string; message?: string | null | undefined; details?: unknown | null | undefined; stacktrace?: string | null | undefined}], implementation: {}): PlatformException {
return constructProxy(_PlatformExceptionProxy, args, implementation) as PlatformException; } }
const _PlatformExceptionBinding = _flaxProxyFactory(_PlatformExceptionFactory, _PlatformExceptionNative) as unknown as typeof _PlatformExceptionFactory & (new(options: {code: string; message?: string | null | undefined; details?: unknown | null | undefined; stacktrace?: string | null | undefined}) => _PlatformExceptionNative);
export const PlatformException: typeof _PlatformExceptionBinding & _FlaxInstanceType<PlatformException> & _FlaxDartType<PlatformException, readonly ["class", "flax.core/sdk_services#type:PlatformException", readonly [], false]> = _flaxBindInstanceType<PlatformException, typeof _PlatformExceptionBinding>(_PlatformExceptionBinding, "flax.core/sdk_services#type:PlatformException", ["dart:core::Object","dart:core::Exception"]) as typeof _PlatformExceptionBinding & _FlaxInstanceType<PlatformException> & _FlaxDartType<PlatformException, readonly ["class", "flax.core/sdk_services#type:PlatformException", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "code" | "message" | "details" | "stacktrace" | "toString" | "__flaxBound:package:flutter/src/services/message_codec.dart::PlatformException" | "__flaxBound:dart:core::Exception";

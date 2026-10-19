// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"code","required":true},{"name":"message"},{"name":"details"},{"name":"stacktrace"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlatformException extends Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::PlatformException": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Exception": readonly [] }> { readonly __PlatformException: unique symbol;
readonly [_flaxDartTypeValue]: PlatformException;

}
defineObject("flax.core/sdk_services#type:PlatformException", ["code","message","details","stacktrace"], [], _flaxBindingMethods("flax.core/sdk_services#type:PlatformException", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _PlatformExceptionProxy = {type: "flax.core/sdk_services#type:PlatformException", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["code","message","details","stacktrace"], setters: [], contextMembers: [], superMembers: ["get:code","get:message","get:details","get:stacktrace","toString"]} as const;
export interface PlatformException {
readonly [_flaxDartTypeValue]: PlatformException;

toString(): string;
get code(): string;
get message(): string | null;
get details(): unknown | null;
get stacktrace(): string | null;
}
export abstract class PlatformException extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlatformException>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlatformException;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:PlatformException", readonly [], false];
constructor(options: {code: string; message?: string | null | undefined; details?: unknown | null | undefined; stacktrace?: string | null | undefined}) { super(_PlatformExceptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PlatformException.prototype, _PlatformExceptionProxy);
export namespace PlatformException { export function implement(args: [options: {code: string; message?: string | null | undefined; details?: unknown | null | undefined; stacktrace?: string | null | undefined}], implementation: {}): PlatformException {
return constructProxy(_PlatformExceptionProxy, args, implementation) as PlatformException; } }
_flaxBindInstanceType<PlatformException, typeof PlatformException>(PlatformException, "flax.core/sdk_services#type:PlatformException", ["dart:core::Object","dart:core::Exception"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "code" | "message" | "details" | "stacktrace" | "toString" | "__flaxBound:package:flutter/src/services/message_codec.dart::PlatformException" | "__flaxBound:dart:core::Exception";

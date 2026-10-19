// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters57 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MissingPluginException extends Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MissingPluginException": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Exception": readonly [] }> { readonly __MissingPluginException: unique symbol;
readonly [_flaxDartTypeValue]: MissingPluginException;

}
defineObject("flax.core/sdk_services#type:MissingPluginException", ["message"], [], _flaxBindingMethods("flax.core/sdk_services#type:MissingPluginException", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _MissingPluginExceptionProxy = {type: "flax.core/sdk_services#type:MissingPluginException", parameters: _flaxMemberParameters57, constructors: {"": _flaxMemberParameters57}, methods: {"toString":_flaxMemberParameters0}, getters: ["message"], setters: [], contextMembers: [], superMembers: ["get:message","toString"]} as const;
export interface MissingPluginException {
readonly [_flaxDartTypeValue]: MissingPluginException;

toString(): string;
get message(): string | null;
}
export abstract class MissingPluginException extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MissingPluginException>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MissingPluginException;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MissingPluginException", readonly [], false];
constructor(message?: string | null) { super(_MissingPluginExceptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MissingPluginException.prototype, _MissingPluginExceptionProxy);
export namespace MissingPluginException { export function implement(args: [message?: string | null], implementation: {}): MissingPluginException {
return constructProxy(_MissingPluginExceptionProxy, args, implementation) as MissingPluginException; } }
_flaxBindInstanceType<MissingPluginException, typeof MissingPluginException>(MissingPluginException, "flax.core/sdk_services#type:MissingPluginException", ["dart:core::Object","dart:core::Exception"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "message" | "toString" | "__flaxBound:package:flutter/src/services/message_codec.dart::MissingPluginException" | "__flaxBound:dart:core::Exception";

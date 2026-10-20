// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ContentSensitivity';
import '@flax/flutter/services/_bindings/sdk_services_ContentSensitivity';
import { _flaxMemberParameters88, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SensitiveContentService extends Readonly<{ "__flaxBound:package:flutter/src/services/sensitive_content.dart::SensitiveContentService": readonly [] }> { readonly __SensitiveContentService: unique symbol;
readonly [_flaxDartTypeValue]: SensitiveContentService;

get sensitiveContentChannel(): upstream0.MethodChannel;
setContentSensitivity(contentSensitivity: upstream1.ContentSensitivity): Promise<void>;
getContentSensitivity(): Promise<upstream1.ContentSensitivity>;
isSupported(): Promise<boolean>;
set sensitiveContentChannel(value: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }>);
}
defineObject("flax.core/sdk_services#type:SensitiveContentService", ["sensitiveContentChannel"], ["sensitiveContentChannel"], _flaxBindingMethods("flax.core/sdk_services#type:SensitiveContentService", "object", {"setContentSensitivity":_flaxMemberParameters88,"getContentSensitivity":_flaxMemberParameters0,"isSupported":_flaxMemberParameters0}, {}), []);
export function _SensitiveContentServiceFactory(): SensitiveContentService {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:SensitiveContentService", "", _flaxMemberParameters0, [], {}) as SensitiveContentService;
}
const _SensitiveContentServiceProxy = {type: "flax.core/sdk_services#type:SensitiveContentService", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"setContentSensitivity":_flaxMemberParameters88,"getContentSensitivity":_flaxMemberParameters0,"isSupported":_flaxMemberParameters0}, getters: ["sensitiveContentChannel"], setters: ["sensitiveContentChannel"], contextMembers: [], superMembers: ["get:sensitiveContentChannel","set:sensitiveContentChannel","setContentSensitivity","getContentSensitivity","isSupported"]} as const;
export interface _SensitiveContentServiceNative extends SensitiveContentService {
readonly [_flaxDartTypeValue]: _SensitiveContentServiceNative;

setContentSensitivity(contentSensitivity: upstream1.ContentSensitivity): Promise<void>;
getContentSensitivity(): Promise<upstream1.ContentSensitivity>;
isSupported(): Promise<boolean>;
get sensitiveContentChannel(): upstream0.MethodChannel;
set sensitiveContentChannel(value: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }>);
}
export abstract class _SensitiveContentServiceNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SensitiveContentService>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SensitiveContentService;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SensitiveContentService", readonly [], false];
constructor() { super(_SensitiveContentServiceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SensitiveContentServiceNative.prototype, _SensitiveContentServiceProxy);
export namespace _SensitiveContentServiceFactory { export function implement(args: [], implementation: {}): SensitiveContentService {
return constructProxy(_SensitiveContentServiceProxy, args, implementation) as SensitiveContentService; } }
const _SensitiveContentServiceBinding = _flaxProxyFactory(_SensitiveContentServiceFactory, _SensitiveContentServiceNative) as unknown as typeof _SensitiveContentServiceFactory & (new() => _SensitiveContentServiceNative);
export const SensitiveContentService: typeof _SensitiveContentServiceBinding & _FlaxInstanceType<SensitiveContentService> & _FlaxDartType<SensitiveContentService, readonly ["class", "flax.core/sdk_services#type:SensitiveContentService", readonly [], false]> = _flaxBindInstanceType<SensitiveContentService, typeof _SensitiveContentServiceBinding>(_SensitiveContentServiceBinding, "flax.core/sdk_services#type:SensitiveContentService", ["dart:core::Object"]) as typeof _SensitiveContentServiceBinding & _FlaxInstanceType<SensitiveContentService> & _FlaxDartType<SensitiveContentService, readonly ["class", "flax.core/sdk_services#type:SensitiveContentService", readonly [], false]>;

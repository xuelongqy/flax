// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ContentSensitivity';
import '@flax/flutter/services/_bindings/sdk_services_ContentSensitivity';
const _flaxMemberParameters0 = [{"name":"contentSensitivity","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SensitiveContentService extends Readonly<{ "__flaxBound:package:flutter/src/services/sensitive_content.dart::SensitiveContentService": readonly [] }> { readonly __SensitiveContentService: unique symbol;
readonly [_flaxDartTypeValue]: SensitiveContentService;

}
defineObject("flax.core/sdk_services#type:SensitiveContentService", ["sensitiveContentChannel"], ["sensitiveContentChannel"], _flaxBindingMethods("flax.core/sdk_services#type:SensitiveContentService", "object", {"setContentSensitivity":_flaxMemberParameters0,"getContentSensitivity":_flaxMemberParameters1,"isSupported":_flaxMemberParameters1}, {}), []);
const _SensitiveContentServiceProxy = {type: "flax.core/sdk_services#type:SensitiveContentService", parameters: [], constructors: {"":[]}, methods: {"setContentSensitivity":_flaxMemberParameters0,"getContentSensitivity":_flaxMemberParameters1,"isSupported":_flaxMemberParameters1}, getters: ["sensitiveContentChannel"], setters: ["sensitiveContentChannel"], contextMembers: [], superMembers: ["get:sensitiveContentChannel","set:sensitiveContentChannel","setContentSensitivity","getContentSensitivity","isSupported"]} as const;
export interface SensitiveContentService {
readonly [_flaxDartTypeValue]: SensitiveContentService;

setContentSensitivity(contentSensitivity: upstream1.ContentSensitivity): Promise<void>;
getContentSensitivity(): Promise<upstream1.ContentSensitivity>;
isSupported(): Promise<boolean>;
get sensitiveContentChannel(): upstream0.MethodChannel;
set sensitiveContentChannel(value: Readonly<{ "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [] }>);
}
export abstract class SensitiveContentService extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SensitiveContentService>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SensitiveContentService;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SensitiveContentService", readonly [], false];
constructor() { super(_SensitiveContentServiceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SensitiveContentService.prototype, _SensitiveContentServiceProxy);
export namespace SensitiveContentService { export function implement(args: [], implementation: {}): SensitiveContentService {
return constructProxy(_SensitiveContentServiceProxy, args, implementation) as SensitiveContentService; } }
_flaxBindInstanceType<SensitiveContentService, typeof SensitiveContentService>(SensitiveContentService, "flax.core/sdk_services#type:SensitiveContentService", ["dart:core::Object"]);

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_ProcessTextService';
import '@flax/flutter/services/_bindings/sdk_services_ProcessTextService';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ProcessTextAction';
import '@flax/flutter/services/_bindings/sdk_services_ProcessTextAction';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"id","required":true,"positional":true},{"name":"text","required":true,"positional":true},{"name":"readOnly","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DefaultProcessTextService extends Omit<upstream0.ProcessTextService, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/process_text.dart::DefaultProcessTextService": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextService": readonly [] }> { readonly __DefaultProcessTextService: unique symbol;
readonly [_flaxDartTypeValue]: DefaultProcessTextService;

}
defineObject("flax.core/sdk_services#type:DefaultProcessTextService", [], [], _flaxBindingMethods("flax.core/sdk_services#type:DefaultProcessTextService", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:ProcessTextService");
const _DefaultProcessTextServiceProxy = {type: "flax.core/sdk_services#type:DefaultProcessTextService", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"queryTextActions":_flaxMemberParameters0,"processTextAction":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["queryTextActions","processTextAction"]} as const;
export interface DefaultProcessTextService {
readonly [_flaxDartTypeValue]: DefaultProcessTextService;

queryTextActions(): Promise<DartList<upstream1.ProcessTextAction>>;
processTextAction(id: string, text: string, readOnly: boolean): Promise<string | null>;
}
export abstract class DefaultProcessTextService extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultProcessTextService>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DefaultProcessTextService;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:DefaultProcessTextService", readonly [], false];
constructor() { super(_DefaultProcessTextServiceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DefaultProcessTextService.prototype, _DefaultProcessTextServiceProxy);
export namespace DefaultProcessTextService { export function implement(args: [], implementation: {}): DefaultProcessTextService {
return constructProxy(_DefaultProcessTextServiceProxy, args, implementation) as DefaultProcessTextService; } }
_flaxBindInstanceType<DefaultProcessTextService, typeof DefaultProcessTextService>(DefaultProcessTextService, "flax.core/sdk_services#type:DefaultProcessTextService", ["dart:core::Object","flax.core/sdk_services#type:ProcessTextService"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "queryTextActions" | "processTextAction" | "__flaxBound:package:flutter/src/services/process_text.dart::DefaultProcessTextService" | "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextService";

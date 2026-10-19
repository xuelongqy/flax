// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
const _flaxMemberParameters0 = [{"name":"message","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"nodeId"}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TooltipSemanticsEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TooltipSemanticsEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [] }> { readonly __TooltipSemanticsEvent: unique symbol;
readonly [_flaxDartTypeValue]: TooltipSemanticsEvent;

}
defineObject("flax.core/sdk_semantics#type:TooltipSemanticsEvent", ["type","message"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:TooltipSemanticsEvent", "object", {}, {}), [], undefined, "flax.core/sdk_semantics#type:SemanticsEvent");
const _TooltipSemanticsEventProxy = {type: "flax.core/sdk_semantics#type:TooltipSemanticsEvent", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toMap":_flaxMemberParameters1,"getDataMap":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["message","type"], setters: [], contextMembers: [], superMembers: ["get:message","get:type","toMap","getDataMap","toString"]} as const;
export interface TooltipSemanticsEvent {
readonly [_flaxDartTypeValue]: TooltipSemanticsEvent;

toMap(options?: {nodeId?: number | null | undefined}): DartMap<string, unknown | null>;
getDataMap(): DartMap<string, unknown | null>;
toString(): string;
get message(): string;
get type(): string;
}
export abstract class TooltipSemanticsEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TooltipSemanticsEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TooltipSemanticsEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:TooltipSemanticsEvent", readonly [], false];
constructor(message: string) { super(_TooltipSemanticsEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TooltipSemanticsEvent.prototype, _TooltipSemanticsEventProxy);
export namespace TooltipSemanticsEvent { export function implement(args: [message: string], implementation: {}): TooltipSemanticsEvent {
return constructProxy(_TooltipSemanticsEventProxy, args, implementation) as TooltipSemanticsEvent; } }
_flaxBindInstanceType<TooltipSemanticsEvent, typeof TooltipSemanticsEvent>(TooltipSemanticsEvent, "flax.core/sdk_semantics#type:TooltipSemanticsEvent", ["flax.core/sdk_semantics#type:SemanticsEvent","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "message" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TooltipSemanticsEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";

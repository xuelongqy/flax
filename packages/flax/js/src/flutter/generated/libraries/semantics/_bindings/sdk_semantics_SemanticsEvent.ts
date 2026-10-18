// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"nodeId","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsEvent extends Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [] }> { readonly __SemanticsEvent: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsEvent;

}
defineObject("flax.core/sdk_semantics#type:SemanticsEvent", ["type"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:SemanticsEvent", "object", {"toMap":_flaxMemberParameters0,"getDataMap":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), []);
const _SemanticsEventProxy = {type: "flax.core/sdk_semantics#type:SemanticsEvent", parameters: [{"name":"type","required":true,"positional":true}], constructors: {"":[{"name":"type","required":true,"positional":true}]}, methods: {"toMap":_flaxMemberParameters0,"getDataMap":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["type"], setters: [], contextMembers: [], superMembers: ["get:type","toMap","toString"]} as const;
export interface SemanticsEvent {
readonly [_flaxDartTypeValue]: SemanticsEvent;

toMap(options?: {nodeId?: number | null | undefined}): DartMap<string, unknown | null>;
toString(): string;
get type(): string;
}
export abstract class SemanticsEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsEvent", readonly [], false];
constructor(type: string) { super(_SemanticsEventProxy, Array.from(arguments)); }
abstract getDataMap(): DartMap<string, unknown | null>;
}
_flaxDefineProxyBase(SemanticsEvent.prototype, _SemanticsEventProxy);
export namespace SemanticsEvent { export function implement(args: [type: string], implementation: {getDataMap: (() => DartMapInput<string, unknown | null, string, unknown | null>)}): SemanticsEvent {
return constructProxy(_SemanticsEventProxy, args, implementation) as SemanticsEvent; } }
_flaxBindInstanceType<SemanticsEvent, typeof SemanticsEvent>(SemanticsEvent, "flax.core/sdk_semantics#type:SemanticsEvent", ["dart:core::Object"]);

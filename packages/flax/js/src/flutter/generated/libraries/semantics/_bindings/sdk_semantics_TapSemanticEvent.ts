// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import { _flaxMemberParameters2, _flaxMemberParameters1 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TapSemanticEvent extends Omit<upstream0.SemanticsEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TapSemanticEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [] }> { readonly __TapSemanticEvent: unique symbol;
readonly [_flaxDartTypeValue]: TapSemanticEvent;

}
defineObject("flax.core/sdk_semantics#type:TapSemanticEvent", ["type"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:TapSemanticEvent", "object", {}, {}), [], undefined, "flax.core/sdk_semantics#type:SemanticsEvent");
const _TapSemanticEventProxy = {type: "flax.core/sdk_semantics#type:TapSemanticEvent", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"toMap":_flaxMemberParameters1,"getDataMap":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["type"], setters: [], contextMembers: [], superMembers: ["get:type","toMap","getDataMap","toString"]} as const;
export interface TapSemanticEvent {
readonly [_flaxDartTypeValue]: TapSemanticEvent;

toMap(options?: {nodeId?: number | null | undefined}): DartMap<string, unknown | null>;
getDataMap(): DartMap<string, unknown | null>;
toString(): string;
get type(): string;
}
export abstract class TapSemanticEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapSemanticEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TapSemanticEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:TapSemanticEvent", readonly [], false];
constructor() { super(_TapSemanticEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TapSemanticEvent.prototype, _TapSemanticEventProxy);
export namespace TapSemanticEvent { export function implement(args: [], implementation: {}): TapSemanticEvent {
return constructProxy(_TapSemanticEventProxy, args, implementation) as TapSemanticEvent; } }
_flaxBindInstanceType<TapSemanticEvent, typeof TapSemanticEvent>(TapSemanticEvent, "flax.core/sdk_semantics#type:TapSemanticEvent", ["flax.core/sdk_semantics#type:SemanticsEvent","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "toMap" | "getDataMap" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::TapSemanticEvent" | "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent";

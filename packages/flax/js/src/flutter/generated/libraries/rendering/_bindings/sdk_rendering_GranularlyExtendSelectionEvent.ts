// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
const _flaxMemberParameters0 = [{"name":"forward","required":true},{"name":"isEnd","required":true},{"name":"granularity","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GranularlyExtendSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __GranularlyExtendSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;

}
defineObject("flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", ["type","forward","isEnd","granularity"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
const _GranularlyExtendSelectionEventProxy = {type: "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["forward","isEnd","granularity","type"], setters: [], contextMembers: [], superMembers: ["get:forward","get:isEnd","get:granularity","get:type"]} as const;
export interface GranularlyExtendSelectionEvent {
readonly [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;

get forward(): boolean;
get isEnd(): boolean;
get granularity(): upstream1.TextGranularity;
get type(): upstream2.SelectionEventType;
}
export abstract class GranularlyExtendSelectionEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GranularlyExtendSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", readonly [], false];
constructor(options: {forward: boolean; isEnd: boolean; granularity: upstream1.TextGranularity}) { super(_GranularlyExtendSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GranularlyExtendSelectionEvent.prototype, _GranularlyExtendSelectionEventProxy);
export namespace GranularlyExtendSelectionEvent { export function implement(args: [options: {forward: boolean; isEnd: boolean; granularity: upstream1.TextGranularity}], implementation: {}): GranularlyExtendSelectionEvent {
return constructProxy(_GranularlyExtendSelectionEventProxy, args, implementation) as GranularlyExtendSelectionEvent; } }
_flaxBindInstanceType<GranularlyExtendSelectionEvent, typeof GranularlyExtendSelectionEvent>(GranularlyExtendSelectionEvent, "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "forward" | "isEnd" | "granularity" | "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

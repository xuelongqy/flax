// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { _flaxMemberParameters83 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GranularlyExtendSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __GranularlyExtendSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;

readonly type: upstream2.SelectionEventType;
readonly forward: boolean;
readonly isEnd: boolean;
readonly granularity: upstream1.TextGranularity;
}
defineObject("flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", ["type","forward","isEnd","granularity"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
export function _GranularlyExtendSelectionEventFactory(options: { forward: boolean; isEnd: boolean; granularity: upstream1.TextGranularity }): GranularlyExtendSelectionEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", "", [{"name":"forward","required":true},{"name":"isEnd","required":true},{"name":"granularity","required":true}], [], options) as GranularlyExtendSelectionEvent;
}
const _GranularlyExtendSelectionEventProxy = {type: "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", parameters: _flaxMemberParameters83, constructors: {"": _flaxMemberParameters83}, methods: {}, getters: ["forward","isEnd","granularity","type"], setters: [], contextMembers: [], superMembers: ["get:forward","get:isEnd","get:granularity","get:type"]} as const;
export interface _GranularlyExtendSelectionEventNative extends GranularlyExtendSelectionEvent {
readonly [_flaxDartTypeValue]: _GranularlyExtendSelectionEventNative;

get forward(): boolean;
get isEnd(): boolean;
get granularity(): upstream1.TextGranularity;
get type(): upstream2.SelectionEventType;
}
export abstract class _GranularlyExtendSelectionEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GranularlyExtendSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GranularlyExtendSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", readonly [], false];
constructor(options: {forward: boolean; isEnd: boolean; granularity: upstream1.TextGranularity}) { super(_GranularlyExtendSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GranularlyExtendSelectionEventNative.prototype, _GranularlyExtendSelectionEventProxy);
export namespace _GranularlyExtendSelectionEventFactory { export function implement(args: [options: {forward: boolean; isEnd: boolean; granularity: upstream1.TextGranularity}], implementation: {}): GranularlyExtendSelectionEvent {
return constructProxy(_GranularlyExtendSelectionEventProxy, args, implementation) as GranularlyExtendSelectionEvent; } }
const _GranularlyExtendSelectionEventBinding = _flaxProxyFactory(_GranularlyExtendSelectionEventFactory, _GranularlyExtendSelectionEventNative) as unknown as typeof _GranularlyExtendSelectionEventFactory & (new(options: {forward: boolean; isEnd: boolean; granularity: upstream1.TextGranularity}) => _GranularlyExtendSelectionEventNative);
export const GranularlyExtendSelectionEvent: typeof _GranularlyExtendSelectionEventBinding & _FlaxInstanceType<GranularlyExtendSelectionEvent> & _FlaxDartType<GranularlyExtendSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", readonly [], false]> = _flaxBindInstanceType<GranularlyExtendSelectionEvent, typeof _GranularlyExtendSelectionEventBinding>(_GranularlyExtendSelectionEventBinding, "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]) as typeof _GranularlyExtendSelectionEventBinding & _FlaxInstanceType<GranularlyExtendSelectionEvent> & _FlaxDartType<GranularlyExtendSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:GranularlyExtendSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "forward" | "isEnd" | "granularity" | "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

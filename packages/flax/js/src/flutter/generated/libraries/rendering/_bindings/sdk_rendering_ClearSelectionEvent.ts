// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClearSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::ClearSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __ClearSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: ClearSelectionEvent;

readonly type: upstream1.SelectionEventType;
}
defineObject("flax.core/sdk_rendering#type:ClearSelectionEvent", ["type"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ClearSelectionEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
export function _ClearSelectionEventFactory(): ClearSelectionEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ClearSelectionEvent", "", [], [], {}) as ClearSelectionEvent;
}
const _ClearSelectionEventProxy = {type: "flax.core/sdk_rendering#type:ClearSelectionEvent", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {}, getters: ["type"], setters: [], contextMembers: [], superMembers: ["get:type"]} as const;
export interface _ClearSelectionEventNative extends ClearSelectionEvent {
readonly [_flaxDartTypeValue]: _ClearSelectionEventNative;

get type(): upstream1.SelectionEventType;
}
export abstract class _ClearSelectionEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClearSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ClearSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ClearSelectionEvent", readonly [], false];
constructor() { super(_ClearSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ClearSelectionEventNative.prototype, _ClearSelectionEventProxy);
export namespace _ClearSelectionEventFactory { export function implement(args: [], implementation: {}): ClearSelectionEvent {
return constructProxy(_ClearSelectionEventProxy, args, implementation) as ClearSelectionEvent; } }
const _ClearSelectionEventBinding = _flaxProxyFactory(_ClearSelectionEventFactory, _ClearSelectionEventNative) as unknown as typeof _ClearSelectionEventFactory & (new() => _ClearSelectionEventNative);
export const ClearSelectionEvent: typeof _ClearSelectionEventBinding & _FlaxInstanceType<ClearSelectionEvent> & _FlaxDartType<ClearSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:ClearSelectionEvent", readonly [], false]> = _flaxBindInstanceType<ClearSelectionEvent, typeof _ClearSelectionEventBinding>(_ClearSelectionEventBinding, "flax.core/sdk_rendering#type:ClearSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]) as typeof _ClearSelectionEventBinding & _FlaxInstanceType<ClearSelectionEvent> & _FlaxDartType<ClearSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:ClearSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "__flaxBound:package:flutter/src/rendering/selection.dart::ClearSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

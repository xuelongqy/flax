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
export interface SelectAllSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __SelectAllSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: SelectAllSelectionEvent;

readonly type: upstream1.SelectionEventType;
}
defineObject("flax.core/sdk_rendering#type:SelectAllSelectionEvent", ["type"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectAllSelectionEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
export function _SelectAllSelectionEventFactory(): SelectAllSelectionEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SelectAllSelectionEvent", "", [], [], {}) as SelectAllSelectionEvent;
}
const _SelectAllSelectionEventProxy = {type: "flax.core/sdk_rendering#type:SelectAllSelectionEvent", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {}, getters: ["type"], setters: [], contextMembers: [], superMembers: ["get:type"]} as const;
export interface _SelectAllSelectionEventNative extends SelectAllSelectionEvent {
readonly [_flaxDartTypeValue]: _SelectAllSelectionEventNative;

get type(): upstream1.SelectionEventType;
}
export abstract class _SelectAllSelectionEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectAllSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectAllSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectAllSelectionEvent", readonly [], false];
constructor() { super(_SelectAllSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SelectAllSelectionEventNative.prototype, _SelectAllSelectionEventProxy);
export namespace _SelectAllSelectionEventFactory { export function implement(args: [], implementation: {}): SelectAllSelectionEvent {
return constructProxy(_SelectAllSelectionEventProxy, args, implementation) as SelectAllSelectionEvent; } }
const _SelectAllSelectionEventBinding = _flaxProxyFactory(_SelectAllSelectionEventFactory, _SelectAllSelectionEventNative) as unknown as typeof _SelectAllSelectionEventFactory & (new() => _SelectAllSelectionEventNative);
export const SelectAllSelectionEvent: typeof _SelectAllSelectionEventBinding & _FlaxInstanceType<SelectAllSelectionEvent> & _FlaxDartType<SelectAllSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectAllSelectionEvent", readonly [], false]> = _flaxBindInstanceType<SelectAllSelectionEvent, typeof _SelectAllSelectionEventBinding>(_SelectAllSelectionEventBinding, "flax.core/sdk_rendering#type:SelectAllSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]) as typeof _SelectAllSelectionEventBinding & _FlaxInstanceType<SelectAllSelectionEvent> & _FlaxDartType<SelectAllSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectAllSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectAllSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __SelectAllSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: SelectAllSelectionEvent;

}
defineObject("flax.core/sdk_rendering#type:SelectAllSelectionEvent", ["type"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectAllSelectionEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
const _SelectAllSelectionEventProxy = {type: "flax.core/sdk_rendering#type:SelectAllSelectionEvent", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["type"], setters: [], contextMembers: [], superMembers: ["get:type"]} as const;
export interface SelectAllSelectionEvent {
readonly [_flaxDartTypeValue]: SelectAllSelectionEvent;

get type(): upstream1.SelectionEventType;
}
export abstract class SelectAllSelectionEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectAllSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectAllSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectAllSelectionEvent", readonly [], false];
constructor() { super(_SelectAllSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SelectAllSelectionEvent.prototype, _SelectAllSelectionEventProxy);
export namespace SelectAllSelectionEvent { export function implement(args: [], implementation: {}): SelectAllSelectionEvent {
return constructProxy(_SelectAllSelectionEventProxy, args, implementation) as SelectAllSelectionEvent; } }
_flaxBindInstanceType<SelectAllSelectionEvent, typeof SelectAllSelectionEvent>(SelectAllSelectionEvent, "flax.core/sdk_rendering#type:SelectAllSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

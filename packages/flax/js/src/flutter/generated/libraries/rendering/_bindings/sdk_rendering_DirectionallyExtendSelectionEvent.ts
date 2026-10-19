// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionExtendDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionExtendDirection';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { _flaxMemberParameters64, _flaxMemberParameters65 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DirectionallyExtendSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __DirectionallyExtendSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: DirectionallyExtendSelectionEvent;

}
defineObject("flax.core/sdk_rendering#type:DirectionallyExtendSelectionEvent", ["type","dx","isEnd","direction"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:DirectionallyExtendSelectionEvent", "object", {"copyWith":_flaxMemberParameters64}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
const _DirectionallyExtendSelectionEventProxy = {type: "flax.core/sdk_rendering#type:DirectionallyExtendSelectionEvent", parameters: _flaxMemberParameters65, constructors: {"": _flaxMemberParameters65}, methods: {"copyWith":_flaxMemberParameters64}, getters: ["dx","isEnd","direction","type"], setters: [], contextMembers: [], superMembers: ["get:dx","get:isEnd","get:direction","get:type","copyWith"]} as const;
export interface DirectionallyExtendSelectionEvent {
readonly [_flaxDartTypeValue]: DirectionallyExtendSelectionEvent;

copyWith(options?: {dx?: number | null | undefined; isEnd?: boolean | null | undefined; direction?: upstream1.SelectionExtendDirection | null | undefined}): DirectionallyExtendSelectionEvent;
get dx(): number;
get isEnd(): boolean;
get direction(): upstream1.SelectionExtendDirection;
get type(): upstream2.SelectionEventType;
}
export abstract class DirectionallyExtendSelectionEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DirectionallyExtendSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DirectionallyExtendSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:DirectionallyExtendSelectionEvent", readonly [], false];
constructor(options: {dx: number; isEnd: boolean; direction: upstream1.SelectionExtendDirection}) { super(_DirectionallyExtendSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DirectionallyExtendSelectionEvent.prototype, _DirectionallyExtendSelectionEventProxy);
export namespace DirectionallyExtendSelectionEvent { export function implement(args: [options: {dx: number; isEnd: boolean; direction: upstream1.SelectionExtendDirection}], implementation: {}): DirectionallyExtendSelectionEvent {
return constructProxy(_DirectionallyExtendSelectionEventProxy, args, implementation) as DirectionallyExtendSelectionEvent; } }
_flaxBindInstanceType<DirectionallyExtendSelectionEvent, typeof DirectionallyExtendSelectionEvent>(DirectionallyExtendSelectionEvent, "flax.core/sdk_rendering#type:DirectionallyExtendSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "dx" | "isEnd" | "direction" | "copyWith" | "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

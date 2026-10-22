// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { _flaxMemberParameters336 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectWordSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __SelectWordSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: SelectWordSelectionEvent;

readonly type: upstream2.SelectionEventType;
readonly globalPosition: upstream1.Offset;
}
defineObject("flax.core/sdk_rendering#type:SelectWordSelectionEvent", ["type","globalPosition"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectWordSelectionEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
export function _SelectWordSelectionEventFactory(options: { globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): SelectWordSelectionEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SelectWordSelectionEvent", "", [{"name":"globalPosition","required":true}], [], options) as SelectWordSelectionEvent;
}
const _SelectWordSelectionEventProxy = {type: "flax.core/sdk_rendering#type:SelectWordSelectionEvent", parameters: _flaxMemberParameters336, constructors: {"": _flaxMemberParameters336}, methods: {}, getters: ["globalPosition","type"], setters: [], contextMembers: [], superMembers: ["get:globalPosition","get:type"]} as const;
export interface _SelectWordSelectionEventNative extends SelectWordSelectionEvent {
readonly [_flaxDartTypeValue]: _SelectWordSelectionEventNative;

get globalPosition(): upstream1.Offset;
get type(): upstream2.SelectionEventType;
}
export abstract class _SelectWordSelectionEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectWordSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectWordSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectWordSelectionEvent", readonly [], false];
constructor(options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_SelectWordSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SelectWordSelectionEventNative.prototype, _SelectWordSelectionEventProxy);
export namespace _SelectWordSelectionEventFactory { export function implement(args: [options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): SelectWordSelectionEvent {
return constructProxy(_SelectWordSelectionEventProxy, args, implementation) as SelectWordSelectionEvent; } }
const _SelectWordSelectionEventBinding = _flaxProxyFactory(_SelectWordSelectionEventFactory, _SelectWordSelectionEventNative) as unknown as typeof _SelectWordSelectionEventFactory & (new(options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _SelectWordSelectionEventNative);
export const SelectWordSelectionEvent: typeof _SelectWordSelectionEventBinding & _FlaxInstanceType<SelectWordSelectionEvent> & _FlaxDartType<SelectWordSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectWordSelectionEvent", readonly [], false]> = _flaxBindInstanceType<SelectWordSelectionEvent, typeof _SelectWordSelectionEventBinding>(_SelectWordSelectionEventBinding, "flax.core/sdk_rendering#type:SelectWordSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]) as typeof _SelectWordSelectionEventBinding & _FlaxInstanceType<SelectWordSelectionEvent> & _FlaxDartType<SelectWordSelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectWordSelectionEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "globalPosition" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

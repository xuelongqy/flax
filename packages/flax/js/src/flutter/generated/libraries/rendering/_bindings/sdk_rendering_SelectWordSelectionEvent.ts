// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectWordSelectionEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __SelectWordSelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: SelectWordSelectionEvent;

}
defineObject("flax.core/sdk_rendering#type:SelectWordSelectionEvent", ["type","globalPosition"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectWordSelectionEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
const _SelectWordSelectionEventProxy = {type: "flax.core/sdk_rendering#type:SelectWordSelectionEvent", parameters: [{"name":"globalPosition","required":true,"positional":false}], constructors: {"":[{"name":"globalPosition","required":true,"positional":false}]}, methods: {}, getters: ["globalPosition","type"], setters: [], contextMembers: [], superMembers: ["get:globalPosition","get:type"]} as const;
export interface SelectWordSelectionEvent {
readonly [_flaxDartTypeValue]: SelectWordSelectionEvent;

get globalPosition(): upstream1.Offset;
get type(): upstream2.SelectionEventType;
}
export abstract class SelectWordSelectionEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectWordSelectionEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectWordSelectionEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectWordSelectionEvent", readonly [], false];
constructor(options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_SelectWordSelectionEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SelectWordSelectionEvent.prototype, _SelectWordSelectionEventProxy);
export namespace SelectWordSelectionEvent { export function implement(args: [options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): SelectWordSelectionEvent {
return constructProxy(_SelectWordSelectionEventProxy, args, implementation) as SelectWordSelectionEvent; } }
_flaxBindInstanceType<SelectWordSelectionEvent, typeof SelectWordSelectionEvent>(SelectWordSelectionEvent, "flax.core/sdk_rendering#type:SelectWordSelectionEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "globalPosition" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

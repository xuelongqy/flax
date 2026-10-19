// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextGranularity';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionEdgeUpdateEvent extends Omit<upstream0.SelectionEvent, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEdgeUpdateEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __SelectionEdgeUpdateEvent: unique symbol;
readonly [_flaxDartTypeValue]: SelectionEdgeUpdateEvent;

readonly type: upstream1.SelectionEventType;
readonly globalPosition: upstream2.Offset;
readonly granularity: upstream3.TextGranularity;
}
defineObject("flax.core/sdk_rendering#type:SelectionEdgeUpdateEvent", ["type","globalPosition","granularity"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectionEdgeUpdateEvent", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:SelectionEvent");
const _SelectionEdgeUpdateEventProxy = {type: "flax.core/sdk_rendering#type:SelectionEdgeUpdateEvent", parameters: _flaxMemberParameters0, constructors: {}, methods: {}, getters: ["globalPosition","granularity","type"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SelectionEdgeUpdateEventFactory { export function implement(args: [], implementation: {get globalPosition(): Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; get granularity(): upstream3.TextGranularity; get type(): upstream1.SelectionEventType}): SelectionEdgeUpdateEvent {
return constructProxy(_SelectionEdgeUpdateEventProxy, args, implementation) as SelectionEdgeUpdateEvent; } }
export const SelectionEdgeUpdateEvent: typeof _SelectionEdgeUpdateEventFactory & _FlaxInstanceType<SelectionEdgeUpdateEvent> & _FlaxDartType<SelectionEdgeUpdateEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectionEdgeUpdateEvent", readonly [], false]> = _flaxBindInstanceType<SelectionEdgeUpdateEvent, typeof _SelectionEdgeUpdateEventFactory>(_SelectionEdgeUpdateEventFactory, "flax.core/sdk_rendering#type:SelectionEdgeUpdateEvent", ["flax.core/sdk_rendering#type:SelectionEvent","dart:core::Object"]) as typeof _SelectionEdgeUpdateEventFactory & _FlaxInstanceType<SelectionEdgeUpdateEvent> & _FlaxDartType<SelectionEdgeUpdateEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectionEdgeUpdateEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "type" | "globalPosition" | "granularity" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEdgeUpdateEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEventType';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionEvent extends Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [] }> { readonly __SelectionEvent: unique symbol;
readonly [_flaxDartTypeValue]: SelectionEvent;

readonly type: upstream0.SelectionEventType;
}
defineObject("flax.core/sdk_rendering#type:SelectionEvent", ["type"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectionEvent", "object", {}, {}), []);
const _SelectionEventProxy = {type: "flax.core/sdk_rendering#type:SelectionEvent", parameters: [], constructors: {}, methods: {}, getters: ["type"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SelectionEventFactory { export function implement(args: [], implementation: {get type(): upstream0.SelectionEventType}): SelectionEvent {
return constructProxy(_SelectionEventProxy, args, implementation) as SelectionEvent; } }
export const SelectionEvent: typeof _SelectionEventFactory & _FlaxInstanceType<SelectionEvent> & _FlaxDartType<SelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectionEvent", readonly [], false]> = _flaxBindInstanceType<SelectionEvent, typeof _SelectionEventFactory>(_SelectionEventFactory, "flax.core/sdk_rendering#type:SelectionEvent", ["dart:core::Object"]) as typeof _SelectionEventFactory & _FlaxInstanceType<SelectionEvent> & _FlaxDartType<SelectionEvent, readonly ["class", "flax.core/sdk_rendering#type:SelectionEvent", readonly [], false]>;

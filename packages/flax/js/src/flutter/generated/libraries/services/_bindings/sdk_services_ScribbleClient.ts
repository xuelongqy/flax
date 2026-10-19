// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters85, _flaxMemberParameters86, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScribbleClient extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::ScribbleClient": readonly [] }> { readonly __ScribbleClient: unique symbol;
readonly [_flaxDartTypeValue]: ScribbleClient;

readonly elementIdentifier: string;
readonly bounds: upstream0.Rect;
onScribbleFocus(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
isInScribbleRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_services#type:ScribbleClient", ["elementIdentifier","bounds"], [], _flaxBindingMethods("flax.core/sdk_services#type:ScribbleClient", "object", {"onScribbleFocus":_flaxMemberParameters85,"isInScribbleRect":_flaxMemberParameters86}, {}), []);
const _ScribbleClientProxy = {type: "flax.core/sdk_services#type:ScribbleClient", parameters: _flaxMemberParameters0, constructors: {}, methods: {"onScribbleFocus":_flaxMemberParameters85,"isInScribbleRect":_flaxMemberParameters86}, getters: ["elementIdentifier","bounds"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ScribbleClientFactory { export function implement(args: [], implementation: {onScribbleFocus: ((offset: upstream1.Offset) => void); isInScribbleRect: ((rect: upstream0.Rect) => boolean); get elementIdentifier(): string; get bounds(): Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}): ScribbleClient {
return constructProxy(_ScribbleClientProxy, args, implementation) as ScribbleClient; } }
export const ScribbleClient: typeof _ScribbleClientFactory & _FlaxInstanceType<ScribbleClient> & _FlaxDartType<ScribbleClient, readonly ["class", "flax.core/sdk_services#type:ScribbleClient", readonly [], false]> = _flaxBindInstanceType<ScribbleClient, typeof _ScribbleClientFactory>(_ScribbleClientFactory, "flax.core/sdk_services#type:ScribbleClient", ["dart:core::Object"]) as typeof _ScribbleClientFactory & _FlaxInstanceType<ScribbleClient> & _FlaxDartType<ScribbleClient, readonly ["class", "flax.core/sdk_services#type:ScribbleClient", readonly [], false]>;

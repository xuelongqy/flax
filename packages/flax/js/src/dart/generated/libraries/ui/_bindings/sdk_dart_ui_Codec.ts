// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FrameInfo';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FrameInfo';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Codec extends Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }> { readonly __Codec: unique symbol;
readonly [_flaxDartTypeValue]: Codec;

readonly frameCount: number;
readonly repetitionCount: number;
getNextFrame(): Promise<upstream0.FrameInfo>;
dispose(): void;
}
defineObject("flax.core/sdk_dart_ui#type:Codec", ["frameCount","repetitionCount"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Codec", "object", {"getNextFrame":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, {}), []);
const _CodecProxy = {type: "flax.core/sdk_dart_ui#type:Codec", parameters: _flaxMemberParameters0, constructors: {}, methods: {"getNextFrame":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, getters: ["frameCount","repetitionCount"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _CodecFactory { export function implement(args: [], implementation: {getNextFrame: (() => Promise<Readonly<{ "__flaxBound:dart:ui::FrameInfo": readonly [] }>>); dispose: (() => void); get frameCount(): number; get repetitionCount(): number}): Codec {
return constructProxy(_CodecProxy, args, implementation) as Codec; } }
export const Codec: typeof _CodecFactory & _FlaxInstanceType<Codec> & _FlaxDartType<Codec, readonly ["class", "flax.core/sdk_dart_ui#type:Codec", readonly [], false]> = _flaxBindInstanceType<Codec, typeof _CodecFactory>(_CodecFactory, "flax.core/sdk_dart_ui#type:Codec", ["dart:core::Object"]) as typeof _CodecFactory & _FlaxInstanceType<Codec> & _FlaxDartType<Codec, readonly ["class", "flax.core/sdk_dart_ui#type:Codec", readonly [], false]>;

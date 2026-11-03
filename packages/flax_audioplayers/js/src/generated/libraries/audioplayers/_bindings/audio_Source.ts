// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { _flaxMemberParameters3, _flaxMemberParameters1 } from "@flax/audioplayers/_bindings/audio.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Source extends Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }> { readonly __Source: unique symbol;
readonly [_flaxDartTypeValue]: Source;

readonly mimeType: string | null;
setOnPlayer(player: Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }>): Promise<void>;
}
defineObject("flax.audio/audio#type:Source", ["mimeType"], [], _flaxBindingMethods("flax.audio/audio#type:Source", "object", {"setOnPlayer":_flaxMemberParameters3}, {}), []);
const _SourceProxy = {type: "flax.audio/audio#type:Source", parameters: _flaxMemberParameters1, constructors: {}, methods: {"setOnPlayer":_flaxMemberParameters3}, getters: ["mimeType"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SourceFactory { export function implement(args: [], implementation: {setOnPlayer: ((player: upstream0.AudioPlayer) => Promise<void>); get mimeType(): string | null}): Source {
return constructProxy(_SourceProxy, args, implementation) as Source; } }
export const Source: typeof _SourceFactory & _FlaxInstanceType<Source> & _FlaxDartType<Source, readonly ["class", "flax.audio/audio#type:Source", readonly [], false]> = _flaxBindInstanceType<Source, typeof _SourceFactory>(_SourceFactory, "flax.audio/audio#type:Source", ["dart:core::Object"]) as typeof _SourceFactory & _FlaxInstanceType<Source> & _FlaxDartType<Source, readonly ["class", "flax.audio/audio#type:Source", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioCache';
import '@flax/audioplayers/_bindings/audio_AudioCache';
import type * as upstream2 from '@flax/audioplayers/_bindings/audio_AudioContext';
import '@flax/audioplayers/_bindings/audio_AudioContext';
import type * as upstream3 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import type * as upstream4 from '@flax/audioplayers/_bindings/audio_PlayerMode';
import '@flax/audioplayers/_bindings/audio_PlayerMode';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters33, _flaxMemberParameters34, _flaxMemberParameters35, _flaxMemberParameters1 } from "@flax/audioplayers/_bindings/audio.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioPool extends Readonly<{ "__flaxBound:package:audioplayers/src/audio_pool.dart::AudioPool": readonly [] }> { readonly __AudioPool: unique symbol;
readonly [_flaxDartTypeValue]: AudioPool;

readonly currentPlayers: DartMap<string, upstream0.AudioPlayer>;
readonly availablePlayers: DartList<upstream0.AudioPlayer>;
readonly audioCache: upstream1.AudioCache;
readonly audioContext: upstream2.AudioContext | null;
readonly source: upstream3.Source;
readonly minPlayers: number;
readonly maxPlayers: number;
readonly playerMode: upstream4.PlayerMode;
get duration(): upstream5.Duration | null;
start(options?: {volume?: number | undefined}): Promise<(() => Promise<void>)>;
getDuration(): Promise<upstream5.Duration | null>;
dispose(): Promise<void>;
set duration(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration] }> | null);
}
defineObject("flax.audio/audio#type:AudioPool", ["currentPlayers","availablePlayers","audioCache","audioContext","source","minPlayers","maxPlayers","playerMode","duration"], ["duration"], _flaxBindingMethods("flax.audio/audio#type:AudioPool", "object", {"start":_flaxMemberParameters35,"getDuration":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, {}), []);
export namespace _AudioPoolFactory { export function create(options: { audioCache?: Readonly<{ "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [] }> | null | undefined; audioContext?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [] }> | null | undefined; maxPlayers: number; minPlayers?: number | undefined; playerMode?: upstream4.PlayerMode | undefined; source: Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }> }): Promise<AudioPool> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["audioCache","audioContext","maxPlayers","minPlayers","playerMode","source"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioPool.create", [options.audioCache, options.audioContext, options.maxPlayers, options.minPlayers, options.playerMode, options.source], _flaxMemberParameters33);
return _flaxResult as Promise<AudioPool>;
} }
export namespace _AudioPoolFactory { export function createFromAsset(options: { audioCache?: Readonly<{ "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [] }> | null | undefined; maxPlayers: number; minPlayers?: number | undefined; path: string; playerMode?: upstream4.PlayerMode | undefined }): Promise<AudioPool> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["audioCache","maxPlayers","minPlayers","path","playerMode"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioPool.createFromAsset", [options.audioCache, options.maxPlayers, options.minPlayers, options.path, options.playerMode], _flaxMemberParameters34);
return _flaxResult as Promise<AudioPool>;
} }
export const AudioPool: typeof _AudioPoolFactory & _FlaxInstanceType<AudioPool> & _FlaxDartType<AudioPool, readonly ["class", "flax.audio/audio#type:AudioPool", readonly [], false]> = _flaxBindInstanceType<AudioPool, typeof _AudioPoolFactory>(_AudioPoolFactory, "flax.audio/audio#type:AudioPool", ["dart:core::Object"]) as typeof _AudioPoolFactory & _FlaxInstanceType<AudioPool> & _FlaxDartType<AudioPool, readonly ["class", "flax.audio/audio#type:AudioPool", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioCache';
import '@flax/audioplayers/_bindings/audio_AudioCache';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import type * as upstream2 from '@flax/audioplayers/_bindings/audio_PlayerMode';
import '@flax/audioplayers/_bindings/audio_PlayerMode';
import type * as upstream3 from '@flax/audioplayers/_bindings/audio_ReleaseMode';
import '@flax/audioplayers/_bindings/audio_ReleaseMode';
import type * as upstream4 from '@flax/audioplayers/_bindings/audio_PlayerState';
import '@flax/audioplayers/_bindings/audio_PlayerState';
import type * as upstream5 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream6 from '@flax/audioplayers/_bindings/audio_AudioEvent';
import '@flax/audioplayers/_bindings/audio_AudioEvent';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream8 from '@flax/audioplayers/_bindings/audio_PositionUpdater';
import '@flax/audioplayers/_bindings/audio_PositionUpdater';
import type * as upstream9 from '@flax/audioplayers/_bindings/audio_GlobalAudioScope';
import '@flax/audioplayers/_bindings/audio_GlobalAudioScope';
import type * as upstream10 from '@flax/audioplayers/_bindings/audio_AudioContext';
import '@flax/audioplayers/_bindings/audio_AudioContext';
import { _flaxMemberParameters0, _flaxMemberParameters20, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters1, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters28, _flaxMemberParameters29, _flaxMemberParameters2, _flaxMemberParameters30, _flaxMemberParameters31 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioPlayer extends Readonly<{ "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [] }> { readonly __AudioPlayer: unique symbol;
readonly [_flaxDartTypeValue]: AudioPlayer;

get audioCache(): upstream0.AudioCache;
readonly playerId: string;
readonly source: upstream1.Source | null;
readonly volume: number;
readonly balance: number;
readonly playbackRate: number;
readonly mode: upstream2.PlayerMode;
readonly releaseMode: upstream3.ReleaseMode;
get desiredState(): upstream4.PlayerState;
get state(): upstream4.PlayerState;
readonly eventStream: upstream5.Stream<upstream6.AudioEvent>;
readonly onPlayerStateChanged: upstream5.Stream<upstream4.PlayerState>;
readonly onPositionChanged: upstream5.Stream<upstream7.Duration>;
readonly onDurationChanged: upstream5.Stream<upstream7.Duration>;
readonly onPlayerComplete: upstream5.Stream<void>;
readonly onSeekComplete: upstream5.Stream<void>;
readonly onLog: upstream5.Stream<string>;
play(source: Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }>, options?: {balance?: number | null | undefined; ctx?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [] }> | null | undefined; mode?: upstream2.PlayerMode | null | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration] }> | null | undefined; volume?: number | null | undefined}): Promise<void>;
setAudioContext(ctx: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [] }>): Promise<void>;
setPlayerMode(mode: upstream2.PlayerMode): Promise<void>;
pause(): Promise<void>;
stop(): Promise<void>;
resume(): Promise<void>;
release(): Promise<void>;
seek(position: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration] }>): Promise<void>;
setBalance(balance: number): Promise<void>;
setVolume(volume: number): Promise<void>;
setReleaseMode(releaseMode: upstream3.ReleaseMode): Promise<void>;
setPlaybackRate(playbackRate: number): Promise<void>;
setSource(source: Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }>): Promise<void>;
setSourceUrl(url: string, options?: {mimeType?: string | null | undefined}): Promise<void>;
setSourceDeviceFile(path: string, options?: {mimeType?: string | null | undefined}): Promise<void>;
setSourceAsset(path: string, options?: {mimeType?: string | null | undefined}): Promise<void>;
setSourceBytes(bytes: globalThis.Uint8Array, options?: {mimeType?: string | null | undefined}): Promise<void>;
getDuration(): Promise<upstream7.Duration | null>;
getCurrentPosition(): Promise<upstream7.Duration | null>;
dispose(): Promise<void>;
set audioCache(value: Readonly<{ "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [] }>);
set desiredState(value: upstream4.PlayerState);
set state(value: upstream4.PlayerState);
set positionUpdater(value: Readonly<{ "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [] }> | null);
}
defineObject("flax.audio/audio#type:AudioPlayer", ["audioCache","playerId","source","volume","balance","playbackRate","mode","releaseMode","desiredState","state","eventStream","onPlayerStateChanged","onPositionChanged","onDurationChanged","onPlayerComplete","onSeekComplete","onLog"], ["audioCache","desiredState","state","positionUpdater"], _flaxBindingMethods("flax.audio/audio#type:AudioPlayer", "object", {"play":_flaxMemberParameters20,"setAudioContext":_flaxMemberParameters21,"setPlayerMode":_flaxMemberParameters22,"pause":_flaxMemberParameters1,"stop":_flaxMemberParameters1,"resume":_flaxMemberParameters1,"release":_flaxMemberParameters1,"seek":_flaxMemberParameters23,"setBalance":_flaxMemberParameters24,"setVolume":_flaxMemberParameters25,"setReleaseMode":_flaxMemberParameters26,"setPlaybackRate":_flaxMemberParameters27,"setSource":_flaxMemberParameters28,"setSourceUrl":_flaxMemberParameters29,"setSourceDeviceFile":_flaxMemberParameters2,"setSourceAsset":_flaxMemberParameters2,"setSourceBytes":_flaxMemberParameters30,"getDuration":_flaxMemberParameters1,"getCurrentPosition":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, {}), []);
export function _AudioPlayerFactory(options: { playerId?: string | null | undefined } = {}): AudioPlayer {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioPlayer", "", [{"name":"playerId"}], [], options) as AudioPlayer;
}
const _AudioPlayerProxy = {type: "flax.audio/audio#type:AudioPlayer", parameters: _flaxMemberParameters31, constructors: {"": _flaxMemberParameters31}, methods: {"play":_flaxMemberParameters20,"setAudioContext":_flaxMemberParameters21,"setPlayerMode":_flaxMemberParameters22,"pause":_flaxMemberParameters1,"stop":_flaxMemberParameters1,"resume":_flaxMemberParameters1,"release":_flaxMemberParameters1,"seek":_flaxMemberParameters23,"setBalance":_flaxMemberParameters24,"setVolume":_flaxMemberParameters25,"setReleaseMode":_flaxMemberParameters26,"setPlaybackRate":_flaxMemberParameters27,"setSource":_flaxMemberParameters28,"setSourceUrl":_flaxMemberParameters29,"setSourceDeviceFile":_flaxMemberParameters2,"setSourceAsset":_flaxMemberParameters2,"setSourceBytes":_flaxMemberParameters30,"getDuration":_flaxMemberParameters1,"getCurrentPosition":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, getters: ["audioCache","playerId","source","volume","balance","playbackRate","mode","releaseMode","desiredState","state","eventStream","onPlayerStateChanged","onPositionChanged","onDurationChanged","onPlayerComplete","onSeekComplete","onLog"], setters: ["audioCache","desiredState","state","positionUpdater"], contextMembers: [], superMembers: ["get:audioCache","get:playerId","get:source","get:volume","get:balance","get:playbackRate","get:mode","get:releaseMode","get:desiredState","get:state","get:eventStream","get:onPlayerStateChanged","get:onPositionChanged","get:onDurationChanged","get:onPlayerComplete","get:onSeekComplete","get:onLog","set:audioCache","set:desiredState","set:state","set:positionUpdater","play","setAudioContext","setPlayerMode","pause","stop","resume","release","seek","setBalance","setVolume","setReleaseMode","setPlaybackRate","setSource","setSourceUrl","setSourceDeviceFile","setSourceAsset","setSourceBytes","getDuration","getCurrentPosition","dispose"]} as const;
export interface _AudioPlayerNative extends AudioPlayer {
readonly [_flaxDartTypeValue]: _AudioPlayerNative;

play(source: Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }>, options?: {volume?: number | null | undefined; balance?: number | null | undefined; ctx?: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [] }> | null | undefined; position?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration] }> | null | undefined; mode?: upstream2.PlayerMode | null | undefined}): Promise<void>;
setAudioContext(ctx: Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [] }>): Promise<void>;
setPlayerMode(mode: upstream2.PlayerMode): Promise<void>;
pause(): Promise<void>;
stop(): Promise<void>;
resume(): Promise<void>;
release(): Promise<void>;
seek(position: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration] }>): Promise<void>;
setBalance(balance: number): Promise<void>;
setVolume(volume: number): Promise<void>;
setReleaseMode(releaseMode: upstream3.ReleaseMode): Promise<void>;
setPlaybackRate(playbackRate: number): Promise<void>;
setSource(source: Readonly<{ "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [] }>): Promise<void>;
setSourceUrl(url: string, options?: {mimeType?: string | null | undefined}): Promise<void>;
setSourceDeviceFile(path: string, options?: {mimeType?: string | null | undefined}): Promise<void>;
setSourceAsset(path: string, options?: {mimeType?: string | null | undefined}): Promise<void>;
setSourceBytes(bytes: globalThis.Uint8Array, options?: {mimeType?: string | null | undefined}): Promise<void>;
getDuration(): Promise<upstream7.Duration | null>;
getCurrentPosition(): Promise<upstream7.Duration | null>;
dispose(): Promise<void>;
get audioCache(): upstream0.AudioCache;
get playerId(): string;
get source(): upstream1.Source | null;
get volume(): number;
get balance(): number;
get playbackRate(): number;
get mode(): upstream2.PlayerMode;
get releaseMode(): upstream3.ReleaseMode;
get desiredState(): upstream4.PlayerState;
get state(): upstream4.PlayerState;
get eventStream(): upstream5.Stream<upstream6.AudioEvent>;
get onPlayerStateChanged(): upstream5.Stream<upstream4.PlayerState>;
get onPositionChanged(): upstream5.Stream<upstream7.Duration>;
get onDurationChanged(): upstream5.Stream<upstream7.Duration>;
get onPlayerComplete(): upstream5.Stream<void>;
get onSeekComplete(): upstream5.Stream<void>;
get onLog(): upstream5.Stream<string>;
set audioCache(value: Readonly<{ "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [] }>);
set desiredState(value: upstream4.PlayerState);
set state(value: upstream4.PlayerState);
set positionUpdater(value: Readonly<{ "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [] }> | null);
}
export abstract class _AudioPlayerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioPlayer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AudioPlayer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioPlayer", readonly [], false];
constructor(options?: {playerId?: string | null | undefined}) { super(_AudioPlayerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AudioPlayerNative.prototype, _AudioPlayerProxy);
export namespace _AudioPlayerFactory { export function implement(args: [options?: {playerId?: string | null | undefined}], implementation: {}): AudioPlayer {
return constructProxy(_AudioPlayerProxy, args, implementation) as AudioPlayer; } }
const _AudioPlayerBinding = _flaxProxyFactory(_AudioPlayerFactory, _AudioPlayerNative) as unknown as typeof _AudioPlayerFactory & (new(options?: {playerId?: string | null | undefined}) => _AudioPlayerNative);
export namespace _AudioPlayerFactory { export function setPreparationTimeout(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioPlayer.preparationTimeout%3D", [value], _flaxMemberParameters0);
} }
export namespace _AudioPlayerFactory { export function setSeekingTimeout(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioPlayer.seekingTimeout%3D", [value], _flaxMemberParameters0);
} }
export namespace _AudioPlayerFactory { export declare const global: upstream9.GlobalAudioScope; }
export namespace _AudioPlayerFactory { export declare const preparationTimeout: upstream7.Duration; }
export namespace _AudioPlayerFactory { export declare const seekingTimeout: upstream7.Duration; }
_flaxDefineStaticGetters(_AudioPlayerFactory, "flax.audio/audio#read:AudioPlayer.", ["global","preparationTimeout","seekingTimeout"]);
export const AudioPlayer: typeof _AudioPlayerBinding & _FlaxInstanceType<AudioPlayer> & _FlaxDartType<AudioPlayer, readonly ["class", "flax.audio/audio#type:AudioPlayer", readonly [], false]> = _flaxBindInstanceType<AudioPlayer, typeof _AudioPlayerBinding>(_AudioPlayerBinding, "flax.audio/audio#type:AudioPlayer", ["dart:core::Object"]) as typeof _AudioPlayerBinding & _FlaxInstanceType<AudioPlayer> & _FlaxDartType<AudioPlayer, readonly ["class", "flax.audio/audio#type:AudioPlayer", readonly [], false]>;

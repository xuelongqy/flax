import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
import '@flax/audioplayers/_bindings/audio_PositionUpdater';
import type * as upstream9 from '@flax/audioplayers/_bindings/audio_GlobalAudioScope';
import '@flax/audioplayers/_bindings/audio_GlobalAudioScope';
import '@flax/audioplayers/_bindings/audio_AudioContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioPlayer extends Readonly<{
    "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
}> {
    readonly __AudioPlayer: unique symbol;
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
    play(source: Readonly<{
        "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
    }>, options?: {
        balance?: number | null | undefined;
        ctx?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [];
        }> | null | undefined;
        mode?: upstream2.PlayerMode | null | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
        }>) | null | undefined;
        volume?: number | null | undefined;
    }): Promise<void>;
    setAudioContext(ctx: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [];
    }>): Promise<void>;
    setPlayerMode(mode: upstream2.PlayerMode): Promise<void>;
    pause(): Promise<void>;
    stop(): Promise<void>;
    resume(): Promise<void>;
    release(): Promise<void>;
    seek(position: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
    }>): Promise<void>;
    setBalance(balance: number): Promise<void>;
    setVolume(volume: number): Promise<void>;
    setReleaseMode(releaseMode: upstream3.ReleaseMode): Promise<void>;
    setPlaybackRate(playbackRate: number): Promise<void>;
    setSource(source: Readonly<{
        "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
    }>): Promise<void>;
    setSourceUrl(url: string, options?: {
        mimeType?: string | null | undefined;
    }): Promise<void>;
    setSourceDeviceFile(path: string, options?: {
        mimeType?: string | null | undefined;
    }): Promise<void>;
    setSourceAsset(path: string, options?: {
        mimeType?: string | null | undefined;
    }): Promise<void>;
    setSourceBytes(bytes: globalThis.Uint8Array, options?: {
        mimeType?: string | null | undefined;
    }): Promise<void>;
    getDuration(): Promise<upstream7.Duration | null>;
    getCurrentPosition(): Promise<upstream7.Duration | null>;
    dispose(): Promise<void>;
    set audioCache(value: Readonly<{
        "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [];
    }>);
    set desiredState(value: upstream4.PlayerState);
    set state(value: upstream4.PlayerState);
    set positionUpdater(value: Readonly<{
        "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [];
    }> | null);
}
export declare function _AudioPlayerFactory(options?: {
    playerId?: string | null | undefined;
}): AudioPlayer;
export interface _AudioPlayerNative extends AudioPlayer {
    readonly [_flaxDartTypeValue]: _AudioPlayerNative;
    play(source: Readonly<{
        "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
    }>, options?: {
        volume?: number | null | undefined;
        balance?: number | null | undefined;
        ctx?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [];
        }> | null | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
        }>) | null | undefined;
        mode?: upstream2.PlayerMode | null | undefined;
    }): Promise<void>;
    setAudioContext(ctx: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [];
    }>): Promise<void>;
    setPlayerMode(mode: upstream2.PlayerMode): Promise<void>;
    pause(): Promise<void>;
    stop(): Promise<void>;
    resume(): Promise<void>;
    release(): Promise<void>;
    seek(position: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
    }>): Promise<void>;
    setBalance(balance: number): Promise<void>;
    setVolume(volume: number): Promise<void>;
    setReleaseMode(releaseMode: upstream3.ReleaseMode): Promise<void>;
    setPlaybackRate(playbackRate: number): Promise<void>;
    setSource(source: Readonly<{
        "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
    }>): Promise<void>;
    setSourceUrl(url: string, options?: {
        mimeType?: string | null | undefined;
    }): Promise<void>;
    setSourceDeviceFile(path: string, options?: {
        mimeType?: string | null | undefined;
    }): Promise<void>;
    setSourceAsset(path: string, options?: {
        mimeType?: string | null | undefined;
    }): Promise<void>;
    setSourceBytes(bytes: globalThis.Uint8Array, options?: {
        mimeType?: string | null | undefined;
    }): Promise<void>;
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
    set audioCache(value: Readonly<{
        "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [];
    }>);
    set desiredState(value: upstream4.PlayerState);
    set state(value: upstream4.PlayerState);
    set positionUpdater(value: Readonly<{
        "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [];
    }> | null);
}
export declare abstract class _AudioPlayerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioPlayer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AudioPlayer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioPlayer", readonly [], false];
    constructor(options?: {
        playerId?: string | null | undefined;
    });
}
export declare namespace _AudioPlayerFactory {
    function implement(args: [options?: {
        playerId?: string | null | undefined;
    }], implementation: {}): AudioPlayer;
}
declare const _AudioPlayerBinding: typeof _AudioPlayerFactory & (new (options?: {
    playerId?: string | null | undefined;
}) => _AudioPlayerNative);
export declare namespace _AudioPlayerFactory {
    function setPreparationTimeout(value: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
    }>): void;
}
export declare namespace _AudioPlayerFactory {
    function setSeekingTimeout(value: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream7.Duration];
    }>): void;
}
export declare namespace _AudioPlayerFactory {
    const global: upstream9.GlobalAudioScope;
}
export declare namespace _AudioPlayerFactory {
    const preparationTimeout: upstream7.Duration;
}
export declare namespace _AudioPlayerFactory {
    const seekingTimeout: upstream7.Duration;
}
export declare const AudioPlayer: typeof _AudioPlayerBinding & _FlaxInstanceType<AudioPlayer> & _FlaxDartType<AudioPlayer, readonly ["class", "flax.audio/audio#type:AudioPlayer", readonly [], false]>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
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
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioPool extends Readonly<{
    "__flaxBound:package:audioplayers/src/audio_pool.dart::AudioPool": readonly [];
}> {
    readonly __AudioPool: unique symbol;
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
    start(options?: {
        volume?: number | undefined;
    }): Promise<(() => Promise<void>)>;
    getDuration(): Promise<upstream5.Duration | null>;
    dispose(): Promise<void>;
    set duration(value: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream5.Duration];
    }>) | null);
}
export declare namespace _AudioPoolFactory {
    function create(options: {
        audioCache?: Readonly<{
            "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [];
        }> | null | undefined;
        audioContext?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [];
        }> | null | undefined;
        maxPlayers: number;
        minPlayers?: number | undefined;
        playerMode?: upstream4.PlayerMode | undefined;
        source: Readonly<{
            "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
        }>;
    }): Promise<AudioPool>;
}
export declare namespace _AudioPoolFactory {
    function createFromAsset(options: {
        audioCache?: Readonly<{
            "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [];
        }> | null | undefined;
        maxPlayers: number;
        minPlayers?: number | undefined;
        path: string;
        playerMode?: upstream4.PlayerMode | undefined;
    }): Promise<AudioPool>;
}
export declare const AudioPool: typeof _AudioPoolFactory & _FlaxInstanceType<AudioPool> & _FlaxDartType<AudioPool, readonly ["class", "flax.audio/audio#type:AudioPool", readonly [], false]>;

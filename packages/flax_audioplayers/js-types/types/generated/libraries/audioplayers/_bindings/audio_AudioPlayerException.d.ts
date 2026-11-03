import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioPlayerException extends Readonly<{
    "__flaxBound:package:audioplayers/src/audio_logger.dart::AudioPlayerException": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __AudioPlayerException: unique symbol;
    readonly [_flaxDartTypeValue]: AudioPlayerException;
    get cause(): unknown | null;
    get player(): upstream0.AudioPlayer;
    toString(): string;
    set cause(value: unknown | null);
    set player(value: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>);
}
export declare function _AudioPlayerExceptionFactory(player: Readonly<{
    "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
}>, options?: {
    cause?: unknown | null | undefined;
}): AudioPlayerException;
export interface _AudioPlayerExceptionNative extends AudioPlayerException {
    readonly [_flaxDartTypeValue]: _AudioPlayerExceptionNative;
    toString(): string;
    get cause(): unknown | null;
    get player(): upstream0.AudioPlayer;
    set cause(value: unknown | null);
    set player(value: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>);
}
export declare abstract class _AudioPlayerExceptionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioPlayerException>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AudioPlayerException;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioPlayerException", readonly [], false];
    constructor(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>, options?: {
        cause?: unknown | null | undefined;
    });
}
export declare namespace _AudioPlayerExceptionFactory {
    function implement(args: [player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>, options?: {
        cause?: unknown | null | undefined;
    }], implementation: {}): AudioPlayerException;
}
declare const _AudioPlayerExceptionBinding: typeof _AudioPlayerExceptionFactory & (new (player: Readonly<{
    "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
}>, options?: {
    cause?: unknown | null | undefined;
}) => _AudioPlayerExceptionNative);
export declare const AudioPlayerException: typeof _AudioPlayerExceptionBinding & _FlaxInstanceType<AudioPlayerException> & _FlaxDartType<AudioPlayerException, readonly ["class", "flax.audio/audio#type:AudioPlayerException", readonly [], false]>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AVAudioSessionCategory';
import '@flax/audioplayers/_bindings/audio_AVAudioSessionCategory';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AVAudioSessionOptions';
import '@flax/audioplayers/_bindings/audio_AVAudioSessionOptions';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioContextIOS extends Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
}> {
    readonly __AudioContextIOS: unique symbol;
    readonly [_flaxDartTypeValue]: AudioContextIOS;
    readonly category: upstream0.AVAudioSessionCategory;
    readonly options: DartSet<upstream1.AVAudioSessionOptions>;
    copy(options?: {
        category?: upstream0.AVAudioSessionCategory | null | undefined;
        options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | null | undefined;
    }): AudioContextIOS;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _AudioContextIOSFactory(options?: {
    category?: upstream0.AVAudioSessionCategory | undefined;
    options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | undefined;
}): AudioContextIOS;
export interface _AudioContextIOSNative extends AudioContextIOS {
    readonly [_flaxDartTypeValue]: _AudioContextIOSNative;
    copy(options?: {
        category?: upstream0.AVAudioSessionCategory | null | undefined;
        options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | null | undefined;
    }): AudioContextIOS;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
    get category(): upstream0.AVAudioSessionCategory;
    get options(): DartSet<upstream1.AVAudioSessionOptions>;
}
export declare abstract class _AudioContextIOSNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioContextIOS>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AudioContextIOS;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioContextIOS", readonly [], false];
    constructor(options?: {
        category?: upstream0.AVAudioSessionCategory | undefined;
        options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | undefined;
    });
}
export declare namespace _AudioContextIOSFactory {
    function implement(args: [options?: {
        category?: upstream0.AVAudioSessionCategory | undefined;
        options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | undefined;
    }], implementation: {}): AudioContextIOS;
}
declare const _AudioContextIOSBinding: typeof _AudioContextIOSFactory & (new (options?: {
    category?: upstream0.AVAudioSessionCategory | undefined;
    options?: DartSetInput<upstream1.AVAudioSessionOptions, upstream1.AVAudioSessionOptions> | undefined;
}) => _AudioContextIOSNative);
export declare const AudioContextIOS: typeof _AudioContextIOSBinding & _FlaxInstanceType<AudioContextIOS> & _FlaxDartType<AudioContextIOS, readonly ["class", "flax.audio/audio#type:AudioContextIOS", readonly [], false]>;
export {};

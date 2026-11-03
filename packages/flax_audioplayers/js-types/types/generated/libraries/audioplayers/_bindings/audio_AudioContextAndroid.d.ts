import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AndroidAudioMode';
import '@flax/audioplayers/_bindings/audio_AndroidAudioMode';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AndroidContentType';
import '@flax/audioplayers/_bindings/audio_AndroidContentType';
import type * as upstream2 from '@flax/audioplayers/_bindings/audio_AndroidUsageType';
import '@flax/audioplayers/_bindings/audio_AndroidUsageType';
import type * as upstream3 from '@flax/audioplayers/_bindings/audio_AndroidAudioFocus';
import '@flax/audioplayers/_bindings/audio_AndroidAudioFocus';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioContextAndroid extends Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [];
}> {
    readonly __AudioContextAndroid: unique symbol;
    readonly [_flaxDartTypeValue]: AudioContextAndroid;
    readonly isSpeakerphoneOn: boolean;
    readonly audioMode: upstream0.AndroidAudioMode;
    readonly stayAwake: boolean;
    readonly contentType: upstream1.AndroidContentType;
    readonly usageType: upstream2.AndroidUsageType;
    readonly audioFocus: upstream3.AndroidAudioFocus;
    copy(options?: {
        audioFocus?: upstream3.AndroidAudioFocus | null | undefined;
        audioMode?: upstream0.AndroidAudioMode | null | undefined;
        contentType?: upstream1.AndroidContentType | null | undefined;
        isSpeakerphoneOn?: boolean | null | undefined;
        stayAwake?: boolean | null | undefined;
        usageType?: upstream2.AndroidUsageType | null | undefined;
    }): AudioContextAndroid;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _AudioContextAndroidFactory(options?: {
    isSpeakerphoneOn?: boolean | undefined;
    audioMode?: upstream0.AndroidAudioMode | undefined;
    stayAwake?: boolean | undefined;
    contentType?: upstream1.AndroidContentType | undefined;
    usageType?: upstream2.AndroidUsageType | undefined;
    audioFocus?: upstream3.AndroidAudioFocus | undefined;
}): AudioContextAndroid;
export interface _AudioContextAndroidNative extends AudioContextAndroid {
    readonly [_flaxDartTypeValue]: _AudioContextAndroidNative;
    copy(options?: {
        isSpeakerphoneOn?: boolean | null | undefined;
        audioMode?: upstream0.AndroidAudioMode | null | undefined;
        stayAwake?: boolean | null | undefined;
        contentType?: upstream1.AndroidContentType | null | undefined;
        usageType?: upstream2.AndroidUsageType | null | undefined;
        audioFocus?: upstream3.AndroidAudioFocus | null | undefined;
    }): AudioContextAndroid;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
    get isSpeakerphoneOn(): boolean;
    get audioMode(): upstream0.AndroidAudioMode;
    get stayAwake(): boolean;
    get contentType(): upstream1.AndroidContentType;
    get usageType(): upstream2.AndroidUsageType;
    get audioFocus(): upstream3.AndroidAudioFocus;
}
export declare abstract class _AudioContextAndroidNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioContextAndroid>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AudioContextAndroid;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioContextAndroid", readonly [], false];
    constructor(options?: {
        isSpeakerphoneOn?: boolean | undefined;
        audioMode?: upstream0.AndroidAudioMode | undefined;
        stayAwake?: boolean | undefined;
        contentType?: upstream1.AndroidContentType | undefined;
        usageType?: upstream2.AndroidUsageType | undefined;
        audioFocus?: upstream3.AndroidAudioFocus | undefined;
    });
}
export declare namespace _AudioContextAndroidFactory {
    function implement(args: [options?: {
        isSpeakerphoneOn?: boolean | undefined;
        audioMode?: upstream0.AndroidAudioMode | undefined;
        stayAwake?: boolean | undefined;
        contentType?: upstream1.AndroidContentType | undefined;
        usageType?: upstream2.AndroidUsageType | undefined;
        audioFocus?: upstream3.AndroidAudioFocus | undefined;
    }], implementation: {}): AudioContextAndroid;
}
declare const _AudioContextAndroidBinding: typeof _AudioContextAndroidFactory & (new (options?: {
    isSpeakerphoneOn?: boolean | undefined;
    audioMode?: upstream0.AndroidAudioMode | undefined;
    stayAwake?: boolean | undefined;
    contentType?: upstream1.AndroidContentType | undefined;
    usageType?: upstream2.AndroidUsageType | undefined;
    audioFocus?: upstream3.AndroidAudioFocus | undefined;
}) => _AudioContextAndroidNative);
export declare const AudioContextAndroid: typeof _AudioContextAndroidBinding & _FlaxInstanceType<AudioContextAndroid> & _FlaxDartType<AudioContextAndroid, readonly ["class", "flax.audio/audio#type:AudioContextAndroid", readonly [], false]>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioContextConfigRoute';
import '@flax/audioplayers/_bindings/audio_AudioContextConfigRoute';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioContextConfigFocus';
import '@flax/audioplayers/_bindings/audio_AudioContextConfigFocus';
import type * as upstream2 from '@flax/audioplayers/_bindings/audio_AudioContext';
import '@flax/audioplayers/_bindings/audio_AudioContext';
import type * as upstream3 from '@flax/audioplayers/_bindings/audio_AudioContextAndroid';
import '@flax/audioplayers/_bindings/audio_AudioContextAndroid';
import type * as upstream4 from '@flax/audioplayers/_bindings/audio_AudioContextIOS';
import '@flax/audioplayers/_bindings/audio_AudioContextIOS';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioContextConfig extends Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfig": readonly [];
}> {
    readonly __AudioContextConfig: unique symbol;
    readonly [_flaxDartTypeValue]: AudioContextConfig;
    readonly route: upstream0.AudioContextConfigRoute;
    readonly focus: upstream1.AudioContextConfigFocus;
    readonly respectSilence: boolean;
    readonly stayAwake: boolean;
    copy(options?: {
        focus?: upstream1.AudioContextConfigFocus | null | undefined;
        respectSilence?: boolean | null | undefined;
        route?: upstream0.AudioContextConfigRoute | null | undefined;
        stayAwake?: boolean | null | undefined;
    }): AudioContextConfig;
    build(): upstream2.AudioContext;
    buildAndroid(): upstream3.AudioContextAndroid;
    buildIOS(): upstream4.AudioContextIOS | null;
    validateIOS(): void;
    toString(): string;
}
export declare function _AudioContextConfigFactory(options?: {
    route?: upstream0.AudioContextConfigRoute | undefined;
    focus?: upstream1.AudioContextConfigFocus | undefined;
    respectSilence?: boolean | undefined;
    stayAwake?: boolean | undefined;
}): AudioContextConfig;
export interface _AudioContextConfigNative extends AudioContextConfig {
    readonly [_flaxDartTypeValue]: _AudioContextConfigNative;
    copy(options?: {
        route?: upstream0.AudioContextConfigRoute | null | undefined;
        focus?: upstream1.AudioContextConfigFocus | null | undefined;
        respectSilence?: boolean | null | undefined;
        stayAwake?: boolean | null | undefined;
    }): AudioContextConfig;
    build(): upstream2.AudioContext;
    buildAndroid(): upstream3.AudioContextAndroid;
    buildIOS(): upstream4.AudioContextIOS | null;
    validateIOS(): void;
    toString(): string;
    get route(): upstream0.AudioContextConfigRoute;
    get focus(): upstream1.AudioContextConfigFocus;
    get respectSilence(): boolean;
    get stayAwake(): boolean;
}
export declare abstract class _AudioContextConfigNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioContextConfig>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AudioContextConfig;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioContextConfig", readonly [], false];
    constructor(options?: {
        route?: upstream0.AudioContextConfigRoute | undefined;
        focus?: upstream1.AudioContextConfigFocus | undefined;
        respectSilence?: boolean | undefined;
        stayAwake?: boolean | undefined;
    });
}
export declare namespace _AudioContextConfigFactory {
    function implement(args: [options?: {
        route?: upstream0.AudioContextConfigRoute | undefined;
        focus?: upstream1.AudioContextConfigFocus | undefined;
        respectSilence?: boolean | undefined;
        stayAwake?: boolean | undefined;
    }], implementation: {}): AudioContextConfig;
}
declare const _AudioContextConfigBinding: typeof _AudioContextConfigFactory & (new (options?: {
    route?: upstream0.AudioContextConfigRoute | undefined;
    focus?: upstream1.AudioContextConfigFocus | undefined;
    respectSilence?: boolean | undefined;
    stayAwake?: boolean | undefined;
}) => _AudioContextConfigNative);
export declare const AudioContextConfig: typeof _AudioContextConfigBinding & _FlaxInstanceType<AudioContextConfig> & _FlaxDartType<AudioContextConfig, readonly ["class", "flax.audio/audio#type:AudioContextConfig", readonly [], false]>;
export {};

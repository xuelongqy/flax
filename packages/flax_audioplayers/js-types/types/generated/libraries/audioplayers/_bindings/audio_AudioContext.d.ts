import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioContextAndroid';
import '@flax/audioplayers/_bindings/audio_AudioContextAndroid';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_AudioContextIOS';
import '@flax/audioplayers/_bindings/audio_AudioContextIOS';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioContext extends Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [];
}> {
    readonly __AudioContext: unique symbol;
    readonly [_flaxDartTypeValue]: AudioContext;
    readonly android: upstream0.AudioContextAndroid;
    get iOS(): upstream1.AudioContextIOS;
    copy(options?: {
        android?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [];
        }> | null | undefined;
        iOS?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
        }> | null | undefined;
    }): AudioContext;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
    set iOS(value: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
    }>);
}
export declare function _AudioContextFactory(options?: {
    android?: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [];
    }> | null | undefined;
    iOS?: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
    }> | null | undefined;
}): AudioContext;
export interface _AudioContextNative extends AudioContext {
    readonly [_flaxDartTypeValue]: _AudioContextNative;
    copy(options?: {
        android?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [];
        }> | null | undefined;
        iOS?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
        }> | null | undefined;
    }): AudioContext;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
    get android(): upstream0.AudioContextAndroid;
    get iOS(): upstream1.AudioContextIOS;
    set iOS(value: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
    }>);
}
export declare abstract class _AudioContextNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioContext>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AudioContext;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioContext", readonly [], false];
    constructor(options?: {
        android?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [];
        }> | null | undefined;
        iOS?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _AudioContextFactory {
    function implement(args: [options?: {
        android?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [];
        }> | null | undefined;
        iOS?: Readonly<{
            "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
        }> | null | undefined;
    }], implementation: {}): AudioContext;
}
declare const _AudioContextBinding: typeof _AudioContextFactory & (new (options?: {
    android?: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextAndroid": readonly [];
    }> | null | undefined;
    iOS?: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContextIOS": readonly [];
    }> | null | undefined;
}) => _AudioContextNative);
export declare const AudioContext: typeof _AudioContextBinding & _FlaxInstanceType<AudioContext> & _FlaxDartType<AudioContext, readonly ["class", "flax.audio/audio#type:AudioContext", readonly [], false]>;
export {};

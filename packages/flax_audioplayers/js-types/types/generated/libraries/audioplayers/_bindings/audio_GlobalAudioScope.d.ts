import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/audioplayers/_bindings/audio_GlobalAudioEvent';
import '@flax/audioplayers/_bindings/audio_GlobalAudioEvent';
import '@flax/audioplayers/_bindings/audio_AudioContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GlobalAudioScope extends Readonly<{
    "__flaxBound:package:audioplayers/src/global_audio_scope.dart::GlobalAudioScope": readonly [];
}> {
    readonly __GlobalAudioScope: unique symbol;
    readonly [_flaxDartTypeValue]: GlobalAudioScope;
    get eventStream(): upstream0.Stream<upstream1.GlobalAudioEvent>;
    readonly onLog: upstream0.Stream<string>;
    ensureInitialized(): Promise<void>;
    setAudioContext(ctx: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [];
    }>): Promise<void>;
    set eventStream(value: (upstream0.Stream<upstream1.GlobalAudioEvent> | upstream0.Stream<Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/global_audio_event.dart::GlobalAudioEvent": readonly [];
    }>>));
}
export declare function _GlobalAudioScopeFactory(): GlobalAudioScope;
export interface _GlobalAudioScopeNative extends GlobalAudioScope {
    readonly [_flaxDartTypeValue]: _GlobalAudioScopeNative;
    ensureInitialized(): Promise<void>;
    setAudioContext(ctx: Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AudioContext": readonly [];
    }>): Promise<void>;
    get eventStream(): upstream0.Stream<upstream1.GlobalAudioEvent>;
    get onLog(): upstream0.Stream<string>;
    set eventStream(value: (upstream0.Stream<upstream1.GlobalAudioEvent> | upstream0.Stream<Readonly<{
        "__flaxBound:package:audioplayers_platform_interface/src/api/global_audio_event.dart::GlobalAudioEvent": readonly [];
    }>>));
}
export declare abstract class _GlobalAudioScopeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalAudioScope>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GlobalAudioScope;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:GlobalAudioScope", readonly [], false];
    constructor();
}
export declare namespace _GlobalAudioScopeFactory {
    function implement(args: [], implementation: {}): GlobalAudioScope;
}
declare const _GlobalAudioScopeBinding: typeof _GlobalAudioScopeFactory & (new () => _GlobalAudioScopeNative);
export declare const GlobalAudioScope: typeof _GlobalAudioScopeBinding & _FlaxInstanceType<GlobalAudioScope> & _FlaxDartType<GlobalAudioScope, readonly ["class", "flax.audio/audio#type:GlobalAudioScope", readonly [], false]>;
export {};

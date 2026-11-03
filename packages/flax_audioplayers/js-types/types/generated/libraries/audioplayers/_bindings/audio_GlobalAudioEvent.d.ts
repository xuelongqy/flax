import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_GlobalAudioEventType';
import '@flax/audioplayers/_bindings/audio_GlobalAudioEventType';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GlobalAudioEvent extends Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/global_audio_event.dart::GlobalAudioEvent": readonly [];
}> {
    readonly __GlobalAudioEvent: unique symbol;
    readonly [_flaxDartTypeValue]: GlobalAudioEvent;
    readonly eventType: upstream0.GlobalAudioEventType;
    readonly logMessage: string | null;
    toString(): string;
}
export declare function _GlobalAudioEventFactory(options: {
    eventType: upstream0.GlobalAudioEventType;
    logMessage?: string | null | undefined;
}): GlobalAudioEvent;
export interface _GlobalAudioEventNative extends GlobalAudioEvent {
    readonly [_flaxDartTypeValue]: _GlobalAudioEventNative;
    toString(): string;
    get eventType(): upstream0.GlobalAudioEventType;
    get logMessage(): string | null;
}
export declare abstract class _GlobalAudioEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalAudioEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GlobalAudioEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:GlobalAudioEvent", readonly [], false];
    constructor(options: {
        eventType: upstream0.GlobalAudioEventType;
        logMessage?: string | null | undefined;
    });
}
export declare namespace _GlobalAudioEventFactory {
    function implement(args: [options: {
        eventType: upstream0.GlobalAudioEventType;
        logMessage?: string | null | undefined;
    }], implementation: {}): GlobalAudioEvent;
}
declare const _GlobalAudioEventBinding: typeof _GlobalAudioEventFactory & (new (options: {
    eventType: upstream0.GlobalAudioEventType;
    logMessage?: string | null | undefined;
}) => _GlobalAudioEventNative);
export declare const GlobalAudioEvent: typeof _GlobalAudioEventBinding & _FlaxInstanceType<GlobalAudioEvent> & _FlaxDartType<GlobalAudioEvent, readonly ["class", "flax.audio/audio#type:GlobalAudioEvent", readonly [], false]>;
export {};

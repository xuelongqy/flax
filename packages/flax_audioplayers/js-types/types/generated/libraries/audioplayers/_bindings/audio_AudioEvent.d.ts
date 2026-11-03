import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioEventType';
import '@flax/audioplayers/_bindings/audio_AudioEventType';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioEvent extends Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_event.dart::AudioEvent": readonly [];
}> {
    readonly __AudioEvent: unique symbol;
    readonly [_flaxDartTypeValue]: AudioEvent;
    readonly eventType: upstream0.AudioEventType;
    readonly duration: upstream1.Duration | null;
    readonly logMessage: string | null;
    readonly isPrepared: boolean | null;
    toString(): string;
}
export declare function _AudioEventFactory(options: {
    eventType: upstream0.AudioEventType;
    duration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | null | undefined;
    logMessage?: string | null | undefined;
    isPrepared?: boolean | null | undefined;
}): AudioEvent;
export interface _AudioEventNative extends AudioEvent {
    readonly [_flaxDartTypeValue]: _AudioEventNative;
    toString(): string;
    get eventType(): upstream0.AudioEventType;
    get duration(): upstream1.Duration | null;
    get logMessage(): string | null;
    get isPrepared(): boolean | null;
}
export declare abstract class _AudioEventNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AudioEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioEvent", readonly [], false];
    constructor(options: {
        eventType: upstream0.AudioEventType;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>) | null | undefined;
        logMessage?: string | null | undefined;
        isPrepared?: boolean | null | undefined;
    });
}
export declare namespace _AudioEventFactory {
    function implement(args: [options: {
        eventType: upstream0.AudioEventType;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>) | null | undefined;
        logMessage?: string | null | undefined;
        isPrepared?: boolean | null | undefined;
    }], implementation: {}): AudioEvent;
}
declare const _AudioEventBinding: typeof _AudioEventFactory & (new (options: {
    eventType: upstream0.AudioEventType;
    duration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | null | undefined;
    logMessage?: string | null | undefined;
    isPrepared?: boolean | null | undefined;
}) => _AudioEventNative);
export declare const AudioEvent: typeof _AudioEventBinding & _FlaxInstanceType<AudioEvent> & _FlaxDartType<AudioEvent, readonly ["class", "flax.audio/audio#type:AudioEvent", readonly [], false]>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioLogLevel';
import '@flax/audioplayers/_bindings/audio_AudioLogLevel';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioLogger extends Readonly<{
    "__flaxBound:package:audioplayers/src/audio_logger.dart::AudioLogger": readonly [];
}> {
    readonly __AudioLogger: unique symbol;
    readonly [_flaxDartTypeValue]: AudioLogger;
}
export declare function _AudioLoggerFactory(): AudioLogger;
export declare namespace _AudioLoggerFactory {
    function setLogLevel(value: upstream0.AudioLogLevel): void;
}
export declare namespace _AudioLoggerFactory {
    const logLevel: upstream0.AudioLogLevel;
}
export declare namespace _AudioLoggerFactory {
    function log(message: string): void;
}
export declare namespace _AudioLoggerFactory {
    function error(o: {}, stacktrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): void;
}
export declare namespace _AudioLoggerFactory {
    function errorToString(o: {}, stackTrace?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null): string;
}
export declare const AudioLogger: typeof _AudioLoggerFactory & _FlaxInstanceType<AudioLogger> & _FlaxDartType<AudioLogger, readonly ["class", "flax.audio/audio#type:AudioLogger", readonly [], false]>;

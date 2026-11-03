import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioLogLevel extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "level" | "compareTo" | "__flaxBound:package:audioplayers/src/audio_log_level.dart::AudioLogLevel">, Omit<upstream1.Comparable<AudioLogLevel>, typeof _flaxDartTypeValue | "level" | "compareTo" | "__flaxBound:package:audioplayers/src/audio_log_level.dart::AudioLogLevel" | keyof upstream0.Enum>, Readonly<{
    "__flaxBound:package:audioplayers/src/audio_log_level.dart::AudioLogLevel": readonly [];
}> {
    readonly __AudioLogLevel: unique symbol;
    readonly [_flaxDartTypeValue]: AudioLogLevel;
    readonly name: string;
    readonly index: number;
    readonly level: number;
    compareTo(other: AudioLogLevel): number;
}
export declare const AudioLogLevel: Readonly<{
    none: AudioLogLevel;
    error: AudioLogLevel;
    info: AudioLogLevel;
    values: readonly AudioLogLevel[];
    fromInt(level: number): AudioLogLevel;
} & _FlaxInstanceType<AudioLogLevel> & _FlaxDartType<AudioLogLevel, readonly ["class", "flax.audio/audio#type:AudioLogLevel", readonly [], false]>>;

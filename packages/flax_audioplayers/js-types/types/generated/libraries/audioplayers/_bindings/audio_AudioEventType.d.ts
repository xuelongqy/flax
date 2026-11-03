import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioEventType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_event.dart::AudioEventType">, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_event.dart::AudioEventType": readonly [];
}> {
    readonly __AudioEventType: unique symbol;
    readonly [_flaxDartTypeValue]: AudioEventType;
    readonly name: string;
    readonly index: number;
}
export declare const AudioEventType: Readonly<{
    log: AudioEventType;
    duration: AudioEventType;
    seekComplete: AudioEventType;
    complete: AudioEventType;
    prepared: AudioEventType;
    values: readonly AudioEventType[];
} & _FlaxInstanceType<AudioEventType> & _FlaxDartType<AudioEventType, readonly ["class", "flax.audio/audio#type:AudioEventType", readonly [], false]>>;

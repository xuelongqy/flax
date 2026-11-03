import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidAudioMode extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidAudioMode": readonly [];
}> {
    readonly __AndroidAudioMode: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidAudioMode;
    readonly name: string;
    readonly index: number;
    readonly value: number;
}
export declare const AndroidAudioMode: Readonly<{
    normal: AndroidAudioMode;
    ringtone: AndroidAudioMode;
    inCall: AndroidAudioMode;
    inCommunication: AndroidAudioMode;
    callScreening: AndroidAudioMode;
    values: readonly AndroidAudioMode[];
    fromInt(value: number): AndroidAudioMode;
} & _FlaxInstanceType<AndroidAudioMode> & _FlaxDartType<AndroidAudioMode, readonly ["class", "flax.audio/audio#type:AndroidAudioMode", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidAudioMode";
export {};

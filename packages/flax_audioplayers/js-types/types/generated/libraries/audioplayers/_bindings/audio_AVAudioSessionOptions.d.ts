import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AVAudioSessionOptions extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AVAudioSessionOptions": readonly [];
}> {
    readonly __AVAudioSessionOptions: unique symbol;
    readonly [_flaxDartTypeValue]: AVAudioSessionOptions;
    readonly name: string;
    readonly index: number;
}
export declare const AVAudioSessionOptions: Readonly<{
    mixWithOthers: AVAudioSessionOptions;
    duckOthers: AVAudioSessionOptions;
    interruptSpokenAudioAndMixWithOthers: AVAudioSessionOptions;
    allowBluetooth: AVAudioSessionOptions;
    allowBluetoothA2DP: AVAudioSessionOptions;
    allowAirPlay: AVAudioSessionOptions;
    defaultToSpeaker: AVAudioSessionOptions;
    overrideMutedMicrophoneInterruption: AVAudioSessionOptions;
    values: readonly AVAudioSessionOptions[];
} & _FlaxInstanceType<AVAudioSessionOptions> & _FlaxDartType<AVAudioSessionOptions, readonly ["class", "flax.audio/audio#type:AVAudioSessionOptions", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AVAudioSessionOptions";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AVAudioSessionCategory extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AVAudioSessionCategory": readonly [];
}> {
    readonly __AVAudioSessionCategory: unique symbol;
    readonly [_flaxDartTypeValue]: AVAudioSessionCategory;
    readonly name: string;
    readonly index: number;
}
export declare const AVAudioSessionCategory: Readonly<{
    ambient: AVAudioSessionCategory;
    soloAmbient: AVAudioSessionCategory;
    playback: AVAudioSessionCategory;
    record: AVAudioSessionCategory;
    playAndRecord: AVAudioSessionCategory;
    multiRoute: AVAudioSessionCategory;
    values: readonly AVAudioSessionCategory[];
} & _FlaxInstanceType<AVAudioSessionCategory> & _FlaxDartType<AVAudioSessionCategory, readonly ["class", "flax.audio/audio#type:AVAudioSessionCategory", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AVAudioSessionCategory";
export {};

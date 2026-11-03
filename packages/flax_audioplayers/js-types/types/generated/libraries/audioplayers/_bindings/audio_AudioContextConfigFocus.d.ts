import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioContextConfigFocus extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfigFocus": readonly [];
}> {
    readonly __AudioContextConfigFocus: unique symbol;
    readonly [_flaxDartTypeValue]: AudioContextConfigFocus;
    readonly name: string;
    readonly index: number;
}
export declare const AudioContextConfigFocus: Readonly<{
    gain: AudioContextConfigFocus;
    duckOthers: AudioContextConfigFocus;
    mixWithOthers: AudioContextConfigFocus;
    values: readonly AudioContextConfigFocus[];
} & _FlaxInstanceType<AudioContextConfigFocus> & _FlaxDartType<AudioContextConfigFocus, readonly ["class", "flax.audio/audio#type:AudioContextConfigFocus", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfigFocus";
export {};

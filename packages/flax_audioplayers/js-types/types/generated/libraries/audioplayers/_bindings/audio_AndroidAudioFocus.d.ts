import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidAudioFocus extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidAudioFocus": readonly [];
}> {
    readonly __AndroidAudioFocus: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidAudioFocus;
    readonly name: string;
    readonly index: number;
    readonly value: number;
}
export declare const AndroidAudioFocus: Readonly<{
    none: AndroidAudioFocus;
    gain: AndroidAudioFocus;
    gainTransient: AndroidAudioFocus;
    gainTransientMayDuck: AndroidAudioFocus;
    gainTransientExclusive: AndroidAudioFocus;
    values: readonly AndroidAudioFocus[];
    fromInt(value: number): AndroidAudioFocus;
} & _FlaxInstanceType<AndroidAudioFocus> & _FlaxDartType<AndroidAudioFocus, readonly ["class", "flax.audio/audio#type:AndroidAudioFocus", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidAudioFocus";
export {};

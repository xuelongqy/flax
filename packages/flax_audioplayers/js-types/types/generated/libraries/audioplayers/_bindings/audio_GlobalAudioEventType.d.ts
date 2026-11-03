import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GlobalAudioEventType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/global_audio_event.dart::GlobalAudioEventType": readonly [];
}> {
    readonly __GlobalAudioEventType: unique symbol;
    readonly [_flaxDartTypeValue]: GlobalAudioEventType;
    readonly name: string;
    readonly index: number;
}
export declare const GlobalAudioEventType: Readonly<{
    log: GlobalAudioEventType;
    values: readonly GlobalAudioEventType[];
} & _FlaxInstanceType<GlobalAudioEventType> & _FlaxDartType<GlobalAudioEventType, readonly ["class", "flax.audio/audio#type:GlobalAudioEventType", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/global_audio_event.dart::GlobalAudioEventType";
export {};

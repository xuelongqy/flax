import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioContextConfigRoute extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfigRoute": readonly [];
}> {
    readonly __AudioContextConfigRoute: unique symbol;
    readonly [_flaxDartTypeValue]: AudioContextConfigRoute;
    readonly name: string;
    readonly index: number;
}
export declare const AudioContextConfigRoute: Readonly<{
    system: AudioContextConfigRoute;
    earpiece: AudioContextConfigRoute;
    speaker: AudioContextConfigRoute;
    values: readonly AudioContextConfigRoute[];
} & _FlaxInstanceType<AudioContextConfigRoute> & _FlaxDartType<AudioContextConfigRoute, readonly ["class", "flax.audio/audio#type:AudioContextConfigRoute", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfigRoute";
export {};

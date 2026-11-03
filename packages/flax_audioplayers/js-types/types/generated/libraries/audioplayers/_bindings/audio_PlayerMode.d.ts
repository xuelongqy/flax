import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlayerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/player_mode.dart::PlayerMode">, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/player_mode.dart::PlayerMode": readonly [];
}> {
    readonly __PlayerMode: unique symbol;
    readonly [_flaxDartTypeValue]: PlayerMode;
    readonly name: string;
    readonly index: number;
}
export declare const PlayerMode: Readonly<{
    mediaPlayer: PlayerMode;
    lowLatency: PlayerMode;
    values: readonly PlayerMode[];
} & _FlaxInstanceType<PlayerMode> & _FlaxDartType<PlayerMode, readonly ["class", "flax.audio/audio#type:PlayerMode", readonly [], false]>>;

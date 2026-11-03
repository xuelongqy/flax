import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlayerState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/player_state.dart::PlayerState">, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/player_state.dart::PlayerState": readonly [];
}> {
    readonly __PlayerState: unique symbol;
    readonly [_flaxDartTypeValue]: PlayerState;
    readonly name: string;
    readonly index: number;
}
export declare const PlayerState: Readonly<{
    stopped: PlayerState;
    playing: PlayerState;
    paused: PlayerState;
    completed: PlayerState;
    disposed: PlayerState;
    values: readonly PlayerState[];
} & _FlaxInstanceType<PlayerState> & _FlaxDartType<PlayerState, readonly ["class", "flax.audio/audio#type:PlayerState", readonly [], false]>>;

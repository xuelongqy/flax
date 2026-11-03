import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ReleaseMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/release_mode.dart::ReleaseMode">, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/release_mode.dart::ReleaseMode": readonly [];
}> {
    readonly __ReleaseMode: unique symbol;
    readonly [_flaxDartTypeValue]: ReleaseMode;
    readonly name: string;
    readonly index: number;
}
export declare const ReleaseMode: Readonly<{
    release: ReleaseMode;
    loop: ReleaseMode;
    stop: ReleaseMode;
    values: readonly ReleaseMode[];
} & _FlaxInstanceType<ReleaseMode> & _FlaxDartType<ReleaseMode, readonly ["class", "flax.audio/audio#type:ReleaseMode", readonly [], false]>>;

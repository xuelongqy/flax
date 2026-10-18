import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemSoundType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/system_sound.dart::SystemSoundType">, Readonly<{
    "__flaxBound:package:flutter/src/services/system_sound.dart::SystemSoundType": readonly [];
}> {
    readonly __SystemSoundType: unique symbol;
    readonly [_flaxDartTypeValue]: SystemSoundType;
    readonly name: string;
    readonly index: number;
}
export declare const SystemSoundType: Readonly<{
    click: SystemSoundType;
    tick: SystemSoundType;
    alert: SystemSoundType;
    values: readonly SystemSoundType[];
} & _FlaxInstanceType<SystemSoundType> & _FlaxDartType<SystemSoundType, readonly ["class", "flax.core/sdk_services#type:SystemSoundType", readonly [], false]>>;

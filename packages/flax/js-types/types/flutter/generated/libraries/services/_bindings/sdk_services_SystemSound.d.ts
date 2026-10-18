import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SystemSoundType';
import '@flax/flutter/services/_bindings/sdk_services_SystemSoundType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemSound extends Readonly<{
    "__flaxBound:package:flutter/src/services/system_sound.dart::SystemSound": readonly [];
}> {
    readonly __SystemSound: unique symbol;
    readonly [_flaxDartTypeValue]: SystemSound;
}
export declare namespace _SystemSoundFactory {
    function play(type: upstream0.SystemSoundType): Promise<void>;
}
export declare const SystemSound: typeof _SystemSoundFactory & _FlaxInstanceType<SystemSound> & _FlaxDartType<SystemSound, readonly ["class", "flax.core/sdk_services#type:SystemSound", readonly [], false]>;

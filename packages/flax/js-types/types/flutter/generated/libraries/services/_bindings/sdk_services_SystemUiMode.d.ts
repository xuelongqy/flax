import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemUiMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiMode">, Readonly<{
    "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiMode": readonly [];
}> {
    readonly __SystemUiMode: unique symbol;
    readonly [_flaxDartTypeValue]: SystemUiMode;
    readonly name: string;
    readonly index: number;
}
export declare const SystemUiMode: Readonly<{
    leanBack: SystemUiMode;
    immersive: SystemUiMode;
    immersiveSticky: SystemUiMode;
    edgeToEdge: SystemUiMode;
    manual: SystemUiMode;
    values: readonly SystemUiMode[];
} & _FlaxInstanceType<SystemUiMode> & _FlaxDartType<SystemUiMode, readonly ["class", "flax.core/sdk_services#type:SystemUiMode", readonly [], false]>>;

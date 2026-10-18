import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemUiOverlay extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlay">, Readonly<{
    "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlay": readonly [];
}> {
    readonly __SystemUiOverlay: unique symbol;
    readonly [_flaxDartTypeValue]: SystemUiOverlay;
    readonly name: string;
    readonly index: number;
}
export declare const SystemUiOverlay: Readonly<{
    top: SystemUiOverlay;
    bottom: SystemUiOverlay;
    values: readonly SystemUiOverlay[];
} & _FlaxInstanceType<SystemUiOverlay> & _FlaxDartType<SystemUiOverlay, readonly ["class", "flax.core/sdk_services#type:SystemUiOverlay", readonly [], false]>>;

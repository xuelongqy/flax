import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DeviceOrientation extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/system_chrome.dart::DeviceOrientation">, Readonly<{
    "__flaxBound:package:flutter/src/services/system_chrome.dart::DeviceOrientation": readonly [];
}> {
    readonly __DeviceOrientation: unique symbol;
    readonly [_flaxDartTypeValue]: DeviceOrientation;
    readonly name: string;
    readonly index: number;
}
export declare const DeviceOrientation: Readonly<{
    portraitUp: DeviceOrientation;
    landscapeLeft: DeviceOrientation;
    portraitDown: DeviceOrientation;
    landscapeRight: DeviceOrientation;
    values: readonly DeviceOrientation[];
} & _FlaxInstanceType<DeviceOrientation> & _FlaxDartType<DeviceOrientation, readonly ["class", "flax.core/sdk_services#type:DeviceOrientation", readonly [], false]>>;

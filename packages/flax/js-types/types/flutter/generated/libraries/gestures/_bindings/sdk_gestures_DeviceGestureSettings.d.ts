import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DeviceGestureSettings extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
}> {
    readonly __DeviceGestureSettings: unique symbol;
    readonly [_flaxDartTypeValue]: DeviceGestureSettings;
}
export interface DeviceGestureSettings {
    readonly [_flaxDartTypeValue]: DeviceGestureSettings;
    toString(): string;
    get touchSlop(): number | null;
    get panSlop(): number | null;
}
export declare abstract class DeviceGestureSettings extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DeviceGestureSettings>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DeviceGestureSettings;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:DeviceGestureSettings", readonly [], false];
    constructor(options?: {
        touchSlop?: number | null | undefined;
    });
}
export declare namespace DeviceGestureSettings {
    function implement(args: [options?: {
        touchSlop?: number | null | undefined;
    }], implementation: {}): DeviceGestureSettings;
}

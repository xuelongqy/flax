import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DeviceGestureSettings extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
}> {
    readonly __DeviceGestureSettings: unique symbol;
    readonly [_flaxDartTypeValue]: DeviceGestureSettings;
    readonly touchSlop: number | null;
    readonly panSlop: number | null;
    toString(): string;
}
export declare function _DeviceGestureSettingsFactory(options?: {
    touchSlop?: number | null | undefined;
}): DeviceGestureSettings;
export declare namespace _DeviceGestureSettingsFactory {
    function fromView(view: Readonly<{
        "__flaxBound:dart:ui::FlutterView": readonly [];
    }>): DeviceGestureSettings;
}
export interface _DeviceGestureSettingsNative extends DeviceGestureSettings {
    readonly [_flaxDartTypeValue]: _DeviceGestureSettingsNative;
    toString(): string;
    get touchSlop(): number | null;
    get panSlop(): number | null;
}
export declare abstract class _DeviceGestureSettingsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DeviceGestureSettings>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DeviceGestureSettings;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:DeviceGestureSettings", readonly [], false];
    constructor(options?: {
        touchSlop?: number | null | undefined;
    });
}
export declare namespace _DeviceGestureSettingsFactory {
    function implement(args: [options?: {
        touchSlop?: number | null | undefined;
    }], implementation: {}): DeviceGestureSettings;
}
declare const _DeviceGestureSettingsBinding: typeof _DeviceGestureSettingsFactory & (new (options?: {
    touchSlop?: number | null | undefined;
}) => _DeviceGestureSettingsNative);
export declare const DeviceGestureSettings: typeof _DeviceGestureSettingsBinding & _FlaxInstanceType<DeviceGestureSettings> & _FlaxDartType<DeviceGestureSettings, readonly ["class", "flax.core/sdk_gestures#type:DeviceGestureSettings", readonly [], false]>;
export {};

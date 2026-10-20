import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GestureSettings extends Readonly<{
    "__flaxBound:dart:ui::GestureSettings": readonly [];
}> {
    readonly __GestureSettings: unique symbol;
    readonly [_flaxDartTypeValue]: GestureSettings;
    readonly physicalTouchSlop: number | null;
    readonly physicalDoubleTapSlop: number | null;
    copyWith(options?: {
        physicalDoubleTapSlop?: number | null | undefined;
        physicalTouchSlop?: number | null | undefined;
    }): GestureSettings;
    toString(): string;
}
export declare function _GestureSettingsFactory(options?: {
    physicalTouchSlop?: number | null | undefined;
    physicalDoubleTapSlop?: number | null | undefined;
}): GestureSettings;
export interface _GestureSettingsNative extends GestureSettings {
    readonly [_flaxDartTypeValue]: _GestureSettingsNative;
    copyWith(options?: {
        physicalTouchSlop?: number | null | undefined;
        physicalDoubleTapSlop?: number | null | undefined;
    }): GestureSettings;
    toString(): string;
    get physicalTouchSlop(): number | null;
    get physicalDoubleTapSlop(): number | null;
}
export declare abstract class _GestureSettingsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureSettings>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GestureSettings;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:GestureSettings", readonly [], false];
    constructor(options?: {
        physicalTouchSlop?: number | null | undefined;
        physicalDoubleTapSlop?: number | null | undefined;
    });
}
export declare namespace _GestureSettingsFactory {
    function implement(args: [options?: {
        physicalTouchSlop?: number | null | undefined;
        physicalDoubleTapSlop?: number | null | undefined;
    }], implementation: {}): GestureSettings;
}
declare const _GestureSettingsBinding: typeof _GestureSettingsFactory & (new (options?: {
    physicalTouchSlop?: number | null | undefined;
    physicalDoubleTapSlop?: number | null | undefined;
}) => _GestureSettingsNative);
export declare const GestureSettings: typeof _GestureSettingsBinding & _FlaxInstanceType<GestureSettings> & _FlaxDartType<GestureSettings, readonly ["class", "flax.core/sdk_dart_ui#type:GestureSettings", readonly [], false]>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface GestureSettings extends Readonly<{
    "__flaxBound:dart:ui::GestureSettings": readonly [];
}> {
    readonly __GestureSettings: unique symbol;
    readonly [_flaxDartTypeValue]: GestureSettings;
}
export interface GestureSettings {
    readonly [_flaxDartTypeValue]: GestureSettings;
    copyWith(options?: {
        physicalTouchSlop?: number | null | undefined;
        physicalDoubleTapSlop?: number | null | undefined;
    }): GestureSettings;
    toString(): string;
    get physicalTouchSlop(): number | null;
    get physicalDoubleTapSlop(): number | null;
}
export declare abstract class GestureSettings extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureSettings>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GestureSettings;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:GestureSettings", readonly [], false];
    constructor(options?: {
        physicalTouchSlop?: number | null | undefined;
        physicalDoubleTapSlop?: number | null | undefined;
    });
}
export declare namespace GestureSettings {
    function implement(args: [options?: {
        physicalTouchSlop?: number | null | undefined;
        physicalDoubleTapSlop?: number | null | undefined;
    }], implementation: {}): GestureSettings;
}

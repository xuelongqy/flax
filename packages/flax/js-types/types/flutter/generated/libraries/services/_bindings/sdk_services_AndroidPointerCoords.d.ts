import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AndroidPointerCoords extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [];
}> {
    readonly __AndroidPointerCoords: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidPointerCoords;
}
export interface AndroidPointerCoords {
    readonly [_flaxDartTypeValue]: AndroidPointerCoords;
    toString(): string;
    get orientation(): number;
    get pressure(): number;
    get size(): number;
    get toolMajor(): number;
    get toolMinor(): number;
    get touchMajor(): number;
    get touchMinor(): number;
    get x(): number;
    get y(): number;
}
export declare abstract class AndroidPointerCoords extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AndroidPointerCoords>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AndroidPointerCoords;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AndroidPointerCoords", readonly [], false];
    constructor(options: {
        orientation: number;
        pressure: number;
        size: number;
        toolMajor: number;
        toolMinor: number;
        touchMajor: number;
        touchMinor: number;
        x: number;
        y: number;
    });
}
export declare namespace AndroidPointerCoords {
    function implement(args: [options: {
        orientation: number;
        pressure: number;
        size: number;
        toolMajor: number;
        toolMinor: number;
        touchMajor: number;
        touchMinor: number;
        x: number;
        y: number;
    }], implementation: {}): AndroidPointerCoords;
}

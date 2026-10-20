import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidPointerCoords extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerCoords": readonly [];
}> {
    readonly __AndroidPointerCoords: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidPointerCoords;
    readonly orientation: number;
    readonly pressure: number;
    readonly size: number;
    readonly toolMajor: number;
    readonly toolMinor: number;
    readonly touchMajor: number;
    readonly touchMinor: number;
    readonly x: number;
    readonly y: number;
    toString(): string;
}
export declare function _AndroidPointerCoordsFactory(options: {
    orientation: number;
    pressure: number;
    size: number;
    toolMajor: number;
    toolMinor: number;
    touchMajor: number;
    touchMinor: number;
    x: number;
    y: number;
}): AndroidPointerCoords;
export interface _AndroidPointerCoordsNative extends AndroidPointerCoords {
    readonly [_flaxDartTypeValue]: _AndroidPointerCoordsNative;
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
export declare abstract class _AndroidPointerCoordsNative extends _FlaxProxyBase {
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
export declare namespace _AndroidPointerCoordsFactory {
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
declare const _AndroidPointerCoordsBinding: typeof _AndroidPointerCoordsFactory & (new (options: {
    orientation: number;
    pressure: number;
    size: number;
    toolMajor: number;
    toolMinor: number;
    touchMajor: number;
    touchMinor: number;
    x: number;
    y: number;
}) => _AndroidPointerCoordsNative);
export declare const AndroidPointerCoords: typeof _AndroidPointerCoordsBinding & _FlaxInstanceType<AndroidPointerCoords> & _FlaxDartType<AndroidPointerCoords, readonly ["class", "flax.core/sdk_services#type:AndroidPointerCoords", readonly [], false]>;
export {};

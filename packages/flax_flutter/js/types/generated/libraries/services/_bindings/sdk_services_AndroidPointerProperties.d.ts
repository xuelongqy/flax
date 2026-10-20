import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidPointerProperties extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [];
}> {
    readonly __AndroidPointerProperties: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidPointerProperties;
    readonly id: number;
    readonly toolType: number;
    toString(): string;
}
export declare function _AndroidPointerPropertiesFactory(options: {
    id: number;
    toolType: number;
}): AndroidPointerProperties;
export interface _AndroidPointerPropertiesNative extends AndroidPointerProperties {
    readonly [_flaxDartTypeValue]: _AndroidPointerPropertiesNative;
    toString(): string;
    get id(): number;
    get toolType(): number;
}
export declare abstract class _AndroidPointerPropertiesNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AndroidPointerProperties>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AndroidPointerProperties;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AndroidPointerProperties", readonly [], false];
    constructor(options: {
        id: number;
        toolType: number;
    });
}
export declare namespace _AndroidPointerPropertiesFactory {
    function implement(args: [options: {
        id: number;
        toolType: number;
    }], implementation: {}): AndroidPointerProperties;
}
declare const _AndroidPointerPropertiesBinding: typeof _AndroidPointerPropertiesFactory & (new (options: {
    id: number;
    toolType: number;
}) => _AndroidPointerPropertiesNative);
export declare namespace _AndroidPointerPropertiesFactory {
    const kToolTypeUnknown: number;
}
export declare namespace _AndroidPointerPropertiesFactory {
    const kToolTypeFinger: number;
}
export declare namespace _AndroidPointerPropertiesFactory {
    const kToolTypeStylus: number;
}
export declare namespace _AndroidPointerPropertiesFactory {
    const kToolTypeMouse: number;
}
export declare namespace _AndroidPointerPropertiesFactory {
    const kToolTypeEraser: number;
}
export declare const AndroidPointerProperties: typeof _AndroidPointerPropertiesBinding & _FlaxInstanceType<AndroidPointerProperties> & _FlaxDartType<AndroidPointerProperties, readonly ["class", "flax.core/sdk_services#type:AndroidPointerProperties", readonly [], false]>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AndroidPointerProperties extends Readonly<{
    "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidPointerProperties": readonly [];
}> {
    readonly __AndroidPointerProperties: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidPointerProperties;
}
export interface AndroidPointerProperties {
    readonly [_flaxDartTypeValue]: AndroidPointerProperties;
    toString(): string;
    get id(): number;
    get toolType(): number;
}
export declare abstract class AndroidPointerProperties extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AndroidPointerProperties>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AndroidPointerProperties;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AndroidPointerProperties", readonly [], false];
    constructor(options: {
        id: number;
        toolType: number;
    });
}
export declare namespace AndroidPointerProperties {
    function implement(args: [options: {
        id: number;
        toolType: number;
    }], implementation: {}): AndroidPointerProperties;
}
export declare namespace AndroidPointerProperties {
    const kToolTypeUnknown: number;
}
export declare namespace AndroidPointerProperties {
    const kToolTypeFinger: number;
}
export declare namespace AndroidPointerProperties {
    const kToolTypeStylus: number;
}
export declare namespace AndroidPointerProperties {
    const kToolTypeMouse: number;
}
export declare namespace AndroidPointerProperties {
    const kToolTypeEraser: number;
}

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextAlignVertical extends Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::TextAlignVertical": readonly [];
}> {
    readonly __TextAlignVertical: unique symbol;
    readonly [_flaxDartTypeValue]: TextAlignVertical;
    readonly y: number;
    toString(): string;
}
export declare function _TextAlignVerticalFactory(options: {
    y: number;
}): TextAlignVertical;
export interface _TextAlignVerticalNative extends TextAlignVertical {
    readonly [_flaxDartTypeValue]: _TextAlignVerticalNative;
    toString(): string;
    get y(): number;
}
export declare abstract class _TextAlignVerticalNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextAlignVertical>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextAlignVertical;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextAlignVertical", readonly [], false];
    constructor(options: {
        y: number;
    });
}
export declare namespace _TextAlignVerticalFactory {
    function implement(args: [options: {
        y: number;
    }], implementation: {}): TextAlignVertical;
}
declare const _TextAlignVerticalBinding: typeof _TextAlignVerticalFactory & (new (options: {
    y: number;
}) => _TextAlignVerticalNative);
export declare namespace _TextAlignVerticalFactory {
    const top: TextAlignVertical;
}
export declare namespace _TextAlignVerticalFactory {
    const center: TextAlignVertical;
}
export declare namespace _TextAlignVerticalFactory {
    const bottom: TextAlignVertical;
}
export declare const TextAlignVertical: typeof _TextAlignVerticalBinding & _FlaxInstanceType<TextAlignVertical> & _FlaxDartType<TextAlignVertical, readonly ["class", "flax.core/sdk_painting#type:TextAlignVertical", readonly [], false]>;
export {};

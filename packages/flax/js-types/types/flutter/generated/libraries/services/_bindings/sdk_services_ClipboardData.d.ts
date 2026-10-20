import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ClipboardData extends Readonly<{
    "__flaxBound:package:flutter/src/services/clipboard.dart::ClipboardData": readonly [];
}> {
    readonly __ClipboardData: unique symbol;
    readonly [_flaxDartTypeValue]: ClipboardData;
    readonly text: string | null;
}
export declare function _ClipboardDataFactory(options: {
    text: string;
}): ClipboardData;
export interface _ClipboardDataNative extends ClipboardData {
    readonly [_flaxDartTypeValue]: _ClipboardDataNative;
    get text(): string | null;
}
export declare abstract class _ClipboardDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClipboardData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ClipboardData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ClipboardData", readonly [], false];
    constructor(options: {
        text: string;
    });
}
export declare namespace _ClipboardDataFactory {
    function implement(args: [options: {
        text: string;
    }], implementation: {}): ClipboardData;
}
declare const _ClipboardDataBinding: typeof _ClipboardDataFactory & (new (options: {
    text: string;
}) => _ClipboardDataNative);
export declare const ClipboardData: typeof _ClipboardDataBinding & _FlaxInstanceType<ClipboardData> & _FlaxDartType<ClipboardData, readonly ["class", "flax.core/sdk_services#type:ClipboardData", readonly [], false]>;
export {};

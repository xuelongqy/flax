import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ClipboardData extends Readonly<{
    "__flaxBound:package:flutter/src/services/clipboard.dart::ClipboardData": readonly [];
}> {
    readonly __ClipboardData: unique symbol;
    readonly [_flaxDartTypeValue]: ClipboardData;
}
export interface ClipboardData {
    readonly [_flaxDartTypeValue]: ClipboardData;
    get text(): string | null;
}
export declare abstract class ClipboardData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClipboardData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ClipboardData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ClipboardData", readonly [], false];
    constructor(options: {
        text: string;
    });
}
export declare namespace ClipboardData {
    function implement(args: [options: {
        text: string;
    }], implementation: {}): ClipboardData;
}

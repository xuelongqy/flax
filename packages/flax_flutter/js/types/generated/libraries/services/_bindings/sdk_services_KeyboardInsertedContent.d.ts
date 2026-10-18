import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface KeyboardInsertedContent extends Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [];
}> {
    readonly __KeyboardInsertedContent: unique symbol;
    readonly [_flaxDartTypeValue]: KeyboardInsertedContent;
}
export interface KeyboardInsertedContent {
    readonly [_flaxDartTypeValue]: KeyboardInsertedContent;
    toString(): string;
    get mimeType(): string;
    get uri(): string;
    get data(): globalThis.Uint8Array | null;
    get hasData(): boolean;
}
export declare abstract class KeyboardInsertedContent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyboardInsertedContent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeyboardInsertedContent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyboardInsertedContent", readonly [], false];
    constructor(options: {
        mimeType: string;
        uri: string;
        data?: globalThis.Uint8Array | null | undefined;
    });
}
export declare namespace KeyboardInsertedContent {
    function implement(args: [options: {
        mimeType: string;
        uri: string;
        data?: globalThis.Uint8Array | null | undefined;
    }], implementation: {}): KeyboardInsertedContent;
}

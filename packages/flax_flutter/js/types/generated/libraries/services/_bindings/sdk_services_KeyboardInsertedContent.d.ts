import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeyboardInsertedContent extends Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [];
}> {
    readonly __KeyboardInsertedContent: unique symbol;
    readonly [_flaxDartTypeValue]: KeyboardInsertedContent;
    readonly mimeType: string;
    readonly uri: string;
    readonly data: globalThis.Uint8Array | null;
    readonly hasData: boolean;
    toString(): string;
}
export declare function _KeyboardInsertedContentFactory(options: {
    mimeType: string;
    uri: string;
    data?: globalThis.Uint8Array | null | undefined;
}): KeyboardInsertedContent;
export declare namespace _KeyboardInsertedContentFactory {
    function fromJson(metadata: DartMapInput<string, unknown | null, string, unknown | null>): KeyboardInsertedContent;
}
export interface _KeyboardInsertedContentNative extends KeyboardInsertedContent {
    readonly [_flaxDartTypeValue]: _KeyboardInsertedContentNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            mimeType: string;
            uri: string;
            data?: globalThis.Uint8Array | null | undefined;
        }) => void;
        "fromJson": (metadata: DartMapInput<string, unknown | null, string, unknown | null>) => void;
    };
    toString(): string;
    get mimeType(): string;
    get uri(): string;
    get data(): globalThis.Uint8Array | null;
    get hasData(): boolean;
}
export declare abstract class _KeyboardInsertedContentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyboardInsertedContent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeyboardInsertedContent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyboardInsertedContent", readonly [], false];
    constructor(options: {
        mimeType: string;
        uri: string;
        data?: globalThis.Uint8Array | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_KeyboardInsertedContentNative>);
}
export declare namespace _KeyboardInsertedContentFactory {
    function implement(args: [options: {
        mimeType: string;
        uri: string;
        data?: globalThis.Uint8Array | null | undefined;
    }], implementation: {}): KeyboardInsertedContent;
}
declare const _KeyboardInsertedContentBinding: typeof _KeyboardInsertedContentFactory & (new (options: {
    mimeType: string;
    uri: string;
    data?: globalThis.Uint8Array | null | undefined;
}) => _KeyboardInsertedContentNative) & (new (call: _FlaxProxySuper<_KeyboardInsertedContentNative>) => _KeyboardInsertedContentNative);
export declare const KeyboardInsertedContent: typeof _KeyboardInsertedContentBinding & _FlaxInstanceType<KeyboardInsertedContent> & _FlaxDartType<KeyboardInsertedContent, readonly ["class", "flax.core/sdk_services#type:KeyboardInsertedContent", readonly [], false]>;
export {};

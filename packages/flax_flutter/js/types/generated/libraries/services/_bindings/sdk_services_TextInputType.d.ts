import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextInputType extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
}> {
    readonly __TextInputType: unique symbol;
    readonly [_flaxDartTypeValue]: TextInputType;
    readonly index: number;
    readonly signed: boolean | null;
    readonly decimal: boolean | null;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare namespace _TextInputTypeFactory {
    function numberWithOptions(options?: {
        signed?: boolean | null | undefined;
        decimal?: boolean | null | undefined;
    }): TextInputType;
}
export interface _TextInputTypeNative extends TextInputType {
    readonly [_flaxDartTypeValue]: _TextInputTypeNative;
    readonly [_flaxDartConstructors]?: {
        "numberWithOptions": (options?: {
            signed?: boolean | null | undefined;
            decimal?: boolean | null | undefined;
        }) => void;
    };
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
    get index(): number;
    get signed(): boolean | null;
    get decimal(): boolean | null;
}
export declare abstract class _TextInputTypeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextInputType>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextInputType;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextInputType", readonly [], false];
    constructor(options?: {
        signed?: boolean | null | undefined;
        decimal?: boolean | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_TextInputTypeNative>);
}
export declare namespace _TextInputTypeFactory {
    function implement(args: [options?: {
        signed?: boolean | null | undefined;
        decimal?: boolean | null | undefined;
    }], implementation: {}): TextInputType;
}
declare const _TextInputTypeBinding: typeof _TextInputTypeFactory & (new (options?: {
    signed?: boolean | null | undefined;
    decimal?: boolean | null | undefined;
}) => _TextInputTypeNative) & (new (call: _FlaxProxySuper<_TextInputTypeNative>) => _TextInputTypeNative);
export declare namespace _TextInputTypeFactory {
    const text: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const multiline: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const number: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const phone: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const datetime: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const emailAddress: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const url: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const visiblePassword: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const name: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const streetAddress: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const none: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const webSearch: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const twitter: TextInputType;
}
export declare namespace _TextInputTypeFactory {
    const values: DartList<TextInputType>;
}
export declare const TextInputType: typeof _TextInputTypeBinding & _FlaxInstanceType<TextInputType> & _FlaxDartType<TextInputType, readonly ["class", "flax.core/sdk_services#type:TextInputType", readonly [], false]>;
export {};

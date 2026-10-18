import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextInputType extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
}> {
    readonly __TextInputType: unique symbol;
    readonly [_flaxDartTypeValue]: TextInputType;
}
export interface TextInputType {
    readonly [_flaxDartTypeValue]: TextInputType;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
    get index(): number;
    get signed(): boolean | null;
    get decimal(): boolean | null;
}
export declare abstract class TextInputType extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextInputType>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextInputType;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextInputType", readonly [], false];
    constructor(options?: {
        signed?: boolean | null | undefined;
        decimal?: boolean | null | undefined;
    });
}
export declare namespace TextInputType {
    function implement(args: [options?: {
        signed?: boolean | null | undefined;
        decimal?: boolean | null | undefined;
    }], implementation: {}): TextInputType;
}
export declare namespace TextInputType {
    const text: TextInputType;
}
export declare namespace TextInputType {
    const multiline: TextInputType;
}
export declare namespace TextInputType {
    const number: TextInputType;
}
export declare namespace TextInputType {
    const phone: TextInputType;
}
export declare namespace TextInputType {
    const datetime: TextInputType;
}
export declare namespace TextInputType {
    const emailAddress: TextInputType;
}
export declare namespace TextInputType {
    const url: TextInputType;
}
export declare namespace TextInputType {
    const visiblePassword: TextInputType;
}
export declare namespace TextInputType {
    const name: TextInputType;
}
export declare namespace TextInputType {
    const streetAddress: TextInputType;
}
export declare namespace TextInputType {
    const none: TextInputType;
}
export declare namespace TextInputType {
    const webSearch: TextInputType;
}
export declare namespace TextInputType {
    const twitter: TextInputType;
}
export declare namespace TextInputType {
    const values: DartList<TextInputType>;
}

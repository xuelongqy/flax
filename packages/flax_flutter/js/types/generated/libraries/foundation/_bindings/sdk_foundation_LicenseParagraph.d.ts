import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LicenseParagraph extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseParagraph": readonly [];
}> {
    readonly __LicenseParagraph: unique symbol;
    readonly [_flaxDartTypeValue]: LicenseParagraph;
    readonly text: string;
    readonly indent: number;
}
export declare function _LicenseParagraphFactory(text: string, indent: number): LicenseParagraph;
export interface _LicenseParagraphNative extends LicenseParagraph {
    readonly [_flaxDartTypeValue]: _LicenseParagraphNative;
    get text(): string;
    get indent(): number;
}
export declare abstract class _LicenseParagraphNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LicenseParagraph>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LicenseParagraph;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:LicenseParagraph", readonly [], false];
    constructor(text: string, indent: number);
}
export declare namespace _LicenseParagraphFactory {
    function implement(args: [text: string, indent: number], implementation: {}): LicenseParagraph;
}
declare const _LicenseParagraphBinding: typeof _LicenseParagraphFactory & (new (text: string, indent: number) => _LicenseParagraphNative);
export declare namespace _LicenseParagraphFactory {
    const centeredIndent: number;
}
export declare const LicenseParagraph: typeof _LicenseParagraphBinding & _FlaxInstanceType<LicenseParagraph> & _FlaxDartType<LicenseParagraph, readonly ["class", "flax.core/sdk_foundation#type:LicenseParagraph", readonly [], false]>;
export {};

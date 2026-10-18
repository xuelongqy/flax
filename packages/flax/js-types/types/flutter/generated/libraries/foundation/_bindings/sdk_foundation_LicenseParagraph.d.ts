import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LicenseParagraph extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseParagraph": readonly [];
}> {
    readonly __LicenseParagraph: unique symbol;
    readonly [_flaxDartTypeValue]: LicenseParagraph;
}
export interface LicenseParagraph {
    readonly [_flaxDartTypeValue]: LicenseParagraph;
    get text(): string;
    get indent(): number;
}
export declare abstract class LicenseParagraph extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LicenseParagraph>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LicenseParagraph;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:LicenseParagraph", readonly [], false];
    constructor(text: string, indent: number);
}
export declare namespace LicenseParagraph {
    function implement(args: [text: string, indent: number], implementation: {}): LicenseParagraph;
}
export declare namespace LicenseParagraph {
    const centeredIndent: number;
}

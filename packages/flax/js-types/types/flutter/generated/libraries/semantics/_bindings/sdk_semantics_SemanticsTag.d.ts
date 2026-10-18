import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SemanticsTag extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
}> {
    readonly __SemanticsTag: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsTag;
}
export interface SemanticsTag {
    readonly [_flaxDartTypeValue]: SemanticsTag;
    toString(): string;
    get name(): string;
}
export declare abstract class SemanticsTag extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsTag>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsTag;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsTag", readonly [], false];
    constructor(name: string);
}
export declare namespace SemanticsTag {
    function implement(args: [name: string], implementation: {}): SemanticsTag;
}

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsTag extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
}> {
    readonly __SemanticsTag: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsTag;
    readonly name: string;
    toString(): string;
}
export declare function _SemanticsTagFactory(name: string): SemanticsTag;
export interface _SemanticsTagNative extends SemanticsTag {
    readonly [_flaxDartTypeValue]: _SemanticsTagNative;
    toString(): string;
    get name(): string;
}
export declare abstract class _SemanticsTagNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsTag>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsTag;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsTag", readonly [], false];
    constructor(name: string);
}
export declare namespace _SemanticsTagFactory {
    function implement(args: [name: string], implementation: {}): SemanticsTag;
}
declare const _SemanticsTagBinding: typeof _SemanticsTagFactory & (new (name: string) => _SemanticsTagNative);
export declare const SemanticsTag: typeof _SemanticsTagBinding & _FlaxInstanceType<SemanticsTag> & _FlaxDartType<SemanticsTag, readonly ["class", "flax.core/sdk_semantics#type:SemanticsTag", readonly [], false]>;
export {};

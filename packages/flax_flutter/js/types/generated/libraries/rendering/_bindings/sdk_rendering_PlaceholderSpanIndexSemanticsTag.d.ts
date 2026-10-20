import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PlaceholderSpanIndexSemanticsTag extends Omit<upstream0.SemanticsTag, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/paragraph.dart::PlaceholderSpanIndexSemanticsTag": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
}> {
    readonly __PlaceholderSpanIndexSemanticsTag: unique symbol;
    readonly [_flaxDartTypeValue]: PlaceholderSpanIndexSemanticsTag;
    readonly name: string;
    readonly index: number;
    toString(): string;
}
export declare function _PlaceholderSpanIndexSemanticsTagFactory(index: number): PlaceholderSpanIndexSemanticsTag;
export interface _PlaceholderSpanIndexSemanticsTagNative extends PlaceholderSpanIndexSemanticsTag {
    readonly [_flaxDartTypeValue]: _PlaceholderSpanIndexSemanticsTagNative;
    toString(): string;
    get index(): number;
    get name(): string;
}
export declare abstract class _PlaceholderSpanIndexSemanticsTagNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlaceholderSpanIndexSemanticsTag>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlaceholderSpanIndexSemanticsTag;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PlaceholderSpanIndexSemanticsTag", readonly [], false];
    constructor(index: number);
}
export declare namespace _PlaceholderSpanIndexSemanticsTagFactory {
    function implement(args: [index: number], implementation: {}): PlaceholderSpanIndexSemanticsTag;
}
declare const _PlaceholderSpanIndexSemanticsTagBinding: typeof _PlaceholderSpanIndexSemanticsTagFactory & (new (index: number) => _PlaceholderSpanIndexSemanticsTagNative);
export declare const PlaceholderSpanIndexSemanticsTag: typeof _PlaceholderSpanIndexSemanticsTagBinding & _FlaxInstanceType<PlaceholderSpanIndexSemanticsTag> & _FlaxDartType<PlaceholderSpanIndexSemanticsTag, readonly ["class", "flax.core/sdk_rendering#type:PlaceholderSpanIndexSemanticsTag", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "index" | "toString" | "__flaxBound:package:flutter/src/rendering/paragraph.dart::PlaceholderSpanIndexSemanticsTag" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PlaceholderSpanIndexSemanticsTag extends Omit<upstream0.SemanticsTag, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/paragraph.dart::PlaceholderSpanIndexSemanticsTag": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
}> {
    readonly __PlaceholderSpanIndexSemanticsTag: unique symbol;
    readonly [_flaxDartTypeValue]: PlaceholderSpanIndexSemanticsTag;
}
export interface PlaceholderSpanIndexSemanticsTag {
    readonly [_flaxDartTypeValue]: PlaceholderSpanIndexSemanticsTag;
    toString(): string;
    get index(): number;
    get name(): string;
}
export declare abstract class PlaceholderSpanIndexSemanticsTag extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlaceholderSpanIndexSemanticsTag>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PlaceholderSpanIndexSemanticsTag;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PlaceholderSpanIndexSemanticsTag", readonly [], false];
    constructor(index: number);
}
export declare namespace PlaceholderSpanIndexSemanticsTag {
    function implement(args: [index: number], implementation: {}): PlaceholderSpanIndexSemanticsTag;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "index" | "toString" | "__flaxBound:package:flutter/src/rendering/paragraph.dart::PlaceholderSpanIndexSemanticsTag" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag";
export {};

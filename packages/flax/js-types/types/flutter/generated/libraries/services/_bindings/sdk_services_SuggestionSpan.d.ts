import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SuggestionSpan extends Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
}> {
    readonly __SuggestionSpan: unique symbol;
    readonly [_flaxDartTypeValue]: SuggestionSpan;
    readonly range: upstream0.TextRange;
    readonly suggestions: DartList<string>;
    toString(): string;
}
export declare function _SuggestionSpanFactory(range: Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}>, suggestions: DartListInput<string, string>): SuggestionSpan;
export interface _SuggestionSpanNative extends SuggestionSpan {
    readonly [_flaxDartTypeValue]: _SuggestionSpanNative;
    toString(): string;
    get range(): upstream0.TextRange;
    get suggestions(): DartList<string>;
}
export declare abstract class _SuggestionSpanNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SuggestionSpan>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SuggestionSpan;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SuggestionSpan", readonly [], false];
    constructor(range: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, suggestions: DartListInput<string, string>);
}
export declare namespace _SuggestionSpanFactory {
    function implement(args: [range: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, suggestions: DartListInput<string, string>], implementation: {}): SuggestionSpan;
}
declare const _SuggestionSpanBinding: typeof _SuggestionSpanFactory & (new (range: Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}>, suggestions: DartListInput<string, string>) => _SuggestionSpanNative);
export declare const SuggestionSpan: typeof _SuggestionSpanBinding & _FlaxInstanceType<SuggestionSpan> & _FlaxDartType<SuggestionSpan, readonly ["class", "flax.core/sdk_services#type:SuggestionSpan", readonly [], false]>;
export {};

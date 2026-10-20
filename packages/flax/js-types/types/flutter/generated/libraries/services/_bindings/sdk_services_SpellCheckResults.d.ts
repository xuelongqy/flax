import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SpellCheckResults extends Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckResults": readonly [];
}> {
    readonly __SpellCheckResults: unique symbol;
    readonly [_flaxDartTypeValue]: SpellCheckResults;
    readonly spellCheckedText: string;
    readonly suggestionSpans: DartList<upstream0.SuggestionSpan>;
    toString(): string;
}
export declare function _SpellCheckResultsFactory(spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
}>>): SpellCheckResults;
export interface _SpellCheckResultsNative extends SpellCheckResults {
    readonly [_flaxDartTypeValue]: _SpellCheckResultsNative;
    toString(): string;
    get spellCheckedText(): string;
    get suggestionSpans(): DartList<upstream0.SuggestionSpan>;
}
export declare abstract class _SpellCheckResultsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpellCheckResults>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SpellCheckResults;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SpellCheckResults", readonly [], false];
    constructor(spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
    }>>);
}
export declare namespace _SpellCheckResultsFactory {
    function implement(args: [spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
    }>>], implementation: {}): SpellCheckResults;
}
declare const _SpellCheckResultsBinding: typeof _SpellCheckResultsFactory & (new (spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
}>>) => _SpellCheckResultsNative);
export declare const SpellCheckResults: typeof _SpellCheckResultsBinding & _FlaxInstanceType<SpellCheckResults> & _FlaxDartType<SpellCheckResults, readonly ["class", "flax.core/sdk_services#type:SpellCheckResults", readonly [], false]>;
export {};

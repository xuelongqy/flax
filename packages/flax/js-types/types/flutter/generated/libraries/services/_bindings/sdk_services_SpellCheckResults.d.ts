import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SpellCheckResults extends Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckResults": readonly [];
}> {
    readonly __SpellCheckResults: unique symbol;
    readonly [_flaxDartTypeValue]: SpellCheckResults;
}
export interface SpellCheckResults {
    readonly [_flaxDartTypeValue]: SpellCheckResults;
    toString(): string;
    get spellCheckedText(): string;
    get suggestionSpans(): DartList<upstream0.SuggestionSpan>;
}
export declare abstract class SpellCheckResults extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpellCheckResults>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SpellCheckResults;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SpellCheckResults", readonly [], false];
    constructor(spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
    }>>);
}
export declare namespace SpellCheckResults {
    function implement(args: [spellCheckedText: string, suggestionSpans: DartListInput<upstream0.SuggestionSpan, Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
    }>>], implementation: {}): SpellCheckResults;
}

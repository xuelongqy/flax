import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SuggestionSpan extends Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
}> {
    readonly __SuggestionSpan: unique symbol;
    readonly [_flaxDartTypeValue]: SuggestionSpan;
}
export interface SuggestionSpan {
    readonly [_flaxDartTypeValue]: SuggestionSpan;
    toString(): string;
    get range(): upstream0.TextRange;
    get suggestions(): DartList<string>;
}
export declare abstract class SuggestionSpan extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SuggestionSpan>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SuggestionSpan;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SuggestionSpan", readonly [], false];
    constructor(range: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, suggestions: DartListInput<string, string>);
}
export declare namespace SuggestionSpan {
    function implement(args: [range: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, suggestions: DartListInput<string, string>], implementation: {}): SuggestionSpan;
}

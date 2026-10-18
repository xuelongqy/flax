import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SpellCheckService extends Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
}> {
    readonly __SpellCheckService: unique symbol;
    readonly [_flaxDartTypeValue]: SpellCheckService;
    fetchSpellCheckSuggestions(locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>, text: string): Promise<DartList<upstream0.SuggestionSpan> | null>;
}
export declare namespace _SpellCheckServiceFactory {
    function implement(args: [], implementation: {
        fetchSpellCheckSuggestions: ((locale: upstream1.Locale, text: string) => Promise<DartListInput<upstream0.SuggestionSpan, Readonly<{
            "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
        }>> | null>);
    }): SpellCheckService;
}
export declare const SpellCheckService: typeof _SpellCheckServiceFactory & _FlaxInstanceType<SpellCheckService> & _FlaxDartType<SpellCheckService, readonly ["class", "flax.core/sdk_services#type:SpellCheckService", readonly [], false]>;

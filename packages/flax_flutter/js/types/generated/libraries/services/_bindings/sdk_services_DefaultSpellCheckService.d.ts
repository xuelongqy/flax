import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SpellCheckService';
import '@flax/flutter/services/_bindings/sdk_services_SpellCheckService';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SpellCheckResults';
import '@flax/flutter/services/_bindings/sdk_services_SpellCheckResults';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/flutter/services/_bindings/sdk_services_SuggestionSpan';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DefaultSpellCheckService extends Omit<upstream0.SpellCheckService, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::DefaultSpellCheckService": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
}> {
    readonly __DefaultSpellCheckService: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultSpellCheckService;
}
export interface DefaultSpellCheckService {
    readonly [_flaxDartTypeValue]: DefaultSpellCheckService;
    fetchSpellCheckSuggestions(locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>, text: string): Promise<DartList<upstream3.SuggestionSpan> | null>;
    get lastSavedResults(): upstream1.SpellCheckResults | null;
    get spellCheckChannel(): upstream2.MethodChannel;
    set lastSavedResults(value: Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckResults": readonly [];
    }> | null);
    set spellCheckChannel(value: Readonly<{
        "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
    }>);
}
export declare abstract class DefaultSpellCheckService extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultSpellCheckService>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DefaultSpellCheckService;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:DefaultSpellCheckService", readonly [], false];
    constructor();
}
export declare namespace DefaultSpellCheckService {
    function implement(args: [], implementation: {}): DefaultSpellCheckService;
}
export declare namespace DefaultSpellCheckService {
    function mergeResults(oldResults: DartListInput<upstream3.SuggestionSpan, Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
    }>>, newResults: DartListInput<upstream3.SuggestionSpan, Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SuggestionSpan": readonly [];
    }>>): DartList<upstream3.SuggestionSpan>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "lastSavedResults" | "spellCheckChannel" | "fetchSpellCheckSuggestions" | "__flaxBound:package:flutter/src/services/spell_check.dart::DefaultSpellCheckService" | "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService";
export {};

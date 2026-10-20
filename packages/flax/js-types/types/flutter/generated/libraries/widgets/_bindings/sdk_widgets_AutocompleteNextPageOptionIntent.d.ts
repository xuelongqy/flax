import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AutocompleteNextPageOptionIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/autocomplete.dart::AutocompleteNextPageOptionIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AutocompleteNextPageOptionIntent: unique symbol;
    readonly [_flaxDartTypeValue]: AutocompleteNextPageOptionIntent;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
}
export declare function _AutocompleteNextPageOptionIntentFactory(): AutocompleteNextPageOptionIntent;
export interface _AutocompleteNextPageOptionIntentNative extends AutocompleteNextPageOptionIntent {
    readonly [_flaxDartTypeValue]: _AutocompleteNextPageOptionIntentNative;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
}
export declare abstract class _AutocompleteNextPageOptionIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutocompleteNextPageOptionIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AutocompleteNextPageOptionIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", readonly [], false];
    constructor();
}
export declare namespace _AutocompleteNextPageOptionIntentFactory {
    function implement(args: [], implementation: {}): AutocompleteNextPageOptionIntent;
}
declare const _AutocompleteNextPageOptionIntentBinding: typeof _AutocompleteNextPageOptionIntentFactory & (new () => _AutocompleteNextPageOptionIntentNative);
export declare const AutocompleteNextPageOptionIntent: typeof _AutocompleteNextPageOptionIntentBinding & _FlaxInstanceType<AutocompleteNextPageOptionIntent> & _FlaxDartType<AutocompleteNextPageOptionIntent, readonly ["class", "flax.core/sdk_widgets#type:AutocompleteNextPageOptionIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/autocomplete.dart::AutocompleteNextPageOptionIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

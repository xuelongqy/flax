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
export interface AutocompleteLastOptionIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/autocomplete.dart::AutocompleteLastOptionIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AutocompleteLastOptionIntent: unique symbol;
    readonly [_flaxDartTypeValue]: AutocompleteLastOptionIntent;
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
export declare function _AutocompleteLastOptionIntentFactory(): AutocompleteLastOptionIntent;
export interface _AutocompleteLastOptionIntentNative extends AutocompleteLastOptionIntent {
    readonly [_flaxDartTypeValue]: _AutocompleteLastOptionIntentNative;
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
export declare abstract class _AutocompleteLastOptionIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutocompleteLastOptionIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AutocompleteLastOptionIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:AutocompleteLastOptionIntent", readonly [], false];
    constructor();
}
export declare namespace _AutocompleteLastOptionIntentFactory {
    function implement(args: [], implementation: {}): AutocompleteLastOptionIntent;
}
declare const _AutocompleteLastOptionIntentBinding: typeof _AutocompleteLastOptionIntentFactory & (new () => _AutocompleteLastOptionIntentNative);
export declare const AutocompleteLastOptionIntent: typeof _AutocompleteLastOptionIntentBinding & _FlaxInstanceType<AutocompleteLastOptionIntent> & _FlaxDartType<AutocompleteLastOptionIntent, readonly ["class", "flax.core/sdk_widgets#type:AutocompleteLastOptionIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/autocomplete.dart::AutocompleteLastOptionIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

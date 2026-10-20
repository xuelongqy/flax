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
export interface TransposeCharactersIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::TransposeCharactersIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TransposeCharactersIntent: unique symbol;
    readonly [_flaxDartTypeValue]: TransposeCharactersIntent;
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
export declare function _TransposeCharactersIntentFactory(): TransposeCharactersIntent;
export interface _TransposeCharactersIntentNative extends TransposeCharactersIntent {
    readonly [_flaxDartTypeValue]: _TransposeCharactersIntentNative;
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
export declare abstract class _TransposeCharactersIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TransposeCharactersIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TransposeCharactersIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TransposeCharactersIntent", readonly [], false];
    constructor();
}
export declare namespace _TransposeCharactersIntentFactory {
    function implement(args: [], implementation: {}): TransposeCharactersIntent;
}
declare const _TransposeCharactersIntentBinding: typeof _TransposeCharactersIntentFactory & (new () => _TransposeCharactersIntentNative);
export declare const TransposeCharactersIntent: typeof _TransposeCharactersIntentBinding & _FlaxInstanceType<TransposeCharactersIntent> & _FlaxDartType<TransposeCharactersIntent, readonly ["class", "flax.core/sdk_widgets#type:TransposeCharactersIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::TransposeCharactersIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

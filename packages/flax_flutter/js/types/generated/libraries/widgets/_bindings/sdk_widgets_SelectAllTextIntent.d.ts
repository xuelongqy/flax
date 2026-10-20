import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectAllTextIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::SelectAllTextIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SelectAllTextIntent: unique symbol;
    readonly [_flaxDartTypeValue]: SelectAllTextIntent;
    readonly cause: upstream2.SelectionChangedCause;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
}
export declare function _SelectAllTextIntentFactory(cause: upstream2.SelectionChangedCause): SelectAllTextIntent;
export interface _SelectAllTextIntentNative extends SelectAllTextIntent {
    readonly [_flaxDartTypeValue]: _SelectAllTextIntentNative;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    get cause(): upstream2.SelectionChangedCause;
}
export declare abstract class _SelectAllTextIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectAllTextIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectAllTextIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SelectAllTextIntent", readonly [], false];
    constructor(cause: upstream2.SelectionChangedCause);
}
export declare namespace _SelectAllTextIntentFactory {
    function implement(args: [cause: upstream2.SelectionChangedCause], implementation: {}): SelectAllTextIntent;
}
declare const _SelectAllTextIntentBinding: typeof _SelectAllTextIntentFactory & (new (cause: upstream2.SelectionChangedCause) => _SelectAllTextIntentNative);
export declare const SelectAllTextIntent: typeof _SelectAllTextIntentBinding & _FlaxInstanceType<SelectAllTextIntent> & _FlaxDartType<SelectAllTextIntent, readonly ["class", "flax.core/sdk_widgets#type:SelectAllTextIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "cause" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::SelectAllTextIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

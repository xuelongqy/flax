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
export interface DoNothingAndStopPropagationTextIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DoNothingAndStopPropagationTextIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DoNothingAndStopPropagationTextIntent: unique symbol;
    readonly [_flaxDartTypeValue]: DoNothingAndStopPropagationTextIntent;
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
export declare function _DoNothingAndStopPropagationTextIntentFactory(): DoNothingAndStopPropagationTextIntent;
export interface _DoNothingAndStopPropagationTextIntentNative extends DoNothingAndStopPropagationTextIntent {
    readonly [_flaxDartTypeValue]: _DoNothingAndStopPropagationTextIntentNative;
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
export declare abstract class _DoNothingAndStopPropagationTextIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DoNothingAndStopPropagationTextIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DoNothingAndStopPropagationTextIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DoNothingAndStopPropagationTextIntent", readonly [], false];
    constructor();
}
export declare namespace _DoNothingAndStopPropagationTextIntentFactory {
    function implement(args: [], implementation: {}): DoNothingAndStopPropagationTextIntent;
}
declare const _DoNothingAndStopPropagationTextIntentBinding: typeof _DoNothingAndStopPropagationTextIntentFactory & (new () => _DoNothingAndStopPropagationTextIntentNative);
export declare const DoNothingAndStopPropagationTextIntent: typeof _DoNothingAndStopPropagationTextIntentBinding & _FlaxInstanceType<DoNothingAndStopPropagationTextIntent> & _FlaxDartType<DoNothingAndStopPropagationTextIntent, readonly ["class", "flax.core/sdk_widgets#type:DoNothingAndStopPropagationTextIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DoNothingAndStopPropagationTextIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

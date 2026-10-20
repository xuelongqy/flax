import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalCaretMovementIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalCaretMovementIntent';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalTextEditingIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalTextEditingIntent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ExtendSelectionToLineBreakIntent extends Omit<upstream0.DirectionalCaretMovementIntent, _flaxOwnMembers0>, Omit<upstream1.DirectionalTextEditingIntent, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent>, Omit<upstream2.Intent, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent | keyof upstream1.DirectionalTextEditingIntent>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent | keyof upstream1.DirectionalTextEditingIntent | keyof upstream2.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::ExtendSelectionToLineBreakIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalCaretMovementIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalTextEditingIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ExtendSelectionToLineBreakIntent: unique symbol;
    readonly [_flaxDartTypeValue]: ExtendSelectionToLineBreakIntent;
    readonly collapseSelection: boolean;
    readonly collapseAtReversal: boolean;
    readonly continuesAtWrap: boolean;
    readonly forward: boolean;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
}
export declare function _ExtendSelectionToLineBreakIntentFactory(options: {
    forward: boolean;
    collapseSelection: boolean;
    collapseAtReversal?: boolean | undefined;
    continuesAtWrap?: boolean | undefined;
}): ExtendSelectionToLineBreakIntent;
export interface _ExtendSelectionToLineBreakIntentNative extends ExtendSelectionToLineBreakIntent {
    readonly [_flaxDartTypeValue]: _ExtendSelectionToLineBreakIntentNative;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    get collapseSelection(): boolean;
    get collapseAtReversal(): boolean;
    get continuesAtWrap(): boolean;
    get forward(): boolean;
}
export declare abstract class _ExtendSelectionToLineBreakIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExtendSelectionToLineBreakIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ExtendSelectionToLineBreakIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ExtendSelectionToLineBreakIntent", readonly [], false];
    constructor(options: {
        forward: boolean;
        collapseSelection: boolean;
        collapseAtReversal?: boolean | undefined;
        continuesAtWrap?: boolean | undefined;
    });
}
export declare namespace _ExtendSelectionToLineBreakIntentFactory {
    function implement(args: [options: {
        forward: boolean;
        collapseSelection: boolean;
        collapseAtReversal?: boolean | undefined;
        continuesAtWrap?: boolean | undefined;
    }], implementation: {}): ExtendSelectionToLineBreakIntent;
}
declare const _ExtendSelectionToLineBreakIntentBinding: typeof _ExtendSelectionToLineBreakIntentFactory & (new (options: {
    forward: boolean;
    collapseSelection: boolean;
    collapseAtReversal?: boolean | undefined;
    continuesAtWrap?: boolean | undefined;
}) => _ExtendSelectionToLineBreakIntentNative);
export declare const ExtendSelectionToLineBreakIntent: typeof _ExtendSelectionToLineBreakIntentBinding & _FlaxInstanceType<ExtendSelectionToLineBreakIntent> & _FlaxDartType<ExtendSelectionToLineBreakIntent, readonly ["class", "flax.core/sdk_widgets#type:ExtendSelectionToLineBreakIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "collapseSelection" | "collapseAtReversal" | "continuesAtWrap" | "forward" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::ExtendSelectionToLineBreakIntent" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalCaretMovementIntent" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalTextEditingIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

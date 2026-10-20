import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalDirection';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DirectionalFocusIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DirectionalFocusIntent: unique symbol;
    readonly [_flaxDartTypeValue]: DirectionalFocusIntent;
    readonly direction: upstream2.TraversalDirection;
    readonly ignoreTextFields: boolean;
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
export declare function _DirectionalFocusIntentFactory(direction: upstream2.TraversalDirection, options?: {
    ignoreTextFields?: boolean | undefined;
}): DirectionalFocusIntent;
export interface _DirectionalFocusIntentNative extends DirectionalFocusIntent {
    readonly [_flaxDartTypeValue]: _DirectionalFocusIntentNative;
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
    get direction(): upstream2.TraversalDirection;
    get ignoreTextFields(): boolean;
}
export declare abstract class _DirectionalFocusIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DirectionalFocusIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DirectionalFocusIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DirectionalFocusIntent", readonly [], false];
    constructor(direction: upstream2.TraversalDirection, options?: {
        ignoreTextFields?: boolean | undefined;
    });
}
export declare namespace _DirectionalFocusIntentFactory {
    function implement(args: [direction: upstream2.TraversalDirection, options?: {
        ignoreTextFields?: boolean | undefined;
    }], implementation: {}): DirectionalFocusIntent;
}
declare const _DirectionalFocusIntentBinding: typeof _DirectionalFocusIntentFactory & (new (direction: upstream2.TraversalDirection, options?: {
    ignoreTextFields?: boolean | undefined;
}) => _DirectionalFocusIntentNative);
export declare const DirectionalFocusIntent: typeof _DirectionalFocusIntentBinding & _FlaxInstanceType<DirectionalFocusIntent> & _FlaxDartType<DirectionalFocusIntent, readonly ["class", "flax.core/sdk_widgets#type:DirectionalFocusIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "direction" | "ignoreTextFields" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

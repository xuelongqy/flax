import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ScrollIntent: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollIntent;
    readonly direction: upstream2.AxisDirection;
    readonly type: upstream3.ScrollIncrementType;
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
export declare function _ScrollIntentFactory(options: {
    direction: upstream2.AxisDirection;
    type?: upstream3.ScrollIncrementType | undefined;
}): ScrollIntent;
export interface _ScrollIntentNative extends ScrollIntent {
    readonly [_flaxDartTypeValue]: _ScrollIntentNative;
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
    get direction(): upstream2.AxisDirection;
    get type(): upstream3.ScrollIncrementType;
}
export declare abstract class _ScrollIntentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollIntent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollIntent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollIntent", readonly [], false];
    constructor(options: {
        direction: upstream2.AxisDirection;
        type?: upstream3.ScrollIncrementType | undefined;
    });
}
export declare namespace _ScrollIntentFactory {
    function implement(args: [options: {
        direction: upstream2.AxisDirection;
        type?: upstream3.ScrollIncrementType | undefined;
    }], implementation: {}): ScrollIntent;
}
declare const _ScrollIntentBinding: typeof _ScrollIntentFactory & (new (options: {
    direction: upstream2.AxisDirection;
    type?: upstream3.ScrollIncrementType | undefined;
}) => _ScrollIntentNative);
export declare const ScrollIntent: typeof _ScrollIntentBinding & _FlaxInstanceType<ScrollIntent> & _FlaxDartType<ScrollIntent, readonly ["class", "flax.core/sdk_widgets#type:ScrollIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "direction" | "type" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

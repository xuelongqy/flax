import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusOrder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusOrder';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NumericFocusOrder extends Omit<upstream0.FocusOrder, _flaxOwnMembers0>, Omit<upstream1.Comparable<upstream0.FocusOrder>, _flaxOwnMembers0 | keyof upstream0.FocusOrder>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.FocusOrder | keyof upstream1.Comparable<upstream0.FocusOrder>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NumericFocusOrder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __NumericFocusOrder: unique symbol;
    readonly [_flaxDartTypeValue]: NumericFocusOrder;
    readonly order: number;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
    doCompare(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NumericFocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
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
export declare function _NumericFocusOrderFactory(order: number): NumericFocusOrder;
export interface _NumericFocusOrderNative extends NumericFocusOrder {
    readonly [_flaxDartTypeValue]: _NumericFocusOrderNative;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
    doCompare(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NumericFocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
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
    get order(): number;
}
export declare abstract class _NumericFocusOrderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NumericFocusOrder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NumericFocusOrder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:NumericFocusOrder", readonly [], false];
    constructor(order: number);
}
export declare namespace _NumericFocusOrderFactory {
    function implement(args: [order: number], implementation: {}): NumericFocusOrder;
}
declare const _NumericFocusOrderBinding: typeof _NumericFocusOrderFactory & (new (order: number) => _NumericFocusOrderNative);
export declare const NumericFocusOrder: typeof _NumericFocusOrderBinding & _FlaxInstanceType<NumericFocusOrder> & _FlaxDartType<NumericFocusOrder, readonly ["class", "flax.core/sdk_widgets#type:NumericFocusOrder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "order" | "compareTo" | "doCompare" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NumericFocusOrder" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

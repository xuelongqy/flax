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
export interface LexicalFocusOrder extends Omit<upstream0.FocusOrder, _flaxOwnMembers0>, Omit<upstream1.Comparable<upstream0.FocusOrder>, _flaxOwnMembers0 | keyof upstream0.FocusOrder>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.FocusOrder | keyof upstream1.Comparable<upstream0.FocusOrder>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::LexicalFocusOrder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __LexicalFocusOrder: unique symbol;
    readonly [_flaxDartTypeValue]: LexicalFocusOrder;
    readonly order: string;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
    doCompare(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::LexicalFocusOrder": readonly [];
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
export declare function _LexicalFocusOrderFactory(order: string): LexicalFocusOrder;
export interface _LexicalFocusOrderNative extends LexicalFocusOrder {
    readonly [_flaxDartTypeValue]: _LexicalFocusOrderNative;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
    doCompare(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::LexicalFocusOrder": readonly [];
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
    get order(): string;
}
export declare abstract class _LexicalFocusOrderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LexicalFocusOrder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LexicalFocusOrder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LexicalFocusOrder", readonly [], false];
    constructor(order: string);
}
export declare namespace _LexicalFocusOrderFactory {
    function implement(args: [order: string], implementation: {}): LexicalFocusOrder;
}
declare const _LexicalFocusOrderBinding: typeof _LexicalFocusOrderFactory & (new (order: string) => _LexicalFocusOrderNative);
export declare const LexicalFocusOrder: typeof _LexicalFocusOrderBinding & _FlaxInstanceType<LexicalFocusOrder> & _FlaxDartType<LexicalFocusOrder, readonly ["class", "flax.core/sdk_widgets#type:LexicalFocusOrder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "order" | "compareTo" | "doCompare" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::LexicalFocusOrder" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FocusOrder extends Omit<upstream0.Comparable<FocusOrder>, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Comparable<FocusOrder>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [FocusOrder];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __FocusOrder: unique symbol;
    readonly [_flaxDartTypeValue]: FocusOrder;
}
export interface FocusOrder {
    readonly [_flaxDartTypeValue]: FocusOrder;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare abstract class FocusOrder extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FocusOrder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FocusOrder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FocusOrder", readonly [], false];
    constructor();
    abstract doCompare(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [FocusOrder];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
}
export declare namespace FocusOrder {
    function implement(args: [], implementation: {
        doCompare: ((other: FocusOrder) => number);
    }): FocusOrder;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "compareTo" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "doCompare" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface OrdinalSortKey extends Omit<upstream0.SemanticsSortKey, _flaxOwnMembers0>, Omit<upstream1.Comparable<upstream0.SemanticsSortKey>, _flaxOwnMembers0 | keyof upstream0.SemanticsSortKey>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.SemanticsSortKey | keyof upstream1.Comparable<upstream0.SemanticsSortKey>>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::OrdinalSortKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [upstream0.SemanticsSortKey];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __OrdinalSortKey: unique symbol;
    readonly [_flaxDartTypeValue]: OrdinalSortKey;
}
export interface OrdinalSortKey {
    readonly [_flaxDartTypeValue]: OrdinalSortKey;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.SemanticsSortKey];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
    doCompare(other: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::OrdinalSortKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.SemanticsSortKey];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    get order(): number;
    get name(): string | null;
}
export declare abstract class OrdinalSortKey extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OrdinalSortKey>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OrdinalSortKey;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:OrdinalSortKey", readonly [], false];
    constructor(order: number, options?: {
        name?: string | null | undefined;
    });
}
export declare namespace OrdinalSortKey {
    function implement(args: [order: number, options?: {
        name?: string | null | undefined;
    }], implementation: {}): OrdinalSortKey;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "order" | "compareTo" | "doCompare" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics.dart::OrdinalSortKey" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

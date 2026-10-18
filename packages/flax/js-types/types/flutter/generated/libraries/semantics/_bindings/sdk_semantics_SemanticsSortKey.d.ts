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
export interface SemanticsSortKey extends Omit<upstream0.Comparable<SemanticsSortKey>, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Comparable<SemanticsSortKey>>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [SemanticsSortKey];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SemanticsSortKey: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsSortKey;
}
export interface SemanticsSortKey {
    readonly [_flaxDartTypeValue]: SemanticsSortKey;
    compareTo(other: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [SemanticsSortKey];
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
    get name(): string | null;
}
export declare abstract class SemanticsSortKey extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsSortKey>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsSortKey;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsSortKey", readonly [], false];
    constructor(options?: {
        name?: string | null | undefined;
    });
    abstract doCompare(other: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [SemanticsSortKey];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): number;
}
export declare namespace SemanticsSortKey {
    function implement(args: [options?: {
        name?: string | null | undefined;
    }], implementation: {
        doCompare: ((other: SemanticsSortKey) => number);
    }): SemanticsSortKey;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "compareTo" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "doCompare" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

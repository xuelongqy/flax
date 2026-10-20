import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectedContentRange extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContentRange": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SelectedContentRange: unique symbol;
    readonly [_flaxDartTypeValue]: SelectedContentRange;
    readonly startOffset: number;
    readonly endOffset: number;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare function _SelectedContentRangeFactory(options: {
    startOffset: number;
    endOffset: number;
}): SelectedContentRange;
export interface _SelectedContentRangeNative extends SelectedContentRange {
    readonly [_flaxDartTypeValue]: _SelectedContentRangeNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get startOffset(): number;
    get endOffset(): number;
}
export declare abstract class _SelectedContentRangeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectedContentRange>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectedContentRange;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectedContentRange", readonly [], false];
    constructor(options: {
        startOffset: number;
        endOffset: number;
    });
}
export declare namespace _SelectedContentRangeFactory {
    function implement(args: [options: {
        startOffset: number;
        endOffset: number;
    }], implementation: {}): SelectedContentRange;
}
declare const _SelectedContentRangeBinding: typeof _SelectedContentRangeFactory & (new (options: {
    startOffset: number;
    endOffset: number;
}) => _SelectedContentRangeNative);
export declare const SelectedContentRange: typeof _SelectedContentRangeBinding & _FlaxInstanceType<SelectedContentRange> & _FlaxDartType<SelectedContentRange, readonly ["class", "flax.core/sdk_rendering#type:SelectedContentRange", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "startOffset" | "endOffset" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContentRange" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

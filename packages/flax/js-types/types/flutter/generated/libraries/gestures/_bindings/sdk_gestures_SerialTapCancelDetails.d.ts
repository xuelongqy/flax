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
export interface SerialTapCancelDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapCancelDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SerialTapCancelDetails: unique symbol;
    readonly [_flaxDartTypeValue]: SerialTapCancelDetails;
    readonly count: number;
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
export declare function _SerialTapCancelDetailsFactory(options?: {
    count?: number | undefined;
}): SerialTapCancelDetails;
export interface _SerialTapCancelDetailsNative extends SerialTapCancelDetails {
    readonly [_flaxDartTypeValue]: _SerialTapCancelDetailsNative;
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
    get count(): number;
}
export declare abstract class _SerialTapCancelDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SerialTapCancelDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SerialTapCancelDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:SerialTapCancelDetails", readonly [], false];
    constructor(options?: {
        count?: number | undefined;
    });
}
export declare namespace _SerialTapCancelDetailsFactory {
    function implement(args: [options?: {
        count?: number | undefined;
    }], implementation: {}): SerialTapCancelDetails;
}
declare const _SerialTapCancelDetailsBinding: typeof _SerialTapCancelDetailsFactory & (new (options?: {
    count?: number | undefined;
}) => _SerialTapCancelDetailsNative);
export declare const SerialTapCancelDetails: typeof _SerialTapCancelDetailsBinding & _FlaxInstanceType<SerialTapCancelDetails> & _FlaxDartType<SerialTapCancelDetails, readonly ["class", "flax.core/sdk_gestures#type:SerialTapCancelDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "count" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/multitap.dart::SerialTapCancelDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

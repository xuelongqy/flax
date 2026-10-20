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
export interface SelectedContent extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SelectedContent: unique symbol;
    readonly [_flaxDartTypeValue]: SelectedContent;
    readonly plainText: string;
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
export declare function _SelectedContentFactory(options: {
    plainText: string;
}): SelectedContent;
export interface _SelectedContentNative extends SelectedContent {
    readonly [_flaxDartTypeValue]: _SelectedContentNative;
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
    get plainText(): string;
}
export declare abstract class _SelectedContentNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectedContent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectedContent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectedContent", readonly [], false];
    constructor(options: {
        plainText: string;
    });
}
export declare namespace _SelectedContentFactory {
    function implement(args: [options: {
        plainText: string;
    }], implementation: {}): SelectedContent;
}
declare const _SelectedContentBinding: typeof _SelectedContentFactory & (new (options: {
    plainText: string;
}) => _SelectedContentNative);
export declare const SelectedContent: typeof _SelectedContentBinding & _FlaxInstanceType<SelectedContent> & _FlaxDartType<SelectedContent, readonly ["class", "flax.core/sdk_rendering#type:SelectedContent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "plainText" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

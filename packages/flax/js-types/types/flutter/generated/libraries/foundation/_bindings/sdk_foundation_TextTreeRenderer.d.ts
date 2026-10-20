import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextTreeRenderer extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeRenderer": readonly [];
}> {
    readonly __TextTreeRenderer: unique symbol;
    readonly [_flaxDartTypeValue]: TextTreeRenderer;
    render(node: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>, options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
    }): string;
}
export declare function _TextTreeRendererFactory(options?: {
    minLevel?: upstream0.DiagnosticLevel | undefined;
    wrapWidth?: number | undefined;
    wrapWidthProperties?: number | undefined;
    maxDescendentsTruncatableNode?: number | undefined;
}): TextTreeRenderer;
export interface _TextTreeRendererNative extends TextTreeRenderer {
    readonly [_flaxDartTypeValue]: _TextTreeRendererNative;
    render(node: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>, options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
}
export declare abstract class _TextTreeRendererNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextTreeRenderer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextTreeRenderer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:TextTreeRenderer", readonly [], false];
    constructor(options?: {
        minLevel?: upstream0.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
        wrapWidthProperties?: number | undefined;
        maxDescendentsTruncatableNode?: number | undefined;
    });
}
export declare namespace _TextTreeRendererFactory {
    function implement(args: [options?: {
        minLevel?: upstream0.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
        wrapWidthProperties?: number | undefined;
        maxDescendentsTruncatableNode?: number | undefined;
    }], implementation: {}): TextTreeRenderer;
}
declare const _TextTreeRendererBinding: typeof _TextTreeRendererFactory & (new (options?: {
    minLevel?: upstream0.DiagnosticLevel | undefined;
    wrapWidth?: number | undefined;
    wrapWidthProperties?: number | undefined;
    maxDescendentsTruncatableNode?: number | undefined;
}) => _TextTreeRendererNative);
export declare const TextTreeRenderer: typeof _TextTreeRendererBinding & _FlaxInstanceType<TextTreeRenderer> & _FlaxDartType<TextTreeRenderer, readonly ["class", "flax.core/sdk_foundation#type:TextTreeRenderer", readonly [], false]>;
export {};

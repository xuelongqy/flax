import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextTreeRenderer extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeRenderer": readonly [];
}> {
    readonly __TextTreeRenderer: unique symbol;
    readonly [_flaxDartTypeValue]: TextTreeRenderer;
}
export interface TextTreeRenderer {
    readonly [_flaxDartTypeValue]: TextTreeRenderer;
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
export declare abstract class TextTreeRenderer extends _FlaxProxyBase {
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
export declare namespace TextTreeRenderer {
    function implement(args: [options?: {
        minLevel?: upstream0.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
        wrapWidthProperties?: number | undefined;
        maxDescendentsTruncatableNode?: number | undefined;
    }], implementation: {}): TextTreeRenderer;
}

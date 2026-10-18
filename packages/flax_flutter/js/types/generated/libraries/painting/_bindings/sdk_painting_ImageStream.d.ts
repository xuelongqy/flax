import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ImageStream extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ImageStream: unique symbol;
    readonly [_flaxDartTypeValue]: ImageStream;
}
export interface ImageStream {
    readonly [_flaxDartTypeValue]: ImageStream;
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
    setCompleter(value: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    addListener(listener: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [];
    }>): void;
    removeListener(listener: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [];
    }>): void;
    get completer(): upstream1.ImageStreamCompleter | null;
    get key(): {};
}
export declare abstract class ImageStream extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageStream>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageStream;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageStream", readonly [], false];
    constructor();
}
export declare namespace ImageStream {
    function implement(args: [], implementation: {}): ImageStream;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "completer" | "key" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "setCompleter" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ImageStreamCompleter extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ImageStreamCompleter: unique symbol;
    readonly [_flaxDartTypeValue]: ImageStreamCompleter;
}
export interface ImageStreamCompleter {
    readonly [_flaxDartTypeValue]: ImageStreamCompleter;
    maybeDispose(): void;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(description: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    addListener(listener: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [];
    }>): void;
    addEphemeralErrorListener(listener: ((exception: {}, stackTrace: upstream6.StackTrace | null) => void)): void;
    keepAlive(): upstream7.ImageStreamCompleterHandle;
    removeListener(listener: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [];
    }>): void;
    onDisposed(): void;
    addOnLastListenerRemovedCallback(callback: (() => void)): void;
    removeOnLastListenerRemovedCallback(callback: (() => void)): void;
    setImage(image: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageInfo": readonly [];
    }>): void;
    reportError(options: {
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        exception: {};
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        silent?: boolean | undefined;
    }): void;
    reportImageChunkEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    get debugLabel(): string | null;
    set debugLabel(value: string | null);
}
export declare abstract class ImageStreamCompleter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageStreamCompleter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ImageStreamCompleter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageStreamCompleter", readonly [], false];
    constructor();
}
export declare namespace ImageStreamCompleter {
    function implement(args: [], implementation: {}): ImageStreamCompleter;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugLabel" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "addListener" | "addEphemeralErrorListener" | "keepAlive" | "removeListener" | "onDisposed" | "maybeDispose" | "addOnLastListenerRemovedCallback" | "removeOnLastListenerRemovedCallback" | "setImage" | "reportError" | "reportImageChunkEvent" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

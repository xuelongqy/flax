import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamListener';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleterHandle';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageInfo';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MultiFrameImageStreamCompleter extends Omit<upstream0.ImageStreamCompleter, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ImageStreamCompleter>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::MultiFrameImageStreamCompleter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MultiFrameImageStreamCompleter: unique symbol;
    readonly [_flaxDartTypeValue]: MultiFrameImageStreamCompleter;
    get debugLabel(): string | null;
    addListener(listener: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [];
    }>): void;
    addEphemeralErrorListener(listener: ((exception: {}, stackTrace: upstream7.StackTrace | null) => void)): void;
    keepAlive(): upstream8.ImageStreamCompleterHandle;
    removeListener(listener: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [];
    }>): void;
    onDisposed(): void;
    maybeDispose(): void;
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
        informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        silent?: boolean | undefined;
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
    }): void;
    reportImageChunkEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    debugFillProperties(description: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream12.DiagnosticLevel | undefined;
    }): string;
    set debugLabel(value: string | null);
}
export declare function _MultiFrameImageStreamCompleterFactory(options: {
    codec: Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>;
    scale: number;
    debugLabel?: string | null | undefined;
    chunkEvents?: (upstream3.Stream<upstream4.ImageChunkEvent> | upstream3.Stream<Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>) | null | undefined;
    informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>) | null | undefined;
}): MultiFrameImageStreamCompleter;
export interface _MultiFrameImageStreamCompleterNative extends MultiFrameImageStreamCompleter {
    readonly [_flaxDartTypeValue]: _MultiFrameImageStreamCompleterNative;
    maybeDispose(): void;
    addListener(listener: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamListener": readonly [];
    }>): void;
    addEphemeralErrorListener(listener: ((exception: {}, stackTrace: upstream7.StackTrace | null) => void)): void;
    keepAlive(): upstream8.ImageStreamCompleterHandle;
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
        informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        silent?: boolean | undefined;
    }): void;
    reportImageChunkEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    debugFillProperties(description: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream12.DiagnosticLevel | undefined;
    }): string;
    get debugLabel(): string | null;
    set debugLabel(value: string | null);
}
export declare abstract class _MultiFrameImageStreamCompleterNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiFrameImageStreamCompleter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MultiFrameImageStreamCompleter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:MultiFrameImageStreamCompleter", readonly [], false];
    constructor(options: {
        codec: Promise<Readonly<{
            "__flaxBound:dart:ui::Codec": readonly [];
        }>>;
        scale: number;
        debugLabel?: string | null | undefined;
        chunkEvents?: (upstream3.Stream<upstream4.ImageChunkEvent> | upstream3.Stream<Readonly<{
            "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>>) | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
    });
}
export declare namespace _MultiFrameImageStreamCompleterFactory {
    function implement(args: [options: {
        codec: Promise<Readonly<{
            "__flaxBound:dart:ui::Codec": readonly [];
        }>>;
        scale: number;
        debugLabel?: string | null | undefined;
        chunkEvents?: (upstream3.Stream<upstream4.ImageChunkEvent> | upstream3.Stream<Readonly<{
            "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>>) | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
    }], implementation: {}): MultiFrameImageStreamCompleter;
}
declare const _MultiFrameImageStreamCompleterBinding: typeof _MultiFrameImageStreamCompleterFactory & (new (options: {
    codec: Promise<Readonly<{
        "__flaxBound:dart:ui::Codec": readonly [];
    }>>;
    scale: number;
    debugLabel?: string | null | undefined;
    chunkEvents?: (upstream3.Stream<upstream4.ImageChunkEvent> | upstream3.Stream<Readonly<{
        "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>) | null | undefined;
    informationCollector?: (() => DartIterableInput<upstream5.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>) | null | undefined;
}) => _MultiFrameImageStreamCompleterNative);
export declare const MultiFrameImageStreamCompleter: typeof _MultiFrameImageStreamCompleterBinding & _FlaxInstanceType<MultiFrameImageStreamCompleter> & _FlaxDartType<MultiFrameImageStreamCompleter, readonly ["class", "flax.core/sdk_painting#type:MultiFrameImageStreamCompleter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugLabel" | "addListener" | "addEphemeralErrorListener" | "keepAlive" | "removeListener" | "onDisposed" | "maybeDispose" | "addOnLastListenerRemovedCallback" | "removeOnLastListenerRemovedCallback" | "setImage" | "reportError" | "reportImageChunkEvent" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/painting/image_stream.dart::MultiFrameImageStreamCompleter" | "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStreamCompleter" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

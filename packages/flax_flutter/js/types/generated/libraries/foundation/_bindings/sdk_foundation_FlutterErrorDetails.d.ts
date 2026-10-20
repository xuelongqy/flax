import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlutterErrorDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __FlutterErrorDetails: unique symbol;
    readonly [_flaxDartTypeValue]: FlutterErrorDetails;
    readonly exception: {};
    readonly stack: upstream1.StackTrace | null;
    readonly library: string | null;
    readonly context: upstream2.DiagnosticsNode | null;
    readonly stackFilter: ((input: DartIterableInput<string, string>) => DartIterable<string>) | null;
    readonly informationCollector: (() => DartIterable<upstream2.DiagnosticsNode>) | null;
    readonly silent: boolean;
    readonly summary: upstream2.DiagnosticsNode;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        exception?: unknown | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        library?: string | null | undefined;
        silent?: boolean | null | undefined;
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
    }): FlutterErrorDetails;
    exceptionAsString(): string;
}
export declare function _FlutterErrorDetailsFactory(options: {
    exception: {};
    stack?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null | undefined;
    library?: string | null | undefined;
    context?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }> | null | undefined;
    stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
    informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>) | null | undefined;
    silent?: boolean | undefined;
}): FlutterErrorDetails;
export interface _FlutterErrorDetailsNative extends FlutterErrorDetails {
    readonly [_flaxDartTypeValue]: _FlutterErrorDetailsNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream4.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        exception?: unknown | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        library?: string | null | undefined;
        silent?: boolean | null | undefined;
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
    }): FlutterErrorDetails;
    exceptionAsString(): string;
    get exception(): {};
    get stack(): upstream1.StackTrace | null;
    get library(): string | null;
    get context(): upstream2.DiagnosticsNode | null;
    get stackFilter(): ((input: DartIterableInput<string, string>) => DartIterable<string>) | null;
    get informationCollector(): (() => DartIterable<upstream2.DiagnosticsNode>) | null;
    get silent(): boolean;
    get summary(): upstream2.DiagnosticsNode;
}
export declare abstract class _FlutterErrorDetailsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlutterErrorDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FlutterErrorDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:FlutterErrorDetails", readonly [], false];
    constructor(options: {
        exception: {};
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        library?: string | null | undefined;
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        silent?: boolean | undefined;
    });
}
export declare namespace _FlutterErrorDetailsFactory {
    function implement(args: [options: {
        exception: {};
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        library?: string | null | undefined;
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        silent?: boolean | undefined;
    }], implementation: {}): FlutterErrorDetails;
}
declare const _FlutterErrorDetailsBinding: typeof _FlutterErrorDetailsFactory & (new (options: {
    exception: {};
    stack?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null | undefined;
    library?: string | null | undefined;
    context?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }> | null | undefined;
    stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
    informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>) | null | undefined;
    silent?: boolean | undefined;
}) => _FlutterErrorDetailsNative);
export declare namespace _FlutterErrorDetailsFactory {
    const propertiesTransformers: DartList<((properties: DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>) => DartIterable<upstream2.DiagnosticsNode>)>;
}
export declare const FlutterErrorDetails: typeof _FlutterErrorDetailsBinding & _FlaxInstanceType<FlutterErrorDetails> & _FlaxDartType<FlutterErrorDetails, readonly ["class", "flax.core/sdk_foundation#type:FlutterErrorDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "exception" | "stack" | "library" | "context" | "stackFilter" | "informationCollector" | "silent" | "summary" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "exceptionAsString" | "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

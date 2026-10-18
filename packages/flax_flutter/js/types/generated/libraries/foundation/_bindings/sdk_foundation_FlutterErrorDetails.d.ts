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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FlutterErrorDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __FlutterErrorDetails: unique symbol;
    readonly [_flaxDartTypeValue]: FlutterErrorDetails;
}
export interface FlutterErrorDetails {
    readonly [_flaxDartTypeValue]: FlutterErrorDetails;
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
export declare abstract class FlutterErrorDetails extends _FlaxProxyBase {
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
export declare namespace FlutterErrorDetails {
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
export declare namespace FlutterErrorDetails {
    const propertiesTransformers: DartList<((properties: DartIterableInput<upstream2.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>) => DartIterable<upstream2.DiagnosticsNode>)>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "exception" | "stack" | "library" | "context" | "stackFilter" | "informationCollector" | "silent" | "summary" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "exceptionAsString" | "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Error';
import '@flax/dart/core/_bindings/flutter_Error';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFilter';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FlutterError extends Omit<upstream0.Error, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.Error>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.Error | keyof upstream1.DiagnosticableTreeMixin>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Error | keyof upstream1.DiagnosticableTreeMixin | keyof upstream2.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterError": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Error": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::AssertionError": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __FlutterError: unique symbol;
    readonly [_flaxDartTypeValue]: FlutterError;
}
export interface FlutterError {
    readonly [_flaxDartTypeValue]: FlutterError;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream8.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream4.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get diagnostics(): DartList<upstream4.DiagnosticsNode>;
    get message(): string;
    get stackTrace(): upstream5.StackTrace | null;
}
export declare abstract class FlutterError extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlutterError>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FlutterError;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:FlutterError", readonly [], false];
    constructor(diagnostics: DartListInput<upstream4.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>);
}
export declare namespace FlutterError {
    function implement(args: [diagnostics: DartListInput<upstream4.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>], implementation: {}): FlutterError;
}
export declare namespace FlutterError {
    function setOnError(value: ((details: upstream6.FlutterErrorDetails) => void) | null): void;
}
export declare namespace FlutterError {
    function setDemangleStackTrace(value: ((details: upstream5.StackTrace) => Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>)): void;
}
export declare namespace FlutterError {
    function setPresentError(value: ((details: upstream6.FlutterErrorDetails) => void)): void;
}
export declare namespace FlutterError {
    const onError: ((details: Readonly<{
        "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
}
export declare namespace FlutterError {
    const demangleStackTrace: ((details: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>) => upstream5.StackTrace);
}
export declare namespace FlutterError {
    const presentError: ((details: Readonly<{
        "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void);
}
export declare namespace FlutterError {
    const wrapWidth: number;
}
export declare namespace FlutterError {
    function resetErrorCount(): void;
}
export declare namespace FlutterError {
    function dumpErrorToConsole(details: Readonly<{
        "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, options?: {
        forceReport?: boolean | undefined;
    }): void;
}
export declare namespace FlutterError {
    function addDefaultStackFilter(filter: Readonly<{
        "__flaxBound:package:flutter/src/foundation/assertions.dart::StackFilter": readonly [];
    }>): void;
}
export declare namespace FlutterError {
    function defaultStackFilter(frames: DartIterableInput<string, string>): DartIterable<string>;
}
export declare namespace FlutterError {
    function reportError(details: Readonly<{
        "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "stackTrace" | "diagnostics" | "message" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterError" | "__flaxBound:dart:core::Error" | "__flaxBound:dart:core::AssertionError" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};

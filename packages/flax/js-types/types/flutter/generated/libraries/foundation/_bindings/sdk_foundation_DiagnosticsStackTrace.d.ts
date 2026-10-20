import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsBlock';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsBlock';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagnosticsStackTrace extends Omit<upstream0.DiagnosticsBlock, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsBlock>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::DiagnosticsStackTrace": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __DiagnosticsStackTrace: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticsStackTrace;
    readonly level: upstream3.DiagnosticLevel;
    readonly value: unknown | null;
    readonly allowTruncate: boolean;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly style: upstream4.DiagnosticsTreeStyle | null;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly textTreeConfiguration: upstream5.TextTreeConfiguration | null;
    getChildren(): DartList<upstream1.DiagnosticsNode>;
    getProperties(): DartList<upstream1.DiagnosticsNode>;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream3.DiagnosticLevel): boolean;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toStringDeep(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
}
export declare function _DiagnosticsStackTraceFactory(name: string, stack: Readonly<{
    "__flaxBound:dart:core::StackTrace": readonly [];
}> | null, options?: {
    stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
    showSeparator?: boolean | undefined;
}): DiagnosticsStackTrace;
export declare namespace _DiagnosticsStackTraceFactory {
    function singleFrame(name: string, options: {
        frame: string;
        showSeparator?: boolean | undefined;
    }): DiagnosticsStackTrace;
}
export interface _DiagnosticsStackTraceNative extends DiagnosticsStackTrace {
    readonly [_flaxDartTypeValue]: _DiagnosticsStackTraceNative;
    readonly [_flaxDartConstructors]?: {
        "": (name: string, stack: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null, options?: {
            stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
            showSeparator?: boolean | undefined;
        }) => void;
        "singleFrame": (name: string, options: {
            frame: string;
            showSeparator?: boolean | undefined;
        }) => void;
    };
    getChildren(): DartList<upstream1.DiagnosticsNode>;
    getProperties(): DartList<upstream1.DiagnosticsNode>;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream3.DiagnosticLevel): boolean;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream3.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    get allowTruncate(): boolean;
    get level(): upstream3.DiagnosticLevel;
    get value(): unknown | null;
    get name(): string | null;
    get showSeparator(): boolean;
    get showName(): boolean;
    get linePrefix(): string | null;
    get emptyBodyDescription(): string | null;
    get style(): upstream4.DiagnosticsTreeStyle | null;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export declare abstract class _DiagnosticsStackTraceNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsStackTrace>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DiagnosticsStackTrace;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsStackTrace", readonly [], false];
    constructor(name: string, stack: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null, options?: {
        stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
        showSeparator?: boolean | undefined;
    });
    constructor(call: _FlaxProxySuper<_DiagnosticsStackTraceNative>);
}
export declare namespace _DiagnosticsStackTraceFactory {
    function implement(args: [name: string, stack: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null, options?: {
        stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
        showSeparator?: boolean | undefined;
    }], implementation: {}): DiagnosticsStackTrace;
}
declare const _DiagnosticsStackTraceBinding: typeof _DiagnosticsStackTraceFactory & (new (name: string, stack: Readonly<{
    "__flaxBound:dart:core::StackTrace": readonly [];
}> | null, options?: {
    stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
    showSeparator?: boolean | undefined;
}) => _DiagnosticsStackTraceNative) & (new (call: _FlaxProxySuper<_DiagnosticsStackTraceNative>) => _DiagnosticsStackTraceNative);
export declare const DiagnosticsStackTrace: typeof _DiagnosticsStackTraceBinding & _FlaxInstanceType<DiagnosticsStackTrace> & _FlaxDartType<DiagnosticsStackTrace, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsStackTrace", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "level" | "value" | "allowTruncate" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowWrap" | "allowNameWrap" | "textTreeConfiguration" | "getChildren" | "getProperties" | "toDescription" | "isFiltered" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/assertions.dart::DiagnosticsStackTrace" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
export {};

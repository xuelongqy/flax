import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagnosticsNode extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __DiagnosticsNode: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticsNode;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly level: upstream1.DiagnosticLevel;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly value: unknown | null;
    readonly style: upstream0.DiagnosticsTreeStyle | null;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly allowTruncate: boolean;
    readonly textTreeConfiguration: upstream2.TextTreeConfiguration | null;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream1.DiagnosticLevel): boolean;
    getProperties(): DartList<DiagnosticsNode>;
    getChildren(): DartList<DiagnosticsNode>;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toString(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream1.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
}
export declare namespace _DiagnosticsNodeFactory {
    function message(message: string, options?: {
        style?: upstream0.DiagnosticsTreeStyle | undefined;
        level?: upstream1.DiagnosticLevel | undefined;
        allowWrap?: boolean | undefined;
    }): DiagnosticsNode;
}
export interface _DiagnosticsNodeNative extends DiagnosticsNode {
    readonly [_flaxDartTypeValue]: _DiagnosticsNodeNative;
    isFiltered(minLevel: upstream1.DiagnosticLevel): boolean;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream1.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream1.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    get name(): string | null;
    get showSeparator(): boolean;
    get level(): upstream1.DiagnosticLevel;
    get showName(): boolean;
    get linePrefix(): string | null;
    get emptyBodyDescription(): string | null;
    get style(): upstream0.DiagnosticsTreeStyle | null;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get allowTruncate(): boolean;
    get textTreeConfiguration(): upstream2.TextTreeConfiguration | null;
}
export declare abstract class _DiagnosticsNodeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsNode>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DiagnosticsNode;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsNode", readonly [], false];
    constructor(options: {
        name: string | null;
        style?: upstream0.DiagnosticsTreeStyle | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        linePrefix?: string | null | undefined;
    });
    abstract toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    abstract getProperties(): DartList<DiagnosticsNode>;
    abstract getChildren(): DartList<DiagnosticsNode>;
    abstract get value(): unknown | null;
}
export declare namespace _DiagnosticsNodeFactory {
    function implement(args: [options: {
        name: string | null;
        style?: upstream0.DiagnosticsTreeStyle | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        linePrefix?: string | null | undefined;
    }], implementation: {
        toDescription: ((options?: {
            parentConfiguration?: upstream2.TextTreeConfiguration | null | undefined;
        }) => string);
        getProperties: (() => DartListInput<DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>);
        getChildren: (() => DartListInput<DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>);
        get value(): unknown | null;
    }): DiagnosticsNode;
}
declare const _DiagnosticsNodeBinding: typeof _DiagnosticsNodeFactory & (abstract new (options: {
    name: string | null;
    style?: upstream0.DiagnosticsTreeStyle | null | undefined;
    showName?: boolean | undefined;
    showSeparator?: boolean | undefined;
    linePrefix?: string | null | undefined;
}) => _DiagnosticsNodeNative);
export declare namespace _DiagnosticsNodeFactory {
    function toJsonList(nodes: DartListInput<DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>> | null, parent: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }> | null, delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartList<DartMap<string, unknown | null>>;
}
export declare const DiagnosticsNode: typeof _DiagnosticsNodeBinding & _FlaxInstanceType<DiagnosticsNode> & _FlaxDartType<DiagnosticsNode, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsNode", readonly [], false]>;
export {};

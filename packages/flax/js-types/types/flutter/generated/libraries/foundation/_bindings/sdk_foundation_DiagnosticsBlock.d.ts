import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagnosticsBlock extends Omit<upstream0.DiagnosticsNode, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __DiagnosticsBlock: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticsBlock;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly level: upstream2.DiagnosticLevel;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly value: unknown | null;
    readonly style: upstream1.DiagnosticsTreeStyle | null;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly allowTruncate: boolean;
    readonly textTreeConfiguration: upstream3.TextTreeConfiguration | null;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream2.DiagnosticLevel): boolean;
    getProperties(): DartList<upstream0.DiagnosticsNode>;
    getChildren(): DartList<upstream0.DiagnosticsNode>;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
}
export declare function _DiagnosticsBlockFactory(options?: {
    name?: string | null | undefined;
    style?: upstream1.DiagnosticsTreeStyle | undefined;
    showName?: boolean | undefined;
    showSeparator?: boolean | undefined;
    linePrefix?: string | null | undefined;
    value?: unknown | null | undefined;
    description?: string | null | undefined;
    level?: upstream2.DiagnosticLevel | undefined;
    allowTruncate?: boolean | undefined;
    children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>> | undefined;
    properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>> | undefined;
}): DiagnosticsBlock;
export interface _DiagnosticsBlockNative extends DiagnosticsBlock {
    readonly [_flaxDartTypeValue]: _DiagnosticsBlockNative;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream2.DiagnosticLevel): boolean;
    getProperties(): DartList<upstream0.DiagnosticsNode>;
    getChildren(): DartList<upstream0.DiagnosticsNode>;
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
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream2.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    get level(): upstream2.DiagnosticLevel;
    get value(): unknown | null;
    get allowTruncate(): boolean;
    get name(): string | null;
    get showSeparator(): boolean;
    get showName(): boolean;
    get linePrefix(): string | null;
    get emptyBodyDescription(): string | null;
    get style(): upstream1.DiagnosticsTreeStyle | null;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get textTreeConfiguration(): upstream3.TextTreeConfiguration | null;
}
export declare abstract class _DiagnosticsBlockNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsBlock>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DiagnosticsBlock;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsBlock", readonly [], false];
    constructor(options?: {
        name?: string | null | undefined;
        style?: upstream1.DiagnosticsTreeStyle | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        linePrefix?: string | null | undefined;
        value?: unknown | null | undefined;
        description?: string | null | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
        allowTruncate?: boolean | undefined;
        children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>> | undefined;
        properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>> | undefined;
    });
}
export declare namespace _DiagnosticsBlockFactory {
    function implement(args: [options?: {
        name?: string | null | undefined;
        style?: upstream1.DiagnosticsTreeStyle | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        linePrefix?: string | null | undefined;
        value?: unknown | null | undefined;
        description?: string | null | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
        allowTruncate?: boolean | undefined;
        children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>> | undefined;
        properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>> | undefined;
    }], implementation: {}): DiagnosticsBlock;
}
declare const _DiagnosticsBlockBinding: typeof _DiagnosticsBlockFactory & (new (options?: {
    name?: string | null | undefined;
    style?: upstream1.DiagnosticsTreeStyle | undefined;
    showName?: boolean | undefined;
    showSeparator?: boolean | undefined;
    linePrefix?: string | null | undefined;
    value?: unknown | null | undefined;
    description?: string | null | undefined;
    level?: upstream2.DiagnosticLevel | undefined;
    allowTruncate?: boolean | undefined;
    children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>> | undefined;
    properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>> | undefined;
}) => _DiagnosticsBlockNative);
export declare const DiagnosticsBlock: typeof _DiagnosticsBlockBinding & _FlaxInstanceType<DiagnosticsBlock> & _FlaxDartType<DiagnosticsBlock, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsBlock", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "emptyBodyDescription" | "value" | "style" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "toDescription" | "isFiltered" | "getProperties" | "getChildren" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toString" | "toStringDeep" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
export {};

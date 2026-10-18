import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DiagnosticsNode extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __DiagnosticsNode: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticsNode;
}
export interface DiagnosticsNode {
    readonly [_flaxDartTypeValue]: DiagnosticsNode;
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
export declare abstract class DiagnosticsNode extends _FlaxProxyBase {
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
export declare namespace DiagnosticsNode {
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
export declare namespace DiagnosticsNode {
    function toJsonList(nodes: DartListInput<DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>> | null, parent: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }> | null, delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartList<DartMap<string, unknown | null>>;
}

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagnosticableTreeNode extends Omit<upstream0.DiagnosticableNode<upstream1.DiagnosticableTree>, _flaxOwnMembers0>, Omit<upstream2.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticableNode<upstream1.DiagnosticableTree>>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeNode": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableNode": readonly [upstream1.DiagnosticableTree];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __DiagnosticableTreeNode: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticableTreeNode;
    readonly value: upstream1.DiagnosticableTree;
    readonly builder: upstream4.DiagnosticPropertiesBuilder | null;
    readonly style: upstream3.DiagnosticsTreeStyle;
    readonly emptyBodyDescription: string | null;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly level: upstream5.DiagnosticLevel;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly allowTruncate: boolean;
    readonly textTreeConfiguration: upstream6.TextTreeConfiguration | null;
    getProperties(): DartList<upstream2.DiagnosticsNode>;
    getChildren(): DartList<upstream2.DiagnosticsNode>;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream5.DiagnosticLevel): boolean;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toStringDeep(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
}
export declare function _DiagnosticableTreeNodeFactory(options: {
    name?: string | null | undefined;
    value: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    style: upstream3.DiagnosticsTreeStyle | null;
}): DiagnosticableTreeNode;
export interface _DiagnosticableTreeNodeNative extends DiagnosticableTreeNode {
    readonly [_flaxDartTypeValue]: _DiagnosticableTreeNodeNative;
    getProperties(): DartList<upstream2.DiagnosticsNode>;
    getChildren(): DartList<upstream2.DiagnosticsNode>;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream5.DiagnosticLevel): boolean;
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
        minLevel?: upstream5.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    get value(): upstream1.DiagnosticableTree;
    get builder(): upstream4.DiagnosticPropertiesBuilder | null;
    get style(): upstream3.DiagnosticsTreeStyle;
    get emptyBodyDescription(): string | null;
    get name(): string | null;
    get showSeparator(): boolean;
    get level(): upstream5.DiagnosticLevel;
    get showName(): boolean;
    get linePrefix(): string | null;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get allowTruncate(): boolean;
    get textTreeConfiguration(): upstream6.TextTreeConfiguration | null;
}
export declare abstract class _DiagnosticableTreeNodeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticableTreeNode>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DiagnosticableTreeNode;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableTreeNode", readonly [], false];
    constructor(options: {
        name?: string | null | undefined;
        value: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        style: upstream3.DiagnosticsTreeStyle | null;
    });
}
export declare namespace _DiagnosticableTreeNodeFactory {
    function implement(args: [options: {
        name?: string | null | undefined;
        value: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        style: upstream3.DiagnosticsTreeStyle | null;
    }], implementation: {}): DiagnosticableTreeNode;
}
declare const _DiagnosticableTreeNodeBinding: typeof _DiagnosticableTreeNodeFactory & (new (options: {
    name?: string | null | undefined;
    value: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    style: upstream3.DiagnosticsTreeStyle | null;
}) => _DiagnosticableTreeNodeNative);
export declare const DiagnosticableTreeNode: typeof _DiagnosticableTreeNodeBinding & _FlaxInstanceType<DiagnosticableTreeNode> & _FlaxDartType<DiagnosticableTreeNode, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableTreeNode", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "builder" | "style" | "emptyBodyDescription" | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "getProperties" | "getChildren" | "toDescription" | "isFiltered" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeNode" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableNode" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
export {};

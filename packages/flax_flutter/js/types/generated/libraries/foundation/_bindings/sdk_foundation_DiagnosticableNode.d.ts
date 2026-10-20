import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticableNode<T extends upstream0.Diagnosticable = upstream0.Diagnosticable> extends Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableNode": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __DiagnosticableNode: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticableNode<T>;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly level: upstream4.DiagnosticLevel;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly value: T;
    readonly style: upstream2.DiagnosticsTreeStyle;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly allowTruncate: boolean;
    readonly textTreeConfiguration: upstream5.TextTreeConfiguration | null;
    readonly builder: upstream6.DiagnosticPropertiesBuilder | null;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
    getProperties(): DartList<upstream1.DiagnosticsNode>;
    getChildren(): DartList<upstream1.DiagnosticsNode>;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
}
export declare function _DiagnosticableNodeFactory<T extends upstream0.Diagnosticable = upstream0.Diagnosticable>(options: {
    name?: string | null | undefined;
    value: (T | DartInput<T>);
    style: upstream2.DiagnosticsTreeStyle | null;
}): DiagnosticableNode<T>;
export declare function _DiagnosticableNodeFactory(options: {
    name?: string | null | undefined;
    value: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    style: upstream2.DiagnosticsTreeStyle | null;
}): DiagnosticableNode<upstream0.Diagnosticable>;
export interface _DiagnosticableNodeNative<T extends upstream0.Diagnosticable = upstream0.Diagnosticable> extends DiagnosticableNode<T> {
    readonly [_flaxDartTypeValue]: _DiagnosticableNodeNative<T>;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
    getProperties(): DartList<upstream1.DiagnosticsNode>;
    getChildren(): DartList<upstream1.DiagnosticsNode>;
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
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream4.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    get value(): T;
    get builder(): upstream6.DiagnosticPropertiesBuilder | null;
    get style(): upstream2.DiagnosticsTreeStyle;
    get emptyBodyDescription(): string | null;
    get name(): string | null;
    get showSeparator(): boolean;
    get level(): upstream4.DiagnosticLevel;
    get showName(): boolean;
    get linePrefix(): string | null;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get allowTruncate(): boolean;
    get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export declare abstract class _DiagnosticableNodeNative<T extends upstream0.Diagnosticable = upstream0.Diagnosticable> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticableNode<upstream0.Diagnosticable>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DiagnosticableNode<upstream0.Diagnosticable>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableNode", readonly [readonly ["class", "flax.core/sdk_foundation#type:Diagnosticable", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        name?: string | null | undefined;
        value: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        style: upstream2.DiagnosticsTreeStyle | null;
    });
}
export declare namespace _DiagnosticableNodeFactory {
    function implement<T extends upstream0.Diagnosticable = upstream0.Diagnosticable>(args: [options: {
        name?: string | null | undefined;
        value: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        style: upstream2.DiagnosticsTreeStyle | null;
    }], implementation: {}): DiagnosticableNode<T>;
}
declare const _DiagnosticableNodeBinding: typeof _DiagnosticableNodeFactory & (new <T extends upstream0.Diagnosticable = upstream0.Diagnosticable>(options: {
    name?: string | null | undefined;
    value: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    style: upstream2.DiagnosticsTreeStyle | null;
}) => _DiagnosticableNodeNative<T>);
export declare const DiagnosticableNode: typeof _DiagnosticableNodeBinding & _FlaxInstanceType<DiagnosticableNode<upstream0.Diagnosticable>> & _FlaxDartType<DiagnosticableNode<upstream0.Diagnosticable>, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableNode", readonly [readonly ["class", "flax.core/sdk_foundation#type:Diagnosticable", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "emptyBodyDescription" | "value" | "style" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "builder" | "toDescription" | "isFiltered" | "getProperties" | "getChildren" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toString" | "toStringDeep" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableNode" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Diagnosticable] ? (new (options: {
        name?: string | null | undefined;
        value: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        style: upstream2.DiagnosticsTreeStyle | null;
    }) => _DiagnosticableNodeNative<_Selected0>) & {
        (options: {
            name?: string | null | undefined;
            value: (_Selected0 | DartInput<_Selected0>);
            style: upstream2.DiagnosticsTreeStyle | null;
        }): _DiagnosticableNodeNative<_Selected0>;
        readonly prototype: _DiagnosticableNodeNative<_Selected0>;
        implement(args: readonly [options: {
            name?: string | null | undefined;
            value: Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>;
            style: upstream2.DiagnosticsTreeStyle | null;
        }], implementation: Partial<_DiagnosticableNodeNative<_Selected0>>): _DiagnosticableNodeNative<_Selected0>;
    } & _FlaxInstanceType<_DiagnosticableNodeNative<_Selected0>> & _FlaxDartType<_DiagnosticableNodeNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Diagnosticable] ? (new (options: {
        name?: string | null | undefined;
        value: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        style: upstream2.DiagnosticsTreeStyle | null;
    }) => _DiagnosticableNodeNative<_Selected0>) & {
        (options: {
            name?: string | null | undefined;
            value: (_Selected0 | DartInput<_Selected0>);
            style: upstream2.DiagnosticsTreeStyle | null;
        }): _DiagnosticableNodeNative<_Selected0>;
        readonly prototype: _DiagnosticableNodeNative<_Selected0>;
        implement(args: readonly [options: {
            name?: string | null | undefined;
            value: Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>;
            style: upstream2.DiagnosticsTreeStyle | null;
        }], implementation: Partial<_DiagnosticableNodeNative<_Selected0>>): _DiagnosticableNodeNative<_Selected0>;
    } & _FlaxInstanceType<_DiagnosticableNodeNative<_Selected0>> & _FlaxDartType<_DiagnosticableNodeNative<_Selected0>> : never : never;
}
export {};

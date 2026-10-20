import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlagsSummary<T extends unknown | null = unknown | null> extends Omit<upstream0.DiagnosticsProperty<DartMap<string, T | null>>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<DartMap<string, T | null>>>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::FlagsSummary": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [DartMap<string, T | null>];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __FlagsSummary: unique symbol;
    readonly [_flaxDartTypeValue]: FlagsSummary<T>;
    readonly expandableValue: boolean;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly ifNull: string | null;
    readonly ifEmpty: string | null;
    readonly tooltip: string | null;
    readonly missingIfNull: boolean;
    readonly propertyType: upstream3.Type;
    readonly value: DartMap<string, T | null>;
    readonly exception: unknown | null;
    readonly defaultValue: unknown | null;
    readonly isInteresting: boolean;
    readonly level: upstream2.DiagnosticLevel;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly style: upstream4.DiagnosticsTreeStyle | null;
    readonly allowTruncate: boolean;
    readonly textTreeConfiguration: upstream5.TextTreeConfiguration | null;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    valueToString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    getProperties(): DartList<upstream1.DiagnosticsNode>;
    getChildren(): DartList<upstream1.DiagnosticsNode>;
    isFiltered(minLevel: upstream2.DiagnosticLevel): boolean;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toStringDeep(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        minLevel?: upstream2.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
}
export declare function _FlagsSummaryFactory<T extends unknown | null = unknown | null>(name: string, value: DartMapInput<string, _FlaxDartOutput<T> | null, string, (T | _FlaxDartOutput<T>) | null>, options?: {
    ifEmpty?: string | null | undefined;
    showName?: boolean | undefined;
    showSeparator?: boolean | undefined;
    level?: upstream2.DiagnosticLevel | undefined;
}): FlagsSummary<T>;
export declare function _FlagsSummaryFactory(name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {
    ifEmpty?: string | null | undefined;
    showName?: boolean | undefined;
    showSeparator?: boolean | undefined;
    level?: upstream2.DiagnosticLevel | undefined;
}): FlagsSummary<unknown | null>;
export interface _FlagsSummaryNative<T extends unknown | null = unknown | null> extends FlagsSummary<T> {
    readonly [_flaxDartTypeValue]: _FlagsSummaryNative<T>;
    toJsonMap(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    valueToString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    toDescription(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    getProperties(): DartList<upstream1.DiagnosticsNode>;
    getChildren(): DartList<upstream1.DiagnosticsNode>;
    isFiltered(minLevel: upstream2.DiagnosticLevel): boolean;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream2.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream2.DiagnosticLevel | undefined;
    }): string;
    get value(): DartMap<string, T | null>;
    get level(): upstream2.DiagnosticLevel;
    get expandableValue(): boolean;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get ifNull(): string | null;
    get ifEmpty(): string | null;
    get tooltip(): string | null;
    get missingIfNull(): boolean;
    get propertyType(): upstream3.Type;
    get exception(): unknown | null;
    get defaultValue(): unknown | null;
    get isInteresting(): boolean;
    get name(): string | null;
    get showSeparator(): boolean;
    get showName(): boolean;
    get linePrefix(): string | null;
    get emptyBodyDescription(): string | null;
    get style(): upstream4.DiagnosticsTreeStyle | null;
    get allowTruncate(): boolean;
    get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export declare abstract class _FlagsSummaryNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlagsSummary<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FlagsSummary<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:FlagsSummary", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    });
}
export declare namespace _FlagsSummaryFactory {
    function implement<T extends unknown | null = unknown | null>(args: [name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    }], implementation: {}): FlagsSummary<T>;
}
declare const _FlagsSummaryBinding: typeof _FlagsSummaryFactory & (new <T extends unknown | null = unknown | null>(name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {
    ifEmpty?: string | null | undefined;
    showName?: boolean | undefined;
    showSeparator?: boolean | undefined;
    level?: upstream2.DiagnosticLevel | undefined;
}) => _FlagsSummaryNative<T>);
export declare const FlagsSummary: typeof _FlagsSummaryBinding & _FlaxInstanceType<FlagsSummary<unknown | null>> & _FlaxDartType<FlagsSummary<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:FlagsSummary", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::FlagsSummary" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    }) => _FlagsSummaryNative<_Selected0>) & {
        (name: string, value: DartMapInput<string, _Selected0 | null, string, (_Selected0 | DartInput<_Selected0>) | null>, options?: {
            ifEmpty?: string | null | undefined;
            showName?: boolean | undefined;
            showSeparator?: boolean | undefined;
            level?: upstream2.DiagnosticLevel | undefined;
        }): _FlagsSummaryNative<_Selected0>;
        readonly prototype: _FlagsSummaryNative<_Selected0>;
        implement(args: readonly [string, DartMapInput<string, unknown | null, string, unknown | null>, options?: {
            ifEmpty?: string | null | undefined;
            showName?: boolean | undefined;
            showSeparator?: boolean | undefined;
            level?: upstream2.DiagnosticLevel | undefined;
        }], implementation: Partial<_FlagsSummaryNative<_Selected0>>): _FlagsSummaryNative<_Selected0>;
    } & _FlaxInstanceType<_FlagsSummaryNative<_Selected0>> & _FlaxDartType<_FlagsSummaryNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    }) => _FlagsSummaryNative<_Selected0>) & {
        (name: string, value: DartMapInput<string, _Selected0 | null, string, (_Selected0 | DartInput<_Selected0>) | null>, options?: {
            ifEmpty?: string | null | undefined;
            showName?: boolean | undefined;
            showSeparator?: boolean | undefined;
            level?: upstream2.DiagnosticLevel | undefined;
        }): _FlagsSummaryNative<_Selected0>;
        readonly prototype: _FlagsSummaryNative<_Selected0>;
        implement(args: readonly [string, DartMapInput<string, unknown | null, string, unknown | null>, options?: {
            ifEmpty?: string | null | undefined;
            showName?: boolean | undefined;
            showSeparator?: boolean | undefined;
            level?: upstream2.DiagnosticLevel | undefined;
        }], implementation: Partial<_FlagsSummaryNative<_Selected0>>): _FlagsSummaryNative<_Selected0>;
    } & _FlaxInstanceType<_FlagsSummaryNative<_Selected0>> & _FlaxDartType<_FlagsSummaryNative<_Selected0>> : never : never;
}
export {};

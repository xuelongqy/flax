import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsProperty<T extends unknown | null = unknown | null> extends Omit<upstream0.DiagnosticsNode, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __DiagnosticsProperty: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticsProperty<T>;
}
export interface DiagnosticsProperty<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: DiagnosticsProperty<T>;
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
    valueToString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
    get expandableValue(): boolean;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get ifNull(): string | null;
    get ifEmpty(): string | null;
    get tooltip(): string | null;
    get missingIfNull(): boolean;
    get propertyType(): upstream4.Type;
    get value(): T | null;
    get exception(): unknown | null;
    get defaultValue(): unknown | null;
    get isInteresting(): boolean;
    get level(): upstream2.DiagnosticLevel;
    get name(): string | null;
    get showSeparator(): boolean;
    get showName(): boolean;
    get linePrefix(): string | null;
    get emptyBodyDescription(): string | null;
    get style(): upstream1.DiagnosticsTreeStyle | null;
    get allowTruncate(): boolean;
    get textTreeConfiguration(): upstream3.TextTreeConfiguration | null;
}
export declare abstract class DiagnosticsProperty<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsProperty<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DiagnosticsProperty<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsProperty", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(name: string | null, value: unknown | null, options?: {
        description?: string | null | undefined;
        ifNull?: string | null | undefined;
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        tooltip?: string | null | undefined;
        missingIfNull?: boolean | undefined;
        linePrefix?: string | null | undefined;
        expandableValue?: boolean | undefined;
        allowWrap?: boolean | undefined;
        allowNameWrap?: boolean | undefined;
        style?: upstream1.DiagnosticsTreeStyle | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    });
}
export declare namespace DiagnosticsProperty {
    function implement<T extends unknown | null = unknown | null>(args: [name: string | null, value: unknown | null, options?: {
        description?: string | null | undefined;
        ifNull?: string | null | undefined;
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        tooltip?: string | null | undefined;
        missingIfNull?: boolean | undefined;
        linePrefix?: string | null | undefined;
        expandableValue?: boolean | undefined;
        allowWrap?: boolean | undefined;
        allowNameWrap?: boolean | undefined;
        style?: upstream1.DiagnosticsTreeStyle | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    }], implementation: {}): DiagnosticsProperty<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "emptyBodyDescription" | "value" | "style" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "expandableValue" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "exception" | "defaultValue" | "isInteresting" | "toDescription" | "isFiltered" | "getProperties" | "getChildren" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toString" | "toStringDeep" | "valueToString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (name: string | null, value: unknown | null, options?: {
        description?: string | null | undefined;
        ifNull?: string | null | undefined;
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        tooltip?: string | null | undefined;
        missingIfNull?: boolean | undefined;
        linePrefix?: string | null | undefined;
        expandableValue?: boolean | undefined;
        allowWrap?: boolean | undefined;
        allowNameWrap?: boolean | undefined;
        style?: upstream1.DiagnosticsTreeStyle | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    }) => DiagnosticsProperty<_Selected0>) & {
        readonly prototype: DiagnosticsProperty<_Selected0>;
        implement(args: readonly [string | null, unknown | null, options?: {
            description?: string | null | undefined;
            ifNull?: string | null | undefined;
            ifEmpty?: string | null | undefined;
            showName?: boolean | undefined;
            showSeparator?: boolean | undefined;
            defaultValue?: unknown | null | undefined;
            tooltip?: string | null | undefined;
            missingIfNull?: boolean | undefined;
            linePrefix?: string | null | undefined;
            expandableValue?: boolean | undefined;
            allowWrap?: boolean | undefined;
            allowNameWrap?: boolean | undefined;
            style?: upstream1.DiagnosticsTreeStyle | undefined;
            level?: upstream2.DiagnosticLevel | undefined;
        }], implementation: Partial<DiagnosticsProperty<_Selected0>>): DiagnosticsProperty<_Selected0>;
    } & _FlaxInstanceType<DiagnosticsProperty<_Selected0>> & _FlaxDartType<DiagnosticsProperty<_Selected0>> : never : never;
}
export {};

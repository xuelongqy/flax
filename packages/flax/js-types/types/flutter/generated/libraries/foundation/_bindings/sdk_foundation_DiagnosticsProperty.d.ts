import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
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
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsProperty<T extends unknown | null = unknown | null> extends Omit<upstream0.DiagnosticsNode, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __DiagnosticsProperty: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticsProperty<T>;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly level: upstream2.DiagnosticLevel;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly value: T | null;
    readonly style: upstream1.DiagnosticsTreeStyle | null;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly allowTruncate: boolean;
    readonly textTreeConfiguration: upstream3.TextTreeConfiguration | null;
    readonly expandableValue: boolean;
    readonly ifNull: string | null;
    readonly ifEmpty: string | null;
    readonly tooltip: string | null;
    readonly missingIfNull: boolean;
    readonly propertyType: upstream4.Type;
    readonly exception: unknown | null;
    readonly defaultValue: unknown | null;
    readonly isInteresting: boolean;
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
    valueToString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
}
export declare function _DiagnosticsPropertyFactory<T extends unknown | null = unknown | null>(name: string | null, value: (T | _FlaxDartOutput<T>) | null, options?: {
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
}): DiagnosticsProperty<T>;
export declare function _DiagnosticsPropertyFactory(name: string | null, value: unknown | null, options?: {
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
}): DiagnosticsProperty<unknown | null>;
export declare namespace _DiagnosticsPropertyFactory {
    function lazy<T extends unknown | null = unknown | null>(name: string | null, computeValue: (() => (T | _FlaxDartOutput<T>) | null), options?: {
        description?: string | null | undefined;
        ifNull?: string | null | undefined;
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        tooltip?: string | null | undefined;
        missingIfNull?: boolean | undefined;
        expandableValue?: boolean | undefined;
        allowWrap?: boolean | undefined;
        allowNameWrap?: boolean | undefined;
        style?: upstream1.DiagnosticsTreeStyle | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    }): DiagnosticsProperty<T>;
    function lazy(name: string | null, computeValue: (() => unknown | null), options?: {
        description?: string | null | undefined;
        ifNull?: string | null | undefined;
        ifEmpty?: string | null | undefined;
        showName?: boolean | undefined;
        showSeparator?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        tooltip?: string | null | undefined;
        missingIfNull?: boolean | undefined;
        expandableValue?: boolean | undefined;
        allowWrap?: boolean | undefined;
        allowNameWrap?: boolean | undefined;
        style?: upstream1.DiagnosticsTreeStyle | undefined;
        level?: upstream2.DiagnosticLevel | undefined;
    }): DiagnosticsProperty<unknown | null>;
}
export interface _DiagnosticsPropertyNative<T extends unknown | null = unknown | null> extends DiagnosticsProperty<T> {
    readonly [_flaxDartTypeValue]: _DiagnosticsPropertyNative<T>;
    readonly [_flaxDartConstructors]?: {
        "": (name: string | null, value: unknown | null, options?: {
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
        }) => void;
        "lazy": (name: string | null, computeValue: (() => unknown | null), options?: {
            description?: string | null | undefined;
            ifNull?: string | null | undefined;
            ifEmpty?: string | null | undefined;
            showName?: boolean | undefined;
            showSeparator?: boolean | undefined;
            defaultValue?: unknown | null | undefined;
            tooltip?: string | null | undefined;
            missingIfNull?: boolean | undefined;
            expandableValue?: boolean | undefined;
            allowWrap?: boolean | undefined;
            allowNameWrap?: boolean | undefined;
            style?: upstream1.DiagnosticsTreeStyle | undefined;
            level?: upstream2.DiagnosticLevel | undefined;
        }) => void;
    };
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
export declare abstract class _DiagnosticsPropertyNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
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
    constructor(call: _FlaxProxySuper<_DiagnosticsPropertyNative<T>>);
}
export declare namespace _DiagnosticsPropertyFactory {
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
declare const _DiagnosticsPropertyBinding: typeof _DiagnosticsPropertyFactory & (new <T extends unknown | null = unknown | null>(name: string | null, value: unknown | null, options?: {
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
}) => _DiagnosticsPropertyNative<T>) & (new <T extends unknown | null = unknown | null>(call: _FlaxProxySuper<_DiagnosticsPropertyNative<T>>) => _DiagnosticsPropertyNative<T>);
export declare const DiagnosticsProperty: typeof _DiagnosticsPropertyBinding & _FlaxInstanceType<DiagnosticsProperty<unknown | null>> & _FlaxDartType<DiagnosticsProperty<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "emptyBodyDescription" | "value" | "style" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "expandableValue" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "exception" | "defaultValue" | "isInteresting" | "toDescription" | "isFiltered" | "getProperties" | "getChildren" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toString" | "toStringDeep" | "valueToString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string | null, value: unknown | null, options?: {
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
    }) => _DiagnosticsPropertyNative<_Selected0>) & (new (call: _FlaxProxySuper<_DiagnosticsPropertyNative<_Selected0>>) => _DiagnosticsPropertyNative<_Selected0>) & {
        (name: string | null, value: (_Selected0 | DartInput<_Selected0>) | null, options?: {
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
        }): _DiagnosticsPropertyNative<_Selected0>;
        lazy: (name: string | null, computeValue: (() => (_Selected0 | DartInput<_Selected0>) | null), options?: {
            description?: string | null | undefined;
            ifNull?: string | null | undefined;
            ifEmpty?: string | null | undefined;
            showName?: boolean | undefined;
            showSeparator?: boolean | undefined;
            defaultValue?: unknown | null | undefined;
            tooltip?: string | null | undefined;
            missingIfNull?: boolean | undefined;
            expandableValue?: boolean | undefined;
            allowWrap?: boolean | undefined;
            allowNameWrap?: boolean | undefined;
            style?: upstream1.DiagnosticsTreeStyle | undefined;
            level?: upstream2.DiagnosticLevel | undefined;
        }) => _DiagnosticsPropertyNative<_Selected0>;
        readonly prototype: _DiagnosticsPropertyNative<_Selected0>;
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
        }], implementation: Partial<_DiagnosticsPropertyNative<_Selected0>>): _DiagnosticsPropertyNative<_Selected0>;
    } & _FlaxInstanceType<_DiagnosticsPropertyNative<_Selected0>> & _FlaxDartType<_DiagnosticsPropertyNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string | null, value: unknown | null, options?: {
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
    }) => _DiagnosticsPropertyNative<_Selected0>) & (new (call: _FlaxProxySuper<_DiagnosticsPropertyNative<_Selected0>>) => _DiagnosticsPropertyNative<_Selected0>) & {
        (name: string | null, value: (_Selected0 | DartInput<_Selected0>) | null, options?: {
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
        }): _DiagnosticsPropertyNative<_Selected0>;
        lazy: (name: string | null, computeValue: (() => (_Selected0 | DartInput<_Selected0>) | null), options?: {
            description?: string | null | undefined;
            ifNull?: string | null | undefined;
            ifEmpty?: string | null | undefined;
            showName?: boolean | undefined;
            showSeparator?: boolean | undefined;
            defaultValue?: unknown | null | undefined;
            tooltip?: string | null | undefined;
            missingIfNull?: boolean | undefined;
            expandableValue?: boolean | undefined;
            allowWrap?: boolean | undefined;
            allowNameWrap?: boolean | undefined;
            style?: upstream1.DiagnosticsTreeStyle | undefined;
            level?: upstream2.DiagnosticLevel | undefined;
        }) => _DiagnosticsPropertyNative<_Selected0>;
        readonly prototype: _DiagnosticsPropertyNative<_Selected0>;
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
        }], implementation: Partial<_DiagnosticsPropertyNative<_Selected0>>): _DiagnosticsPropertyNative<_Selected0>;
    } & _FlaxInstanceType<_DiagnosticsPropertyNative<_Selected0>> & _FlaxDartType<_DiagnosticsPropertyNative<_Selected0>> : never : never;
}
export {};

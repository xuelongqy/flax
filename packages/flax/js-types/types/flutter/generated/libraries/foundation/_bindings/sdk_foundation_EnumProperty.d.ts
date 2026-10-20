import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EnumProperty<T extends upstream0.Enum | null = upstream0.Enum | null> extends Omit<upstream1.DiagnosticsProperty<T>, _flaxOwnMembers0>, Omit<upstream2.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream1.DiagnosticsProperty<T>>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::EnumProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __EnumProperty: unique symbol;
    readonly [_flaxDartTypeValue]: EnumProperty<T>;
    readonly expandableValue: boolean;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly ifNull: string | null;
    readonly ifEmpty: string | null;
    readonly tooltip: string | null;
    readonly missingIfNull: boolean;
    readonly propertyType: upstream4.Type;
    readonly value: T | null;
    readonly exception: unknown | null;
    readonly defaultValue: unknown | null;
    readonly isInteresting: boolean;
    readonly level: upstream3.DiagnosticLevel;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly style: upstream5.DiagnosticsTreeStyle | null;
    readonly allowTruncate: boolean;
    readonly textTreeConfiguration: upstream6.TextTreeConfiguration | null;
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
    getProperties(): DartList<upstream2.DiagnosticsNode>;
    getChildren(): DartList<upstream2.DiagnosticsNode>;
    isFiltered(minLevel: upstream3.DiagnosticLevel): boolean;
    toTimelineArguments(): DartMap<string, string> | null;
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
export declare function _EnumPropertyFactory<T extends upstream0.Enum | null = upstream0.Enum | null>(name: string, value: (T | DartInput<T>) | null, options?: {
    defaultValue?: unknown | null | undefined;
    level?: upstream3.DiagnosticLevel | undefined;
}): EnumProperty<T>;
export declare function _EnumPropertyFactory(name: string, value: Readonly<{
    "__flaxBound:dart:core::Enum": readonly [];
}> | null, options?: {
    defaultValue?: unknown | null | undefined;
    level?: upstream3.DiagnosticLevel | undefined;
}): EnumProperty<upstream0.Enum | null>;
export interface _EnumPropertyNative<T extends upstream0.Enum | null = upstream0.Enum | null> extends EnumProperty<T> {
    readonly [_flaxDartTypeValue]: _EnumPropertyNative<T>;
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
    getProperties(): DartList<upstream2.DiagnosticsNode>;
    getChildren(): DartList<upstream2.DiagnosticsNode>;
    isFiltered(minLevel: upstream3.DiagnosticLevel): boolean;
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
        minLevel?: upstream3.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream3.DiagnosticLevel | undefined;
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
    get level(): upstream3.DiagnosticLevel;
    get name(): string | null;
    get showSeparator(): boolean;
    get showName(): boolean;
    get linePrefix(): string | null;
    get emptyBodyDescription(): string | null;
    get style(): upstream5.DiagnosticsTreeStyle | null;
    get allowTruncate(): boolean;
    get textTreeConfiguration(): upstream6.TextTreeConfiguration | null;
}
export declare abstract class _EnumPropertyNative<T extends upstream0.Enum | null = upstream0.Enum | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<EnumProperty<upstream0.Enum | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: EnumProperty<upstream0.Enum | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:EnumProperty", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(name: string, value: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }> | null, options?: {
        defaultValue?: unknown | null | undefined;
        level?: upstream3.DiagnosticLevel | undefined;
    });
}
export declare namespace _EnumPropertyFactory {
    function implement<T extends upstream0.Enum | null = upstream0.Enum | null>(args: [name: string, value: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }> | null, options?: {
        defaultValue?: unknown | null | undefined;
        level?: upstream3.DiagnosticLevel | undefined;
    }], implementation: {}): EnumProperty<T>;
}
declare const _EnumPropertyBinding: typeof _EnumPropertyFactory & (new <T extends upstream0.Enum | null = upstream0.Enum | null>(name: string, value: Readonly<{
    "__flaxBound:dart:core::Enum": readonly [];
}> | null, options?: {
    defaultValue?: unknown | null | undefined;
    level?: upstream3.DiagnosticLevel | undefined;
}) => _EnumPropertyNative<T>);
export declare const EnumProperty: typeof _EnumPropertyBinding & _FlaxInstanceType<EnumProperty<upstream0.Enum | null>> & _FlaxDartType<EnumProperty<upstream0.Enum | null>, readonly ["class", "flax.core/sdk_foundation#type:EnumProperty", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::EnumProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum | null] ? (new (name: string, value: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }> | null, options?: {
        defaultValue?: unknown | null | undefined;
        level?: upstream3.DiagnosticLevel | undefined;
    }) => _EnumPropertyNative<_Selected0>) & {
        (name: string, value: (_Selected0 | DartInput<_Selected0>) | null, options?: {
            defaultValue?: unknown | null | undefined;
            level?: upstream3.DiagnosticLevel | undefined;
        }): _EnumPropertyNative<_Selected0>;
        readonly prototype: _EnumPropertyNative<_Selected0>;
        implement(args: readonly [string, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }> | null, options?: {
            defaultValue?: unknown | null | undefined;
            level?: upstream3.DiagnosticLevel | undefined;
        }], implementation: Partial<_EnumPropertyNative<_Selected0>>): _EnumPropertyNative<_Selected0>;
    } & _FlaxInstanceType<_EnumPropertyNative<_Selected0>> & _FlaxDartType<_EnumPropertyNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum | null] ? (new (name: string, value: Readonly<{
        "__flaxBound:dart:core::Enum": readonly [];
    }> | null, options?: {
        defaultValue?: unknown | null | undefined;
        level?: upstream3.DiagnosticLevel | undefined;
    }) => _EnumPropertyNative<_Selected0>) & {
        (name: string, value: (_Selected0 | DartInput<_Selected0>) | null, options?: {
            defaultValue?: unknown | null | undefined;
            level?: upstream3.DiagnosticLevel | undefined;
        }): _EnumPropertyNative<_Selected0>;
        readonly prototype: _EnumPropertyNative<_Selected0>;
        implement(args: readonly [string, Readonly<{
            "__flaxBound:dart:core::Enum": readonly [];
        }> | null, options?: {
            defaultValue?: unknown | null | undefined;
            level?: upstream3.DiagnosticLevel | undefined;
        }], implementation: Partial<_EnumPropertyNative<_Selected0>>): _EnumPropertyNative<_Selected0>;
    } & _FlaxInstanceType<_EnumPropertyNative<_Selected0>> & _FlaxDartType<_EnumPropertyNative<_Selected0>> : never : never;
}
export {};

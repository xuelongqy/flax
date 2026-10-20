import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IntProperty extends Omit<upstream0.DiagnosticsProperty<number>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<number>>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::IntProperty": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::_NumProperty": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [number];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __IntProperty: unique symbol;
    readonly [_flaxDartTypeValue]: IntProperty;
    readonly expandableValue: boolean;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly ifNull: string | null;
    readonly ifEmpty: string | null;
    readonly tooltip: string | null;
    readonly missingIfNull: boolean;
    readonly propertyType: upstream4.Type;
    readonly value: number | null;
    readonly exception: unknown | null;
    readonly defaultValue: unknown | null;
    readonly isInteresting: boolean;
    readonly level: upstream3.DiagnosticLevel;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly style: upstream2.DiagnosticsTreeStyle | null;
    readonly allowTruncate: boolean;
    readonly textTreeConfiguration: upstream5.TextTreeConfiguration | null;
    readonly unit: string | null;
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
    numberToString(): string;
}
export declare function _IntPropertyFactory(name: string, value: number | null, options?: {
    ifNull?: string | null | undefined;
    showName?: boolean | undefined;
    unit?: string | null | undefined;
    defaultValue?: unknown | null | undefined;
    style?: upstream2.DiagnosticsTreeStyle | undefined;
    level?: upstream3.DiagnosticLevel | undefined;
}): IntProperty;
export interface _IntPropertyNative extends IntProperty {
    readonly [_flaxDartTypeValue]: _IntPropertyNative;
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
    numberToString(): string;
    get unit(): string | null;
    get expandableValue(): boolean;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get ifNull(): string | null;
    get ifEmpty(): string | null;
    get tooltip(): string | null;
    get missingIfNull(): boolean;
    get propertyType(): upstream4.Type;
    get value(): number | null;
    get exception(): unknown | null;
    get defaultValue(): unknown | null;
    get isInteresting(): boolean;
    get level(): upstream3.DiagnosticLevel;
    get name(): string | null;
    get showSeparator(): boolean;
    get showName(): boolean;
    get linePrefix(): string | null;
    get emptyBodyDescription(): string | null;
    get style(): upstream2.DiagnosticsTreeStyle | null;
    get allowTruncate(): boolean;
    get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export declare abstract class _IntPropertyNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IntProperty>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: IntProperty;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:IntProperty", readonly [], false];
    constructor(name: string, value: number | null, options?: {
        ifNull?: string | null | undefined;
        showName?: boolean | undefined;
        unit?: string | null | undefined;
        defaultValue?: unknown | null | undefined;
        style?: upstream2.DiagnosticsTreeStyle | undefined;
        level?: upstream3.DiagnosticLevel | undefined;
    });
}
export declare namespace _IntPropertyFactory {
    function implement(args: [name: string, value: number | null, options?: {
        ifNull?: string | null | undefined;
        showName?: boolean | undefined;
        unit?: string | null | undefined;
        defaultValue?: unknown | null | undefined;
        style?: upstream2.DiagnosticsTreeStyle | undefined;
        level?: upstream3.DiagnosticLevel | undefined;
    }], implementation: {}): IntProperty;
}
declare const _IntPropertyBinding: typeof _IntPropertyFactory & (new (name: string, value: number | null, options?: {
    ifNull?: string | null | undefined;
    showName?: boolean | undefined;
    unit?: string | null | undefined;
    defaultValue?: unknown | null | undefined;
    style?: upstream2.DiagnosticsTreeStyle | undefined;
    level?: upstream3.DiagnosticLevel | undefined;
}) => _IntPropertyNative);
export declare const IntProperty: typeof _IntPropertyBinding & _FlaxInstanceType<IntProperty> & _FlaxDartType<IntProperty, readonly ["class", "flax.core/sdk_foundation#type:IntProperty", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "unit" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "numberToString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::IntProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::_NumProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
export {};

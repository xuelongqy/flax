import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ColorProperty extends Omit<upstream0.DiagnosticsProperty<upstream1.Color>, _flaxOwnMembers0>, Omit<upstream2.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<upstream1.Color>>, Readonly<{
    "__flaxBound:package:flutter/src/painting/colors.dart::ColorProperty": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [upstream1.Color];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __ColorProperty: unique symbol;
    readonly [_flaxDartTypeValue]: ColorProperty;
    readonly expandableValue: boolean;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly ifNull: string | null;
    readonly ifEmpty: string | null;
    readonly tooltip: string | null;
    readonly missingIfNull: boolean;
    readonly propertyType: upstream5.Type;
    readonly value: upstream1.Color | null;
    readonly exception: unknown | null;
    readonly defaultValue: unknown | null;
    readonly isInteresting: boolean;
    readonly level: upstream4.DiagnosticLevel;
    readonly name: string | null;
    readonly showSeparator: boolean;
    readonly showName: boolean;
    readonly linePrefix: string | null;
    readonly emptyBodyDescription: string | null;
    readonly style: upstream3.DiagnosticsTreeStyle | null;
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
    isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
    toTimelineArguments(): DartMap<string, string> | null;
    toJsonMapIterative(delegate: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
    }>): DartMap<string, unknown | null>;
    toStringDeep(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
    }): string;
}
export declare function _ColorPropertyFactory(name: string, value: Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}> | null, options?: {
    showName?: boolean | undefined;
    defaultValue?: unknown | null | undefined;
    style?: upstream3.DiagnosticsTreeStyle | undefined;
    level?: upstream4.DiagnosticLevel | undefined;
}): ColorProperty;
export interface _ColorPropertyNative extends ColorProperty {
    readonly [_flaxDartTypeValue]: _ColorPropertyNative;
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
    isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
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
        minLevel?: upstream4.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        parentConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
        }> | null | undefined;
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    get expandableValue(): boolean;
    get allowWrap(): boolean;
    get allowNameWrap(): boolean;
    get ifNull(): string | null;
    get ifEmpty(): string | null;
    get tooltip(): string | null;
    get missingIfNull(): boolean;
    get propertyType(): upstream5.Type;
    get value(): upstream1.Color | null;
    get exception(): unknown | null;
    get defaultValue(): unknown | null;
    get isInteresting(): boolean;
    get level(): upstream4.DiagnosticLevel;
    get name(): string | null;
    get showSeparator(): boolean;
    get showName(): boolean;
    get linePrefix(): string | null;
    get emptyBodyDescription(): string | null;
    get style(): upstream3.DiagnosticsTreeStyle | null;
    get allowTruncate(): boolean;
    get textTreeConfiguration(): upstream6.TextTreeConfiguration | null;
}
export declare abstract class _ColorPropertyNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ColorProperty>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ColorProperty;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ColorProperty", readonly [], false];
    constructor(name: string, value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, options?: {
        showName?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | undefined;
        level?: upstream4.DiagnosticLevel | undefined;
    });
}
export declare namespace _ColorPropertyFactory {
    function implement(args: [name: string, value: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, options?: {
        showName?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | undefined;
        level?: upstream4.DiagnosticLevel | undefined;
    }], implementation: {}): ColorProperty;
}
declare const _ColorPropertyBinding: typeof _ColorPropertyFactory & (new (name: string, value: Readonly<{
    "__flaxBound:dart:ui::Color": readonly [];
}> | null, options?: {
    showName?: boolean | undefined;
    defaultValue?: unknown | null | undefined;
    style?: upstream3.DiagnosticsTreeStyle | undefined;
    level?: upstream4.DiagnosticLevel | undefined;
}) => _ColorPropertyNative);
export declare const ColorProperty: typeof _ColorPropertyBinding & _FlaxInstanceType<ColorProperty> & _FlaxDartType<ColorProperty, readonly ["class", "flax.core/sdk_painting#type:ColorProperty", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/painting/colors.dart::ColorProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
export {};

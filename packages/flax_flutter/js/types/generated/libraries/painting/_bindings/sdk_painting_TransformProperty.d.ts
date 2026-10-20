import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TransformProperty extends Omit<upstream0.DiagnosticsProperty<upstream1.Matrix4>, _flaxOwnMembers0>, Omit<upstream2.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<upstream1.Matrix4>>, Readonly<{
    "__flaxBound:package:flutter/src/painting/matrix_utils.dart::TransformProperty": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [upstream1.Matrix4];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
}> {
    readonly __TransformProperty: unique symbol;
    readonly [_flaxDartTypeValue]: TransformProperty;
    readonly expandableValue: boolean;
    readonly allowWrap: boolean;
    readonly allowNameWrap: boolean;
    readonly ifNull: string | null;
    readonly ifEmpty: string | null;
    readonly tooltip: string | null;
    readonly missingIfNull: boolean;
    readonly propertyType: upstream4.Type;
    readonly value: upstream1.Matrix4 | null;
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
export declare function _TransformPropertyFactory(name: string, value: Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
}> | null, options?: {
    showName?: boolean | undefined;
    defaultValue?: unknown | null | undefined;
    level?: upstream3.DiagnosticLevel | undefined;
}): TransformProperty;
export interface _TransformPropertyNative extends TransformProperty {
    readonly [_flaxDartTypeValue]: _TransformPropertyNative;
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
    get value(): upstream1.Matrix4 | null;
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
export declare abstract class _TransformPropertyNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TransformProperty>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TransformProperty;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TransformProperty", readonly [], false];
    constructor(name: string, value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null, options?: {
        showName?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        level?: upstream3.DiagnosticLevel | undefined;
    });
}
export declare namespace _TransformPropertyFactory {
    function implement(args: [name: string, value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null, options?: {
        showName?: boolean | undefined;
        defaultValue?: unknown | null | undefined;
        level?: upstream3.DiagnosticLevel | undefined;
    }], implementation: {}): TransformProperty;
}
declare const _TransformPropertyBinding: typeof _TransformPropertyFactory & (new (name: string, value: Readonly<{
    "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
}> | null, options?: {
    showName?: boolean | undefined;
    defaultValue?: unknown | null | undefined;
    level?: upstream3.DiagnosticLevel | undefined;
}) => _TransformPropertyNative);
export declare const TransformProperty: typeof _TransformPropertyBinding & _FlaxInstanceType<TransformProperty> & _FlaxDartType<TransformProperty, readonly ["class", "flax.core/sdk_painting#type:TransformProperty", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/painting/matrix_utils.dart::TransformProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
export {};

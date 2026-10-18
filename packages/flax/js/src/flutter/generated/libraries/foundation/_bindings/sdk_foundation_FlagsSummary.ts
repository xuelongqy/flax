// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
const _flaxMemberParameters0 = [{"name":"delegate","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"parentConfiguration","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel","required":false,"positional":false},{"name":"parentConfiguration","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel","required":false,"positional":false},{"name":"parentConfiguration","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlagsSummary<T extends unknown | null = unknown | null> extends Omit<upstream0.DiagnosticsProperty<DartMap<string, T | null>>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<DartMap<string, T | null>>>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::FlagsSummary": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [DartMap<string, T | null>] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __FlagsSummary: unique symbol;
readonly [_flaxDartTypeValue]: FlagsSummary<T>;

}
defineObject("flax.core/sdk_foundation#type:FlagsSummary", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:FlagsSummary", "object", {"toJsonMap":_flaxMemberParameters0,"valueToString":_flaxMemberParameters1,"toDescription":_flaxMemberParameters1,"getProperties":_flaxMemberParameters2,"getChildren":_flaxMemberParameters2,"isFiltered":_flaxMemberParameters3,"toTimelineArguments":_flaxMemberParameters2,"toJsonMapIterative":_flaxMemberParameters0,"toStringDeep":_flaxMemberParameters4,"toString":_flaxMemberParameters5}, {}), []);
const _FlagsSummaryProxy = {type: "flax.core/sdk_foundation#type:FlagsSummary", parameters: [{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"ifEmpty","required":false,"positional":false},{"name":"showName","required":false,"positional":false},{"name":"showSeparator","required":false,"positional":false},{"name":"level","required":false,"positional":false}], constructors: {"":[{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"ifEmpty","required":false,"positional":false},{"name":"showName","required":false,"positional":false},{"name":"showSeparator","required":false,"positional":false},{"name":"level","required":false,"positional":false}]}, methods: {"toJsonMap":_flaxMemberParameters0,"valueToString":_flaxMemberParameters1,"toDescription":_flaxMemberParameters1,"getProperties":_flaxMemberParameters2,"getChildren":_flaxMemberParameters2,"isFiltered":_flaxMemberParameters3,"toTimelineArguments":_flaxMemberParameters2,"toJsonMapIterative":_flaxMemberParameters0,"toStringDeep":_flaxMemberParameters4,"toString":_flaxMemberParameters5}, getters: ["value","level","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","exception","defaultValue","isInteresting","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:value","get:level","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:exception","get:defaultValue","get:isInteresting","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface FlagsSummary<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: FlagsSummary<T>;

toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
valueToString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
getProperties(): DartList<upstream1.DiagnosticsNode>;
getChildren(): DartList<upstream1.DiagnosticsNode>;
isFiltered(minLevel: upstream2.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream2.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream2.DiagnosticLevel | undefined}): string;
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
export abstract class FlagsSummary<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlagsSummary<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlagsSummary<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:FlagsSummary", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {ifEmpty?: string | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}) { super(_FlagsSummaryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlagsSummary.prototype, _FlagsSummaryProxy);
export namespace FlagsSummary { export function implement<T extends unknown | null = unknown | null>(args: [name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {ifEmpty?: string | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}], implementation: {}): FlagsSummary<T> {
return constructProxy(_FlagsSummaryProxy, args, implementation) as FlagsSummary<T>; } }
_flaxBindInstanceType<FlagsSummary<unknown | null>, typeof FlagsSummary>(FlagsSummary, "flax.core/sdk_foundation#type:FlagsSummary", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]);
_flaxDefineDartTypes(FlagsSummary, "flax.core/sdk_foundation#type:FlagsSummary", {...{"category":"object","constructors":{}}, proxy: _FlagsSummaryProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::FlagsSummary" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {ifEmpty?: string | null | undefined;showName?: boolean | undefined;showSeparator?: boolean | undefined;level?: upstream2.DiagnosticLevel | undefined}) => FlagsSummary<_Selected0>) & {readonly prototype: FlagsSummary<_Selected0>;implement(args: readonly [string, DartMapInput<string, unknown | null, string, unknown | null>, options?: {ifEmpty?: string | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}], implementation: Partial<FlagsSummary<_Selected0>>): FlagsSummary<_Selected0>;} & _FlaxInstanceType<FlagsSummary<_Selected0>> & _FlaxDartType<FlagsSummary<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (name: string, value: DartMapInput<string, unknown | null, string, unknown | null>, options?: {ifEmpty?: string | null | undefined;showName?: boolean | undefined;showSeparator?: boolean | undefined;level?: upstream2.DiagnosticLevel | undefined}) => FlagsSummary<_Selected0>) & {readonly prototype: FlagsSummary<_Selected0>;implement(args: readonly [string, DartMapInput<string, unknown | null, string, unknown | null>, options?: {ifEmpty?: string | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}], implementation: Partial<FlagsSummary<_Selected0>>): FlagsSummary<_Selected0>;} & _FlaxInstanceType<FlagsSummary<_Selected0>> & _FlaxDartType<FlagsSummary<_Selected0>> : never : never; }

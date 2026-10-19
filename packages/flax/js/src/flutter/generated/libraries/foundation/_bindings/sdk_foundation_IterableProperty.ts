// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { _flaxMemberParameters35, _flaxMemberParameters33, _flaxMemberParameters1, _flaxMemberParameters34, _flaxMemberParameters37, _flaxMemberParameters36, _flaxMemberParameters65 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IterableProperty<T extends unknown | null = unknown | null> extends Omit<upstream0.DiagnosticsProperty<DartIterable<T>>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<DartIterable<T>>>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::IterableProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [DartIterable<T>] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __IterableProperty: unique symbol;
readonly [_flaxDartTypeValue]: IterableProperty<T>;

}
defineObject("flax.core/sdk_foundation#type:IterableProperty", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:IterableProperty", "object", {"toJsonMap":_flaxMemberParameters35,"valueToString":_flaxMemberParameters33,"toDescription":_flaxMemberParameters33,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters34,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters35,"toStringDeep":_flaxMemberParameters37,"toString":_flaxMemberParameters36}, {}), []);
const _IterablePropertyProxy = {type: "flax.core/sdk_foundation#type:IterableProperty", parameters: _flaxMemberParameters65, constructors: {"": _flaxMemberParameters65}, methods: {"toJsonMap":_flaxMemberParameters35,"valueToString":_flaxMemberParameters33,"toDescription":_flaxMemberParameters33,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters34,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters35,"toStringDeep":_flaxMemberParameters37,"toString":_flaxMemberParameters36}, getters: ["level","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:level","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:value","get:exception","get:defaultValue","get:isInteresting","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface IterableProperty<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: IterableProperty<T>;

toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
valueToString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
getProperties(): DartList<upstream1.DiagnosticsNode>;
getChildren(): DartList<upstream1.DiagnosticsNode>;
isFiltered(minLevel: upstream3.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream3.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream3.DiagnosticLevel | undefined}): string;
get level(): upstream3.DiagnosticLevel;
get expandableValue(): boolean;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get ifNull(): string | null;
get ifEmpty(): string | null;
get tooltip(): string | null;
get missingIfNull(): boolean;
get propertyType(): upstream4.Type;
get value(): DartIterable<T> | null;
get exception(): unknown | null;
get defaultValue(): unknown | null;
get isInteresting(): boolean;
get name(): string | null;
get showSeparator(): boolean;
get showName(): boolean;
get linePrefix(): string | null;
get emptyBodyDescription(): string | null;
get style(): upstream2.DiagnosticsTreeStyle | null;
get allowTruncate(): boolean;
get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export abstract class IterableProperty<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IterableProperty<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IterableProperty<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:IterableProperty", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}) { super(_IterablePropertyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(IterableProperty.prototype, _IterablePropertyProxy);
export namespace IterableProperty { export function implement<T extends unknown | null = unknown | null>(args: [name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}], implementation: {}): IterableProperty<T> {
return constructProxy(_IterablePropertyProxy, args, implementation) as IterableProperty<T>; } }
_flaxBindInstanceType<IterableProperty<unknown | null>, typeof IterableProperty>(IterableProperty, "flax.core/sdk_foundation#type:IterableProperty", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]);
_flaxDefineDartTypes(IterableProperty, "flax.core/sdk_foundation#type:IterableProperty", {...{"category":"object","constructors":{}}, proxy: _IterablePropertyProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::IterableProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined;ifNull?: string | null | undefined;ifEmpty?: string | null | undefined;style?: upstream2.DiagnosticsTreeStyle | undefined;showName?: boolean | undefined;showSeparator?: boolean | undefined;level?: upstream3.DiagnosticLevel | undefined}) => IterableProperty<_Selected0>) & {readonly prototype: IterableProperty<_Selected0>;implement(args: readonly [string, DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}], implementation: Partial<IterableProperty<_Selected0>>): IterableProperty<_Selected0>;} & _FlaxInstanceType<IterableProperty<_Selected0>> & _FlaxDartType<IterableProperty<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined;ifNull?: string | null | undefined;ifEmpty?: string | null | undefined;style?: upstream2.DiagnosticsTreeStyle | undefined;showName?: boolean | undefined;showSeparator?: boolean | undefined;level?: upstream3.DiagnosticLevel | undefined}) => IterableProperty<_Selected0>) & {readonly prototype: IterableProperty<_Selected0>;implement(args: readonly [string, DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}], implementation: Partial<IterableProperty<_Selected0>>): IterableProperty<_Selected0>;} & _FlaxInstanceType<IterableProperty<_Selected0>> & _FlaxDartType<IterableProperty<_Selected0>> : never : never; }

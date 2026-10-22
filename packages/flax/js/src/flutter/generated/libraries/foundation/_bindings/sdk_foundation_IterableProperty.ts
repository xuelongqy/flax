// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
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
import { _flaxMemberParameters37, _flaxMemberParameters35, _flaxMemberParameters1, _flaxMemberParameters36, _flaxMemberParameters39, _flaxMemberParameters38, _flaxMemberParameters78 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IterableProperty<T extends unknown | null = unknown | null> extends Omit<upstream0.DiagnosticsProperty<DartIterable<T>>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<DartIterable<T>>>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::IterableProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [DartIterable<T>] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __IterableProperty: unique symbol;
readonly [_flaxDartTypeValue]: IterableProperty<T>;

readonly expandableValue: boolean;
readonly allowWrap: boolean;
readonly allowNameWrap: boolean;
readonly ifNull: string | null;
readonly ifEmpty: string | null;
readonly tooltip: string | null;
readonly missingIfNull: boolean;
readonly propertyType: upstream4.Type;
readonly value: DartIterable<T> | null;
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
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
valueToString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
getProperties(): DartList<upstream1.DiagnosticsNode>;
getChildren(): DartList<upstream1.DiagnosticsNode>;
isFiltered(minLevel: upstream3.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {minLevel?: upstream3.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
}
defineObject("flax.core/sdk_foundation#type:IterableProperty", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:IterableProperty", "object", {"toJsonMap":_flaxMemberParameters37,"valueToString":_flaxMemberParameters35,"toDescription":_flaxMemberParameters35,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters36,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters37,"toStringDeep":_flaxMemberParameters39,"toString":_flaxMemberParameters38}, {}), []);
export function _IterablePropertyFactory<T extends unknown | null = unknown | null>(name: string, value: DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | null, options?: { defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined }): IterableProperty<T>;
export function _IterablePropertyFactory(name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: { defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined }): IterableProperty<unknown | null>;
export function _IterablePropertyFactory(name: unknown, value: unknown, options: Record<string, unknown> = {}): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:IterableProperty", "", [{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"defaultValue"},{"name":"ifNull"},{"name":"ifEmpty"},{"name":"style"},{"name":"showName"},{"name":"showSeparator"},{"name":"level"}], [name, value], options) as IterableProperty<unknown | null>;
}
const _IterablePropertyProxy = {type: "flax.core/sdk_foundation#type:IterableProperty", parameters: _flaxMemberParameters78, constructors: {"": _flaxMemberParameters78}, methods: {"toJsonMap":_flaxMemberParameters37,"valueToString":_flaxMemberParameters35,"toDescription":_flaxMemberParameters35,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters36,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters37,"toStringDeep":_flaxMemberParameters39,"toString":_flaxMemberParameters38}, getters: ["level","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:level","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:value","get:exception","get:defaultValue","get:isInteresting","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface _IterablePropertyNative<T extends unknown | null = unknown | null> extends IterableProperty<T> {
readonly [_flaxDartTypeValue]: _IterablePropertyNative<T>;

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
export abstract class _IterablePropertyNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IterableProperty<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IterableProperty<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:IterableProperty", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}) { super(_IterablePropertyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_IterablePropertyNative.prototype, _IterablePropertyProxy);
export namespace _IterablePropertyFactory { export function implement<T extends unknown | null = unknown | null>(args: [name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}], implementation: {}): IterableProperty<T> {
return constructProxy(_IterablePropertyProxy, args, implementation) as IterableProperty<T>; } }
const _IterablePropertyBinding = _flaxProxyFactory(_IterablePropertyFactory, _IterablePropertyNative) as unknown as typeof _IterablePropertyFactory & (new<T extends unknown | null = unknown | null>(name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}) => _IterablePropertyNative<T>);
export const IterableProperty: typeof _IterablePropertyBinding & _FlaxInstanceType<IterableProperty<unknown | null>> & _FlaxDartType<IterableProperty<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:IterableProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<IterableProperty<unknown | null>, typeof _IterablePropertyBinding>(_IterablePropertyBinding, "flax.core/sdk_foundation#type:IterableProperty", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]) as typeof _IterablePropertyBinding & _FlaxInstanceType<IterableProperty<unknown | null>> & _FlaxDartType<IterableProperty<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:IterableProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(IterableProperty, "flax.core/sdk_foundation#type:IterableProperty", {...{"category":"object","constructors":{"":[{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"defaultValue","required":false,"positional":false},{"name":"ifNull","required":false,"positional":false},{"name":"ifEmpty","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"showName","required":false,"positional":false},{"name":"showSeparator","required":false,"positional":false},{"name":"level","required":false,"positional":false}]}}, proxy: _IterablePropertyProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::IterableProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined;ifNull?: string | null | undefined;ifEmpty?: string | null | undefined;style?: upstream2.DiagnosticsTreeStyle | undefined;showName?: boolean | undefined;showSeparator?: boolean | undefined;level?: upstream3.DiagnosticLevel | undefined}) => _IterablePropertyNative<_Selected0>) & {(name: string, value: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | null, options?: {defaultValue?: unknown | null | undefined;ifNull?: string | null | undefined;ifEmpty?: string | null | undefined;style?: upstream2.DiagnosticsTreeStyle | undefined;showName?: boolean | undefined;showSeparator?: boolean | undefined;level?: upstream3.DiagnosticLevel | undefined}): _IterablePropertyNative<_Selected0>;readonly prototype: _IterablePropertyNative<_Selected0>;implement(args: readonly [string, DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}], implementation: Partial<_IterablePropertyNative<_Selected0>>): _IterablePropertyNative<_Selected0>;} & _FlaxInstanceType<_IterablePropertyNative<_Selected0>> & _FlaxDartType<_IterablePropertyNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string, value: DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined;ifNull?: string | null | undefined;ifEmpty?: string | null | undefined;style?: upstream2.DiagnosticsTreeStyle | undefined;showName?: boolean | undefined;showSeparator?: boolean | undefined;level?: upstream3.DiagnosticLevel | undefined}) => _IterablePropertyNative<_Selected0>) & {(name: string, value: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | null, options?: {defaultValue?: unknown | null | undefined;ifNull?: string | null | undefined;ifEmpty?: string | null | undefined;style?: upstream2.DiagnosticsTreeStyle | undefined;showName?: boolean | undefined;showSeparator?: boolean | undefined;level?: upstream3.DiagnosticLevel | undefined}): _IterablePropertyNative<_Selected0>;readonly prototype: _IterablePropertyNative<_Selected0>;implement(args: readonly [string, DartIterableInput<unknown | null, unknown | null> | null, options?: {defaultValue?: unknown | null | undefined; ifNull?: string | null | undefined; ifEmpty?: string | null | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; level?: upstream3.DiagnosticLevel | undefined}], implementation: Partial<_IterablePropertyNative<_Selected0>>): _IterablePropertyNative<_Selected0>;} & _FlaxInstanceType<_IterablePropertyNative<_Selected0>> & _FlaxDartType<_IterablePropertyNative<_Selected0>> : never : never; }

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { _flaxMemberParameters37, _flaxMemberParameters35, _flaxMemberParameters1, _flaxMemberParameters36, _flaxMemberParameters39, _flaxMemberParameters38, _flaxMemberParameters84, _flaxMemberParameters85 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObjectFlagProperty<T extends unknown | null = unknown | null> extends Omit<upstream0.DiagnosticsProperty<T>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<T>>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::ObjectFlagProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __ObjectFlagProperty: unique symbol;
readonly [_flaxDartTypeValue]: ObjectFlagProperty<T>;

readonly expandableValue: boolean;
readonly allowWrap: boolean;
readonly allowNameWrap: boolean;
readonly ifNull: string | null;
readonly ifEmpty: string | null;
readonly tooltip: string | null;
readonly missingIfNull: boolean;
readonly propertyType: upstream3.Type;
readonly value: T | null;
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
readonly ifPresent: string | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
valueToString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
getProperties(): DartList<upstream1.DiagnosticsNode>;
getChildren(): DartList<upstream1.DiagnosticsNode>;
isFiltered(minLevel: upstream2.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {minLevel?: upstream2.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
}
defineObject("flax.core/sdk_foundation#type:ObjectFlagProperty", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration","ifPresent"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ObjectFlagProperty", "object", {"toJsonMap":_flaxMemberParameters37,"valueToString":_flaxMemberParameters35,"toDescription":_flaxMemberParameters35,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters36,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters37,"toStringDeep":_flaxMemberParameters39,"toString":_flaxMemberParameters38}, {}), []);
export function _ObjectFlagPropertyFactory<T extends unknown | null = unknown | null>(name: string, value: (T | _FlaxDartOutput<T>) | null, options?: { ifPresent?: string | null | undefined; ifNull?: string | null | undefined; showName?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined }): ObjectFlagProperty<T>;
export function _ObjectFlagPropertyFactory(name: string, value: unknown | null, options?: { ifPresent?: string | null | undefined; ifNull?: string | null | undefined; showName?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined }): ObjectFlagProperty<unknown | null>;
export function _ObjectFlagPropertyFactory(name: unknown, value: unknown, options: Record<string, unknown> = {}): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:ObjectFlagProperty", "", [{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"ifPresent"},{"name":"ifNull"},{"name":"showName"},{"name":"level"}], [name, value], options) as ObjectFlagProperty<unknown | null>;
}
export namespace _ObjectFlagPropertyFactory {
export function has<T extends unknown | null = unknown | null>(name: string, value: (T | _FlaxDartOutput<T>) | null, options?: { level?: upstream2.DiagnosticLevel | undefined }): ObjectFlagProperty<T>;
export function has(name: string, value: unknown | null, options?: { level?: upstream2.DiagnosticLevel | undefined }): ObjectFlagProperty<unknown | null>;
export function has(name: unknown, value: unknown, options: Record<string, unknown> = {}): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:ObjectFlagProperty", "has", [{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"level"}], [name, value], options) as ObjectFlagProperty<unknown | null>;
}
}
const _ObjectFlagPropertyProxy = {type: "flax.core/sdk_foundation#type:ObjectFlagProperty", parameters: _flaxMemberParameters84, constructors: {"": _flaxMemberParameters84,"has": _flaxMemberParameters85}, methods: {"toJsonMap":_flaxMemberParameters37,"valueToString":_flaxMemberParameters35,"toDescription":_flaxMemberParameters35,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters36,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters37,"toStringDeep":_flaxMemberParameters39,"toString":_flaxMemberParameters38}, getters: ["ifPresent","showName","level","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","name","showSeparator","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:ifPresent","get:showName","get:level","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:value","get:exception","get:defaultValue","get:isInteresting","get:name","get:showSeparator","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface _ObjectFlagPropertyNative<T extends unknown | null = unknown | null> extends ObjectFlagProperty<T> {
readonly [_flaxDartTypeValue]: _ObjectFlagPropertyNative<T>;
readonly [_flaxDartConstructors]?: {"": (name: string, value: unknown | null, options?: {ifPresent?: string | null | undefined; ifNull?: string | null | undefined; showName?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}) => void;"has": (name: string, value: unknown | null, options?: {level?: upstream2.DiagnosticLevel | undefined}) => void;};

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
get ifPresent(): string | null;
get showName(): boolean;
get level(): upstream2.DiagnosticLevel;
get expandableValue(): boolean;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get ifNull(): string | null;
get ifEmpty(): string | null;
get tooltip(): string | null;
get missingIfNull(): boolean;
get propertyType(): upstream3.Type;
get value(): T | null;
get exception(): unknown | null;
get defaultValue(): unknown | null;
get isInteresting(): boolean;
get name(): string | null;
get showSeparator(): boolean;
get linePrefix(): string | null;
get emptyBodyDescription(): string | null;
get style(): upstream4.DiagnosticsTreeStyle | null;
get allowTruncate(): boolean;
get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export abstract class _ObjectFlagPropertyNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectFlagProperty<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObjectFlagProperty<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObjectFlagProperty", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(name: string, value: unknown | null, options?: {ifPresent?: string | null | undefined; ifNull?: string | null | undefined; showName?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}); constructor(call: _FlaxProxySuper<_ObjectFlagPropertyNative<T>>); constructor(...args: unknown[]) { super(_ObjectFlagPropertyProxy, args); }
}
_flaxDefineProxyBase(_ObjectFlagPropertyNative.prototype, _ObjectFlagPropertyProxy);
export namespace _ObjectFlagPropertyFactory { export function implement<T extends unknown | null = unknown | null>(args: [name: string, value: unknown | null, options?: {ifPresent?: string | null | undefined; ifNull?: string | null | undefined; showName?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}], implementation: {}): ObjectFlagProperty<T> {
return constructProxy(_ObjectFlagPropertyProxy, args, implementation) as ObjectFlagProperty<T>; } }
const _ObjectFlagPropertyBinding = _flaxProxyFactory(_ObjectFlagPropertyFactory, _ObjectFlagPropertyNative) as unknown as typeof _ObjectFlagPropertyFactory & (new<T extends unknown | null = unknown | null>(name: string, value: unknown | null, options?: {ifPresent?: string | null | undefined; ifNull?: string | null | undefined; showName?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}) => _ObjectFlagPropertyNative<T>) & (new<T extends unknown | null = unknown | null>(call: _FlaxProxySuper<_ObjectFlagPropertyNative<T>>) => _ObjectFlagPropertyNative<T>);
export const ObjectFlagProperty: typeof _ObjectFlagPropertyBinding & _FlaxInstanceType<ObjectFlagProperty<unknown | null>> & _FlaxDartType<ObjectFlagProperty<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:ObjectFlagProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ObjectFlagProperty<unknown | null>, typeof _ObjectFlagPropertyBinding>(_ObjectFlagPropertyBinding, "flax.core/sdk_foundation#type:ObjectFlagProperty", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]) as typeof _ObjectFlagPropertyBinding & _FlaxInstanceType<ObjectFlagProperty<unknown | null>> & _FlaxDartType<ObjectFlagProperty<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:ObjectFlagProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ObjectFlagProperty, "flax.core/sdk_foundation#type:ObjectFlagProperty", {...{"category":"object","constructors":{"":[{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"ifPresent","required":false,"positional":false},{"name":"ifNull","required":false,"positional":false},{"name":"showName","required":false,"positional":false},{"name":"level","required":false,"positional":false}],"has":[{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"level","required":false,"positional":false}]}}, proxy: _ObjectFlagPropertyProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "ifPresent" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::ObjectFlagProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string, value: unknown | null, options?: {ifPresent?: string | null | undefined;ifNull?: string | null | undefined;showName?: boolean | undefined;level?: upstream2.DiagnosticLevel | undefined}) => _ObjectFlagPropertyNative<_Selected0>) & (new (call: _FlaxProxySuper<_ObjectFlagPropertyNative<_Selected0>>) => _ObjectFlagPropertyNative<_Selected0>) & {(name: string, value: (_Selected0 | DartInput<_Selected0>) | null, options?: {ifPresent?: string | null | undefined;ifNull?: string | null | undefined;showName?: boolean | undefined;level?: upstream2.DiagnosticLevel | undefined}): _ObjectFlagPropertyNative<_Selected0>;has: (name: string, value: (_Selected0 | DartInput<_Selected0>) | null, options?: {level?: upstream2.DiagnosticLevel | undefined})=> _ObjectFlagPropertyNative<_Selected0>;readonly prototype: _ObjectFlagPropertyNative<_Selected0>;implement(args: readonly [string, unknown | null, options?: {ifPresent?: string | null | undefined; ifNull?: string | null | undefined; showName?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}], implementation: Partial<_ObjectFlagPropertyNative<_Selected0>>): _ObjectFlagPropertyNative<_Selected0>;} & _FlaxInstanceType<_ObjectFlagPropertyNative<_Selected0>> & _FlaxDartType<_ObjectFlagPropertyNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (name: string, value: unknown | null, options?: {ifPresent?: string | null | undefined;ifNull?: string | null | undefined;showName?: boolean | undefined;level?: upstream2.DiagnosticLevel | undefined}) => _ObjectFlagPropertyNative<_Selected0>) & (new (call: _FlaxProxySuper<_ObjectFlagPropertyNative<_Selected0>>) => _ObjectFlagPropertyNative<_Selected0>) & {(name: string, value: (_Selected0 | DartInput<_Selected0>) | null, options?: {ifPresent?: string | null | undefined;ifNull?: string | null | undefined;showName?: boolean | undefined;level?: upstream2.DiagnosticLevel | undefined}): _ObjectFlagPropertyNative<_Selected0>;has: (name: string, value: (_Selected0 | DartInput<_Selected0>) | null, options?: {level?: upstream2.DiagnosticLevel | undefined})=> _ObjectFlagPropertyNative<_Selected0>;readonly prototype: _ObjectFlagPropertyNative<_Selected0>;implement(args: readonly [string, unknown | null, options?: {ifPresent?: string | null | undefined; ifNull?: string | null | undefined; showName?: boolean | undefined; level?: upstream2.DiagnosticLevel | undefined}], implementation: Partial<_ObjectFlagPropertyNative<_Selected0>>): _ObjectFlagPropertyNative<_Selected0>;} & _FlaxInstanceType<_ObjectFlagPropertyNative<_Selected0>> & _FlaxDartType<_ObjectFlagPropertyNative<_Selected0>> : never : never; }

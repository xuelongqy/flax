// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters1, _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters39, _flaxMemberParameters40 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticableNode<T extends upstream0.Diagnosticable = upstream0.Diagnosticable> extends Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableNode": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DiagnosticableNode: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticableNode<T>;

readonly name: string | null;
readonly showSeparator: boolean;
readonly level: upstream4.DiagnosticLevel;
readonly showName: boolean;
readonly linePrefix: string | null;
readonly emptyBodyDescription: string | null;
readonly value: T;
readonly style: upstream2.DiagnosticsTreeStyle;
readonly allowWrap: boolean;
readonly allowNameWrap: boolean;
readonly allowTruncate: boolean;
readonly textTreeConfiguration: upstream5.TextTreeConfiguration | null;
readonly builder: upstream6.DiagnosticPropertiesBuilder | null;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
getProperties(): DartList<upstream1.DiagnosticsNode>;
getChildren(): DartList<upstream1.DiagnosticsNode>;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toStringDeep(options?: {minLevel?: upstream4.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
}
defineObject("flax.core/sdk_foundation#type:DiagnosticableNode", ["name","showSeparator","level","showName","linePrefix","emptyBodyDescription","value","style","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration","builder"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticableNode", "object", {"toDescription":_flaxMemberParameters35,"isFiltered":_flaxMemberParameters36,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"toTimelineArguments":_flaxMemberParameters1,"toJsonMap":_flaxMemberParameters37,"toJsonMapIterative":_flaxMemberParameters37,"toString":_flaxMemberParameters38,"toStringDeep":_flaxMemberParameters39}, {}), []);
export function _DiagnosticableNodeFactory<T extends upstream0.Diagnosticable = upstream0.Diagnosticable>(options: { name?: string | null | undefined; value: (T | DartInput<T>); style: upstream2.DiagnosticsTreeStyle | null }): DiagnosticableNode<T>;
export function _DiagnosticableNodeFactory(options: { name?: string | null | undefined; value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; style: upstream2.DiagnosticsTreeStyle | null }): DiagnosticableNode<upstream0.Diagnosticable>;
export function _DiagnosticableNodeFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:DiagnosticableNode", "", [{"name":"name"},{"name":"value","required":true},{"name":"style","required":true}], [], options) as DiagnosticableNode<upstream0.Diagnosticable>;
}
const _DiagnosticableNodeProxy = {type: "flax.core/sdk_foundation#type:DiagnosticableNode", parameters: _flaxMemberParameters40, constructors: {"": _flaxMemberParameters40}, methods: {"toDescription":_flaxMemberParameters35,"isFiltered":_flaxMemberParameters36,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"toTimelineArguments":_flaxMemberParameters1,"toJsonMap":_flaxMemberParameters37,"toJsonMapIterative":_flaxMemberParameters37,"toString":_flaxMemberParameters38,"toStringDeep":_flaxMemberParameters39}, getters: ["value","builder","style","emptyBodyDescription","name","showSeparator","level","showName","linePrefix","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:value","get:builder","get:style","get:emptyBodyDescription","get:name","get:showSeparator","get:level","get:showName","get:linePrefix","get:allowWrap","get:allowNameWrap","get:allowTruncate","get:textTreeConfiguration","toDescription","isFiltered","getProperties","getChildren","toTimelineArguments","toJsonMap","toJsonMapIterative","toString","toStringDeep"]} as const;
export interface _DiagnosticableNodeNative<T extends upstream0.Diagnosticable = upstream0.Diagnosticable> extends DiagnosticableNode<T> {
readonly [_flaxDartTypeValue]: _DiagnosticableNodeNative<T>;

toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
getProperties(): DartList<upstream1.DiagnosticsNode>;
getChildren(): DartList<upstream1.DiagnosticsNode>;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream4.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
get value(): T;
get builder(): upstream6.DiagnosticPropertiesBuilder | null;
get style(): upstream2.DiagnosticsTreeStyle;
get emptyBodyDescription(): string | null;
get name(): string | null;
get showSeparator(): boolean;
get level(): upstream4.DiagnosticLevel;
get showName(): boolean;
get linePrefix(): string | null;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get allowTruncate(): boolean;
get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export abstract class _DiagnosticableNodeNative<T extends upstream0.Diagnosticable = upstream0.Diagnosticable> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticableNode<upstream0.Diagnosticable>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticableNode<upstream0.Diagnosticable>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableNode", readonly [readonly ["class", "flax.core/sdk_foundation#type:Diagnosticable", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {name?: string | null | undefined; value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; style: upstream2.DiagnosticsTreeStyle | null}) { super(_DiagnosticableNodeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DiagnosticableNodeNative.prototype, _DiagnosticableNodeProxy);
export namespace _DiagnosticableNodeFactory { export function implement<T extends upstream0.Diagnosticable = upstream0.Diagnosticable>(args: [options: {name?: string | null | undefined; value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; style: upstream2.DiagnosticsTreeStyle | null}], implementation: {}): DiagnosticableNode<T> {
return constructProxy(_DiagnosticableNodeProxy, args, implementation) as DiagnosticableNode<T>; } }
const _DiagnosticableNodeBinding = _flaxProxyFactory(_DiagnosticableNodeFactory, _DiagnosticableNodeNative) as unknown as typeof _DiagnosticableNodeFactory & (new<T extends upstream0.Diagnosticable = upstream0.Diagnosticable>(options: {name?: string | null | undefined; value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; style: upstream2.DiagnosticsTreeStyle | null}) => _DiagnosticableNodeNative<T>);
export const DiagnosticableNode: typeof _DiagnosticableNodeBinding & _FlaxInstanceType<DiagnosticableNode<upstream0.Diagnosticable>> & _FlaxDartType<DiagnosticableNode<upstream0.Diagnosticable>, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableNode", readonly [readonly ["class", "flax.core/sdk_foundation#type:Diagnosticable", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<DiagnosticableNode<upstream0.Diagnosticable>, typeof _DiagnosticableNodeBinding>(_DiagnosticableNodeBinding, "flax.core/sdk_foundation#type:DiagnosticableNode", ["flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]) as typeof _DiagnosticableNodeBinding & _FlaxInstanceType<DiagnosticableNode<upstream0.Diagnosticable>> & _FlaxDartType<DiagnosticableNode<upstream0.Diagnosticable>, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableNode", readonly [readonly ["class", "flax.core/sdk_foundation#type:Diagnosticable", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(DiagnosticableNode, "flax.core/sdk_foundation#type:DiagnosticableNode", {...{"category":"object","constructors":{"":[{"name":"name","required":false,"positional":false},{"name":"value","required":true,"positional":false},{"name":"style","required":true,"positional":false}]}}, proxy: _DiagnosticableNodeProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "emptyBodyDescription" | "value" | "style" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "builder" | "toDescription" | "isFiltered" | "getProperties" | "getChildren" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toString" | "toStringDeep" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableNode" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Diagnosticable] ? (new (options: {name?: string | null | undefined;value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>;style: upstream2.DiagnosticsTreeStyle | null}) => _DiagnosticableNodeNative<_Selected0>) & {(options: {name?: string | null | undefined;value: (_Selected0 | DartInput<_Selected0>);style: upstream2.DiagnosticsTreeStyle | null}): _DiagnosticableNodeNative<_Selected0>;readonly prototype: _DiagnosticableNodeNative<_Selected0>;implement(args: readonly [options: {name?: string | null | undefined; value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; style: upstream2.DiagnosticsTreeStyle | null}], implementation: Partial<_DiagnosticableNodeNative<_Selected0>>): _DiagnosticableNodeNative<_Selected0>;} & _FlaxInstanceType<_DiagnosticableNodeNative<_Selected0>> & _FlaxDartType<_DiagnosticableNodeNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Diagnosticable] ? (new (options: {name?: string | null | undefined;value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>;style: upstream2.DiagnosticsTreeStyle | null}) => _DiagnosticableNodeNative<_Selected0>) & {(options: {name?: string | null | undefined;value: (_Selected0 | DartInput<_Selected0>);style: upstream2.DiagnosticsTreeStyle | null}): _DiagnosticableNodeNative<_Selected0>;readonly prototype: _DiagnosticableNodeNative<_Selected0>;implement(args: readonly [options: {name?: string | null | undefined; value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; style: upstream2.DiagnosticsTreeStyle | null}], implementation: Partial<_DiagnosticableNodeNative<_Selected0>>): _DiagnosticableNodeNative<_Selected0>;} & _FlaxInstanceType<_DiagnosticableNodeNative<_Selected0>> & _FlaxDartType<_DiagnosticableNodeNative<_Selected0>> : never : never; }

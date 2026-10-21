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
import { _flaxMemberParameters35, _flaxMemberParameters1, _flaxMemberParameters56, _flaxMemberParameters57, _flaxMemberParameters37, _flaxMemberParameters36, _flaxMemberParameters39, _flaxMemberParameters38 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DoubleProperty extends Omit<upstream0.DiagnosticsProperty<number>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<number>>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DoubleProperty": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::_NumProperty": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DoubleProperty: unique symbol;
readonly [_flaxDartTypeValue]: DoubleProperty;

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
numberToString(): string;
}
defineObject("flax.core/sdk_foundation#type:DoubleProperty", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration","unit"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DoubleProperty", "object", {"valueToString":_flaxMemberParameters35,"numberToString":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
export function _DoublePropertyFactory(name: string, value: number | null, options: { ifNull?: string | null | undefined; unit?: string | null | undefined; tooltip?: string | null | undefined; defaultValue?: unknown | null | undefined; showName?: boolean | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; level?: upstream3.DiagnosticLevel | undefined } = {}): DoubleProperty {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:DoubleProperty", "", [{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"ifNull"},{"name":"unit"},{"name":"tooltip"},{"name":"defaultValue"},{"name":"showName"},{"name":"style"},{"name":"level"}], [name, value], options) as DoubleProperty;
}
export namespace _DoublePropertyFactory {
export function lazy(name: string, computeValue: (() => number | null), options: { ifNull?: string | null | undefined; showName?: boolean | undefined; unit?: string | null | undefined; tooltip?: string | null | undefined; defaultValue?: unknown | null | undefined; level?: upstream3.DiagnosticLevel | undefined } = {}): DoubleProperty {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:DoubleProperty", "lazy", [{"name":"name","required":true,"positional":true},{"name":"computeValue","required":true,"positional":true},{"name":"ifNull"},{"name":"showName"},{"name":"unit"},{"name":"tooltip"},{"name":"defaultValue"},{"name":"level"}], [name, computeValue], options) as DoubleProperty;
}
}
const _DoublePropertyProxy = {type: "flax.core/sdk_foundation#type:DoubleProperty", parameters: _flaxMemberParameters56, constructors: {"": _flaxMemberParameters56,"lazy": _flaxMemberParameters57}, methods: {"toJsonMap":_flaxMemberParameters37,"valueToString":_flaxMemberParameters35,"toDescription":_flaxMemberParameters35,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters36,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters37,"toStringDeep":_flaxMemberParameters39,"toString":_flaxMemberParameters38,"numberToString":_flaxMemberParameters1}, getters: ["unit","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:unit","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:value","get:exception","get:defaultValue","get:isInteresting","get:level","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString","numberToString"]} as const;
export interface _DoublePropertyNative extends DoubleProperty {
readonly [_flaxDartTypeValue]: _DoublePropertyNative;
readonly [_flaxDartConstructors]?: {"": (name: string, value: number | null, options?: {ifNull?: string | null | undefined; unit?: string | null | undefined; tooltip?: string | null | undefined; defaultValue?: unknown | null | undefined; showName?: boolean | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; level?: upstream3.DiagnosticLevel | undefined}) => void;"lazy": (name: string, computeValue: (() => number | null), options?: {ifNull?: string | null | undefined; showName?: boolean | undefined; unit?: string | null | undefined; tooltip?: string | null | undefined; defaultValue?: unknown | null | undefined; level?: upstream3.DiagnosticLevel | undefined}) => void;};

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
export abstract class _DoublePropertyNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DoubleProperty>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DoubleProperty;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DoubleProperty", readonly [], false];
constructor(name: string, value: number | null, options?: {ifNull?: string | null | undefined; unit?: string | null | undefined; tooltip?: string | null | undefined; defaultValue?: unknown | null | undefined; showName?: boolean | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; level?: upstream3.DiagnosticLevel | undefined}); constructor(call: _FlaxProxySuper<_DoublePropertyNative>); constructor(...args: unknown[]) { super(_DoublePropertyProxy, args); }
}
_flaxDefineProxyBase(_DoublePropertyNative.prototype, _DoublePropertyProxy);
export namespace _DoublePropertyFactory { export function implement(args: [name: string, value: number | null, options?: {ifNull?: string | null | undefined; unit?: string | null | undefined; tooltip?: string | null | undefined; defaultValue?: unknown | null | undefined; showName?: boolean | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; level?: upstream3.DiagnosticLevel | undefined}], implementation: {}): DoubleProperty {
return constructProxy(_DoublePropertyProxy, args, implementation) as DoubleProperty; } }
const _DoublePropertyBinding = _flaxProxyFactory(_DoublePropertyFactory, _DoublePropertyNative) as unknown as typeof _DoublePropertyFactory & (new(name: string, value: number | null, options?: {ifNull?: string | null | undefined; unit?: string | null | undefined; tooltip?: string | null | undefined; defaultValue?: unknown | null | undefined; showName?: boolean | undefined; style?: upstream2.DiagnosticsTreeStyle | undefined; level?: upstream3.DiagnosticLevel | undefined}) => _DoublePropertyNative) & (new(call: _FlaxProxySuper<_DoublePropertyNative>) => _DoublePropertyNative);
export const DoubleProperty: typeof _DoublePropertyBinding & _FlaxInstanceType<DoubleProperty> & _FlaxDartType<DoubleProperty, readonly ["class", "flax.core/sdk_foundation#type:DoubleProperty", readonly [], false]> = _flaxBindInstanceType<DoubleProperty, typeof _DoublePropertyBinding>(_DoublePropertyBinding, "flax.core/sdk_foundation#type:DoubleProperty", ["package:flutter/src/foundation/diagnostics.dart::_NumProperty","flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]) as typeof _DoublePropertyBinding & _FlaxInstanceType<DoubleProperty> & _FlaxDartType<DoubleProperty, readonly ["class", "flax.core/sdk_foundation#type:DoubleProperty", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "unit" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "numberToString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DoubleProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::_NumProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

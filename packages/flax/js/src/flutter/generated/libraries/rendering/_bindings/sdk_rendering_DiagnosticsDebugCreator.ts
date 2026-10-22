// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { _flaxMemberParameters64, _flaxMemberParameters65, _flaxMemberParameters66, _flaxMemberParameters1, _flaxMemberParameters67, _flaxMemberParameters68, _flaxMemberParameters69 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsDebugCreator extends Omit<upstream0.DiagnosticsProperty<{}>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<{}>>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::DiagnosticsDebugCreator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [{}] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DiagnosticsDebugCreator: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticsDebugCreator;

readonly expandableValue: boolean;
readonly allowWrap: boolean;
readonly allowNameWrap: boolean;
readonly ifNull: string | null;
readonly ifEmpty: string | null;
readonly tooltip: string | null;
readonly missingIfNull: boolean;
readonly propertyType: upstream2.Type;
readonly value: unknown | null;
readonly exception: unknown | null;
readonly defaultValue: unknown | null;
readonly isInteresting: boolean;
readonly level: upstream3.DiagnosticLevel;
readonly name: string | null;
readonly showSeparator: boolean;
readonly showName: boolean;
readonly linePrefix: string | null;
readonly emptyBodyDescription: string | null;
readonly style: upstream4.DiagnosticsTreeStyle | null;
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
defineObject("flax.core/sdk_rendering#type:DiagnosticsDebugCreator", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:DiagnosticsDebugCreator", "object", {"valueToString":_flaxMemberParameters64}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
export function _DiagnosticsDebugCreatorFactory(value: {}): DiagnosticsDebugCreator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:DiagnosticsDebugCreator", "", [{"name":"value","required":true,"positional":true}], [value], {}) as DiagnosticsDebugCreator;
}
const _DiagnosticsDebugCreatorProxy = {type: "flax.core/sdk_rendering#type:DiagnosticsDebugCreator", parameters: _flaxMemberParameters65, constructors: {"": _flaxMemberParameters65}, methods: {"toJsonMap":_flaxMemberParameters66,"valueToString":_flaxMemberParameters64,"toDescription":_flaxMemberParameters64,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters67,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters66,"toStringDeep":_flaxMemberParameters68,"toString":_flaxMemberParameters69}, getters: ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:value","get:exception","get:defaultValue","get:isInteresting","get:level","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface _DiagnosticsDebugCreatorNative extends DiagnosticsDebugCreator {
readonly [_flaxDartTypeValue]: _DiagnosticsDebugCreatorNative;

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
get expandableValue(): boolean;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get ifNull(): string | null;
get ifEmpty(): string | null;
get tooltip(): string | null;
get missingIfNull(): boolean;
get propertyType(): upstream2.Type;
get value(): unknown | null;
get exception(): unknown | null;
get defaultValue(): unknown | null;
get isInteresting(): boolean;
get level(): upstream3.DiagnosticLevel;
get name(): string | null;
get showSeparator(): boolean;
get showName(): boolean;
get linePrefix(): string | null;
get emptyBodyDescription(): string | null;
get style(): upstream4.DiagnosticsTreeStyle | null;
get allowTruncate(): boolean;
get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export abstract class _DiagnosticsDebugCreatorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsDebugCreator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticsDebugCreator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:DiagnosticsDebugCreator", readonly [], false];
constructor(value: {}) { super(_DiagnosticsDebugCreatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DiagnosticsDebugCreatorNative.prototype, _DiagnosticsDebugCreatorProxy);
export namespace _DiagnosticsDebugCreatorFactory { export function implement(args: [value: {}], implementation: {}): DiagnosticsDebugCreator {
return constructProxy(_DiagnosticsDebugCreatorProxy, args, implementation) as DiagnosticsDebugCreator; } }
const _DiagnosticsDebugCreatorBinding = _flaxProxyFactory(_DiagnosticsDebugCreatorFactory, _DiagnosticsDebugCreatorNative) as unknown as typeof _DiagnosticsDebugCreatorFactory & (new(value: {}) => _DiagnosticsDebugCreatorNative);
export const DiagnosticsDebugCreator: typeof _DiagnosticsDebugCreatorBinding & _FlaxInstanceType<DiagnosticsDebugCreator> & _FlaxDartType<DiagnosticsDebugCreator, readonly ["class", "flax.core/sdk_rendering#type:DiagnosticsDebugCreator", readonly [], false]> = _flaxBindInstanceType<DiagnosticsDebugCreator, typeof _DiagnosticsDebugCreatorBinding>(_DiagnosticsDebugCreatorBinding, "flax.core/sdk_rendering#type:DiagnosticsDebugCreator", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]) as typeof _DiagnosticsDebugCreatorBinding & _FlaxInstanceType<DiagnosticsDebugCreator> & _FlaxDartType<DiagnosticsDebugCreator, readonly ["class", "flax.core/sdk_rendering#type:DiagnosticsDebugCreator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/rendering/object.dart::DiagnosticsDebugCreator" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

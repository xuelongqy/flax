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
import { _flaxMemberParameters35, _flaxMemberParameters59, _flaxMemberParameters37, _flaxMemberParameters1, _flaxMemberParameters36, _flaxMemberParameters39, _flaxMemberParameters38 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ErrorDescription extends Omit<upstream0.DiagnosticsProperty<DartList<{}>>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<DartList<{}>>>, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::ErrorDescription": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::_ErrorDiagnostic": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [DartList<{}>] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __ErrorDescription: unique symbol;
readonly [_flaxDartTypeValue]: ErrorDescription;

readonly expandableValue: boolean;
readonly allowWrap: boolean;
readonly allowNameWrap: boolean;
readonly ifNull: string | null;
readonly ifEmpty: string | null;
readonly tooltip: string | null;
readonly missingIfNull: boolean;
readonly propertyType: upstream2.Type;
readonly value: DartList<{}>;
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
defineObject("flax.core/sdk_foundation#type:ErrorDescription", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ErrorDescription", "object", {"valueToString":_flaxMemberParameters35}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
export function _ErrorDescriptionFactory(message: string): ErrorDescription {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:ErrorDescription", "", [{"name":"message","required":true,"positional":true}], [message], {}) as ErrorDescription;
}
const _ErrorDescriptionProxy = {type: "flax.core/sdk_foundation#type:ErrorDescription", parameters: _flaxMemberParameters59, constructors: {"": _flaxMemberParameters59}, methods: {"toJsonMap":_flaxMemberParameters37,"valueToString":_flaxMemberParameters35,"toDescription":_flaxMemberParameters35,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters36,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters37,"toStringDeep":_flaxMemberParameters39,"toString":_flaxMemberParameters38}, getters: ["value","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:value","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:exception","get:defaultValue","get:isInteresting","get:level","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface _ErrorDescriptionNative extends ErrorDescription {
readonly [_flaxDartTypeValue]: _ErrorDescriptionNative;

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
get value(): DartList<{}>;
get expandableValue(): boolean;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get ifNull(): string | null;
get ifEmpty(): string | null;
get tooltip(): string | null;
get missingIfNull(): boolean;
get propertyType(): upstream2.Type;
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
export abstract class _ErrorDescriptionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ErrorDescription>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ErrorDescription;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ErrorDescription", readonly [], false];
constructor(message: string) { super(_ErrorDescriptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ErrorDescriptionNative.prototype, _ErrorDescriptionProxy);
export namespace _ErrorDescriptionFactory { export function implement(args: [message: string], implementation: {}): ErrorDescription {
return constructProxy(_ErrorDescriptionProxy, args, implementation) as ErrorDescription; } }
const _ErrorDescriptionBinding = _flaxProxyFactory(_ErrorDescriptionFactory, _ErrorDescriptionNative) as unknown as typeof _ErrorDescriptionFactory & (new(message: string) => _ErrorDescriptionNative);
export const ErrorDescription: typeof _ErrorDescriptionBinding & _FlaxInstanceType<ErrorDescription> & _FlaxDartType<ErrorDescription, readonly ["class", "flax.core/sdk_foundation#type:ErrorDescription", readonly [], false]> = _flaxBindInstanceType<ErrorDescription, typeof _ErrorDescriptionBinding>(_ErrorDescriptionBinding, "flax.core/sdk_foundation#type:ErrorDescription", ["package:flutter/src/foundation/assertions.dart::_ErrorDiagnostic","flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]) as typeof _ErrorDescriptionBinding & _FlaxInstanceType<ErrorDescription> & _FlaxDartType<ErrorDescription, readonly ["class", "flax.core/sdk_foundation#type:ErrorDescription", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/assertions.dart::ErrorDescription" | "__flaxBound:package:flutter/src/foundation/assertions.dart::_ErrorDiagnostic" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

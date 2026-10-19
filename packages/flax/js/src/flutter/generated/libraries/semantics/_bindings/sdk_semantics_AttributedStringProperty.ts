// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream1 from '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
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
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters9, _flaxMemberParameters10 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AttributedStringProperty extends Omit<upstream0.DiagnosticsProperty<upstream1.AttributedString>, _flaxOwnMembers0>, Omit<upstream2.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<upstream1.AttributedString>>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedStringProperty": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [upstream1.AttributedString] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __AttributedStringProperty: unique symbol;
readonly [_flaxDartTypeValue]: AttributedStringProperty;

}
defineObject("flax.core/sdk_semantics#type:AttributedStringProperty", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration","showWhenEmpty"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:AttributedStringProperty", "object", {"valueToString":_flaxMemberParameters5}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
const _AttributedStringPropertyProxy = {type: "flax.core/sdk_semantics#type:AttributedStringProperty", parameters: _flaxMemberParameters6, constructors: {"": _flaxMemberParameters6}, methods: {"toJsonMap":_flaxMemberParameters7,"valueToString":_flaxMemberParameters5,"toDescription":_flaxMemberParameters5,"getProperties":_flaxMemberParameters2,"getChildren":_flaxMemberParameters2,"isFiltered":_flaxMemberParameters8,"toTimelineArguments":_flaxMemberParameters2,"toJsonMapIterative":_flaxMemberParameters7,"toStringDeep":_flaxMemberParameters9,"toString":_flaxMemberParameters10}, getters: ["showWhenEmpty","isInteresting","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:showWhenEmpty","get:isInteresting","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:value","get:exception","get:defaultValue","get:level","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface AttributedStringProperty {
readonly [_flaxDartTypeValue]: AttributedStringProperty;

toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
valueToString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
getProperties(): DartList<upstream2.DiagnosticsNode>;
getChildren(): DartList<upstream2.DiagnosticsNode>;
isFiltered(minLevel: upstream3.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream3.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream3.DiagnosticLevel | undefined}): string;
get showWhenEmpty(): boolean;
get isInteresting(): boolean;
get expandableValue(): boolean;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get ifNull(): string | null;
get ifEmpty(): string | null;
get tooltip(): string | null;
get missingIfNull(): boolean;
get propertyType(): upstream4.Type;
get value(): upstream1.AttributedString | null;
get exception(): unknown | null;
get defaultValue(): unknown | null;
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
export abstract class AttributedStringProperty extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AttributedStringProperty>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AttributedStringProperty;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:AttributedStringProperty", readonly [], false];
constructor(name: string, value: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [] }> | null, options?: {showName?: boolean | undefined; showWhenEmpty?: boolean | undefined; defaultValue?: unknown | null | undefined; level?: upstream3.DiagnosticLevel | undefined; description?: string | null | undefined}) { super(_AttributedStringPropertyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AttributedStringProperty.prototype, _AttributedStringPropertyProxy);
export namespace AttributedStringProperty { export function implement(args: [name: string, value: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [] }> | null, options?: {showName?: boolean | undefined; showWhenEmpty?: boolean | undefined; defaultValue?: unknown | null | undefined; level?: upstream3.DiagnosticLevel | undefined; description?: string | null | undefined}], implementation: {}): AttributedStringProperty {
return constructProxy(_AttributedStringPropertyProxy, args, implementation) as AttributedStringProperty; } }
_flaxBindInstanceType<AttributedStringProperty, typeof AttributedStringProperty>(AttributedStringProperty, "flax.core/sdk_semantics#type:AttributedStringProperty", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "showWhenEmpty" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedStringProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

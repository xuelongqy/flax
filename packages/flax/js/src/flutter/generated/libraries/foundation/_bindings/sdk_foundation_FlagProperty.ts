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
import { _flaxMemberParameters33, _flaxMemberParameters55, _flaxMemberParameters35, _flaxMemberParameters1, _flaxMemberParameters34, _flaxMemberParameters37, _flaxMemberParameters36 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlagProperty extends Omit<upstream0.DiagnosticsProperty<boolean>, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<boolean>>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::FlagProperty": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [boolean] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __FlagProperty: unique symbol;
readonly [_flaxDartTypeValue]: FlagProperty;

}
defineObject("flax.core/sdk_foundation#type:FlagProperty", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration","ifTrue","ifFalse"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:FlagProperty", "object", {"valueToString":_flaxMemberParameters33}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
const _FlagPropertyProxy = {type: "flax.core/sdk_foundation#type:FlagProperty", parameters: _flaxMemberParameters55, constructors: {"": _flaxMemberParameters55}, methods: {"toJsonMap":_flaxMemberParameters35,"valueToString":_flaxMemberParameters33,"toDescription":_flaxMemberParameters33,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters34,"toTimelineArguments":_flaxMemberParameters1,"toJsonMapIterative":_flaxMemberParameters35,"toStringDeep":_flaxMemberParameters37,"toString":_flaxMemberParameters36}, getters: ["ifTrue","ifFalse","showName","level","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","name","showSeparator","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:ifTrue","get:ifFalse","get:showName","get:level","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:value","get:exception","get:defaultValue","get:isInteresting","get:name","get:showSeparator","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface FlagProperty {
readonly [_flaxDartTypeValue]: FlagProperty;

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
get ifTrue(): string | null;
get ifFalse(): string | null;
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
get value(): boolean | null;
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
export abstract class FlagProperty extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlagProperty>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlagProperty;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:FlagProperty", readonly [], false];
constructor(name: string, options: {value: boolean | null; ifTrue?: string | null | undefined; ifFalse?: string | null | undefined; showName?: boolean | undefined; defaultValue?: unknown | null | undefined; level?: upstream2.DiagnosticLevel | undefined}) { super(_FlagPropertyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlagProperty.prototype, _FlagPropertyProxy);
export namespace FlagProperty { export function implement(args: [name: string, options: {value: boolean | null; ifTrue?: string | null | undefined; ifFalse?: string | null | undefined; showName?: boolean | undefined; defaultValue?: unknown | null | undefined; level?: upstream2.DiagnosticLevel | undefined}], implementation: {}): FlagProperty {
return constructProxy(_FlagPropertyProxy, args, implementation) as FlagProperty; } }
_flaxBindInstanceType<FlagProperty, typeof FlagProperty>(FlagProperty, "flax.core/sdk_foundation#type:FlagProperty", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "ifTrue" | "ifFalse" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::FlagProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

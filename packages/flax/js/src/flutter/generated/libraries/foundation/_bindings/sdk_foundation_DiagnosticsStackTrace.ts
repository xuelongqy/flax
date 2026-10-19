// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsBlock';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsBlock';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
const _flaxMemberParameters0 = [{"name":"name","required":true,"positional":true},{"name":"stack","required":true,"positional":true},{"name":"stackFilter"},{"name":"showSeparator"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"parentConfiguration"}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"delegate","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel"},{"name":"parentConfiguration"},{"name":"prefixLineOne"},{"name":"prefixOtherLines"},{"name":"wrapWidth"}] as const;
const _flaxMemberParameters6 = [{"name":"minLevel"},{"name":"parentConfiguration"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsStackTrace extends Omit<upstream0.DiagnosticsBlock, _flaxOwnMembers0>, Omit<upstream1.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsBlock>, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::DiagnosticsStackTrace": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DiagnosticsStackTrace: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticsStackTrace;

}
defineObject("flax.core/sdk_foundation#type:DiagnosticsStackTrace", ["level","value","allowTruncate","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowWrap","allowNameWrap","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticsStackTrace", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsBlock");
const _DiagnosticsStackTraceProxy = {type: "flax.core/sdk_foundation#type:DiagnosticsStackTrace", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"getChildren":_flaxMemberParameters1,"getProperties":_flaxMemberParameters1,"toDescription":_flaxMemberParameters2,"isFiltered":_flaxMemberParameters3,"toTimelineArguments":_flaxMemberParameters1,"toJsonMap":_flaxMemberParameters4,"toJsonMapIterative":_flaxMemberParameters4,"toStringDeep":_flaxMemberParameters5,"toString":_flaxMemberParameters6}, getters: ["allowTruncate","level","value","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowWrap","allowNameWrap","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:allowTruncate","get:level","get:value","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowWrap","get:allowNameWrap","get:textTreeConfiguration","getChildren","getProperties","toDescription","isFiltered","toTimelineArguments","toJsonMap","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface DiagnosticsStackTrace {
readonly [_flaxDartTypeValue]: DiagnosticsStackTrace;

getChildren(): DartList<upstream1.DiagnosticsNode>;
getProperties(): DartList<upstream1.DiagnosticsNode>;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
isFiltered(minLevel: upstream3.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream3.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream3.DiagnosticLevel | undefined}): string;
get allowTruncate(): boolean;
get level(): upstream3.DiagnosticLevel;
get value(): unknown | null;
get name(): string | null;
get showSeparator(): boolean;
get showName(): boolean;
get linePrefix(): string | null;
get emptyBodyDescription(): string | null;
get style(): upstream4.DiagnosticsTreeStyle | null;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get textTreeConfiguration(): upstream5.TextTreeConfiguration | null;
}
export abstract class DiagnosticsStackTrace extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsStackTrace>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticsStackTrace;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsStackTrace", readonly [], false];
constructor(name: string, stack: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null, options?: {stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined; showSeparator?: boolean | undefined}) { super(_DiagnosticsStackTraceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DiagnosticsStackTrace.prototype, _DiagnosticsStackTraceProxy);
export namespace DiagnosticsStackTrace { export function implement(args: [name: string, stack: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null, options?: {stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined; showSeparator?: boolean | undefined}], implementation: {}): DiagnosticsStackTrace {
return constructProxy(_DiagnosticsStackTraceProxy, args, implementation) as DiagnosticsStackTrace; } }
_flaxBindInstanceType<DiagnosticsStackTrace, typeof DiagnosticsStackTrace>(DiagnosticsStackTrace, "flax.core/sdk_foundation#type:DiagnosticsStackTrace", ["flax.core/sdk_foundation#type:DiagnosticsBlock","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "level" | "value" | "allowTruncate" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowWrap" | "allowNameWrap" | "textTreeConfiguration" | "getChildren" | "getProperties" | "toDescription" | "isFiltered" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/assertions.dart::DiagnosticsStackTrace" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

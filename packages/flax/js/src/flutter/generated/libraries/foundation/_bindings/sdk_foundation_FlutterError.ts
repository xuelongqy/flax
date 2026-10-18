// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Error';
import '@flax/dart/core/_bindings/flutter_Error';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_StackFilter';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFilter';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlutterError extends Omit<upstream0.Error, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.Error>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.Error | keyof upstream1.DiagnosticableTreeMixin>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Error | keyof upstream1.DiagnosticableTreeMixin | keyof upstream2.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterError": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Error": readonly [] }>, Readonly<{ "__flaxBound:dart:core::AssertionError": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FlutterError: unique symbol;
readonly [_flaxDartTypeValue]: FlutterError;

}
defineObject("flax.core/sdk_foundation#type:FlutterError", ["stackTrace","diagnostics","message"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:FlutterError", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTreeMixin");
const _FlutterErrorProxy = {type: "flax.core/sdk_foundation#type:FlutterError", parameters: [{"name":"diagnostics","required":true,"positional":true}], constructors: {"fromParts":[{"name":"diagnostics","required":true,"positional":true}]}, methods: {"toString":_flaxMemberParameters0,"toStringShallow":_flaxMemberParameters1,"toStringDeep":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugDescribeChildren":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters5}, getters: ["diagnostics","message","stackTrace"], setters: [], contextMembers: [], superMembers: ["get:diagnostics","get:message","get:stackTrace","toString","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties"]} as const;
export interface FlutterError {
readonly [_flaxDartTypeValue]: FlutterError;

toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream8.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream4.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get diagnostics(): DartList<upstream4.DiagnosticsNode>;
get message(): string;
get stackTrace(): upstream5.StackTrace | null;
}
export abstract class FlutterError extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlutterError>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlutterError;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:FlutterError", readonly [], false];
constructor(diagnostics: DartListInput<upstream4.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) { super(_FlutterErrorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlutterError.prototype, _FlutterErrorProxy);
export namespace FlutterError { export function implement(args: [diagnostics: DartListInput<upstream4.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>], implementation: {}): FlutterError {
return constructProxy(_FlutterErrorProxy, args, implementation) as FlutterError; } }
export namespace FlutterError { export function setOnError(value: ((details: upstream6.FlutterErrorDetails) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterError.onError%3D", [value]);
} }
export namespace FlutterError { export function setDemangleStackTrace(value: ((details: upstream5.StackTrace) => Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterError.demangleStackTrace%3D", [value]);
} }
export namespace FlutterError { export function setPresentError(value: ((details: upstream6.FlutterErrorDetails) => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterError.presentError%3D", [value]);
} }
export namespace FlutterError { export declare const onError: ((details: Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => void) | null; }
export namespace FlutterError { export declare const demangleStackTrace: ((details: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>) => upstream5.StackTrace); }
export namespace FlutterError { export declare const presentError: ((details: Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => void); }
export namespace FlutterError { export declare const wrapWidth: number; }
_flaxDefineStaticGetters(FlutterError, "flax.core/sdk_foundation#read:FlutterError.", ["onError","demangleStackTrace","presentError","wrapWidth"]);
export namespace FlutterError { export function resetErrorCount(): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterError.resetErrorCount", []);
} }
export namespace FlutterError { export function dumpErrorToConsole(details: Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: { forceReport?: boolean | undefined } = {}): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["forceReport"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterError.dumpErrorToConsole", [details, options.forceReport]);
} }
export namespace FlutterError { export function addDefaultStackFilter(filter: Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::StackFilter": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterError.addDefaultStackFilter", [filter]);
} }
export namespace FlutterError { export function defaultStackFilter(frames: DartIterableInput<string, string>): DartIterable<string> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterError.defaultStackFilter", [frames]);
return _flaxResult as DartIterable<string>;
} }
export namespace FlutterError { export function reportError(details: Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:FlutterError.reportError", [details]);
} }
_flaxBindInstanceType<FlutterError, typeof FlutterError>(FlutterError, "flax.core/sdk_foundation#type:FlutterError", ["flax.core/flutter#type:Error","dart:core::Object","dart:core::AssertionError","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "stackTrace" | "diagnostics" | "message" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterError" | "__flaxBound:dart:core::Error" | "__flaxBound:dart:core::AssertionError" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { _flaxMemberParameters43, _flaxMemberParameters35, _flaxMemberParameters36, _flaxMemberParameters1, _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters39 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsBlock extends Omit<upstream0.DiagnosticsNode, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DiagnosticsBlock: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticsBlock;

readonly name: string | null;
readonly showSeparator: boolean;
readonly level: upstream2.DiagnosticLevel;
readonly showName: boolean;
readonly linePrefix: string | null;
readonly emptyBodyDescription: string | null;
readonly value: unknown | null;
readonly style: upstream1.DiagnosticsTreeStyle | null;
readonly allowWrap: boolean;
readonly allowNameWrap: boolean;
readonly allowTruncate: boolean;
readonly textTreeConfiguration: upstream3.TextTreeConfiguration | null;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
isFiltered(minLevel: upstream2.DiagnosticLevel): boolean;
getProperties(): DartList<upstream0.DiagnosticsNode>;
getChildren(): DartList<upstream0.DiagnosticsNode>;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toStringDeep(options?: {minLevel?: upstream2.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
}
defineObject("flax.core/sdk_foundation#type:DiagnosticsBlock", ["name","showSeparator","level","showName","linePrefix","emptyBodyDescription","value","style","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticsBlock", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
export function _DiagnosticsBlockFactory(options: { name?: string | null | undefined; style?: upstream1.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined; value?: unknown | null | undefined; description?: string | null | undefined; level?: upstream2.DiagnosticLevel | undefined; allowTruncate?: boolean | undefined; children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined; properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined } = {}): DiagnosticsBlock {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:DiagnosticsBlock", "", [{"name":"name"},{"name":"style"},{"name":"showName"},{"name":"showSeparator"},{"name":"linePrefix"},{"name":"value"},{"name":"description"},{"name":"level"},{"name":"allowTruncate"},{"name":"children"},{"name":"properties"}], [], options) as DiagnosticsBlock;
}
const _DiagnosticsBlockProxy = {type: "flax.core/sdk_foundation#type:DiagnosticsBlock", parameters: _flaxMemberParameters43, constructors: {"": _flaxMemberParameters43}, methods: {"toDescription":_flaxMemberParameters35,"isFiltered":_flaxMemberParameters36,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"toTimelineArguments":_flaxMemberParameters1,"toJsonMap":_flaxMemberParameters37,"toJsonMapIterative":_flaxMemberParameters37,"toString":_flaxMemberParameters38,"toStringDeep":_flaxMemberParameters39}, getters: ["level","value","allowTruncate","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowWrap","allowNameWrap","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:level","get:value","get:allowTruncate","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowWrap","get:allowNameWrap","get:textTreeConfiguration","toDescription","isFiltered","getProperties","getChildren","toTimelineArguments","toJsonMap","toJsonMapIterative","toString","toStringDeep"]} as const;
export interface _DiagnosticsBlockNative extends DiagnosticsBlock {
readonly [_flaxDartTypeValue]: _DiagnosticsBlockNative;

toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
isFiltered(minLevel: upstream2.DiagnosticLevel): boolean;
getProperties(): DartList<upstream0.DiagnosticsNode>;
getChildren(): DartList<upstream0.DiagnosticsNode>;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream2.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
get level(): upstream2.DiagnosticLevel;
get value(): unknown | null;
get allowTruncate(): boolean;
get name(): string | null;
get showSeparator(): boolean;
get showName(): boolean;
get linePrefix(): string | null;
get emptyBodyDescription(): string | null;
get style(): upstream1.DiagnosticsTreeStyle | null;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get textTreeConfiguration(): upstream3.TextTreeConfiguration | null;
}
export abstract class _DiagnosticsBlockNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsBlock>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticsBlock;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsBlock", readonly [], false];
constructor(options?: {name?: string | null | undefined; style?: upstream1.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined; value?: unknown | null | undefined; description?: string | null | undefined; level?: upstream2.DiagnosticLevel | undefined; allowTruncate?: boolean | undefined; children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined; properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined}) { super(_DiagnosticsBlockProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DiagnosticsBlockNative.prototype, _DiagnosticsBlockProxy);
export namespace _DiagnosticsBlockFactory { export function implement(args: [options?: {name?: string | null | undefined; style?: upstream1.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined; value?: unknown | null | undefined; description?: string | null | undefined; level?: upstream2.DiagnosticLevel | undefined; allowTruncate?: boolean | undefined; children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined; properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined}], implementation: {}): DiagnosticsBlock {
return constructProxy(_DiagnosticsBlockProxy, args, implementation) as DiagnosticsBlock; } }
const _DiagnosticsBlockBinding = _flaxProxyFactory(_DiagnosticsBlockFactory, _DiagnosticsBlockNative) as unknown as typeof _DiagnosticsBlockFactory & (new(options?: {name?: string | null | undefined; style?: upstream1.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined; value?: unknown | null | undefined; description?: string | null | undefined; level?: upstream2.DiagnosticLevel | undefined; allowTruncate?: boolean | undefined; children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined; properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined}) => _DiagnosticsBlockNative);
export const DiagnosticsBlock: typeof _DiagnosticsBlockBinding & _FlaxInstanceType<DiagnosticsBlock> & _FlaxDartType<DiagnosticsBlock, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsBlock", readonly [], false]> = _flaxBindInstanceType<DiagnosticsBlock, typeof _DiagnosticsBlockBinding>(_DiagnosticsBlockBinding, "flax.core/sdk_foundation#type:DiagnosticsBlock", ["flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]) as typeof _DiagnosticsBlockBinding & _FlaxInstanceType<DiagnosticsBlock> & _FlaxDartType<DiagnosticsBlock, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsBlock", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "emptyBodyDescription" | "value" | "style" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "toDescription" | "isFiltered" | "getProperties" | "getChildren" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toString" | "toStringDeep" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

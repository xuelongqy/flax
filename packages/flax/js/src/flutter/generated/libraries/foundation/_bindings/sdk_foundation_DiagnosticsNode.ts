// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
const _flaxMemberParameters0 = [{"name":"parentConfiguration"}] as const;
const _flaxMemberParameters1 = [{"name":"minLevel","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"delegate","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel"},{"name":"parentConfiguration"}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel"},{"name":"parentConfiguration"},{"name":"prefixLineOne"},{"name":"prefixOtherLines"},{"name":"wrapWidth"}] as const;
const _flaxMemberParameters6 = [{"name":"name","required":true},{"name":"style"},{"name":"showName"},{"name":"showSeparator"},{"name":"linePrefix"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsNode extends Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DiagnosticsNode: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticsNode;

}
defineObject("flax.core/sdk_foundation#type:DiagnosticsNode", ["name","showSeparator","level","showName","linePrefix","emptyBodyDescription","value","style","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticsNode", "object", {"toDescription":_flaxMemberParameters0,"isFiltered":_flaxMemberParameters1,"getProperties":_flaxMemberParameters2,"getChildren":_flaxMemberParameters2,"toTimelineArguments":_flaxMemberParameters2,"toJsonMap":_flaxMemberParameters3,"toJsonMapIterative":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"toStringDeep":_flaxMemberParameters5}, {}), []);
const _DiagnosticsNodeProxy = {type: "flax.core/sdk_foundation#type:DiagnosticsNode", parameters: _flaxMemberParameters6, constructors: {"": _flaxMemberParameters6}, methods: {"toDescription":_flaxMemberParameters0,"isFiltered":_flaxMemberParameters1,"getProperties":_flaxMemberParameters2,"getChildren":_flaxMemberParameters2,"toTimelineArguments":_flaxMemberParameters2,"toJsonMap":_flaxMemberParameters3,"toJsonMapIterative":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"toStringDeep":_flaxMemberParameters5}, getters: ["name","showSeparator","level","showName","linePrefix","emptyBodyDescription","value","style","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:name","get:showSeparator","get:level","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowWrap","get:allowNameWrap","get:allowTruncate","get:textTreeConfiguration","isFiltered","toTimelineArguments","toJsonMap","toJsonMapIterative","toString","toStringDeep"]} as const;
export interface DiagnosticsNode {
readonly [_flaxDartTypeValue]: DiagnosticsNode;

isFiltered(minLevel: upstream1.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream1.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
get name(): string | null;
get showSeparator(): boolean;
get level(): upstream1.DiagnosticLevel;
get showName(): boolean;
get linePrefix(): string | null;
get emptyBodyDescription(): string | null;
get style(): upstream0.DiagnosticsTreeStyle | null;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get allowTruncate(): boolean;
get textTreeConfiguration(): upstream2.TextTreeConfiguration | null;
}
export abstract class DiagnosticsNode extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsNode>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticsNode;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsNode", readonly [], false];
constructor(options: {name: string | null; style?: upstream0.DiagnosticsTreeStyle | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined}) { super(_DiagnosticsNodeProxy, Array.from(arguments)); }
abstract toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
abstract getProperties(): DartList<DiagnosticsNode>;
abstract getChildren(): DartList<DiagnosticsNode>;
abstract get value(): unknown | null;
}
_flaxDefineProxyBase(DiagnosticsNode.prototype, _DiagnosticsNodeProxy);
export namespace DiagnosticsNode { export function implement(args: [options: {name: string | null; style?: upstream0.DiagnosticsTreeStyle | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined}], implementation: {toDescription: ((options?: { parentConfiguration?: upstream2.TextTreeConfiguration | null | undefined }) => string); getProperties: (() => DartListInput<DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>); getChildren: (() => DartListInput<DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>); get value(): unknown | null}): DiagnosticsNode {
return constructProxy(_DiagnosticsNodeProxy, args, implementation) as DiagnosticsNode; } }
export namespace DiagnosticsNode { export function toJsonList(nodes: DartListInput<DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | null, parent: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null, delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartList<DartMap<string, unknown | null>> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:DiagnosticsNode.toJsonList", [nodes, parent, delegate]);
return _flaxResult as DartList<DartMap<string, unknown | null>>;
} }
_flaxBindInstanceType<DiagnosticsNode, typeof DiagnosticsNode>(DiagnosticsNode, "flax.core/sdk_foundation#type:DiagnosticsNode", ["dart:core::Object"]);

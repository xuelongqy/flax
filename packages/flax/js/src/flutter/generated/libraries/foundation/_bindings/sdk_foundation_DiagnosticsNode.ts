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
import { _flaxMemberParameters31, _flaxMemberParameters32, _flaxMemberParameters1, _flaxMemberParameters33, _flaxMemberParameters34, _flaxMemberParameters35, _flaxMemberParameters40 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsNode extends Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DiagnosticsNode: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticsNode;

readonly name: string | null;
readonly showSeparator: boolean;
readonly level: upstream1.DiagnosticLevel;
readonly showName: boolean;
readonly linePrefix: string | null;
readonly emptyBodyDescription: string | null;
readonly value: unknown | null;
readonly style: upstream0.DiagnosticsTreeStyle | null;
readonly allowWrap: boolean;
readonly allowNameWrap: boolean;
readonly allowTruncate: boolean;
readonly textTreeConfiguration: upstream2.TextTreeConfiguration | null;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
isFiltered(minLevel: upstream1.DiagnosticLevel): boolean;
getProperties(): DartList<DiagnosticsNode>;
getChildren(): DartList<DiagnosticsNode>;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toStringDeep(options?: {minLevel?: upstream1.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
}
defineObject("flax.core/sdk_foundation#type:DiagnosticsNode", ["name","showSeparator","level","showName","linePrefix","emptyBodyDescription","value","style","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticsNode", "object", {"toDescription":_flaxMemberParameters31,"isFiltered":_flaxMemberParameters32,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"toTimelineArguments":_flaxMemberParameters1,"toJsonMap":_flaxMemberParameters33,"toJsonMapIterative":_flaxMemberParameters33,"toString":_flaxMemberParameters34,"toStringDeep":_flaxMemberParameters35}, {}), []);
export namespace _DiagnosticsNodeFactory {
export function message(message: string, options: { style?: upstream0.DiagnosticsTreeStyle | undefined; level?: upstream1.DiagnosticLevel | undefined; allowWrap?: boolean | undefined } = {}): DiagnosticsNode {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:DiagnosticsNode", "message", [{"name":"message","required":true,"positional":true},{"name":"style"},{"name":"level"},{"name":"allowWrap"}], [message], options) as DiagnosticsNode;
}
}
const _DiagnosticsNodeProxy = {type: "flax.core/sdk_foundation#type:DiagnosticsNode", parameters: _flaxMemberParameters40, constructors: {"": _flaxMemberParameters40}, methods: {"toDescription":_flaxMemberParameters31,"isFiltered":_flaxMemberParameters32,"getProperties":_flaxMemberParameters1,"getChildren":_flaxMemberParameters1,"toTimelineArguments":_flaxMemberParameters1,"toJsonMap":_flaxMemberParameters33,"toJsonMapIterative":_flaxMemberParameters33,"toString":_flaxMemberParameters34,"toStringDeep":_flaxMemberParameters35}, getters: ["name","showSeparator","level","showName","linePrefix","emptyBodyDescription","value","style","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:name","get:showSeparator","get:level","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowWrap","get:allowNameWrap","get:allowTruncate","get:textTreeConfiguration","isFiltered","toTimelineArguments","toJsonMap","toJsonMapIterative","toString","toStringDeep"]} as const;
export interface _DiagnosticsNodeNative extends DiagnosticsNode {
readonly [_flaxDartTypeValue]: _DiagnosticsNodeNative;

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
export abstract class _DiagnosticsNodeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsNode>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticsNode;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsNode", readonly [], false];
constructor(options: {name: string | null; style?: upstream0.DiagnosticsTreeStyle | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined}) { super(_DiagnosticsNodeProxy, Array.from(arguments)); }
abstract toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
abstract getProperties(): DartList<DiagnosticsNode>;
abstract getChildren(): DartList<DiagnosticsNode>;
abstract get value(): unknown | null;
}
_flaxDefineProxyBase(_DiagnosticsNodeNative.prototype, _DiagnosticsNodeProxy);
export namespace _DiagnosticsNodeFactory { export function implement(args: [options: {name: string | null; style?: upstream0.DiagnosticsTreeStyle | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined}], implementation: {toDescription: ((options?: { parentConfiguration?: upstream2.TextTreeConfiguration | null | undefined }) => string); getProperties: (() => DartListInput<DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>); getChildren: (() => DartListInput<DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>); get value(): unknown | null}): DiagnosticsNode {
return constructProxy(_DiagnosticsNodeProxy, args, implementation) as DiagnosticsNode; } }
const _DiagnosticsNodeBinding = _flaxProxyFactory(_DiagnosticsNodeFactory, _DiagnosticsNodeNative) as unknown as typeof _DiagnosticsNodeFactory & (abstract new(options: {name: string | null; style?: upstream0.DiagnosticsTreeStyle | null | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined}) => _DiagnosticsNodeNative);
export namespace _DiagnosticsNodeFactory { export function toJsonList(nodes: DartListInput<DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | null, parent: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null, delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartList<DartMap<string, unknown | null>> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:DiagnosticsNode.toJsonList", [nodes, parent, delegate]);
return _flaxResult as DartList<DartMap<string, unknown | null>>;
} }
export const DiagnosticsNode: typeof _DiagnosticsNodeBinding & _FlaxInstanceType<DiagnosticsNode> & _FlaxDartType<DiagnosticsNode, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsNode", readonly [], false]> = _flaxBindInstanceType<DiagnosticsNode, typeof _DiagnosticsNodeBinding>(_DiagnosticsNodeBinding, "flax.core/sdk_foundation#type:DiagnosticsNode", ["dart:core::Object"]) as typeof _DiagnosticsNodeBinding & _FlaxInstanceType<DiagnosticsNode> & _FlaxDartType<DiagnosticsNode, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsNode", readonly [], false]>;

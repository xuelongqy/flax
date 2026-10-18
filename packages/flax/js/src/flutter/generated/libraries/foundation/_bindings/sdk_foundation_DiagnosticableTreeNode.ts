// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"parentConfiguration","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"minLevel","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"delegate","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel","required":false,"positional":false},{"name":"parentConfiguration","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel","required":false,"positional":false},{"name":"parentConfiguration","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticableTreeNode extends Omit<upstream0.DiagnosticableNode<upstream1.DiagnosticableTree>, _flaxOwnMembers0>, Omit<upstream2.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticableNode<upstream1.DiagnosticableTree>>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeNode": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableNode": readonly [upstream1.DiagnosticableTree] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DiagnosticableTreeNode: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticableTreeNode;

}
defineObject("flax.core/sdk_foundation#type:DiagnosticableTreeNode", ["value","builder","style","emptyBodyDescription","name","showSeparator","level","showName","linePrefix","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticableTreeNode", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
const _DiagnosticableTreeNodeProxy = {type: "flax.core/sdk_foundation#type:DiagnosticableTreeNode", parameters: [{"name":"name","required":false,"positional":false},{"name":"value","required":true,"positional":false},{"name":"style","required":true,"positional":false}], constructors: {"":[{"name":"name","required":false,"positional":false},{"name":"value","required":true,"positional":false},{"name":"style","required":true,"positional":false}]}, methods: {"getProperties":_flaxMemberParameters0,"getChildren":_flaxMemberParameters0,"toDescription":_flaxMemberParameters1,"isFiltered":_flaxMemberParameters2,"toTimelineArguments":_flaxMemberParameters0,"toJsonMap":_flaxMemberParameters3,"toJsonMapIterative":_flaxMemberParameters3,"toStringDeep":_flaxMemberParameters4,"toString":_flaxMemberParameters5}, getters: ["value","builder","style","emptyBodyDescription","name","showSeparator","level","showName","linePrefix","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:value","get:builder","get:style","get:emptyBodyDescription","get:name","get:showSeparator","get:level","get:showName","get:linePrefix","get:allowWrap","get:allowNameWrap","get:allowTruncate","get:textTreeConfiguration","getProperties","getChildren","toDescription","isFiltered","toTimelineArguments","toJsonMap","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface DiagnosticableTreeNode {
readonly [_flaxDartTypeValue]: DiagnosticableTreeNode;

getProperties(): DartList<upstream2.DiagnosticsNode>;
getChildren(): DartList<upstream2.DiagnosticsNode>;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
isFiltered(minLevel: upstream5.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream5.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream5.DiagnosticLevel | undefined}): string;
get value(): upstream1.DiagnosticableTree;
get builder(): upstream4.DiagnosticPropertiesBuilder | null;
get style(): upstream3.DiagnosticsTreeStyle;
get emptyBodyDescription(): string | null;
get name(): string | null;
get showSeparator(): boolean;
get level(): upstream5.DiagnosticLevel;
get showName(): boolean;
get linePrefix(): string | null;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get allowTruncate(): boolean;
get textTreeConfiguration(): upstream6.TextTreeConfiguration | null;
}
export abstract class DiagnosticableTreeNode extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticableTreeNode>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticableTreeNode;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableTreeNode", readonly [], false];
constructor(options: {name?: string | null | undefined; value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; style: upstream3.DiagnosticsTreeStyle | null}) { super(_DiagnosticableTreeNodeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DiagnosticableTreeNode.prototype, _DiagnosticableTreeNodeProxy);
export namespace DiagnosticableTreeNode { export function implement(args: [options: {name?: string | null | undefined; value: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; style: upstream3.DiagnosticsTreeStyle | null}], implementation: {}): DiagnosticableTreeNode {
return constructProxy(_DiagnosticableTreeNodeProxy, args, implementation) as DiagnosticableTreeNode; } }
_flaxBindInstanceType<DiagnosticableTreeNode, typeof DiagnosticableTreeNode>(DiagnosticableTreeNode, "flax.core/sdk_foundation#type:DiagnosticableTreeNode", ["flax.core/sdk_foundation#type:DiagnosticableNode","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "builder" | "style" | "emptyBodyDescription" | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "getProperties" | "getChildren" | "toDescription" | "isFiltered" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeNode" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableNode" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

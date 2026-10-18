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
const _flaxMemberParameters0 = [{"name":"parentConfiguration","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"minLevel","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"delegate","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel","required":false,"positional":false},{"name":"parentConfiguration","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel","required":false,"positional":false},{"name":"parentConfiguration","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticsBlock extends Omit<upstream0.DiagnosticsNode, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __DiagnosticsBlock: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticsBlock;

}
defineObject("flax.core/sdk_foundation#type:DiagnosticsBlock", ["name","showSeparator","level","showName","linePrefix","emptyBodyDescription","value","style","allowWrap","allowNameWrap","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticsBlock", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
const _DiagnosticsBlockProxy = {type: "flax.core/sdk_foundation#type:DiagnosticsBlock", parameters: [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"showName","required":false,"positional":false},{"name":"showSeparator","required":false,"positional":false},{"name":"linePrefix","required":false,"positional":false},{"name":"value","required":false,"positional":false},{"name":"description","required":false,"positional":false},{"name":"level","required":false,"positional":false},{"name":"allowTruncate","required":false,"positional":false},{"name":"children","required":false,"positional":false},{"name":"properties","required":false,"positional":false}], constructors: {"":[{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"showName","required":false,"positional":false},{"name":"showSeparator","required":false,"positional":false},{"name":"linePrefix","required":false,"positional":false},{"name":"value","required":false,"positional":false},{"name":"description","required":false,"positional":false},{"name":"level","required":false,"positional":false},{"name":"allowTruncate","required":false,"positional":false},{"name":"children","required":false,"positional":false},{"name":"properties","required":false,"positional":false}]}, methods: {"toDescription":_flaxMemberParameters0,"isFiltered":_flaxMemberParameters1,"getProperties":_flaxMemberParameters2,"getChildren":_flaxMemberParameters2,"toTimelineArguments":_flaxMemberParameters2,"toJsonMap":_flaxMemberParameters3,"toJsonMapIterative":_flaxMemberParameters3,"toString":_flaxMemberParameters4,"toStringDeep":_flaxMemberParameters5}, getters: ["level","value","allowTruncate","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowWrap","allowNameWrap","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:level","get:value","get:allowTruncate","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowWrap","get:allowNameWrap","get:textTreeConfiguration","toDescription","isFiltered","getProperties","getChildren","toTimelineArguments","toJsonMap","toJsonMapIterative","toString","toStringDeep"]} as const;
export interface DiagnosticsBlock {
readonly [_flaxDartTypeValue]: DiagnosticsBlock;

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
export abstract class DiagnosticsBlock extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticsBlock>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticsBlock;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsBlock", readonly [], false];
constructor(options?: {name?: string | null | undefined; style?: upstream1.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined; value?: unknown | null | undefined; description?: string | null | undefined; level?: upstream2.DiagnosticLevel | undefined; allowTruncate?: boolean | undefined; children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined; properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined}) { super(_DiagnosticsBlockProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DiagnosticsBlock.prototype, _DiagnosticsBlockProxy);
export namespace DiagnosticsBlock { export function implement(args: [options?: {name?: string | null | undefined; style?: upstream1.DiagnosticsTreeStyle | undefined; showName?: boolean | undefined; showSeparator?: boolean | undefined; linePrefix?: string | null | undefined; value?: unknown | null | undefined; description?: string | null | undefined; level?: upstream2.DiagnosticLevel | undefined; allowTruncate?: boolean | undefined; children?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined; properties?: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>> | undefined}], implementation: {}): DiagnosticsBlock {
return constructProxy(_DiagnosticsBlockProxy, args, implementation) as DiagnosticsBlock; } }
_flaxBindInstanceType<DiagnosticsBlock, typeof DiagnosticsBlock>(DiagnosticsBlock, "flax.core/sdk_foundation#type:DiagnosticsBlock", ["flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "showSeparator" | "level" | "showName" | "linePrefix" | "emptyBodyDescription" | "value" | "style" | "allowWrap" | "allowNameWrap" | "allowTruncate" | "textTreeConfiguration" | "toDescription" | "isFiltered" | "getProperties" | "getChildren" | "toTimelineArguments" | "toJsonMap" | "toJsonMapIterative" | "toString" | "toStringDeep" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsBlock" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";

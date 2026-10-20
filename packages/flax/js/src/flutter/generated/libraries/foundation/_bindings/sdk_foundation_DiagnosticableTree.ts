// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters37, _flaxMemberParameters38, _flaxMemberParameters1, _flaxMemberParameters29, _flaxMemberParameters30, _flaxMemberParameters28 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticableTree extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DiagnosticableTree: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticableTree;

}
defineObject("flax.core/sdk_foundation#type:DiagnosticableTree", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticableTree", "object", {"toStringShallow":_flaxMemberParameters37,"toStringDeep":_flaxMemberParameters38,"debugDescribeChildren":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _DiagnosticableTreeProxy = {type: "flax.core/sdk_foundation#type:DiagnosticableTree", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters29,"toDiagnosticsNode":_flaxMemberParameters30,"debugFillProperties":_flaxMemberParameters28,"toStringShallow":_flaxMemberParameters37,"toStringDeep":_flaxMemberParameters38,"debugDescribeChildren":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["toStringShort","toString","toDiagnosticsNode","debugFillProperties","toStringShallow","toStringDeep","debugDescribeChildren"]} as const;
export interface DiagnosticableTree {
readonly [_flaxDartTypeValue]: DiagnosticableTree;

toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream1.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
debugDescribeChildren(): DartList<upstream2.DiagnosticsNode>;
}
export abstract class DiagnosticableTree extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticableTree>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticableTree;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticableTree", readonly [], false];
constructor() { super(_DiagnosticableTreeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DiagnosticableTree.prototype, _DiagnosticableTreeProxy);
export namespace DiagnosticableTree { export function implement(args: [], implementation: {}): DiagnosticableTree {
return constructProxy(_DiagnosticableTreeProxy, args, implementation) as DiagnosticableTree; } }
_flaxBindInstanceType<DiagnosticableTree, typeof DiagnosticableTree>(DiagnosticableTree, "flax.core/sdk_foundation#type:DiagnosticableTree", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

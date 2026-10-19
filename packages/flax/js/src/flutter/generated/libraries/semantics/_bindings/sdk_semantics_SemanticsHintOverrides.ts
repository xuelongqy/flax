// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters28, _flaxMemberParameters2, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters17 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsHintOverrides extends Omit<upstream0.DiagnosticableTree, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsHintOverrides": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SemanticsHintOverrides: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsHintOverrides;

}
defineObject("flax.core/sdk_semantics#type:SemanticsHintOverrides", ["onTapHint","onLongPressHint","isNotEmpty"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:SemanticsHintOverrides", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTree");
const _SemanticsHintOverridesProxy = {type: "flax.core/sdk_semantics#type:SemanticsHintOverrides", parameters: _flaxMemberParameters26, constructors: {"": _flaxMemberParameters26}, methods: {"toStringShallow":_flaxMemberParameters27,"toStringDeep":_flaxMemberParameters28,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters16,"debugDescribeChildren":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters15,"toString":_flaxMemberParameters17}, getters: ["onTapHint","onLongPressHint","isNotEmpty"], setters: [], contextMembers: [], superMembers: ["get:onTapHint","get:onLongPressHint","get:isNotEmpty","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties","toString"]} as const;
export interface SemanticsHintOverrides {
readonly [_flaxDartTypeValue]: SemanticsHintOverrides;

toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream2.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream3.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
get onTapHint(): string | null;
get onLongPressHint(): string | null;
get isNotEmpty(): boolean;
}
export abstract class SemanticsHintOverrides extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsHintOverrides>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsHintOverrides;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsHintOverrides", readonly [], false];
constructor(options?: {onTapHint?: string | null | undefined; onLongPressHint?: string | null | undefined}) { super(_SemanticsHintOverridesProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SemanticsHintOverrides.prototype, _SemanticsHintOverridesProxy);
export namespace SemanticsHintOverrides { export function implement(args: [options?: {onTapHint?: string | null | undefined; onLongPressHint?: string | null | undefined}], implementation: {}): SemanticsHintOverrides {
return constructProxy(_SemanticsHintOverridesProxy, args, implementation) as SemanticsHintOverrides; } }
_flaxBindInstanceType<SemanticsHintOverrides, typeof SemanticsHintOverrides>(SemanticsHintOverrides, "flax.core/sdk_semantics#type:SemanticsHintOverrides", ["flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onTapHint" | "onLongPressHint" | "isNotEmpty" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsHintOverrides" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

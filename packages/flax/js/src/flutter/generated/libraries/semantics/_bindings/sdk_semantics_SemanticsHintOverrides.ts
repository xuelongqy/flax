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
import { _flaxMemberParameters28, _flaxMemberParameters29, _flaxMemberParameters30, _flaxMemberParameters2, _flaxMemberParameters19, _flaxMemberParameters18, _flaxMemberParameters20 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsHintOverrides extends Omit<upstream0.DiagnosticableTree, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsHintOverrides": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SemanticsHintOverrides: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsHintOverrides;

readonly onTapHint: string | null;
readonly onLongPressHint: string | null;
readonly isNotEmpty: boolean;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream2.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream3.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_semantics#type:SemanticsHintOverrides", ["onTapHint","onLongPressHint","isNotEmpty"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:SemanticsHintOverrides", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTree");
export function _SemanticsHintOverridesFactory(options: { onTapHint?: string | null | undefined; onLongPressHint?: string | null | undefined } = {}): SemanticsHintOverrides {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_semantics#type:SemanticsHintOverrides", "", [{"name":"onTapHint"},{"name":"onLongPressHint"}], [], options) as SemanticsHintOverrides;
}
const _SemanticsHintOverridesProxy = {type: "flax.core/sdk_semantics#type:SemanticsHintOverrides", parameters: _flaxMemberParameters28, constructors: {"": _flaxMemberParameters28}, methods: {"toStringShallow":_flaxMemberParameters29,"toStringDeep":_flaxMemberParameters30,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters19,"debugDescribeChildren":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters18,"toString":_flaxMemberParameters20}, getters: ["onTapHint","onLongPressHint","isNotEmpty"], setters: [], contextMembers: [], superMembers: ["get:onTapHint","get:onLongPressHint","get:isNotEmpty","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties","toString"]} as const;
export interface _SemanticsHintOverridesNative extends SemanticsHintOverrides {
readonly [_flaxDartTypeValue]: _SemanticsHintOverridesNative;

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
export abstract class _SemanticsHintOverridesNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsHintOverrides>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsHintOverrides;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsHintOverrides", readonly [], false];
constructor(options?: {onTapHint?: string | null | undefined; onLongPressHint?: string | null | undefined}) { super(_SemanticsHintOverridesProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SemanticsHintOverridesNative.prototype, _SemanticsHintOverridesProxy);
export namespace _SemanticsHintOverridesFactory { export function implement(args: [options?: {onTapHint?: string | null | undefined; onLongPressHint?: string | null | undefined}], implementation: {}): SemanticsHintOverrides {
return constructProxy(_SemanticsHintOverridesProxy, args, implementation) as SemanticsHintOverrides; } }
const _SemanticsHintOverridesBinding = _flaxProxyFactory(_SemanticsHintOverridesFactory, _SemanticsHintOverridesNative) as unknown as typeof _SemanticsHintOverridesFactory & (new(options?: {onTapHint?: string | null | undefined; onLongPressHint?: string | null | undefined}) => _SemanticsHintOverridesNative);
export const SemanticsHintOverrides: typeof _SemanticsHintOverridesBinding & _FlaxInstanceType<SemanticsHintOverrides> & _FlaxDartType<SemanticsHintOverrides, readonly ["class", "flax.core/sdk_semantics#type:SemanticsHintOverrides", readonly [], false]> = _flaxBindInstanceType<SemanticsHintOverrides, typeof _SemanticsHintOverridesBinding>(_SemanticsHintOverridesBinding, "flax.core/sdk_semantics#type:SemanticsHintOverrides", ["flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SemanticsHintOverridesBinding & _FlaxInstanceType<SemanticsHintOverrides> & _FlaxDartType<SemanticsHintOverrides, readonly ["class", "flax.core/sdk_semantics#type:SemanticsHintOverrides", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onTapHint" | "onLongPressHint" | "isNotEmpty" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsHintOverrides" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

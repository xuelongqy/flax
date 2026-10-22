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
import { _flaxMemberParameters339, _flaxMemberParameters1, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters12 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectedContentRange extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContentRange": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SelectedContentRange: unique symbol;
readonly [_flaxDartTypeValue]: SelectedContentRange;

readonly startOffset: number;
readonly endOffset: number;
toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_rendering#type:SelectedContentRange", ["startOffset","endOffset"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectedContentRange", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _SelectedContentRangeFactory(options: { startOffset: number; endOffset: number }): SelectedContentRange {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SelectedContentRange", "", [{"name":"startOffset","required":true},{"name":"endOffset","required":true}], [], options) as SelectedContentRange;
}
const _SelectedContentRangeProxy = {type: "flax.core/sdk_rendering#type:SelectedContentRange", parameters: _flaxMemberParameters339, constructors: {"": _flaxMemberParameters339}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters12}, getters: ["startOffset","endOffset"], setters: [], contextMembers: [], superMembers: ["get:startOffset","get:endOffset","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _SelectedContentRangeNative extends SelectedContentRange {
readonly [_flaxDartTypeValue]: _SelectedContentRangeNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get startOffset(): number;
get endOffset(): number;
}
export abstract class _SelectedContentRangeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectedContentRange>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectedContentRange;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectedContentRange", readonly [], false];
constructor(options: {startOffset: number; endOffset: number}) { super(_SelectedContentRangeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SelectedContentRangeNative.prototype, _SelectedContentRangeProxy);
export namespace _SelectedContentRangeFactory { export function implement(args: [options: {startOffset: number; endOffset: number}], implementation: {}): SelectedContentRange {
return constructProxy(_SelectedContentRangeProxy, args, implementation) as SelectedContentRange; } }
const _SelectedContentRangeBinding = _flaxProxyFactory(_SelectedContentRangeFactory, _SelectedContentRangeNative) as unknown as typeof _SelectedContentRangeFactory & (new(options: {startOffset: number; endOffset: number}) => _SelectedContentRangeNative);
export const SelectedContentRange: typeof _SelectedContentRangeBinding & _FlaxInstanceType<SelectedContentRange> & _FlaxDartType<SelectedContentRange, readonly ["class", "flax.core/sdk_rendering#type:SelectedContentRange", readonly [], false]> = _flaxBindInstanceType<SelectedContentRange, typeof _SelectedContentRangeBinding>(_SelectedContentRangeBinding, "flax.core/sdk_rendering#type:SelectedContentRange", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SelectedContentRangeBinding & _FlaxInstanceType<SelectedContentRange> & _FlaxDartType<SelectedContentRange, readonly ["class", "flax.core/sdk_rendering#type:SelectedContentRange", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "startOffset" | "endOffset" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContentRange" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

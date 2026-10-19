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
import { _flaxMemberParameters327, _flaxMemberParameters1, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters12 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectedContent extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SelectedContent: unique symbol;
readonly [_flaxDartTypeValue]: SelectedContent;

}
defineObject("flax.core/sdk_rendering#type:SelectedContent", ["plainText"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectedContent", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _SelectedContentProxy = {type: "flax.core/sdk_rendering#type:SelectedContent", parameters: _flaxMemberParameters327, constructors: {"": _flaxMemberParameters327}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters12}, getters: ["plainText"], setters: [], contextMembers: [], superMembers: ["get:plainText","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface SelectedContent {
readonly [_flaxDartTypeValue]: SelectedContent;

toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get plainText(): string;
}
export abstract class SelectedContent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectedContent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectedContent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectedContent", readonly [], false];
constructor(options: {plainText: string}) { super(_SelectedContentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SelectedContent.prototype, _SelectedContentProxy);
export namespace SelectedContent { export function implement(args: [options: {plainText: string}], implementation: {}): SelectedContent {
return constructProxy(_SelectedContentProxy, args, implementation) as SelectedContent; } }
_flaxBindInstanceType<SelectedContent, typeof SelectedContent>(SelectedContent, "flax.core/sdk_rendering#type:SelectedContent", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "plainText" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

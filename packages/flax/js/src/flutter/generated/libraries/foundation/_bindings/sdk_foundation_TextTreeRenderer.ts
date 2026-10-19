// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import { _flaxMemberParameters88, _flaxMemberParameters89 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextTreeRenderer extends Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeRenderer": readonly [] }> { readonly __TextTreeRenderer: unique symbol;
readonly [_flaxDartTypeValue]: TextTreeRenderer;

}
defineObject("flax.core/sdk_foundation#type:TextTreeRenderer", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:TextTreeRenderer", "object", {"render":_flaxMemberParameters88}, {}), []);
const _TextTreeRendererProxy = {type: "flax.core/sdk_foundation#type:TextTreeRenderer", parameters: _flaxMemberParameters89, constructors: {"": _flaxMemberParameters89}, methods: {"render":_flaxMemberParameters88}, getters: [], setters: [], contextMembers: [], superMembers: ["render"]} as const;
export interface TextTreeRenderer {
readonly [_flaxDartTypeValue]: TextTreeRenderer;

render(node: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>, options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
}
export abstract class TextTreeRenderer extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextTreeRenderer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextTreeRenderer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:TextTreeRenderer", readonly [], false];
constructor(options?: {minLevel?: upstream0.DiagnosticLevel | undefined; wrapWidth?: number | undefined; wrapWidthProperties?: number | undefined; maxDescendentsTruncatableNode?: number | undefined}) { super(_TextTreeRendererProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextTreeRenderer.prototype, _TextTreeRendererProxy);
export namespace TextTreeRenderer { export function implement(args: [options?: {minLevel?: upstream0.DiagnosticLevel | undefined; wrapWidth?: number | undefined; wrapWidthProperties?: number | undefined; maxDescendentsTruncatableNode?: number | undefined}], implementation: {}): TextTreeRenderer {
return constructProxy(_TextTreeRendererProxy, args, implementation) as TextTreeRenderer; } }
_flaxBindInstanceType<TextTreeRenderer, typeof TextTreeRenderer>(TextTreeRenderer, "flax.core/sdk_foundation#type:TextTreeRenderer", ["dart:core::Object"]);

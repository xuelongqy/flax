// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
const _flaxMemberParameters0 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LayerLink extends Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [] }> { readonly __LayerLink: unique symbol;
readonly [_flaxDartTypeValue]: LayerLink;

}
defineObject("flax.core/sdk_rendering#type:LayerLink", ["leader","leaderSize"], ["leaderSize"], _flaxBindingMethods("flax.core/sdk_rendering#type:LayerLink", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _LayerLinkProxy = {type: "flax.core/sdk_rendering#type:LayerLink", parameters: [], constructors: {"":[]}, methods: {"toString":_flaxMemberParameters0}, getters: ["leader","leaderSize"], setters: ["leaderSize"], contextMembers: [], superMembers: ["get:leader","get:leaderSize","set:leaderSize","toString"]} as const;
export interface LayerLink {
readonly [_flaxDartTypeValue]: LayerLink;

toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
get leader(): upstream0.LeaderLayer | null;
get leaderSize(): upstream1.Size | null;
set leaderSize(value: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
}
export abstract class LayerLink extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayerLink>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LayerLink;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:LayerLink", readonly [], false];
constructor() { super(_LayerLinkProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LayerLink.prototype, _LayerLinkProxy);
export namespace LayerLink { export function implement(args: [], implementation: {}): LayerLink {
return constructProxy(_LayerLinkProxy, args, implementation) as LayerLink; } }
_flaxBindInstanceType<LayerLink, typeof LayerLink>(LayerLink, "flax.core/sdk_rendering#type:LayerLink", ["dart:core::Object"]);

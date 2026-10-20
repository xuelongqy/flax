// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters16, _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LayerLink extends Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [] }> { readonly __LayerLink: unique symbol;
readonly [_flaxDartTypeValue]: LayerLink;

readonly leader: upstream0.LeaderLayer | null;
get leaderSize(): upstream1.Size | null;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
set leaderSize(value: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
}
defineObject("flax.core/sdk_rendering#type:LayerLink", ["leader","leaderSize"], ["leaderSize"], _flaxBindingMethods("flax.core/sdk_rendering#type:LayerLink", "object", {"toString":_flaxMemberParameters16}, {}), []);
export function _LayerLinkFactory(): LayerLink {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:LayerLink", "", [], [], {}) as LayerLink;
}
const _LayerLinkProxy = {type: "flax.core/sdk_rendering#type:LayerLink", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters16}, getters: ["leader","leaderSize"], setters: ["leaderSize"], contextMembers: [], superMembers: ["get:leader","get:leaderSize","set:leaderSize","toString"]} as const;
export interface _LayerLinkNative extends LayerLink {
readonly [_flaxDartTypeValue]: _LayerLinkNative;

toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
get leader(): upstream0.LeaderLayer | null;
get leaderSize(): upstream1.Size | null;
set leaderSize(value: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
}
export abstract class _LayerLinkNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayerLink>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LayerLink;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:LayerLink", readonly [], false];
constructor() { super(_LayerLinkProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LayerLinkNative.prototype, _LayerLinkProxy);
export namespace _LayerLinkFactory { export function implement(args: [], implementation: {}): LayerLink {
return constructProxy(_LayerLinkProxy, args, implementation) as LayerLink; } }
const _LayerLinkBinding = _flaxProxyFactory(_LayerLinkFactory, _LayerLinkNative) as unknown as typeof _LayerLinkFactory & (new() => _LayerLinkNative);
export const LayerLink: typeof _LayerLinkBinding & _FlaxInstanceType<LayerLink> & _FlaxDartType<LayerLink, readonly ["class", "flax.core/sdk_rendering#type:LayerLink", readonly [], false]> = _flaxBindInstanceType<LayerLink, typeof _LayerLinkBinding>(_LayerLinkBinding, "flax.core/sdk_rendering#type:LayerLink", ["dart:core::Object"]) as typeof _LayerLinkBinding & _FlaxInstanceType<LayerLink> & _FlaxDartType<LayerLink, readonly ["class", "flax.core/sdk_rendering#type:LayerLink", readonly [], false]>;

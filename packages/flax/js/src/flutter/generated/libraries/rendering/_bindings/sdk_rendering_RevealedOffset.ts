// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"offset","required":true},{"name":"rect","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RevealedOffset extends Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::RevealedOffset": readonly [] }> { readonly __RevealedOffset: unique symbol;
readonly [_flaxDartTypeValue]: RevealedOffset;

}
defineObject("flax.core/sdk_rendering#type:RevealedOffset", ["offset","rect"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:RevealedOffset", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _RevealedOffsetProxy = {type: "flax.core/sdk_rendering#type:RevealedOffset", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["offset","rect"], setters: [], contextMembers: [], superMembers: ["get:offset","get:rect","toString"]} as const;
export interface RevealedOffset {
readonly [_flaxDartTypeValue]: RevealedOffset;

toString(): string;
get offset(): number;
get rect(): upstream0.Rect;
}
export abstract class RevealedOffset extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RevealedOffset>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RevealedOffset;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:RevealedOffset", readonly [], false];
constructor(options: {offset: number; rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}) { super(_RevealedOffsetProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RevealedOffset.prototype, _RevealedOffsetProxy);
export namespace RevealedOffset { export function implement(args: [options: {offset: number; rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>}], implementation: {}): RevealedOffset {
return constructProxy(_RevealedOffsetProxy, args, implementation) as RevealedOffset; } }
export namespace RevealedOffset { export function clampOffset(options: { currentOffset: number; leadingEdgeOffset: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::RevealedOffset": readonly [] }>; trailingEdgeOffset: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::RevealedOffset": readonly [] }> }): RevealedOffset | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["currentOffset","leadingEdgeOffset","trailingEdgeOffset"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:RevealedOffset.clampOffset", [options.currentOffset, options.leadingEdgeOffset, options.trailingEdgeOffset]);
return _flaxResult as RevealedOffset | null;
} }
_flaxBindInstanceType<RevealedOffset, typeof RevealedOffset>(RevealedOffset, "flax.core/sdk_rendering#type:RevealedOffset", ["dart:core::Object"]);

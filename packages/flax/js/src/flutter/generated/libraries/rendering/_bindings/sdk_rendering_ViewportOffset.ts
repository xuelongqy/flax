// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import type * as upstream3 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters358, _flaxMemberParameters359, _flaxMemberParameters360, _flaxMemberParameters361, _flaxMemberParameters362, _flaxMemberParameters363, _flaxMemberParameters1, _flaxMemberParameters236, _flaxMemberParameters49, _flaxMemberParameters364 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewportOffset extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ViewportOffset: unique symbol;
readonly [_flaxDartTypeValue]: ViewportOffset;

readonly hasListeners: boolean;
readonly pixels: number;
readonly hasPixels: boolean;
readonly userScrollDirection: upstream2.ScrollDirection;
readonly allowImplicitScrolling: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
applyViewportDimension(viewportDimension: number): boolean;
applyContentDimensions(minScrollExtent: number, maxScrollExtent: number): boolean;
correctBy(correction: number): void;
jumpTo(pixels: number): void;
animateTo(to: number, options: {curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }>}): Promise<void>;
moveTo(to: number, options?: {clamp?: boolean | null | undefined; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }> | null | undefined}): Promise<void>;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
defineObject("flax.core/sdk_rendering#type:ViewportOffset", ["hasListeners","pixels","hasPixels","userScrollDirection","allowImplicitScrolling"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ViewportOffset", "object", {"applyViewportDimension":_flaxMemberParameters358,"applyContentDimensions":_flaxMemberParameters359,"correctBy":_flaxMemberParameters360,"jumpTo":_flaxMemberParameters361,"animateTo":_flaxMemberParameters362,"moveTo":_flaxMemberParameters363,"toString":_flaxMemberParameters1,"debugFillDescription":_flaxMemberParameters236}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export namespace _ViewportOffsetFactory {
export function fixed(value: number): ViewportOffset {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ViewportOffset", "fixed", [{"name":"value","required":true,"positional":true}], [value], {}) as ViewportOffset;
}
}
export namespace _ViewportOffsetFactory {
export function zero(): ViewportOffset {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ViewportOffset", "zero", _flaxMemberParameters1, [], {}) as ViewportOffset;
}
}
const _ViewportOffsetProxy = {type: "flax.core/sdk_rendering#type:ViewportOffset", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"addListener":_flaxMemberParameters49,"removeListener":_flaxMemberParameters49,"dispose":_flaxMemberParameters1,"applyViewportDimension":_flaxMemberParameters358,"applyContentDimensions":_flaxMemberParameters359,"correctBy":_flaxMemberParameters360,"jumpTo":_flaxMemberParameters361,"animateTo":_flaxMemberParameters364,"moveTo":_flaxMemberParameters363,"toString":_flaxMemberParameters1,"debugFillDescription":_flaxMemberParameters236}, getters: ["pixels","hasPixels","userScrollDirection","allowImplicitScrolling","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose","moveTo","toString","debugFillDescription"]} as const;
export interface _ViewportOffsetNative extends ViewportOffset {
readonly [_flaxDartTypeValue]: _ViewportOffsetNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
moveTo(to: number, options?: {duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }> | null | undefined; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null | undefined; clamp?: boolean | null | undefined}): Promise<void>;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get hasListeners(): boolean;
}
export abstract class _ViewportOffsetNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewportOffset>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ViewportOffset;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ViewportOffset", readonly [], false];
constructor() { super(_ViewportOffsetProxy, Array.from(arguments)); }
abstract applyViewportDimension(viewportDimension: number): boolean;
abstract applyContentDimensions(minScrollExtent: number, maxScrollExtent: number): boolean;
abstract correctBy(correction: number): void;
abstract jumpTo(pixels: number): void;
abstract animateTo(to: number, options: {duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }>; curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>}): Promise<void>;
abstract get pixels(): number;
abstract get hasPixels(): boolean;
abstract get userScrollDirection(): upstream2.ScrollDirection;
abstract get allowImplicitScrolling(): boolean;
}
_flaxDefineProxyBase(_ViewportOffsetNative.prototype, _ViewportOffsetProxy);
export namespace _ViewportOffsetFactory { export function implement(args: [], implementation: {applyViewportDimension: ((viewportDimension: number) => boolean); applyContentDimensions: ((minScrollExtent: number, maxScrollExtent: number) => boolean); correctBy: ((correction: number) => void); jumpTo: ((pixels: number) => void); animateTo: ((to: number, options: { duration: upstream4.Duration; curve: upstream3.Curve }) => Promise<void>); get pixels(): number; get hasPixels(): boolean; get userScrollDirection(): upstream2.ScrollDirection; get allowImplicitScrolling(): boolean}): ViewportOffset {
return constructProxy(_ViewportOffsetProxy, args, implementation) as ViewportOffset; } }
const _ViewportOffsetBinding = _flaxProxyFactory(_ViewportOffsetFactory, _ViewportOffsetNative) as unknown as typeof _ViewportOffsetFactory & (abstract new() => _ViewportOffsetNative);
export const ViewportOffset: typeof _ViewportOffsetBinding & _FlaxInstanceType<ViewportOffset> & _FlaxDartType<ViewportOffset, readonly ["class", "flax.core/sdk_rendering#type:ViewportOffset", readonly [], false]> = _flaxBindInstanceType<ViewportOffset, typeof _ViewportOffsetBinding>(_ViewportOffsetBinding, "flax.core/sdk_rendering#type:ViewportOffset", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _ViewportOffsetBinding & _FlaxInstanceType<ViewportOffset> & _FlaxDartType<ViewportOffset, readonly ["class", "flax.core/sdk_rendering#type:ViewportOffset", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "pixels" | "hasPixels" | "userScrollDirection" | "allowImplicitScrolling" | "addListener" | "removeListener" | "dispose" | "applyViewportDimension" | "applyContentDimensions" | "correctBy" | "jumpTo" | "animateTo" | "moveTo" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";

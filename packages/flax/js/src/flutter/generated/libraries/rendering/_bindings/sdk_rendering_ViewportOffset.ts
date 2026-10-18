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
const _flaxMemberParameters0 = [{"name":"viewportDimension","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"minScrollExtent","required":true,"positional":true},{"name":"maxScrollExtent","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"correction","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"pixels","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"to","required":true,"positional":true},{"name":"curve","required":true,"positional":false},{"name":"duration","required":true,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"to","required":true,"positional":true},{"name":"clamp","required":false,"positional":false},{"name":"curve","required":false,"positional":false},{"name":"duration","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [] as const;
const _flaxMemberParameters7 = [{"name":"description","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"to","required":true,"positional":true},{"name":"duration","required":true,"positional":false},{"name":"curve","required":true,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewportOffset extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ViewportOffset: unique symbol;
readonly [_flaxDartTypeValue]: ViewportOffset;

}
defineObject("flax.core/sdk_rendering#type:ViewportOffset", ["hasListeners","pixels","hasPixels","userScrollDirection","allowImplicitScrolling"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ViewportOffset", "object", {"applyViewportDimension":_flaxMemberParameters0,"applyContentDimensions":_flaxMemberParameters1,"correctBy":_flaxMemberParameters2,"jumpTo":_flaxMemberParameters3,"animateTo":_flaxMemberParameters4,"moveTo":_flaxMemberParameters5,"toString":_flaxMemberParameters6,"debugFillDescription":_flaxMemberParameters7}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _ViewportOffsetProxy = {type: "flax.core/sdk_rendering#type:ViewportOffset", parameters: [], constructors: {"":[]}, methods: {"addListener":_flaxMemberParameters8,"removeListener":_flaxMemberParameters8,"dispose":_flaxMemberParameters6,"applyViewportDimension":_flaxMemberParameters0,"applyContentDimensions":_flaxMemberParameters1,"correctBy":_flaxMemberParameters2,"jumpTo":_flaxMemberParameters3,"animateTo":_flaxMemberParameters9,"moveTo":_flaxMemberParameters5,"toString":_flaxMemberParameters6,"debugFillDescription":_flaxMemberParameters7}, getters: ["pixels","hasPixels","userScrollDirection","allowImplicitScrolling","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose","moveTo","toString","debugFillDescription"]} as const;
export interface ViewportOffset {
readonly [_flaxDartTypeValue]: ViewportOffset;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
moveTo(to: number, options?: {duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }> | null | undefined; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null | undefined; clamp?: boolean | null | undefined}): Promise<void>;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get hasListeners(): boolean;
}
export abstract class ViewportOffset extends _FlaxProxyBase {
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
_flaxDefineProxyBase(ViewportOffset.prototype, _ViewportOffsetProxy);
export namespace ViewportOffset { export function implement(args: [], implementation: {applyViewportDimension: ((viewportDimension: number) => boolean); applyContentDimensions: ((minScrollExtent: number, maxScrollExtent: number) => boolean); correctBy: ((correction: number) => void); jumpTo: ((pixels: number) => void); animateTo: ((to: number, options: { duration: upstream4.Duration; curve: upstream3.Curve }) => Promise<void>); get pixels(): number; get hasPixels(): boolean; get userScrollDirection(): upstream2.ScrollDirection; get allowImplicitScrolling(): boolean}): ViewportOffset {
return constructProxy(_ViewportOffsetProxy, args, implementation) as ViewportOffset; } }
_flaxBindInstanceType<ViewportOffset, typeof ViewportOffset>(ViewportOffset, "flax.core/sdk_rendering#type:ViewportOffset", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "pixels" | "hasPixels" | "userScrollDirection" | "allowImplicitScrolling" | "addListener" | "removeListener" | "dispose" | "applyViewportDimension" | "applyContentDimensions" | "correctBy" | "jumpTo" | "animateTo" | "moveTo" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";

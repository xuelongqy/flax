// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import { _flaxMemberParameters304, _flaxMemberParameters305, _flaxMemberParameters47, _flaxMemberParameters2 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TabController extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:material_ui/src/tab_controller.dart::TabController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __TabController: unique symbol;
readonly [_flaxDartTypeValue]: TabController;

readonly hasListeners: boolean;
readonly animation: upstream4.Animation<number> | null;
readonly animationDuration: upstream2.Duration;
readonly length: number;
get index(): number;
readonly previousIndex: number;
readonly indexIsChanging: boolean;
get offset(): number;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
animateTo(value: number, options?: {curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined}): void;
set index(value: number);
set offset(value: number);
}
defineObject("flax.material/material#type:TabController", ["hasListeners","animation","animationDuration","length","index","previousIndex","indexIsChanging","offset"], ["index","offset"], _flaxBindingMethods("flax.material/material#type:TabController", "object", {"animateTo":_flaxMemberParameters304}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _TabControllerFactory(options: { initialIndex?: number | undefined; animationDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; length: number; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> }): TabController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TabController", "", [{"name":"initialIndex"},{"name":"animationDuration"},{"name":"length","required":true},{"name":"vsync","required":true}], [], options) as TabController;
}
const _TabControllerProxy = {type: "flax.material/material#type:TabController", parameters: _flaxMemberParameters305, constructors: {"": _flaxMemberParameters305}, methods: {"addListener":_flaxMemberParameters47,"removeListener":_flaxMemberParameters47,"dispose":_flaxMemberParameters2,"animateTo":_flaxMemberParameters304}, getters: ["animation","animationDuration","length","index","previousIndex","indexIsChanging","offset","hasListeners"], setters: ["index","offset"], contextMembers: [], superMembers: ["get:animation","get:animationDuration","get:length","get:index","get:previousIndex","get:indexIsChanging","get:offset","get:hasListeners","set:index","set:offset","addListener","removeListener","dispose","animateTo"]} as const;
export interface _TabControllerNative extends TabController {
readonly [_flaxDartTypeValue]: _TabControllerNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
animateTo(value: number, options?: {duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}): void;
get animation(): upstream4.Animation<number> | null;
get animationDuration(): upstream2.Duration;
get length(): number;
get index(): number;
get previousIndex(): number;
get indexIsChanging(): boolean;
get offset(): number;
get hasListeners(): boolean;
set index(value: number);
set offset(value: number);
}
export abstract class _TabControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TabController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TabController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:TabController", readonly [], false];
constructor(options: {initialIndex?: number | undefined; animationDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; length: number; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>}) { super(_TabControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TabControllerNative.prototype, _TabControllerProxy);
export namespace _TabControllerFactory { export function implement(args: [options: {initialIndex?: number | undefined; animationDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; length: number; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>}], implementation: {}): TabController {
return constructProxy(_TabControllerProxy, args, implementation) as TabController; } }
const _TabControllerBinding = _flaxProxyFactory(_TabControllerFactory, _TabControllerNative) as unknown as typeof _TabControllerFactory & (new(options: {initialIndex?: number | undefined; animationDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; length: number; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>}) => _TabControllerNative);
export const TabController: typeof _TabControllerBinding & _FlaxInstanceType<TabController> & _FlaxDartType<TabController, readonly ["class", "flax.material/material#type:TabController", readonly [], false]> = _flaxBindInstanceType<TabController, typeof _TabControllerBinding>(_TabControllerBinding, "flax.material/material#type:TabController", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _TabControllerBinding & _FlaxInstanceType<TabController> & _FlaxDartType<TabController, readonly ["class", "flax.material/material#type:TabController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "animation" | "animationDuration" | "length" | "index" | "previousIndex" | "indexIsChanging" | "offset" | "addListener" | "removeListener" | "dispose" | "animateTo" | "__flaxBound:package:material_ui/src/tab_controller.dart::TabController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";

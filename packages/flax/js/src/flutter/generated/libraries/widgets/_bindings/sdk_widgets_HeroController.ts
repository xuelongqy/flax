// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { _flaxMemberParameters2, _flaxMemberParameters196, _flaxMemberParameters197, _flaxMemberParameters198, _flaxMemberParameters199 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HeroController extends Omit<upstream0.NavigatorObserver, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/heroes.dart::HeroController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [] }> { readonly __HeroController: unique symbol;
readonly [_flaxDartTypeValue]: HeroController;

}
defineObject("flax.core/sdk_widgets#type:HeroController", ["navigator","createRectTween"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:HeroController", "object", {"dispose":_flaxMemberParameters2}, {}), [], undefined, "flax.core/flutter#type:NavigatorObserver");
const _HeroControllerProxy = {type: "flax.core/sdk_widgets#type:HeroController", parameters: _flaxMemberParameters196, constructors: {"": _flaxMemberParameters196}, methods: {"didPush":_flaxMemberParameters197,"didPop":_flaxMemberParameters197,"didRemove":_flaxMemberParameters197,"didReplace":_flaxMemberParameters198,"didChangeTop":_flaxMemberParameters199,"didStartUserGesture":_flaxMemberParameters197,"didStopUserGesture":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, getters: ["createRectTween","navigator"], setters: [], contextMembers: [], superMembers: ["get:createRectTween","get:navigator","didPush","didPop","didRemove","didReplace","didChangeTop","didStartUserGesture","didStopUserGesture","dispose"]} as const;
export interface HeroController {
readonly [_flaxDartTypeValue]: HeroController;

didPush(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didPop(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didRemove(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didReplace(options?: {newRoute?: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null | undefined; oldRoute?: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null | undefined}): void;
didChangeTop(topRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousTopRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didStartUserGesture(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didStopUserGesture(): void;
dispose(): void;
get createRectTween(): ((begin: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null, end: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null) => upstream1.Tween<upstream2.Rect | null>) | null;
get navigator(): upstream3.NavigatorState | null;
}
export abstract class HeroController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HeroController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HeroController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:HeroController", readonly [], false];
constructor(options?: {createRectTween?: ((begin: upstream2.Rect | null, end: upstream2.Rect | null) => Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null] }>) | null | undefined}) { super(_HeroControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HeroController.prototype, _HeroControllerProxy);
export namespace HeroController { export function implement(args: [options?: {createRectTween?: ((begin: upstream2.Rect | null, end: upstream2.Rect | null) => Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null] }>) | null | undefined}], implementation: {}): HeroController {
return constructProxy(_HeroControllerProxy, args, implementation) as HeroController; } }
_flaxBindInstanceType<HeroController, typeof HeroController>(HeroController, "flax.core/sdk_widgets#type:HeroController", ["flax.core/flutter#type:NavigatorObserver","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "navigator" | "createRectTween" | "didPush" | "didPop" | "didRemove" | "didReplace" | "didChangeTop" | "didStartUserGesture" | "didStopUserGesture" | "dispose" | "__flaxBound:package:flutter/src/widgets/heroes.dart::HeroController" | "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver";

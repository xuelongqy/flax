// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TransitionRoute';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayRoute';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PredictiveBackRoute';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryRoute';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalEdgeBehavior';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream16 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream17 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream18 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import type * as upstream19 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalHistoryEntry';
import type * as upstream21 from '@flax/flutter/widgets/_bindings/sdk_widgets_PopEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PopEntry';
import { _flaxMemberParameters2, _flaxMemberParameters71, _flaxMemberParameters208, _flaxMemberParameters211, _flaxMemberParameters212, _flaxMemberParameters213, _flaxMemberParameters232, _flaxMemberParameters233, _flaxMemberParameters209, _flaxMemberParameters210, _flaxMemberParameters214, _flaxMemberParameters14, _flaxMemberParameters234, _flaxMemberParameters235, _flaxMemberParameters32, _flaxMemberParameters236 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ModalRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.TransitionRoute<T>, _flaxOwnMembers0>, Omit<upstream1.OverlayRoute<T>, _flaxOwnMembers0 | keyof upstream0.TransitionRoute<T>>, Omit<upstream2.Route<T>, _flaxOwnMembers0 | keyof upstream0.TransitionRoute<T> | keyof upstream1.OverlayRoute<T>>, Omit<upstream3.PredictiveBackRoute, _flaxOwnMembers0 | keyof upstream0.TransitionRoute<T> | keyof upstream1.OverlayRoute<T> | keyof upstream2.Route<T>>, Omit<upstream4.LocalHistoryRoute<T>, _flaxOwnMembers0 | keyof upstream0.TransitionRoute<T> | keyof upstream1.OverlayRoute<T> | keyof upstream2.Route<T> | keyof upstream3.PredictiveBackRoute>, Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [T] }> { readonly __ModalRoute: unique symbol;
readonly [_flaxDartTypeValue]: ModalRoute<T>;

readonly completed: Promise<T | null>;
readonly transitionDuration: upstream5.Duration;
readonly reverseTransitionDuration: upstream5.Duration;
readonly opaque: boolean;
readonly allowSnapshotting: boolean;
readonly finishedWhenPopped: boolean;
readonly animation: upstream6.Animation<number> | null;
readonly controller: upstream7.AnimationController | null;
readonly secondaryAnimation: upstream6.Animation<number> | null;
get willDisposeAnimationController(): boolean;
readonly debugLabel: string;
readonly overlayEntries: DartList<upstream8.OverlayEntry>;
readonly requestFocus: boolean;
readonly navigator: upstream9.NavigatorState | null;
readonly settings: upstream10.RouteSettings;
readonly restorationScopeId: upstream11.ValueListenable<string | null>;
readonly popDisposition: upstream12.RoutePopDisposition;
readonly willHandlePopInternally: boolean;
readonly currentResult: T | null;
readonly popped: Promise<T | null>;
readonly isCurrent: boolean;
readonly isFirst: boolean;
readonly hasActiveRouteBelow: boolean;
readonly isActive: boolean;
readonly popGestureEnabled: boolean;
readonly filter: upstream13.ImageFilter | null;
readonly traversalEdgeBehavior: upstream14.TraversalEdgeBehavior | null;
readonly directionalTraversalEdgeBehavior: upstream14.TraversalEdgeBehavior | null;
readonly delegatedTransition: ((context: upstream15.BuildContext, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, secondaryAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null;
get receivedTransition(): ((context: upstream15.BuildContext, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, secondaryAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null;
readonly barrierDismissible: boolean;
readonly semanticsDismissible: boolean;
readonly barrierColor: upstream16.Color | null;
readonly barrierLabel: string | null;
readonly barrierCurve: upstream17.Curve;
readonly maintainState: boolean;
readonly popGestureInProgress: boolean;
get offstage(): boolean;
readonly subtreeContext: upstream15.BuildContext | null;
readonly hasScopedWillPopCallback: boolean;
readonly canPop: boolean;
readonly impliesAppBarDismissal: boolean;
readonly fullscreenDialog: boolean;
debugTransitionCompleted(): boolean;
createAnimationController(): upstream7.AnimationController;
createAnimation(): upstream6.Animation<number>;
createSimulation(options: {forward: boolean}): upstream18.Simulation | null;
install(): void;
didPush(): upstream19.TickerFuture;
didAdd(): void;
didReplace(oldRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didPop(result: (T | DartInput<T>) | null): boolean;
didPopNext(nextRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>): void;
didChangeNext(nextRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
canTransitionTo(nextRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [] }>): boolean;
canTransitionFrom(previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [] }>): boolean;
handleStartBackGesture(options?: {progress?: number | undefined}): void;
handleUpdateBackGestureProgress(options: {progress: number}): void;
handleCancelBackGesture(): void;
handleCommitBackGesture(): void;
dispose(): void;
toString(): string;
createOverlayEntries(): DartIterable<upstream8.OverlayEntry>;
willPop(): Promise<upstream12.RoutePopDisposition>;
onPopInvoked(didPop: boolean): void;
onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
didComplete(result: (T | DartInput<T>) | null): void;
didChangePrevious(previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
changedInternalState(): void;
changedExternalState(): void;
addLocalHistoryEntry(entry: Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [] }>): void;
removeLocalHistoryEntry(entry: Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryEntry": readonly [] }>): void;
setState(fn: (() => void)): void;
buildPage(context: upstream15.BuildContext, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, secondaryAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): Widget;
buildTransitions(context: upstream15.BuildContext, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, secondaryAnimation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, child: Widget): Widget;
addScopedWillPopCallback(callback: (() => Promise<boolean>)): void;
removeScopedWillPopCallback(callback: (() => Promise<boolean>)): void;
registerPopEntry(popEntry: Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::PopEntry": readonly [unknown | null] }>): void;
unregisterPopEntry(popEntry: Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::PopEntry": readonly [unknown | null] }>): void;
buildModalBarrier(): Widget;
set willDisposeAnimationController(value: boolean);
set receivedTransition(value: ((context: upstream15.BuildContext, animation: upstream6.Animation<number>, secondaryAnimation: upstream6.Animation<number>, allowSnapshotting: boolean, child: Widget | null) => Widget | null) | null);
set offstage(value: boolean);
}
defineObject("flax.core/sdk_widgets#type:ModalRoute", ["completed","transitionDuration","reverseTransitionDuration","opaque","allowSnapshotting","finishedWhenPopped","animation","controller","secondaryAnimation","willDisposeAnimationController","debugLabel","overlayEntries","requestFocus","navigator","settings","restorationScopeId","popDisposition","willHandlePopInternally","currentResult","popped","isCurrent","isFirst","hasActiveRouteBelow","isActive","popGestureEnabled","filter","traversalEdgeBehavior","directionalTraversalEdgeBehavior","delegatedTransition","receivedTransition","barrierDismissible","semanticsDismissible","barrierColor","barrierLabel","barrierCurve","maintainState","popGestureInProgress","offstage","subtreeContext","hasScopedWillPopCallback","canPop","impliesAppBarDismissal","fullscreenDialog"], ["willDisposeAnimationController","receivedTransition","offstage"], _flaxBindingMethods("flax.core/sdk_widgets#type:ModalRoute", "object", {"debugTransitionCompleted":_flaxMemberParameters2,"createAnimationController":_flaxMemberParameters2,"createAnimation":_flaxMemberParameters2,"createSimulation":_flaxMemberParameters71,"install":_flaxMemberParameters2,"didPush":_flaxMemberParameters2,"didAdd":_flaxMemberParameters2,"didReplace":_flaxMemberParameters208,"didPop":_flaxMemberParameters211,"didPopNext":_flaxMemberParameters212,"didChangeNext":_flaxMemberParameters212,"canTransitionTo":_flaxMemberParameters212,"canTransitionFrom":_flaxMemberParameters213,"handleStartBackGesture":_flaxMemberParameters232,"handleUpdateBackGestureProgress":_flaxMemberParameters233,"handleCancelBackGesture":_flaxMemberParameters2,"handleCommitBackGesture":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"createOverlayEntries":_flaxMemberParameters2,"willPop":_flaxMemberParameters2,"onPopInvoked":_flaxMemberParameters209,"onPopInvokedWithResult":_flaxMemberParameters210,"didComplete":_flaxMemberParameters211,"didChangePrevious":_flaxMemberParameters213,"changedInternalState":_flaxMemberParameters2,"changedExternalState":_flaxMemberParameters2,"addLocalHistoryEntry":_flaxMemberParameters214,"removeLocalHistoryEntry":_flaxMemberParameters214,"setState":_flaxMemberParameters14,"buildPage":_flaxMemberParameters234,"buildTransitions":_flaxMemberParameters235,"addScopedWillPopCallback":_flaxMemberParameters32,"removeScopedWillPopCallback":_flaxMemberParameters32,"registerPopEntry":_flaxMemberParameters236,"unregisterPopEntry":_flaxMemberParameters236,"buildModalBarrier":_flaxMemberParameters2}, {}), []);
export namespace _ModalRouteFactory { function _flaxDefault_of<T extends unknown | null = unknown | null>(context: upstream15.BuildContext): ModalRoute<T> | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = constructDeferredObject("flax.core/sdk_widgets#type:ModalRoute", "of", [{"name":"context","required":true,"positional":true}], [context], {}) as ModalRoute<T> | null;
return _flaxResult as ModalRoute<T> | null;
}
export const of = _flaxDefineDartCallTypes(_flaxDefault_of, {"id":"flax.core/sdk_widgets#function:ModalRoute.of","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_of, _FlaxSignature1>;
}
export namespace _ModalRouteFactory { export function isCurrentOf(context: upstream15.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ModalRoute.isCurrentOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _ModalRouteFactory { export function canPopOf(context: upstream15.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ModalRoute.canPopOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _ModalRouteFactory { export function settingsOf(context: upstream15.BuildContext): upstream10.RouteSettings | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ModalRoute.settingsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.RouteSettings | null;
} }
export namespace _ModalRouteFactory { export function isActiveOf(context: upstream15.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ModalRoute.isActiveOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _ModalRouteFactory { export function isFirstOf(context: upstream15.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ModalRoute.isFirstOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _ModalRouteFactory { export function opaqueOf(context: upstream15.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ModalRoute.opaqueOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _ModalRouteFactory { export function popDispositionOf(context: upstream15.BuildContext): upstream12.RoutePopDisposition | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ModalRoute.popDispositionOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream12.RoutePopDisposition | null;
} }
export namespace _ModalRouteFactory { export function withName(name: string): ((route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>) => boolean) {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ModalRoute.withName", [name]);
return _flaxResult as ((route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>) => boolean);
} }
export const ModalRoute: typeof _ModalRouteFactory & _FlaxInstanceType<ModalRoute<unknown | null>> & _FlaxDartType<ModalRoute<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:ModalRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ModalRoute<unknown | null>, typeof _ModalRouteFactory>(_ModalRouteFactory, "flax.core/sdk_widgets#type:ModalRoute", ["flax.core/sdk_widgets#type:TransitionRoute","flax.core/sdk_widgets#type:OverlayRoute","flax.core/flutter#type:Route","package:flutter/src/widgets/navigator.dart::_RoutePlaceholder","dart:core::Object","flax.core/sdk_widgets#type:PredictiveBackRoute","flax.core/sdk_widgets#type:LocalHistoryRoute"]) as typeof _ModalRouteFactory & _FlaxInstanceType<ModalRoute<unknown | null>> & _FlaxDartType<ModalRoute<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:ModalRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ModalRoute, "flax.core/sdk_widgets#type:ModalRoute", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "completed" | "transitionDuration" | "reverseTransitionDuration" | "opaque" | "allowSnapshotting" | "finishedWhenPopped" | "animation" | "controller" | "secondaryAnimation" | "willDisposeAnimationController" | "debugLabel" | "overlayEntries" | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "popDisposition" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "popGestureEnabled" | "filter" | "traversalEdgeBehavior" | "directionalTraversalEdgeBehavior" | "delegatedTransition" | "receivedTransition" | "barrierDismissible" | "semanticsDismissible" | "barrierColor" | "barrierLabel" | "barrierCurve" | "maintainState" | "popGestureInProgress" | "offstage" | "subtreeContext" | "hasScopedWillPopCallback" | "canPop" | "impliesAppBarDismissal" | "fullscreenDialog" | "debugTransitionCompleted" | "createAnimationController" | "createAnimation" | "createSimulation" | "install" | "didPush" | "didAdd" | "didReplace" | "didPop" | "didPopNext" | "didChangeNext" | "canTransitionTo" | "canTransitionFrom" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCancelBackGesture" | "handleCommitBackGesture" | "dispose" | "toString" | "createOverlayEntries" | "willPop" | "onPopInvoked" | "onPopInvokedWithResult" | "didComplete" | "didChangePrevious" | "changedInternalState" | "changedExternalState" | "addLocalHistoryEntry" | "removeLocalHistoryEntry" | "setState" | "buildPage" | "buildTransitions" | "addScopedWillPopCallback" | "removeScopedWillPopCallback" | "registerPopEntry" | "unregisterPopEntry" | "buildModalBarrier" | "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder" | "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute" | "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: ModalRoute<_Selected0>;} & _FlaxInstanceType<ModalRoute<_Selected0>> & _FlaxDartType<ModalRoute<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream15.BuildContext) => ModalRoute<_Selected0> | null : never : never; }

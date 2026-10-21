// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream2 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import { _flaxMemberParameters142, _flaxMemberParameters162, _flaxMemberParameters163, _flaxMemberParameters44, _flaxMemberParameters164, _flaxMemberParameters165, _flaxMemberParameters166, _flaxMemberParameters167, _flaxMemberParameters168, _flaxMemberParameters169, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PageScrollPhysics extends Omit<upstream0.ScrollPhysics, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/page_view.dart::PageScrollPhysics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> { readonly __PageScrollPhysics: unique symbol;
readonly [_flaxDartTypeValue]: PageScrollPhysics;

readonly parent: upstream0.ScrollPhysics | null;
readonly spring: upstream1.SpringDescription;
readonly tolerance: upstream2.Tolerance;
readonly minFlingDistance: number;
readonly minFlingVelocity: number;
readonly maxFlingVelocity: number;
readonly dragStartDistanceMotionThreshold: number | null;
readonly allowImplicitScrolling: boolean;
readonly allowUserScrolling: boolean;
buildParent(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): upstream0.ScrollPhysics | null;
applyTo(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): PageScrollPhysics;
applyPhysicsToUserOffset(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, offset: number): number;
shouldAcceptUserOffset(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): boolean;
recommendDeferredLoading(velocity: number, metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext): boolean;
applyBoundaryConditions(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, value: number): number;
adjustPositionForNewDimensions(options: {isScrolling: boolean; newPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; oldPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; velocity: number}): number;
createBallisticSimulation(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, velocity: number): upstream5.Simulation | null;
toleranceFor(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): upstream2.Tolerance;
carriedMomentum(existingVelocity: number): number;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:PageScrollPhysics", ["parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowImplicitScrolling","allowUserScrolling"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PageScrollPhysics", "object", {"applyTo":_flaxMemberParameters142}, {}), [], undefined, "flax.core/flutter#type:ScrollPhysics");
export function _PageScrollPhysicsFactory(options: { parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined } = {}): PageScrollPhysics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:PageScrollPhysics", "", [{"name":"parent"}], [], options) as PageScrollPhysics;
}
const _PageScrollPhysicsProxy = {type: "flax.core/sdk_widgets#type:PageScrollPhysics", parameters: _flaxMemberParameters162, constructors: {"": _flaxMemberParameters162}, methods: {"buildParent":_flaxMemberParameters142,"applyTo":_flaxMemberParameters142,"applyPhysicsToUserOffset":_flaxMemberParameters163,"shouldAcceptUserOffset":_flaxMemberParameters44,"recommendDeferredLoading":_flaxMemberParameters164,"applyBoundaryConditions":_flaxMemberParameters165,"adjustPositionForNewDimensions":_flaxMemberParameters166,"createBallisticSimulation":_flaxMemberParameters167,"toleranceFor":_flaxMemberParameters168,"carriedMomentum":_flaxMemberParameters169,"toString":_flaxMemberParameters2}, getters: ["allowImplicitScrolling","parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowUserScrolling"], setters: [], contextMembers: [], superMembers: ["get:allowImplicitScrolling","get:parent","get:spring","get:tolerance","get:minFlingDistance","get:minFlingVelocity","get:maxFlingVelocity","get:dragStartDistanceMotionThreshold","get:allowUserScrolling","buildParent","applyTo","applyPhysicsToUserOffset","shouldAcceptUserOffset","recommendDeferredLoading","applyBoundaryConditions","adjustPositionForNewDimensions","createBallisticSimulation","toleranceFor","carriedMomentum","toString"]} as const;
export interface _PageScrollPhysicsNative extends PageScrollPhysics {
readonly [_flaxDartTypeValue]: _PageScrollPhysicsNative;

buildParent(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): upstream0.ScrollPhysics | null;
applyTo(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): PageScrollPhysics;
applyPhysicsToUserOffset(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, offset: number): number;
shouldAcceptUserOffset(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): boolean;
recommendDeferredLoading(velocity: number, metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext): boolean;
applyBoundaryConditions(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, value: number): number;
adjustPositionForNewDimensions(options: {oldPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; newPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; isScrolling: boolean; velocity: number}): number;
createBallisticSimulation(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, velocity: number): upstream5.Simulation | null;
toleranceFor(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): upstream2.Tolerance;
carriedMomentum(existingVelocity: number): number;
toString(): string;
get allowImplicitScrolling(): boolean;
get parent(): upstream0.ScrollPhysics | null;
get spring(): upstream1.SpringDescription;
get tolerance(): upstream2.Tolerance;
get minFlingDistance(): number;
get minFlingVelocity(): number;
get maxFlingVelocity(): number;
get dragStartDistanceMotionThreshold(): number | null;
get allowUserScrolling(): boolean;
}
export abstract class _PageScrollPhysicsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageScrollPhysics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PageScrollPhysics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageScrollPhysics", readonly [], false];
constructor(options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}) { super(_PageScrollPhysicsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PageScrollPhysicsNative.prototype, _PageScrollPhysicsProxy);
export namespace _PageScrollPhysicsFactory { export function implement(args: [options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}], implementation: {}): PageScrollPhysics {
return constructProxy(_PageScrollPhysicsProxy, args, implementation) as PageScrollPhysics; } }
const _PageScrollPhysicsBinding = _flaxProxyFactory(_PageScrollPhysicsFactory, _PageScrollPhysicsNative) as unknown as typeof _PageScrollPhysicsFactory & (new(options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}) => _PageScrollPhysicsNative);
export const PageScrollPhysics: typeof _PageScrollPhysicsBinding & _FlaxInstanceType<PageScrollPhysics> & _FlaxDartType<PageScrollPhysics, readonly ["class", "flax.core/sdk_widgets#type:PageScrollPhysics", readonly [], false]> = _flaxBindInstanceType<PageScrollPhysics, typeof _PageScrollPhysicsBinding>(_PageScrollPhysicsBinding, "flax.core/sdk_widgets#type:PageScrollPhysics", ["flax.core/flutter#type:ScrollPhysics","dart:core::Object"]) as typeof _PageScrollPhysicsBinding & _FlaxInstanceType<PageScrollPhysics> & _FlaxDartType<PageScrollPhysics, readonly ["class", "flax.core/sdk_widgets#type:PageScrollPhysics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "parent" | "spring" | "tolerance" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "applyPhysicsToUserOffset" | "shouldAcceptUserOffset" | "recommendDeferredLoading" | "applyBoundaryConditions" | "adjustPositionForNewDimensions" | "createBallisticSimulation" | "toleranceFor" | "carriedMomentum" | "toString" | "__flaxBound:package:flutter/src/widgets/page_view.dart::PageScrollPhysics" | "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics";

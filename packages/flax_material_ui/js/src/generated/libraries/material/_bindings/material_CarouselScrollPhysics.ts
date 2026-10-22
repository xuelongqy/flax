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
import { _flaxMemberParameters60, _flaxMemberParameters61, _flaxMemberParameters62, _flaxMemberParameters57, _flaxMemberParameters63, _flaxMemberParameters64, _flaxMemberParameters65, _flaxMemberParameters66, _flaxMemberParameters67, _flaxMemberParameters68, _flaxMemberParameters4 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CarouselScrollPhysics extends Omit<upstream0.ScrollPhysics, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/carousel.dart::CarouselScrollPhysics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> { readonly __CarouselScrollPhysics: unique symbol;
readonly [_flaxDartTypeValue]: CarouselScrollPhysics;

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
applyTo(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): CarouselScrollPhysics;
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
defineObject("flax.material/material#type:CarouselScrollPhysics", ["parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowImplicitScrolling","allowUserScrolling"], [], _flaxBindingMethods("flax.material/material#type:CarouselScrollPhysics", "object", {"applyTo":_flaxMemberParameters60}, {}), [], undefined, "flax.core/flutter#type:ScrollPhysics");
export function _CarouselScrollPhysicsFactory(options: { parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined } = {}): CarouselScrollPhysics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:CarouselScrollPhysics", "", [{"name":"parent"}], [], options) as CarouselScrollPhysics;
}
const _CarouselScrollPhysicsProxy = {type: "flax.material/material#type:CarouselScrollPhysics", parameters: _flaxMemberParameters61, constructors: {"": _flaxMemberParameters61}, methods: {"buildParent":_flaxMemberParameters60,"applyTo":_flaxMemberParameters60,"applyPhysicsToUserOffset":_flaxMemberParameters62,"shouldAcceptUserOffset":_flaxMemberParameters57,"recommendDeferredLoading":_flaxMemberParameters63,"applyBoundaryConditions":_flaxMemberParameters64,"adjustPositionForNewDimensions":_flaxMemberParameters65,"createBallisticSimulation":_flaxMemberParameters66,"toleranceFor":_flaxMemberParameters67,"carriedMomentum":_flaxMemberParameters68,"toString":_flaxMemberParameters4}, getters: ["allowImplicitScrolling","parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowUserScrolling"], setters: [], contextMembers: [], superMembers: ["get:allowImplicitScrolling","get:parent","get:spring","get:tolerance","get:minFlingDistance","get:minFlingVelocity","get:maxFlingVelocity","get:dragStartDistanceMotionThreshold","get:allowUserScrolling","buildParent","applyTo","applyPhysicsToUserOffset","shouldAcceptUserOffset","recommendDeferredLoading","applyBoundaryConditions","adjustPositionForNewDimensions","createBallisticSimulation","toleranceFor","carriedMomentum","toString"]} as const;
export interface _CarouselScrollPhysicsNative extends CarouselScrollPhysics {
readonly [_flaxDartTypeValue]: _CarouselScrollPhysicsNative;

buildParent(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): upstream0.ScrollPhysics | null;
applyTo(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): CarouselScrollPhysics;
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
export abstract class _CarouselScrollPhysicsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CarouselScrollPhysics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CarouselScrollPhysics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:CarouselScrollPhysics", readonly [], false];
constructor(options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}) { super(_CarouselScrollPhysicsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CarouselScrollPhysicsNative.prototype, _CarouselScrollPhysicsProxy);
export namespace _CarouselScrollPhysicsFactory { export function implement(args: [options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}], implementation: {}): CarouselScrollPhysics {
return constructProxy(_CarouselScrollPhysicsProxy, args, implementation) as CarouselScrollPhysics; } }
const _CarouselScrollPhysicsBinding = _flaxProxyFactory(_CarouselScrollPhysicsFactory, _CarouselScrollPhysicsNative) as unknown as typeof _CarouselScrollPhysicsFactory & (new(options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}) => _CarouselScrollPhysicsNative);
export const CarouselScrollPhysics: typeof _CarouselScrollPhysicsBinding & _FlaxInstanceType<CarouselScrollPhysics> & _FlaxDartType<CarouselScrollPhysics, readonly ["class", "flax.material/material#type:CarouselScrollPhysics", readonly [], false]> = _flaxBindInstanceType<CarouselScrollPhysics, typeof _CarouselScrollPhysicsBinding>(_CarouselScrollPhysicsBinding, "flax.material/material#type:CarouselScrollPhysics", ["flax.core/flutter#type:ScrollPhysics","dart:core::Object"]) as typeof _CarouselScrollPhysicsBinding & _FlaxInstanceType<CarouselScrollPhysics> & _FlaxDartType<CarouselScrollPhysics, readonly ["class", "flax.material/material#type:CarouselScrollPhysics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "parent" | "spring" | "tolerance" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "applyPhysicsToUserOffset" | "shouldAcceptUserOffset" | "recommendDeferredLoading" | "applyBoundaryConditions" | "adjustPositionForNewDimensions" | "createBallisticSimulation" | "toleranceFor" | "carriedMomentum" | "toString" | "__flaxBound:package:material_ui/src/carousel.dart::CarouselScrollPhysics" | "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics";

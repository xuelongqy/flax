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
import { _flaxMemberParameters128, _flaxMemberParameters147, _flaxMemberParameters148, _flaxMemberParameters39, _flaxMemberParameters149, _flaxMemberParameters150, _flaxMemberParameters151, _flaxMemberParameters152, _flaxMemberParameters153, _flaxMemberParameters154, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FixedExtentScrollPhysics extends Omit<upstream0.ScrollPhysics, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentScrollPhysics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> { readonly __FixedExtentScrollPhysics: unique symbol;
readonly [_flaxDartTypeValue]: FixedExtentScrollPhysics;

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
applyTo(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): FixedExtentScrollPhysics;
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
defineObject("flax.core/sdk_widgets#type:FixedExtentScrollPhysics", ["parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowImplicitScrolling","allowUserScrolling"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FixedExtentScrollPhysics", "object", {"applyTo":_flaxMemberParameters128}, {}), [], undefined, "flax.core/flutter#type:ScrollPhysics");
export function _FixedExtentScrollPhysicsFactory(options: { parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined } = {}): FixedExtentScrollPhysics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", "", [{"name":"parent"}], [], options) as FixedExtentScrollPhysics;
}
const _FixedExtentScrollPhysicsProxy = {type: "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", parameters: _flaxMemberParameters147, constructors: {"": _flaxMemberParameters147}, methods: {"buildParent":_flaxMemberParameters128,"applyTo":_flaxMemberParameters128,"applyPhysicsToUserOffset":_flaxMemberParameters148,"shouldAcceptUserOffset":_flaxMemberParameters39,"recommendDeferredLoading":_flaxMemberParameters149,"applyBoundaryConditions":_flaxMemberParameters150,"adjustPositionForNewDimensions":_flaxMemberParameters151,"createBallisticSimulation":_flaxMemberParameters152,"toleranceFor":_flaxMemberParameters153,"carriedMomentum":_flaxMemberParameters154,"toString":_flaxMemberParameters2}, getters: ["parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowImplicitScrolling","allowUserScrolling"], setters: [], contextMembers: [], superMembers: ["get:parent","get:spring","get:tolerance","get:minFlingDistance","get:minFlingVelocity","get:maxFlingVelocity","get:dragStartDistanceMotionThreshold","get:allowImplicitScrolling","get:allowUserScrolling","buildParent","applyTo","applyPhysicsToUserOffset","shouldAcceptUserOffset","recommendDeferredLoading","applyBoundaryConditions","adjustPositionForNewDimensions","createBallisticSimulation","toleranceFor","carriedMomentum","toString"]} as const;
export interface _FixedExtentScrollPhysicsNative extends FixedExtentScrollPhysics {
readonly [_flaxDartTypeValue]: _FixedExtentScrollPhysicsNative;

buildParent(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): upstream0.ScrollPhysics | null;
applyTo(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): FixedExtentScrollPhysics;
applyPhysicsToUserOffset(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, offset: number): number;
shouldAcceptUserOffset(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): boolean;
recommendDeferredLoading(velocity: number, metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream4.BuildContext): boolean;
applyBoundaryConditions(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, value: number): number;
adjustPositionForNewDimensions(options: {oldPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; newPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; isScrolling: boolean; velocity: number}): number;
createBallisticSimulation(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, velocity: number): upstream5.Simulation | null;
toleranceFor(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): upstream2.Tolerance;
carriedMomentum(existingVelocity: number): number;
toString(): string;
get parent(): upstream0.ScrollPhysics | null;
get spring(): upstream1.SpringDescription;
get tolerance(): upstream2.Tolerance;
get minFlingDistance(): number;
get minFlingVelocity(): number;
get maxFlingVelocity(): number;
get dragStartDistanceMotionThreshold(): number | null;
get allowImplicitScrolling(): boolean;
get allowUserScrolling(): boolean;
}
export abstract class _FixedExtentScrollPhysicsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FixedExtentScrollPhysics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FixedExtentScrollPhysics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", readonly [], false];
constructor(options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}) { super(_FixedExtentScrollPhysicsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_FixedExtentScrollPhysicsNative.prototype, _FixedExtentScrollPhysicsProxy);
export namespace _FixedExtentScrollPhysicsFactory { export function implement(args: [options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}], implementation: {}): FixedExtentScrollPhysics {
return constructProxy(_FixedExtentScrollPhysicsProxy, args, implementation) as FixedExtentScrollPhysics; } }
const _FixedExtentScrollPhysicsBinding = _flaxProxyFactory(_FixedExtentScrollPhysicsFactory, _FixedExtentScrollPhysicsNative) as unknown as typeof _FixedExtentScrollPhysicsFactory & (new(options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}) => _FixedExtentScrollPhysicsNative);
export const FixedExtentScrollPhysics: typeof _FixedExtentScrollPhysicsBinding & _FlaxInstanceType<FixedExtentScrollPhysics> & _FlaxDartType<FixedExtentScrollPhysics, readonly ["class", "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", readonly [], false]> = _flaxBindInstanceType<FixedExtentScrollPhysics, typeof _FixedExtentScrollPhysicsBinding>(_FixedExtentScrollPhysicsBinding, "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", ["flax.core/flutter#type:ScrollPhysics","dart:core::Object"]) as typeof _FixedExtentScrollPhysicsBinding & _FlaxInstanceType<FixedExtentScrollPhysics> & _FlaxDartType<FixedExtentScrollPhysics, readonly ["class", "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "parent" | "spring" | "tolerance" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "applyPhysicsToUserOffset" | "shouldAcceptUserOffset" | "recommendDeferredLoading" | "applyBoundaryConditions" | "adjustPositionForNewDimensions" | "createBallisticSimulation" | "toleranceFor" | "carriedMomentum" | "toString" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentScrollPhysics" | "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics";

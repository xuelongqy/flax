// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream1 from '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import '@flax/flutter/physics/_bindings/sdk_physics_Tolerance';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import { _flaxMemberParameters6, _flaxMemberParameters177, _flaxMemberParameters174, _flaxMemberParameters178, _flaxMemberParameters179, _flaxMemberParameters180, _flaxMemberParameters181, _flaxMemberParameters182, _flaxMemberParameters183, _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollPhysics extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> { readonly __ScrollPhysics: unique symbol;
readonly [_flaxDartTypeValue]: ScrollPhysics;

readonly parent: ScrollPhysics | null;
readonly spring: upstream0.SpringDescription;
readonly tolerance: upstream1.Tolerance;
readonly minFlingDistance: number;
readonly minFlingVelocity: number;
readonly maxFlingVelocity: number;
readonly dragStartDistanceMotionThreshold: number | null;
readonly allowImplicitScrolling: boolean;
readonly allowUserScrolling: boolean;
buildParent(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): ScrollPhysics | null;
applyTo(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): ScrollPhysics;
applyPhysicsToUserOffset(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, offset: number): number;
shouldAcceptUserOffset(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): boolean;
recommendDeferredLoading(velocity: number, metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, context: upstream3.BuildContext): boolean;
applyBoundaryConditions(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, value: number): number;
adjustPositionForNewDimensions(options: {isScrolling: boolean; newPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; oldPosition: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; velocity: number}): number;
createBallisticSimulation(position: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>, velocity: number): upstream4.Simulation | null;
toleranceFor(metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>): upstream1.Tolerance;
carriedMomentum(existingVelocity: number): number;
toString(): string;
}
defineObject("flax.core/flutter#type:ScrollPhysics", ["parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowImplicitScrolling","allowUserScrolling"], [], _flaxBindingMethods("flax.core/flutter#type:ScrollPhysics", "object", {"buildParent":_flaxMemberParameters6,"applyTo":_flaxMemberParameters6,"applyPhysicsToUserOffset":_flaxMemberParameters177,"shouldAcceptUserOffset":_flaxMemberParameters174,"recommendDeferredLoading":_flaxMemberParameters178,"applyBoundaryConditions":_flaxMemberParameters179,"adjustPositionForNewDimensions":_flaxMemberParameters180,"createBallisticSimulation":_flaxMemberParameters181,"toleranceFor":_flaxMemberParameters182,"carriedMomentum":_flaxMemberParameters183,"toString":_flaxMemberParameters4}, {}), []);
export function _ScrollPhysicsFactory(options: { parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined } = {}): ScrollPhysics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ScrollPhysics", "", [{"name":"parent"}], [], options) as ScrollPhysics;
}
export const ScrollPhysics: typeof _ScrollPhysicsFactory & _FlaxInstanceType<ScrollPhysics> & _FlaxDartType<ScrollPhysics, readonly ["class", "flax.core/flutter#type:ScrollPhysics", readonly [], false]> = _flaxBindInstanceType<ScrollPhysics, typeof _ScrollPhysicsFactory>(_ScrollPhysicsFactory, "flax.core/flutter#type:ScrollPhysics", ["dart:core::Object"]) as typeof _ScrollPhysicsFactory & _FlaxInstanceType<ScrollPhysics> & _FlaxDartType<ScrollPhysics, readonly ["class", "flax.core/flutter#type:ScrollPhysics", readonly [], false]>;

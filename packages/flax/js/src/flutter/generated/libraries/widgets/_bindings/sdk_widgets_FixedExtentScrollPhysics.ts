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
const _flaxMemberParameters0 = [{"name":"ancestor","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"parent"}] as const;
const _flaxMemberParameters2 = [{"name":"position","required":true,"positional":true},{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"velocity","required":true,"positional":true},{"name":"metrics","required":true,"positional":true},{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters5 = [{"name":"position","required":true,"positional":true},{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"isScrolling","required":true},{"name":"newPosition","required":true},{"name":"oldPosition","required":true},{"name":"velocity","required":true}] as const;
const _flaxMemberParameters7 = [{"name":"position","required":true,"positional":true},{"name":"velocity","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"metrics","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"existingVelocity","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FixedExtentScrollPhysics extends Omit<upstream0.ScrollPhysics, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentScrollPhysics": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> { readonly __FixedExtentScrollPhysics: unique symbol;
readonly [_flaxDartTypeValue]: FixedExtentScrollPhysics;

}
defineObject("flax.core/sdk_widgets#type:FixedExtentScrollPhysics", ["parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowImplicitScrolling","allowUserScrolling"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FixedExtentScrollPhysics", "object", {"applyTo":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:ScrollPhysics");
const _FixedExtentScrollPhysicsProxy = {type: "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"buildParent":_flaxMemberParameters0,"applyTo":_flaxMemberParameters0,"applyPhysicsToUserOffset":_flaxMemberParameters2,"shouldAcceptUserOffset":_flaxMemberParameters3,"recommendDeferredLoading":_flaxMemberParameters4,"applyBoundaryConditions":_flaxMemberParameters5,"adjustPositionForNewDimensions":_flaxMemberParameters6,"createBallisticSimulation":_flaxMemberParameters7,"toleranceFor":_flaxMemberParameters8,"carriedMomentum":_flaxMemberParameters9,"toString":_flaxMemberParameters10}, getters: ["parent","spring","tolerance","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowImplicitScrolling","allowUserScrolling"], setters: [], contextMembers: [], superMembers: ["get:parent","get:spring","get:tolerance","get:minFlingDistance","get:minFlingVelocity","get:maxFlingVelocity","get:dragStartDistanceMotionThreshold","get:allowImplicitScrolling","get:allowUserScrolling","buildParent","applyTo","applyPhysicsToUserOffset","shouldAcceptUserOffset","recommendDeferredLoading","applyBoundaryConditions","adjustPositionForNewDimensions","createBallisticSimulation","toleranceFor","carriedMomentum","toString"]} as const;
export interface FixedExtentScrollPhysics {
readonly [_flaxDartTypeValue]: FixedExtentScrollPhysics;

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
export abstract class FixedExtentScrollPhysics extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FixedExtentScrollPhysics>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FixedExtentScrollPhysics;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", readonly [], false];
constructor(options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}) { super(_FixedExtentScrollPhysicsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FixedExtentScrollPhysics.prototype, _FixedExtentScrollPhysicsProxy);
export namespace FixedExtentScrollPhysics { export function implement(args: [options?: {parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined}], implementation: {}): FixedExtentScrollPhysics {
return constructProxy(_FixedExtentScrollPhysicsProxy, args, implementation) as FixedExtentScrollPhysics; } }
_flaxBindInstanceType<FixedExtentScrollPhysics, typeof FixedExtentScrollPhysics>(FixedExtentScrollPhysics, "flax.core/sdk_widgets#type:FixedExtentScrollPhysics", ["flax.core/flutter#type:ScrollPhysics","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "parent" | "spring" | "tolerance" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "applyPhysicsToUserOffset" | "shouldAcceptUserOffset" | "recommendDeferredLoading" | "applyBoundaryConditions" | "adjustPositionForNewDimensions" | "createBallisticSimulation" | "toleranceFor" | "carriedMomentum" | "toString" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::FixedExtentScrollPhysics" | "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics";

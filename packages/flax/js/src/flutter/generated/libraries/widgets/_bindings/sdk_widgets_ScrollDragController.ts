// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragEndDetails';
const _flaxMemberParameters0 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"details","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollDragController extends Omit<upstream0.Drag, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }> { readonly __ScrollDragController: unique symbol;
readonly [_flaxDartTypeValue]: ScrollDragController;

}
defineObject("flax.core/sdk_widgets#type:ScrollDragController", ["delegate","onDragCanceled","carriedVelocity","motionStartDistanceThreshold","lastDetails"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollDragController", "object", {"updateDelegate":_flaxMemberParameters0,"dispose":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_gestures#type:Drag");
const _ScrollDragControllerProxy = {type: "flax.core/sdk_widgets#type:ScrollDragController", parameters: [{"name":"delegate","required":true,"positional":false},{"name":"details","required":true,"positional":false},{"name":"onDragCanceled","required":false,"positional":false},{"name":"carriedVelocity","required":false,"positional":false},{"name":"motionStartDistanceThreshold","required":false,"positional":false}], constructors: {"":[{"name":"delegate","required":true,"positional":false},{"name":"details","required":true,"positional":false},{"name":"onDragCanceled","required":false,"positional":false},{"name":"carriedVelocity","required":false,"positional":false},{"name":"motionStartDistanceThreshold","required":false,"positional":false}]}, methods: {"update":_flaxMemberParameters2,"end":_flaxMemberParameters2,"cancel":_flaxMemberParameters1,"updateDelegate":_flaxMemberParameters0,"dispose":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["delegate","onDragCanceled","carriedVelocity","motionStartDistanceThreshold","lastDetails"], setters: [], contextMembers: [], superMembers: ["get:delegate","get:onDragCanceled","get:carriedVelocity","get:motionStartDistanceThreshold","get:lastDetails","update","end","cancel","updateDelegate","dispose","toString"]} as const;
export interface ScrollDragController {
readonly [_flaxDartTypeValue]: ScrollDragController;

update(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
end(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
cancel(): void;
updateDelegate(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>): void;
dispose(): void;
toString(): string;
get delegate(): upstream1.ScrollActivityDelegate;
get onDragCanceled(): (() => void) | null;
get carriedVelocity(): number | null;
get motionStartDistanceThreshold(): number | null;
get lastDetails(): unknown | null;
}
export abstract class ScrollDragController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollDragController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollDragController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollDragController", readonly [], false];
constructor(options: {delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>; details: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onDragCanceled?: (() => void) | null | undefined; carriedVelocity?: number | null | undefined; motionStartDistanceThreshold?: number | null | undefined}) { super(_ScrollDragControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollDragController.prototype, _ScrollDragControllerProxy);
export namespace ScrollDragController { export function implement(args: [options: {delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [] }>; details: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; onDragCanceled?: (() => void) | null | undefined; carriedVelocity?: number | null | undefined; motionStartDistanceThreshold?: number | null | undefined}], implementation: {}): ScrollDragController {
return constructProxy(_ScrollDragControllerProxy, args, implementation) as ScrollDragController; } }
export namespace ScrollDragController { export declare const momentumRetainStationaryDurationThreshold: upstream3.Duration; }
export namespace ScrollDragController { export declare const momentumRetainVelocityThresholdFactor: number; }
export namespace ScrollDragController { export declare const motionStoppedDurationThreshold: upstream3.Duration; }
_flaxDefineStaticGetters(ScrollDragController, "flax.core/sdk_widgets#read:ScrollDragController.", ["momentumRetainStationaryDurationThreshold","momentumRetainVelocityThresholdFactor","motionStoppedDurationThreshold"]);
_flaxBindInstanceType<ScrollDragController, typeof ScrollDragController>(ScrollDragController, "flax.core/sdk_widgets#type:ScrollDragController", ["dart:core::Object","flax.core/sdk_gestures#type:Drag"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "onDragCanceled" | "carriedVelocity" | "motionStartDistanceThreshold" | "lastDetails" | "update" | "end" | "cancel" | "updateDelegate" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController" | "__flaxBound:package:flutter/src/gestures/drag.dart::Drag";

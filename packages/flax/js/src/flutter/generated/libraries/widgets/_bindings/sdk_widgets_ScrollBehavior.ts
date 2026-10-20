// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultitouchDragStrategy';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultitouchDragStrategy';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableDetails';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { _flaxMemberParameters341, _flaxMemberParameters0, _flaxMemberParameters342, _flaxMemberParameters38, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollBehavior extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }> { readonly __ScrollBehavior: unique symbol;
readonly [_flaxDartTypeValue]: ScrollBehavior;

readonly dragDevices: DartSet<upstream0.PointerDeviceKind>;
readonly pointerAxisModifiers: DartSet<upstream1.LogicalKeyboardKey>;
copyWith(options?: {dragDevices?: DartSetInput<upstream0.PointerDeviceKind, upstream0.PointerDeviceKind> | null | undefined; keyboardDismissBehavior?: upstream2.ScrollViewKeyboardDismissBehavior | null | undefined; multitouchDragStrategy?: upstream3.MultitouchDragStrategy | null | undefined; overscroll?: boolean | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; platform?: upstream5.TargetPlatform | null | undefined; pointerAxisModifiers?: DartSetInput<upstream1.LogicalKeyboardKey, Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> | null | undefined; scrollbars?: boolean | null | undefined}): ScrollBehavior;
getPlatform(context: upstream6.BuildContext): upstream5.TargetPlatform;
getMultitouchDragStrategy(context: upstream6.BuildContext): upstream3.MultitouchDragStrategy;
buildScrollbar(context: upstream6.BuildContext, child: Widget, details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }>): Widget;
buildOverscrollIndicator(context: upstream6.BuildContext, child: Widget, details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }>): Widget;
velocityTrackerBuilder(context: upstream6.BuildContext): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => upstream8.VelocityTracker);
getScrollPhysics(context: upstream6.BuildContext): upstream4.ScrollPhysics;
shouldNotify(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }>): boolean;
getKeyboardDismissBehavior(context: upstream6.BuildContext): upstream2.ScrollViewKeyboardDismissBehavior;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:ScrollBehavior", ["dragDevices","pointerAxisModifiers"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollBehavior", "object", {"copyWith":_flaxMemberParameters341,"getPlatform":_flaxMemberParameters0,"getMultitouchDragStrategy":_flaxMemberParameters0,"buildScrollbar":_flaxMemberParameters342,"buildOverscrollIndicator":_flaxMemberParameters342,"velocityTrackerBuilder":_flaxMemberParameters0,"getScrollPhysics":_flaxMemberParameters0,"shouldNotify":_flaxMemberParameters38,"getKeyboardDismissBehavior":_flaxMemberParameters0,"toString":_flaxMemberParameters2}, {}), []);
export function _ScrollBehaviorFactory(): ScrollBehavior {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ScrollBehavior", "", _flaxMemberParameters2, [], {}) as ScrollBehavior;
}
const _ScrollBehaviorProxy = {type: "flax.core/sdk_widgets#type:ScrollBehavior", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"copyWith":_flaxMemberParameters341,"getPlatform":_flaxMemberParameters0,"getMultitouchDragStrategy":_flaxMemberParameters0,"buildScrollbar":_flaxMemberParameters342,"buildOverscrollIndicator":_flaxMemberParameters342,"velocityTrackerBuilder":_flaxMemberParameters0,"getScrollPhysics":_flaxMemberParameters0,"shouldNotify":_flaxMemberParameters38,"getKeyboardDismissBehavior":_flaxMemberParameters0,"toString":_flaxMemberParameters2}, getters: ["dragDevices","pointerAxisModifiers"], setters: [], contextMembers: [], superMembers: ["get:dragDevices","get:pointerAxisModifiers","copyWith","getPlatform","getMultitouchDragStrategy","buildScrollbar","buildOverscrollIndicator","velocityTrackerBuilder","getScrollPhysics","shouldNotify","getKeyboardDismissBehavior","toString"]} as const;
export interface _ScrollBehaviorNative extends ScrollBehavior {
readonly [_flaxDartTypeValue]: _ScrollBehaviorNative;

copyWith(options?: {scrollbars?: boolean | null | undefined; overscroll?: boolean | null | undefined; dragDevices?: DartSetInput<upstream0.PointerDeviceKind, upstream0.PointerDeviceKind> | null | undefined; multitouchDragStrategy?: upstream3.MultitouchDragStrategy | null | undefined; pointerAxisModifiers?: DartSetInput<upstream1.LogicalKeyboardKey, Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; platform?: upstream5.TargetPlatform | null | undefined; keyboardDismissBehavior?: upstream2.ScrollViewKeyboardDismissBehavior | null | undefined}): ScrollBehavior;
getPlatform(context: upstream6.BuildContext): upstream5.TargetPlatform;
getMultitouchDragStrategy(context: upstream6.BuildContext): upstream3.MultitouchDragStrategy;
buildScrollbar(context: upstream6.BuildContext, child: Widget, details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }>): Widget;
buildOverscrollIndicator(context: upstream6.BuildContext, child: Widget, details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }>): Widget;
velocityTrackerBuilder(context: upstream6.BuildContext): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => upstream8.VelocityTracker);
getScrollPhysics(context: upstream6.BuildContext): upstream4.ScrollPhysics;
shouldNotify(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }>): boolean;
getKeyboardDismissBehavior(context: upstream6.BuildContext): upstream2.ScrollViewKeyboardDismissBehavior;
toString(): string;
get dragDevices(): DartSet<upstream0.PointerDeviceKind>;
get pointerAxisModifiers(): DartSet<upstream1.LogicalKeyboardKey>;
}
export abstract class _ScrollBehaviorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollBehavior>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollBehavior;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollBehavior", readonly [], false];
constructor() { super(_ScrollBehaviorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScrollBehaviorNative.prototype, _ScrollBehaviorProxy);
export namespace _ScrollBehaviorFactory { export function implement(args: [], implementation: {}): ScrollBehavior {
return constructProxy(_ScrollBehaviorProxy, args, implementation) as ScrollBehavior; } }
const _ScrollBehaviorBinding = _flaxProxyFactory(_ScrollBehaviorFactory, _ScrollBehaviorNative) as unknown as typeof _ScrollBehaviorFactory & (new() => _ScrollBehaviorNative);
export const ScrollBehavior: typeof _ScrollBehaviorBinding & _FlaxInstanceType<ScrollBehavior> & _FlaxDartType<ScrollBehavior, readonly ["class", "flax.core/sdk_widgets#type:ScrollBehavior", readonly [], false]> = _flaxBindInstanceType<ScrollBehavior, typeof _ScrollBehaviorBinding>(_ScrollBehaviorBinding, "flax.core/sdk_widgets#type:ScrollBehavior", ["dart:core::Object"]) as typeof _ScrollBehaviorBinding & _FlaxInstanceType<ScrollBehavior> & _FlaxDartType<ScrollBehavior, readonly ["class", "flax.core/sdk_widgets#type:ScrollBehavior", readonly [], false]>;

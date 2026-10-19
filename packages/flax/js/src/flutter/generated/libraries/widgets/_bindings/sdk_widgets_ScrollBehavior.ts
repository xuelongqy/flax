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
const _flaxMemberParameters0 = [{"name":"dragDevices"},{"name":"keyboardDismissBehavior"},{"name":"multitouchDragStrategy"},{"name":"overscroll"},{"name":"physics"},{"name":"platform"},{"name":"pointerAxisModifiers"},{"name":"scrollbars"}] as const;
const _flaxMemberParameters1 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"child","required":true,"positional":true},{"name":"details","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollBehavior extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }> { readonly __ScrollBehavior: unique symbol;
readonly [_flaxDartTypeValue]: ScrollBehavior;

}
defineObject("flax.core/sdk_widgets#type:ScrollBehavior", ["dragDevices","pointerAxisModifiers"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollBehavior", "object", {"copyWith":_flaxMemberParameters0,"getPlatform":_flaxMemberParameters1,"getMultitouchDragStrategy":_flaxMemberParameters1,"buildScrollbar":_flaxMemberParameters2,"buildOverscrollIndicator":_flaxMemberParameters2,"velocityTrackerBuilder":_flaxMemberParameters1,"getScrollPhysics":_flaxMemberParameters1,"shouldNotify":_flaxMemberParameters3,"getKeyboardDismissBehavior":_flaxMemberParameters1,"toString":_flaxMemberParameters4}, {}), []);
const _ScrollBehaviorProxy = {type: "flax.core/sdk_widgets#type:ScrollBehavior", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"copyWith":_flaxMemberParameters0,"getPlatform":_flaxMemberParameters1,"getMultitouchDragStrategy":_flaxMemberParameters1,"buildScrollbar":_flaxMemberParameters2,"buildOverscrollIndicator":_flaxMemberParameters2,"velocityTrackerBuilder":_flaxMemberParameters1,"getScrollPhysics":_flaxMemberParameters1,"shouldNotify":_flaxMemberParameters3,"getKeyboardDismissBehavior":_flaxMemberParameters1,"toString":_flaxMemberParameters4}, getters: ["dragDevices","pointerAxisModifiers"], setters: [], contextMembers: [], superMembers: ["get:dragDevices","get:pointerAxisModifiers","copyWith","getPlatform","getMultitouchDragStrategy","buildScrollbar","buildOverscrollIndicator","velocityTrackerBuilder","getScrollPhysics","shouldNotify","getKeyboardDismissBehavior","toString"]} as const;
export interface ScrollBehavior {
readonly [_flaxDartTypeValue]: ScrollBehavior;

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
export abstract class ScrollBehavior extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollBehavior>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollBehavior;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollBehavior", readonly [], false];
constructor() { super(_ScrollBehaviorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollBehavior.prototype, _ScrollBehaviorProxy);
export namespace ScrollBehavior { export function implement(args: [], implementation: {}): ScrollBehavior {
return constructProxy(_ScrollBehaviorProxy, args, implementation) as ScrollBehavior; } }
_flaxBindInstanceType<ScrollBehavior, typeof ScrollBehavior>(ScrollBehavior, "flax.core/sdk_widgets#type:ScrollBehavior", ["dart:core::Object"]);

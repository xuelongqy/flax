// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultitouchDragStrategy';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultitouchDragStrategy';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableDetails';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import '@flax/flutter/gestures/_bindings/sdk_gestures_VelocityTracker';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import { _flaxMemberParameters4, _flaxMemberParameters216, _flaxMemberParameters0, _flaxMemberParameters217, _flaxMemberParameters218 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialScrollBehavior extends Omit<upstream0.ScrollBehavior, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/app.dart::MaterialScrollBehavior": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }> { readonly __MaterialScrollBehavior: unique symbol;
readonly [_flaxDartTypeValue]: MaterialScrollBehavior;

readonly dragDevices: DartSet<upstream1.PointerDeviceKind>;
readonly pointerAxisModifiers: DartSet<upstream2.LogicalKeyboardKey>;
copyWith(options?: {dragDevices?: DartSetInput<upstream1.PointerDeviceKind, upstream1.PointerDeviceKind> | null | undefined; keyboardDismissBehavior?: upstream3.ScrollViewKeyboardDismissBehavior | null | undefined; multitouchDragStrategy?: upstream4.MultitouchDragStrategy | null | undefined; overscroll?: boolean | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; platform?: upstream6.TargetPlatform | null | undefined; pointerAxisModifiers?: DartSetInput<upstream2.LogicalKeyboardKey, Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> | null | undefined; scrollbars?: boolean | null | undefined}): upstream0.ScrollBehavior;
getPlatform(context: upstream7.BuildContext): upstream6.TargetPlatform;
getMultitouchDragStrategy(context: upstream7.BuildContext): upstream4.MultitouchDragStrategy;
buildScrollbar(context: upstream7.BuildContext, child: Widget, details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }>): Widget;
buildOverscrollIndicator(context: upstream7.BuildContext, child: Widget, details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }>): Widget;
velocityTrackerBuilder(context: upstream7.BuildContext): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => upstream9.VelocityTracker);
getScrollPhysics(context: upstream7.BuildContext): upstream5.ScrollPhysics;
shouldNotify(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }>): boolean;
getKeyboardDismissBehavior(context: upstream7.BuildContext): upstream3.ScrollViewKeyboardDismissBehavior;
toString(): string;
}
defineObject("flax.material/material#type:MaterialScrollBehavior", ["dragDevices","pointerAxisModifiers"], [], _flaxBindingMethods("flax.material/material#type:MaterialScrollBehavior", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollBehavior");
export function _MaterialScrollBehaviorFactory(): MaterialScrollBehavior {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialScrollBehavior", "", [], [], {}) as MaterialScrollBehavior;
}
const _MaterialScrollBehaviorProxy = {type: "flax.material/material#type:MaterialScrollBehavior", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"copyWith":_flaxMemberParameters216,"getPlatform":_flaxMemberParameters0,"getMultitouchDragStrategy":_flaxMemberParameters0,"buildScrollbar":_flaxMemberParameters217,"buildOverscrollIndicator":_flaxMemberParameters217,"velocityTrackerBuilder":_flaxMemberParameters0,"getScrollPhysics":_flaxMemberParameters0,"shouldNotify":_flaxMemberParameters218,"getKeyboardDismissBehavior":_flaxMemberParameters0,"toString":_flaxMemberParameters4}, getters: ["dragDevices","pointerAxisModifiers"], setters: [], contextMembers: [], superMembers: ["get:dragDevices","get:pointerAxisModifiers","copyWith","getPlatform","getMultitouchDragStrategy","buildScrollbar","buildOverscrollIndicator","velocityTrackerBuilder","getScrollPhysics","shouldNotify","getKeyboardDismissBehavior","toString"]} as const;
export interface _MaterialScrollBehaviorNative extends MaterialScrollBehavior {
readonly [_flaxDartTypeValue]: _MaterialScrollBehaviorNative;

copyWith(options?: {scrollbars?: boolean | null | undefined; overscroll?: boolean | null | undefined; dragDevices?: DartSetInput<upstream1.PointerDeviceKind, upstream1.PointerDeviceKind> | null | undefined; multitouchDragStrategy?: upstream4.MultitouchDragStrategy | null | undefined; pointerAxisModifiers?: DartSetInput<upstream2.LogicalKeyboardKey, Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; platform?: upstream6.TargetPlatform | null | undefined; keyboardDismissBehavior?: upstream3.ScrollViewKeyboardDismissBehavior | null | undefined}): upstream0.ScrollBehavior;
getPlatform(context: upstream7.BuildContext): upstream6.TargetPlatform;
getMultitouchDragStrategy(context: upstream7.BuildContext): upstream4.MultitouchDragStrategy;
buildScrollbar(context: upstream7.BuildContext, child: Widget, details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }>): Widget;
buildOverscrollIndicator(context: upstream7.BuildContext, child: Widget, details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [] }>): Widget;
velocityTrackerBuilder(context: upstream7.BuildContext): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => upstream9.VelocityTracker);
getScrollPhysics(context: upstream7.BuildContext): upstream5.ScrollPhysics;
shouldNotify(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }>): boolean;
getKeyboardDismissBehavior(context: upstream7.BuildContext): upstream3.ScrollViewKeyboardDismissBehavior;
toString(): string;
get dragDevices(): DartSet<upstream1.PointerDeviceKind>;
get pointerAxisModifiers(): DartSet<upstream2.LogicalKeyboardKey>;
}
export abstract class _MaterialScrollBehaviorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialScrollBehavior>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialScrollBehavior;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialScrollBehavior", readonly [], false];
constructor() { super(_MaterialScrollBehaviorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialScrollBehaviorNative.prototype, _MaterialScrollBehaviorProxy);
export namespace _MaterialScrollBehaviorFactory { export function implement(args: [], implementation: {}): MaterialScrollBehavior {
return constructProxy(_MaterialScrollBehaviorProxy, args, implementation) as MaterialScrollBehavior; } }
const _MaterialScrollBehaviorBinding = _flaxProxyFactory(_MaterialScrollBehaviorFactory, _MaterialScrollBehaviorNative) as unknown as typeof _MaterialScrollBehaviorFactory & (new() => _MaterialScrollBehaviorNative);
export const MaterialScrollBehavior: typeof _MaterialScrollBehaviorBinding & _FlaxInstanceType<MaterialScrollBehavior> & _FlaxDartType<MaterialScrollBehavior, readonly ["class", "flax.material/material#type:MaterialScrollBehavior", readonly [], false]> = _flaxBindInstanceType<MaterialScrollBehavior, typeof _MaterialScrollBehaviorBinding>(_MaterialScrollBehaviorBinding, "flax.material/material#type:MaterialScrollBehavior", ["flax.core/sdk_widgets#type:ScrollBehavior","dart:core::Object"]) as typeof _MaterialScrollBehaviorBinding & _FlaxInstanceType<MaterialScrollBehavior> & _FlaxDartType<MaterialScrollBehavior, readonly ["class", "flax.material/material#type:MaterialScrollBehavior", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dragDevices" | "pointerAxisModifiers" | "copyWith" | "getPlatform" | "getMultitouchDragStrategy" | "buildScrollbar" | "buildOverscrollIndicator" | "velocityTrackerBuilder" | "getScrollPhysics" | "shouldNotify" | "getKeyboardDismissBehavior" | "toString" | "__flaxBound:package:material_ui/src/app.dart::MaterialScrollBehavior" | "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior";

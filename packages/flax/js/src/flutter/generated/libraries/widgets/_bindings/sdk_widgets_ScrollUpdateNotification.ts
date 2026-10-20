// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import { _flaxMemberParameters364, _flaxMemberParameters98, _flaxMemberParameters97, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollUpdateNotification extends Omit<upstream0.ScrollNotification, _flaxOwnMembers0>, Omit<upstream1.LayoutChangedNotification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification>, Omit<upstream2.Notification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification>, Omit<upstream3.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification | keyof upstream2.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollUpdateNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __ScrollUpdateNotification: unique symbol;
readonly [_flaxDartTypeValue]: ScrollUpdateNotification;

readonly metrics: upstream4.ScrollMetrics;
readonly context: upstream5.BuildContext | null;
readonly depth: number;
readonly dragDetails: upstream6.DragUpdateDetails | null;
readonly scrollDelta: number | null;
debugFillDescription(description: DartListInput<string, string>): void;
dispatch(target: upstream5.BuildContext | null): void;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:ScrollUpdateNotification", ["metrics","context","depth","dragDetails","scrollDelta"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollUpdateNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollNotification");
export function _ScrollUpdateNotificationFactory(options: { metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; scrollDelta?: number | null | undefined; depth?: number | null | undefined }): ScrollUpdateNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ScrollUpdateNotification", "", [{"name":"metrics","required":true},{"name":"context","required":true},{"name":"dragDetails"},{"name":"scrollDelta"},{"name":"depth"}], [], options) as ScrollUpdateNotification;
}
const _ScrollUpdateNotificationProxy = {type: "flax.core/sdk_widgets#type:ScrollUpdateNotification", parameters: _flaxMemberParameters364, constructors: {"": _flaxMemberParameters364}, methods: {"debugFillDescription":_flaxMemberParameters98,"dispatch":_flaxMemberParameters97,"toString":_flaxMemberParameters2}, getters: ["dragDetails","scrollDelta","metrics","context","depth"], setters: [], contextMembers: [], superMembers: ["get:dragDetails","get:scrollDelta","get:metrics","get:context","get:depth","debugFillDescription","dispatch","toString"]} as const;
export interface _ScrollUpdateNotificationNative extends ScrollUpdateNotification {
readonly [_flaxDartTypeValue]: _ScrollUpdateNotificationNative;

debugFillDescription(description: DartListInput<string, string>): void;
dispatch(target: upstream5.BuildContext | null): void;
toString(): string;
get dragDetails(): upstream6.DragUpdateDetails | null;
get scrollDelta(): number | null;
get metrics(): upstream4.ScrollMetrics;
get context(): upstream5.BuildContext | null;
get depth(): number;
}
export abstract class _ScrollUpdateNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollUpdateNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollUpdateNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollUpdateNotification", readonly [], false];
constructor(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; scrollDelta?: number | null | undefined; depth?: number | null | undefined}) { super(_ScrollUpdateNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScrollUpdateNotificationNative.prototype, _ScrollUpdateNotificationProxy);
export namespace _ScrollUpdateNotificationFactory { export function implement(args: [options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; scrollDelta?: number | null | undefined; depth?: number | null | undefined}], implementation: {}): ScrollUpdateNotification {
return constructProxy(_ScrollUpdateNotificationProxy, args, implementation) as ScrollUpdateNotification; } }
const _ScrollUpdateNotificationBinding = _flaxProxyFactory(_ScrollUpdateNotificationFactory, _ScrollUpdateNotificationNative) as unknown as typeof _ScrollUpdateNotificationFactory & (new(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; scrollDelta?: number | null | undefined; depth?: number | null | undefined}) => _ScrollUpdateNotificationNative);
export const ScrollUpdateNotification: typeof _ScrollUpdateNotificationBinding & _FlaxInstanceType<ScrollUpdateNotification> & _FlaxDartType<ScrollUpdateNotification, readonly ["class", "flax.core/sdk_widgets#type:ScrollUpdateNotification", readonly [], false]> = _flaxBindInstanceType<ScrollUpdateNotification, typeof _ScrollUpdateNotificationBinding>(_ScrollUpdateNotificationBinding, "flax.core/sdk_widgets#type:ScrollUpdateNotification", ["flax.core/sdk_widgets#type:ScrollNotification","flax.core/sdk_widgets#type:LayoutChangedNotification","flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]) as typeof _ScrollUpdateNotificationBinding & _FlaxInstanceType<ScrollUpdateNotification> & _FlaxDartType<ScrollUpdateNotification, readonly ["class", "flax.core/sdk_widgets#type:ScrollUpdateNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "metrics" | "context" | "depth" | "dragDetails" | "scrollDelta" | "debugFillDescription" | "dispatch" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollUpdateNotification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

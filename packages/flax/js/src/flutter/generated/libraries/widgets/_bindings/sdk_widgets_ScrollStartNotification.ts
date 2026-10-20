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
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import { _flaxMemberParameters345, _flaxMemberParameters98, _flaxMemberParameters97, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollStartNotification extends Omit<upstream0.ScrollNotification, _flaxOwnMembers0>, Omit<upstream1.LayoutChangedNotification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification>, Omit<upstream2.Notification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification>, Omit<upstream3.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification | keyof upstream2.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollStartNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __ScrollStartNotification: unique symbol;
readonly [_flaxDartTypeValue]: ScrollStartNotification;

readonly metrics: upstream4.ScrollMetrics;
readonly context: upstream5.BuildContext | null;
readonly depth: number;
readonly dragDetails: upstream6.DragStartDetails | null;
debugFillDescription(description: DartListInput<string, string>): void;
dispatch(target: upstream5.BuildContext | null): void;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:ScrollStartNotification", ["metrics","context","depth","dragDetails"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollStartNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollNotification");
export function _ScrollStartNotificationFactory(options: { metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext | null; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined }): ScrollStartNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ScrollStartNotification", "", [{"name":"metrics","required":true},{"name":"context","required":true},{"name":"dragDetails"}], [], options) as ScrollStartNotification;
}
const _ScrollStartNotificationProxy = {type: "flax.core/sdk_widgets#type:ScrollStartNotification", parameters: _flaxMemberParameters345, constructors: {"": _flaxMemberParameters345}, methods: {"debugFillDescription":_flaxMemberParameters98,"dispatch":_flaxMemberParameters97,"toString":_flaxMemberParameters2}, getters: ["dragDetails","metrics","context","depth"], setters: [], contextMembers: [], superMembers: ["get:dragDetails","get:metrics","get:context","get:depth","debugFillDescription","dispatch","toString"]} as const;
export interface _ScrollStartNotificationNative extends ScrollStartNotification {
readonly [_flaxDartTypeValue]: _ScrollStartNotificationNative;

debugFillDescription(description: DartListInput<string, string>): void;
dispatch(target: upstream5.BuildContext | null): void;
toString(): string;
get dragDetails(): upstream6.DragStartDetails | null;
get metrics(): upstream4.ScrollMetrics;
get context(): upstream5.BuildContext | null;
get depth(): number;
}
export abstract class _ScrollStartNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollStartNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollStartNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollStartNotification", readonly [], false];
constructor(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext | null; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_ScrollStartNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScrollStartNotificationNative.prototype, _ScrollStartNotificationProxy);
export namespace _ScrollStartNotificationFactory { export function implement(args: [options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext | null; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): ScrollStartNotification {
return constructProxy(_ScrollStartNotificationProxy, args, implementation) as ScrollStartNotification; } }
const _ScrollStartNotificationBinding = _flaxProxyFactory(_ScrollStartNotificationFactory, _ScrollStartNotificationNative) as unknown as typeof _ScrollStartNotificationFactory & (new(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext | null; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) => _ScrollStartNotificationNative);
export const ScrollStartNotification: typeof _ScrollStartNotificationBinding & _FlaxInstanceType<ScrollStartNotification> & _FlaxDartType<ScrollStartNotification, readonly ["class", "flax.core/sdk_widgets#type:ScrollStartNotification", readonly [], false]> = _flaxBindInstanceType<ScrollStartNotification, typeof _ScrollStartNotificationBinding>(_ScrollStartNotificationBinding, "flax.core/sdk_widgets#type:ScrollStartNotification", ["flax.core/sdk_widgets#type:ScrollNotification","flax.core/sdk_widgets#type:LayoutChangedNotification","flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]) as typeof _ScrollStartNotificationBinding & _FlaxInstanceType<ScrollStartNotification> & _FlaxDartType<ScrollStartNotification, readonly ["class", "flax.core/sdk_widgets#type:ScrollStartNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "metrics" | "context" | "depth" | "dragDetails" | "debugFillDescription" | "dispatch" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollStartNotification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

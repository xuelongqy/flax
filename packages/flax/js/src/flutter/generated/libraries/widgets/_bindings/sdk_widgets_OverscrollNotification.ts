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
import { _flaxMemberParameters248, _flaxMemberParameters98, _flaxMemberParameters97, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverscrollNotification extends Omit<upstream0.ScrollNotification, _flaxOwnMembers0>, Omit<upstream1.LayoutChangedNotification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification>, Omit<upstream2.Notification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification>, Omit<upstream3.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification | keyof upstream2.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::OverscrollNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __OverscrollNotification: unique symbol;
readonly [_flaxDartTypeValue]: OverscrollNotification;

readonly metrics: upstream4.ScrollMetrics;
readonly context: upstream5.BuildContext | null;
readonly depth: number;
readonly dragDetails: upstream6.DragUpdateDetails | null;
readonly overscroll: number;
readonly velocity: number;
debugFillDescription(description: DartListInput<string, string>): void;
dispatch(target: upstream5.BuildContext | null): void;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:OverscrollNotification", ["metrics","context","depth","dragDetails","overscroll","velocity"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:OverscrollNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollNotification");
export function _OverscrollNotificationFactory(options: { metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; overscroll: number; velocity?: number | undefined }): OverscrollNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:OverscrollNotification", "", [{"name":"metrics","required":true},{"name":"context","required":true},{"name":"dragDetails"},{"name":"overscroll","required":true},{"name":"velocity"}], [], options) as OverscrollNotification;
}
const _OverscrollNotificationProxy = {type: "flax.core/sdk_widgets#type:OverscrollNotification", parameters: _flaxMemberParameters248, constructors: {"": _flaxMemberParameters248}, methods: {"debugFillDescription":_flaxMemberParameters98,"dispatch":_flaxMemberParameters97,"toString":_flaxMemberParameters2}, getters: ["dragDetails","overscroll","velocity","metrics","context","depth"], setters: [], contextMembers: [], superMembers: ["get:dragDetails","get:overscroll","get:velocity","get:metrics","get:context","get:depth","debugFillDescription","dispatch","toString"]} as const;
export interface _OverscrollNotificationNative extends OverscrollNotification {
readonly [_flaxDartTypeValue]: _OverscrollNotificationNative;

debugFillDescription(description: DartListInput<string, string>): void;
dispatch(target: upstream5.BuildContext | null): void;
toString(): string;
get dragDetails(): upstream6.DragUpdateDetails | null;
get overscroll(): number;
get velocity(): number;
get metrics(): upstream4.ScrollMetrics;
get context(): upstream5.BuildContext | null;
get depth(): number;
}
export abstract class _OverscrollNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverscrollNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OverscrollNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverscrollNotification", readonly [], false];
constructor(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; overscroll: number; velocity?: number | undefined}) { super(_OverscrollNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_OverscrollNotificationNative.prototype, _OverscrollNotificationProxy);
export namespace _OverscrollNotificationFactory { export function implement(args: [options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; overscroll: number; velocity?: number | undefined}], implementation: {}): OverscrollNotification {
return constructProxy(_OverscrollNotificationProxy, args, implementation) as OverscrollNotification; } }
const _OverscrollNotificationBinding = _flaxProxyFactory(_OverscrollNotificationFactory, _OverscrollNotificationNative) as unknown as typeof _OverscrollNotificationFactory & (new(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; dragDetails?: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; overscroll: number; velocity?: number | undefined}) => _OverscrollNotificationNative);
export const OverscrollNotification: typeof _OverscrollNotificationBinding & _FlaxInstanceType<OverscrollNotification> & _FlaxDartType<OverscrollNotification, readonly ["class", "flax.core/sdk_widgets#type:OverscrollNotification", readonly [], false]> = _flaxBindInstanceType<OverscrollNotification, typeof _OverscrollNotificationBinding>(_OverscrollNotificationBinding, "flax.core/sdk_widgets#type:OverscrollNotification", ["flax.core/sdk_widgets#type:ScrollNotification","flax.core/sdk_widgets#type:LayoutChangedNotification","flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]) as typeof _OverscrollNotificationBinding & _FlaxInstanceType<OverscrollNotification> & _FlaxDartType<OverscrollNotification, readonly ["class", "flax.core/sdk_widgets#type:OverscrollNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "metrics" | "context" | "depth" | "dragDetails" | "overscroll" | "velocity" | "debugFillDescription" | "dispatch" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::OverscrollNotification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

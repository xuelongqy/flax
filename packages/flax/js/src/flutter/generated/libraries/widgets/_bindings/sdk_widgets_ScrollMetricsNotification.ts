// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollUpdateNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollUpdateNotification';
import { _flaxMemberParameters2, _flaxMemberParameters348, _flaxMemberParameters97, _flaxMemberParameters98 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollMetricsNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollMetricsNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __ScrollMetricsNotification: unique symbol;
readonly [_flaxDartTypeValue]: ScrollMetricsNotification;

readonly depth: number;
readonly metrics: upstream2.ScrollMetrics;
readonly context: upstream3.BuildContext;
dispatch(target: upstream3.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
asScrollUpdate(): upstream4.ScrollUpdateNotification;
}
defineObject("flax.core/sdk_widgets#type:ScrollMetricsNotification", ["depth","metrics","context"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollMetricsNotification", "object", {"asScrollUpdate":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
export function _ScrollMetricsNotificationFactory(options: { metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream3.BuildContext }): ScrollMetricsNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ScrollMetricsNotification", "", [{"name":"metrics","required":true},{"name":"context","required":true}], [], options) as ScrollMetricsNotification;
}
const _ScrollMetricsNotificationProxy = {type: "flax.core/sdk_widgets#type:ScrollMetricsNotification", parameters: _flaxMemberParameters348, constructors: {"": _flaxMemberParameters348}, methods: {"dispatch":_flaxMemberParameters97,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters98,"asScrollUpdate":_flaxMemberParameters2}, getters: ["metrics","context","depth"], setters: [], contextMembers: [], superMembers: ["get:metrics","get:context","get:depth","dispatch","toString","debugFillDescription","asScrollUpdate"]} as const;
export interface _ScrollMetricsNotificationNative extends ScrollMetricsNotification {
readonly [_flaxDartTypeValue]: _ScrollMetricsNotificationNative;

dispatch(target: upstream3.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
asScrollUpdate(): upstream4.ScrollUpdateNotification;
get metrics(): upstream2.ScrollMetrics;
get context(): upstream3.BuildContext;
get depth(): number;
}
export abstract class _ScrollMetricsNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollMetricsNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollMetricsNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollMetricsNotification", readonly [], false];
constructor(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream3.BuildContext}) { super(_ScrollMetricsNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScrollMetricsNotificationNative.prototype, _ScrollMetricsNotificationProxy);
export namespace _ScrollMetricsNotificationFactory { export function implement(args: [options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream3.BuildContext}], implementation: {}): ScrollMetricsNotification {
return constructProxy(_ScrollMetricsNotificationProxy, args, implementation) as ScrollMetricsNotification; } }
const _ScrollMetricsNotificationBinding = _flaxProxyFactory(_ScrollMetricsNotificationFactory, _ScrollMetricsNotificationNative) as unknown as typeof _ScrollMetricsNotificationFactory & (new(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream3.BuildContext}) => _ScrollMetricsNotificationNative);
export const ScrollMetricsNotification: typeof _ScrollMetricsNotificationBinding & _FlaxInstanceType<ScrollMetricsNotification> & _FlaxDartType<ScrollMetricsNotification, readonly ["class", "flax.core/sdk_widgets#type:ScrollMetricsNotification", readonly [], false]> = _flaxBindInstanceType<ScrollMetricsNotification, typeof _ScrollMetricsNotificationBinding>(_ScrollMetricsNotificationBinding, "flax.core/sdk_widgets#type:ScrollMetricsNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]) as typeof _ScrollMetricsNotificationBinding & _FlaxInstanceType<ScrollMetricsNotification> & _FlaxDartType<ScrollMetricsNotification, readonly ["class", "flax.core/sdk_widgets#type:ScrollMetricsNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "metrics" | "context" | "dispatch" | "toString" | "debugFillDescription" | "asScrollUpdate" | "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollMetricsNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

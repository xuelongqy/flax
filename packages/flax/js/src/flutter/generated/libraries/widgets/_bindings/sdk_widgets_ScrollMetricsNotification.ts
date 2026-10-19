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
import { _flaxMemberParameters2, _flaxMemberParameters363, _flaxMemberParameters118, _flaxMemberParameters119 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollMetricsNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollMetricsNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __ScrollMetricsNotification: unique symbol;
readonly [_flaxDartTypeValue]: ScrollMetricsNotification;

}
defineObject("flax.core/sdk_widgets#type:ScrollMetricsNotification", ["depth","metrics","context"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollMetricsNotification", "object", {"asScrollUpdate":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
const _ScrollMetricsNotificationProxy = {type: "flax.core/sdk_widgets#type:ScrollMetricsNotification", parameters: _flaxMemberParameters363, constructors: {"": _flaxMemberParameters363}, methods: {"dispatch":_flaxMemberParameters118,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters119,"asScrollUpdate":_flaxMemberParameters2}, getters: ["metrics","context","depth"], setters: [], contextMembers: [], superMembers: ["get:metrics","get:context","get:depth","dispatch","toString","debugFillDescription","asScrollUpdate"]} as const;
export interface ScrollMetricsNotification {
readonly [_flaxDartTypeValue]: ScrollMetricsNotification;

dispatch(target: upstream3.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
asScrollUpdate(): upstream4.ScrollUpdateNotification;
get metrics(): upstream2.ScrollMetrics;
get context(): upstream3.BuildContext;
get depth(): number;
}
export abstract class ScrollMetricsNotification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollMetricsNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollMetricsNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollMetricsNotification", readonly [], false];
constructor(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream3.BuildContext}) { super(_ScrollMetricsNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollMetricsNotification.prototype, _ScrollMetricsNotificationProxy);
export namespace ScrollMetricsNotification { export function implement(args: [options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream3.BuildContext}], implementation: {}): ScrollMetricsNotification {
return constructProxy(_ScrollMetricsNotificationProxy, args, implementation) as ScrollMetricsNotification; } }
_flaxBindInstanceType<ScrollMetricsNotification, typeof ScrollMetricsNotification>(ScrollMetricsNotification, "flax.core/sdk_widgets#type:ScrollMetricsNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "metrics" | "context" | "dispatch" | "toString" | "debugFillDescription" | "asScrollUpdate" | "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollMetricsNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

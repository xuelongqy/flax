// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters393, _flaxMemberParameters109, _flaxMemberParameters110, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollNotification extends Omit<upstream0.LayoutChangedNotification, _flaxOwnMembers0>, Omit<upstream1.Notification, _flaxOwnMembers0 | keyof upstream0.LayoutChangedNotification>, Omit<upstream2.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.LayoutChangedNotification | keyof upstream1.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __ScrollNotification: unique symbol;
readonly [_flaxDartTypeValue]: ScrollNotification;

}
defineObject("flax.core/sdk_widgets#type:ScrollNotification", ["depth","metrics","context"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:LayoutChangedNotification");
const _ScrollNotificationProxy = {type: "flax.core/sdk_widgets#type:ScrollNotification", parameters: _flaxMemberParameters393, constructors: {"": _flaxMemberParameters393}, methods: {"dispatch":_flaxMemberParameters109,"debugFillDescription":_flaxMemberParameters110,"toString":_flaxMemberParameters2}, getters: ["metrics","context","depth"], setters: [], contextMembers: [], superMembers: ["get:metrics","get:context","get:depth","dispatch","debugFillDescription","toString"]} as const;
export interface ScrollNotification {
readonly [_flaxDartTypeValue]: ScrollNotification;

dispatch(target: upstream4.BuildContext | null): void;
debugFillDescription(description: DartListInput<string, string>): void;
toString(): string;
get metrics(): upstream3.ScrollMetrics;
get context(): upstream4.BuildContext | null;
get depth(): number;
}
export abstract class ScrollNotification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollNotification", readonly [], false];
constructor(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream4.BuildContext | null}) { super(_ScrollNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollNotification.prototype, _ScrollNotificationProxy);
export namespace ScrollNotification { export function implement(args: [options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream4.BuildContext | null}], implementation: {}): ScrollNotification {
return constructProxy(_ScrollNotificationProxy, args, implementation) as ScrollNotification; } }
_flaxBindInstanceType<ScrollNotification, typeof ScrollNotification>(ScrollNotification, "flax.core/sdk_widgets#type:ScrollNotification", ["flax.core/sdk_widgets#type:LayoutChangedNotification","flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "metrics" | "context" | "dispatch" | "debugFillDescription" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

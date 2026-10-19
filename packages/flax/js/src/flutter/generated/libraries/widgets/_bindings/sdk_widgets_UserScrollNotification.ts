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
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import { _flaxMemberParameters445, _flaxMemberParameters119, _flaxMemberParameters118, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UserScrollNotification extends Omit<upstream0.ScrollNotification, _flaxOwnMembers0>, Omit<upstream1.LayoutChangedNotification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification>, Omit<upstream2.Notification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification>, Omit<upstream3.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification | keyof upstream2.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::UserScrollNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __UserScrollNotification: unique symbol;
readonly [_flaxDartTypeValue]: UserScrollNotification;

}
defineObject("flax.core/sdk_widgets#type:UserScrollNotification", ["metrics","context","depth","direction"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:UserScrollNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ScrollNotification");
const _UserScrollNotificationProxy = {type: "flax.core/sdk_widgets#type:UserScrollNotification", parameters: _flaxMemberParameters445, constructors: {"": _flaxMemberParameters445}, methods: {"debugFillDescription":_flaxMemberParameters119,"dispatch":_flaxMemberParameters118,"toString":_flaxMemberParameters2}, getters: ["direction","metrics","context","depth"], setters: [], contextMembers: [], superMembers: ["get:direction","get:metrics","get:context","get:depth","debugFillDescription","dispatch","toString"]} as const;
export interface UserScrollNotification {
readonly [_flaxDartTypeValue]: UserScrollNotification;

debugFillDescription(description: DartListInput<string, string>): void;
dispatch(target: upstream5.BuildContext | null): void;
toString(): string;
get direction(): upstream6.ScrollDirection;
get metrics(): upstream4.ScrollMetrics;
get context(): upstream5.BuildContext | null;
get depth(): number;
}
export abstract class UserScrollNotification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UserScrollNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UserScrollNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UserScrollNotification", readonly [], false];
constructor(options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; direction: upstream6.ScrollDirection}) { super(_UserScrollNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(UserScrollNotification.prototype, _UserScrollNotificationProxy);
export namespace UserScrollNotification { export function implement(args: [options: {metrics: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [] }>; context: upstream5.BuildContext; direction: upstream6.ScrollDirection}], implementation: {}): UserScrollNotification {
return constructProxy(_UserScrollNotificationProxy, args, implementation) as UserScrollNotification; } }
_flaxBindInstanceType<UserScrollNotification, typeof UserScrollNotification>(UserScrollNotification, "flax.core/sdk_widgets#type:UserScrollNotification", ["flax.core/sdk_widgets#type:ScrollNotification","flax.core/sdk_widgets#type:LayoutChangedNotification","flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "metrics" | "context" | "depth" | "direction" | "debugFillDescription" | "dispatch" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::UserScrollNotification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

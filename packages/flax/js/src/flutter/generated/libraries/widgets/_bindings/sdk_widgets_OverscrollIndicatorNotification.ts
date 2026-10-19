// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters2, _flaxMemberParameters263, _flaxMemberParameters118, _flaxMemberParameters119 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverscrollIndicatorNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::OverscrollIndicatorNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __OverscrollIndicatorNotification: unique symbol;
readonly [_flaxDartTypeValue]: OverscrollIndicatorNotification;

}
defineObject("flax.core/sdk_widgets#type:OverscrollIndicatorNotification", ["depth","leading","paintOffset","accepted"], ["paintOffset","accepted"], _flaxBindingMethods("flax.core/sdk_widgets#type:OverscrollIndicatorNotification", "object", {"disallowIndicator":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
const _OverscrollIndicatorNotificationProxy = {type: "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", parameters: _flaxMemberParameters263, constructors: {"": _flaxMemberParameters263}, methods: {"dispatch":_flaxMemberParameters118,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters119,"disallowIndicator":_flaxMemberParameters2}, getters: ["leading","paintOffset","accepted","depth"], setters: ["paintOffset","accepted"], contextMembers: [], superMembers: ["get:leading","get:paintOffset","get:accepted","get:depth","set:paintOffset","set:accepted","dispatch","toString","debugFillDescription","disallowIndicator"]} as const;
export interface OverscrollIndicatorNotification {
readonly [_flaxDartTypeValue]: OverscrollIndicatorNotification;

dispatch(target: upstream2.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
disallowIndicator(): void;
get leading(): boolean;
get paintOffset(): number;
get accepted(): boolean;
get depth(): number;
set paintOffset(value: number);
set accepted(value: boolean);
}
export abstract class OverscrollIndicatorNotification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverscrollIndicatorNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OverscrollIndicatorNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", readonly [], false];
constructor(options: {leading: boolean}) { super(_OverscrollIndicatorNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(OverscrollIndicatorNotification.prototype, _OverscrollIndicatorNotificationProxy);
export namespace OverscrollIndicatorNotification { export function implement(args: [options: {leading: boolean}], implementation: {}): OverscrollIndicatorNotification {
return constructProxy(_OverscrollIndicatorNotificationProxy, args, implementation) as OverscrollIndicatorNotification; } }
_flaxBindInstanceType<OverscrollIndicatorNotification, typeof OverscrollIndicatorNotification>(OverscrollIndicatorNotification, "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "leading" | "paintOffset" | "accepted" | "dispatch" | "toString" | "debugFillDescription" | "disallowIndicator" | "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::OverscrollIndicatorNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

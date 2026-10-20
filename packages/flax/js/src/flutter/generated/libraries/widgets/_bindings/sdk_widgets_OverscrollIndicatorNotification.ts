// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters2, _flaxMemberParameters247, _flaxMemberParameters97, _flaxMemberParameters98 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverscrollIndicatorNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::OverscrollIndicatorNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __OverscrollIndicatorNotification: unique symbol;
readonly [_flaxDartTypeValue]: OverscrollIndicatorNotification;

readonly depth: number;
readonly leading: boolean;
get paintOffset(): number;
get accepted(): boolean;
dispatch(target: upstream2.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
disallowIndicator(): void;
set paintOffset(value: number);
set accepted(value: boolean);
}
defineObject("flax.core/sdk_widgets#type:OverscrollIndicatorNotification", ["depth","leading","paintOffset","accepted"], ["paintOffset","accepted"], _flaxBindingMethods("flax.core/sdk_widgets#type:OverscrollIndicatorNotification", "object", {"disallowIndicator":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
export function _OverscrollIndicatorNotificationFactory(options: { leading: boolean }): OverscrollIndicatorNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", "", [{"name":"leading","required":true}], [], options) as OverscrollIndicatorNotification;
}
const _OverscrollIndicatorNotificationProxy = {type: "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", parameters: _flaxMemberParameters247, constructors: {"": _flaxMemberParameters247}, methods: {"dispatch":_flaxMemberParameters97,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters98,"disallowIndicator":_flaxMemberParameters2}, getters: ["leading","paintOffset","accepted","depth"], setters: ["paintOffset","accepted"], contextMembers: [], superMembers: ["get:leading","get:paintOffset","get:accepted","get:depth","set:paintOffset","set:accepted","dispatch","toString","debugFillDescription","disallowIndicator"]} as const;
export interface _OverscrollIndicatorNotificationNative extends OverscrollIndicatorNotification {
readonly [_flaxDartTypeValue]: _OverscrollIndicatorNotificationNative;

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
export abstract class _OverscrollIndicatorNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverscrollIndicatorNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OverscrollIndicatorNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", readonly [], false];
constructor(options: {leading: boolean}) { super(_OverscrollIndicatorNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_OverscrollIndicatorNotificationNative.prototype, _OverscrollIndicatorNotificationProxy);
export namespace _OverscrollIndicatorNotificationFactory { export function implement(args: [options: {leading: boolean}], implementation: {}): OverscrollIndicatorNotification {
return constructProxy(_OverscrollIndicatorNotificationProxy, args, implementation) as OverscrollIndicatorNotification; } }
const _OverscrollIndicatorNotificationBinding = _flaxProxyFactory(_OverscrollIndicatorNotificationFactory, _OverscrollIndicatorNotificationNative) as unknown as typeof _OverscrollIndicatorNotificationFactory & (new(options: {leading: boolean}) => _OverscrollIndicatorNotificationNative);
export const OverscrollIndicatorNotification: typeof _OverscrollIndicatorNotificationBinding & _FlaxInstanceType<OverscrollIndicatorNotification> & _FlaxDartType<OverscrollIndicatorNotification, readonly ["class", "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", readonly [], false]> = _flaxBindInstanceType<OverscrollIndicatorNotification, typeof _OverscrollIndicatorNotificationBinding>(_OverscrollIndicatorNotificationBinding, "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]) as typeof _OverscrollIndicatorNotificationBinding & _FlaxInstanceType<OverscrollIndicatorNotification> & _FlaxDartType<OverscrollIndicatorNotification, readonly ["class", "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "leading" | "paintOffset" | "accepted" | "dispatch" | "toString" | "debugFillDescription" | "disallowIndicator" | "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::OverscrollIndicatorNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

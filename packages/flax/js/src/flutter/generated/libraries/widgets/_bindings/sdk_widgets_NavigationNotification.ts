// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters240, _flaxMemberParameters97, _flaxMemberParameters2, _flaxMemberParameters98 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NavigationNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigationNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __NavigationNotification: unique symbol;
readonly [_flaxDartTypeValue]: NavigationNotification;

readonly canHandlePop: boolean;
dispatch(target: upstream1.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
defineObject("flax.core/sdk_widgets#type:NavigationNotification", ["canHandlePop"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:NavigationNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
export function _NavigationNotificationFactory(options: { canHandlePop: boolean }): NavigationNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:NavigationNotification", "", [{"name":"canHandlePop","required":true}], [], options) as NavigationNotification;
}
const _NavigationNotificationProxy = {type: "flax.core/sdk_widgets#type:NavigationNotification", parameters: _flaxMemberParameters240, constructors: {"": _flaxMemberParameters240}, methods: {"dispatch":_flaxMemberParameters97,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters98}, getters: ["canHandlePop"], setters: [], contextMembers: [], superMembers: ["get:canHandlePop","dispatch","toString","debugFillDescription"]} as const;
export interface _NavigationNotificationNative extends NavigationNotification {
readonly [_flaxDartTypeValue]: _NavigationNotificationNative;

dispatch(target: upstream1.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get canHandlePop(): boolean;
}
export abstract class _NavigationNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NavigationNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NavigationNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:NavigationNotification", readonly [], false];
constructor(options: {canHandlePop: boolean}) { super(_NavigationNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_NavigationNotificationNative.prototype, _NavigationNotificationProxy);
export namespace _NavigationNotificationFactory { export function implement(args: [options: {canHandlePop: boolean}], implementation: {}): NavigationNotification {
return constructProxy(_NavigationNotificationProxy, args, implementation) as NavigationNotification; } }
const _NavigationNotificationBinding = _flaxProxyFactory(_NavigationNotificationFactory, _NavigationNotificationNative) as unknown as typeof _NavigationNotificationFactory & (new(options: {canHandlePop: boolean}) => _NavigationNotificationNative);
export const NavigationNotification: typeof _NavigationNotificationBinding & _FlaxInstanceType<NavigationNotification> & _FlaxDartType<NavigationNotification, readonly ["class", "flax.core/sdk_widgets#type:NavigationNotification", readonly [], false]> = _flaxBindInstanceType<NavigationNotification, typeof _NavigationNotificationBinding>(_NavigationNotificationBinding, "flax.core/sdk_widgets#type:NavigationNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object"]) as typeof _NavigationNotificationBinding & _FlaxInstanceType<NavigationNotification> & _FlaxDartType<NavigationNotification, readonly ["class", "flax.core/sdk_widgets#type:NavigationNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "canHandlePop" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigationNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";

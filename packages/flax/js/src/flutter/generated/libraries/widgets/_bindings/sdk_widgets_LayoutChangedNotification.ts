// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters2, _flaxMemberParameters97, _flaxMemberParameters98 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LayoutChangedNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __LayoutChangedNotification: unique symbol;
readonly [_flaxDartTypeValue]: LayoutChangedNotification;

dispatch(target: upstream1.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
defineObject("flax.core/sdk_widgets#type:LayoutChangedNotification", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LayoutChangedNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
export function _LayoutChangedNotificationFactory(): LayoutChangedNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:LayoutChangedNotification", "", [], [], {}) as LayoutChangedNotification;
}
const _LayoutChangedNotificationProxy = {type: "flax.core/sdk_widgets#type:LayoutChangedNotification", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"dispatch":_flaxMemberParameters97,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters98}, getters: [], setters: [], contextMembers: [], superMembers: ["dispatch","toString","debugFillDescription"]} as const;
export interface _LayoutChangedNotificationNative extends LayoutChangedNotification {
readonly [_flaxDartTypeValue]: _LayoutChangedNotificationNative;

dispatch(target: upstream1.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
export abstract class _LayoutChangedNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayoutChangedNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LayoutChangedNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LayoutChangedNotification", readonly [], false];
constructor() { super(_LayoutChangedNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LayoutChangedNotificationNative.prototype, _LayoutChangedNotificationProxy);
export namespace _LayoutChangedNotificationFactory { export function implement(args: [], implementation: {}): LayoutChangedNotification {
return constructProxy(_LayoutChangedNotificationProxy, args, implementation) as LayoutChangedNotification; } }
const _LayoutChangedNotificationBinding = _flaxProxyFactory(_LayoutChangedNotificationFactory, _LayoutChangedNotificationNative) as unknown as typeof _LayoutChangedNotificationFactory & (new() => _LayoutChangedNotificationNative);
export const LayoutChangedNotification: typeof _LayoutChangedNotificationBinding & _FlaxInstanceType<LayoutChangedNotification> & _FlaxDartType<LayoutChangedNotification, readonly ["class", "flax.core/sdk_widgets#type:LayoutChangedNotification", readonly [], false]> = _flaxBindInstanceType<LayoutChangedNotification, typeof _LayoutChangedNotificationBinding>(_LayoutChangedNotificationBinding, "flax.core/sdk_widgets#type:LayoutChangedNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object"]) as typeof _LayoutChangedNotificationBinding & _FlaxInstanceType<LayoutChangedNotification> & _FlaxDartType<LayoutChangedNotification, readonly ["class", "flax.core/sdk_widgets#type:LayoutChangedNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";

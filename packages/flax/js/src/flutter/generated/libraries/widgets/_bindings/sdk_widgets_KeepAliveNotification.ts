// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters217, _flaxMemberParameters109, _flaxMemberParameters2, _flaxMemberParameters110 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeepAliveNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __KeepAliveNotification: unique symbol;
readonly [_flaxDartTypeValue]: KeepAliveNotification;

readonly handle: upstream1.Listenable;
dispatch(target: upstream2.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
defineObject("flax.core/sdk_widgets#type:KeepAliveNotification", ["handle"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:KeepAliveNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
export function _KeepAliveNotificationFactory(handle: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): KeepAliveNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:KeepAliveNotification", "", [{"name":"handle","required":true,"positional":true}], [handle], {}) as KeepAliveNotification;
}
const _KeepAliveNotificationProxy = {type: "flax.core/sdk_widgets#type:KeepAliveNotification", parameters: _flaxMemberParameters217, constructors: {"": _flaxMemberParameters217}, methods: {"dispatch":_flaxMemberParameters109,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters110}, getters: ["handle"], setters: [], contextMembers: [], superMembers: ["get:handle","dispatch","toString","debugFillDescription"]} as const;
export interface _KeepAliveNotificationNative extends KeepAliveNotification {
readonly [_flaxDartTypeValue]: _KeepAliveNotificationNative;

dispatch(target: upstream2.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get handle(): upstream1.Listenable;
}
export abstract class _KeepAliveNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeepAliveNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeepAliveNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:KeepAliveNotification", readonly [], false];
constructor(handle: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>) { super(_KeepAliveNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_KeepAliveNotificationNative.prototype, _KeepAliveNotificationProxy);
export namespace _KeepAliveNotificationFactory { export function implement(args: [handle: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>], implementation: {}): KeepAliveNotification {
return constructProxy(_KeepAliveNotificationProxy, args, implementation) as KeepAliveNotification; } }
const _KeepAliveNotificationBinding = _flaxProxyFactory(_KeepAliveNotificationFactory, _KeepAliveNotificationNative) as unknown as typeof _KeepAliveNotificationFactory & (new(handle: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>) => _KeepAliveNotificationNative);
export const KeepAliveNotification: typeof _KeepAliveNotificationBinding & _FlaxInstanceType<KeepAliveNotification> & _FlaxDartType<KeepAliveNotification, readonly ["class", "flax.core/sdk_widgets#type:KeepAliveNotification", readonly [], false]> = _flaxBindInstanceType<KeepAliveNotification, typeof _KeepAliveNotificationBinding>(_KeepAliveNotificationBinding, "flax.core/sdk_widgets#type:KeepAliveNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object"]) as typeof _KeepAliveNotificationBinding & _FlaxInstanceType<KeepAliveNotification> & _FlaxDartType<KeepAliveNotification, readonly ["class", "flax.core/sdk_widgets#type:KeepAliveNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "handle" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";

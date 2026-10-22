// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters2, _flaxMemberParameters109, _flaxMemberParameters110 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SizeChangedLayoutNotification extends Omit<upstream0.LayoutChangedNotification, _flaxOwnMembers0>, Omit<upstream1.Notification, _flaxOwnMembers0 | keyof upstream0.LayoutChangedNotification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/size_changed_layout_notifier.dart::SizeChangedLayoutNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __SizeChangedLayoutNotification: unique symbol;
readonly [_flaxDartTypeValue]: SizeChangedLayoutNotification;

dispatch(target: upstream2.BuildContext | null): void;
debugFillDescription(description: DartListInput<string, string>): void;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:SizeChangedLayoutNotification", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SizeChangedLayoutNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:LayoutChangedNotification");
export function _SizeChangedLayoutNotificationFactory(): SizeChangedLayoutNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", "", [], [], {}) as SizeChangedLayoutNotification;
}
const _SizeChangedLayoutNotificationProxy = {type: "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"dispatch":_flaxMemberParameters109,"debugFillDescription":_flaxMemberParameters110,"toString":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["dispatch","debugFillDescription","toString"]} as const;
export interface _SizeChangedLayoutNotificationNative extends SizeChangedLayoutNotification {
readonly [_flaxDartTypeValue]: _SizeChangedLayoutNotificationNative;

dispatch(target: upstream2.BuildContext | null): void;
debugFillDescription(description: DartListInput<string, string>): void;
toString(): string;
}
export abstract class _SizeChangedLayoutNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SizeChangedLayoutNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SizeChangedLayoutNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", readonly [], false];
constructor() { super(_SizeChangedLayoutNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SizeChangedLayoutNotificationNative.prototype, _SizeChangedLayoutNotificationProxy);
export namespace _SizeChangedLayoutNotificationFactory { export function implement(args: [], implementation: {}): SizeChangedLayoutNotification {
return constructProxy(_SizeChangedLayoutNotificationProxy, args, implementation) as SizeChangedLayoutNotification; } }
const _SizeChangedLayoutNotificationBinding = _flaxProxyFactory(_SizeChangedLayoutNotificationFactory, _SizeChangedLayoutNotificationNative) as unknown as typeof _SizeChangedLayoutNotificationFactory & (new() => _SizeChangedLayoutNotificationNative);
export const SizeChangedLayoutNotification: typeof _SizeChangedLayoutNotificationBinding & _FlaxInstanceType<SizeChangedLayoutNotification> & _FlaxDartType<SizeChangedLayoutNotification, readonly ["class", "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", readonly [], false]> = _flaxBindInstanceType<SizeChangedLayoutNotification, typeof _SizeChangedLayoutNotificationBinding>(_SizeChangedLayoutNotificationBinding, "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", ["flax.core/sdk_widgets#type:LayoutChangedNotification","flax.core/sdk_widgets#type:Notification","dart:core::Object"]) as typeof _SizeChangedLayoutNotificationBinding & _FlaxInstanceType<SizeChangedLayoutNotification> & _FlaxDartType<SizeChangedLayoutNotification, readonly ["class", "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispatch" | "debugFillDescription" | "toString" | "__flaxBound:package:flutter/src/widgets/size_changed_layout_notifier.dart::SizeChangedLayoutNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";

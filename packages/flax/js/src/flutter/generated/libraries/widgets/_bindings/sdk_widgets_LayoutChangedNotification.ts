// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters2, _flaxMemberParameters118, _flaxMemberParameters119 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LayoutChangedNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __LayoutChangedNotification: unique symbol;
readonly [_flaxDartTypeValue]: LayoutChangedNotification;

}
defineObject("flax.core/sdk_widgets#type:LayoutChangedNotification", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LayoutChangedNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
const _LayoutChangedNotificationProxy = {type: "flax.core/sdk_widgets#type:LayoutChangedNotification", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"dispatch":_flaxMemberParameters118,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters119}, getters: [], setters: [], contextMembers: [], superMembers: ["dispatch","toString","debugFillDescription"]} as const;
export interface LayoutChangedNotification {
readonly [_flaxDartTypeValue]: LayoutChangedNotification;

dispatch(target: upstream1.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
export abstract class LayoutChangedNotification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayoutChangedNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LayoutChangedNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LayoutChangedNotification", readonly [], false];
constructor() { super(_LayoutChangedNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LayoutChangedNotification.prototype, _LayoutChangedNotificationProxy);
export namespace LayoutChangedNotification { export function implement(args: [], implementation: {}): LayoutChangedNotification {
return constructProxy(_LayoutChangedNotificationProxy, args, implementation) as LayoutChangedNotification; } }
_flaxBindInstanceType<LayoutChangedNotification, typeof LayoutChangedNotification>(LayoutChangedNotification, "flax.core/sdk_widgets#type:LayoutChangedNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";

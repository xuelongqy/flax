// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"target","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [{"name":"description","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SizeChangedLayoutNotification extends Omit<upstream0.LayoutChangedNotification, _flaxOwnMembers0>, Omit<upstream1.Notification, _flaxOwnMembers0 | keyof upstream0.LayoutChangedNotification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/size_changed_layout_notifier.dart::SizeChangedLayoutNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __SizeChangedLayoutNotification: unique symbol;
readonly [_flaxDartTypeValue]: SizeChangedLayoutNotification;

}
defineObject("flax.core/sdk_widgets#type:SizeChangedLayoutNotification", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SizeChangedLayoutNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:LayoutChangedNotification");
const _SizeChangedLayoutNotificationProxy = {type: "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", parameters: [], constructors: {"":[]}, methods: {"dispatch":_flaxMemberParameters0,"debugFillDescription":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["dispatch","debugFillDescription","toString"]} as const;
export interface SizeChangedLayoutNotification {
readonly [_flaxDartTypeValue]: SizeChangedLayoutNotification;

dispatch(target: upstream2.BuildContext | null): void;
debugFillDescription(description: DartListInput<string, string>): void;
toString(): string;
}
export abstract class SizeChangedLayoutNotification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SizeChangedLayoutNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SizeChangedLayoutNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", readonly [], false];
constructor() { super(_SizeChangedLayoutNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SizeChangedLayoutNotification.prototype, _SizeChangedLayoutNotificationProxy);
export namespace SizeChangedLayoutNotification { export function implement(args: [], implementation: {}): SizeChangedLayoutNotification {
return constructProxy(_SizeChangedLayoutNotificationProxy, args, implementation) as SizeChangedLayoutNotification; } }
_flaxBindInstanceType<SizeChangedLayoutNotification, typeof SizeChangedLayoutNotification>(SizeChangedLayoutNotification, "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", ["flax.core/sdk_widgets#type:LayoutChangedNotification","flax.core/sdk_widgets#type:Notification","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispatch" | "debugFillDescription" | "toString" | "__flaxBound:package:flutter/src/widgets/size_changed_layout_notifier.dart::SizeChangedLayoutNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";

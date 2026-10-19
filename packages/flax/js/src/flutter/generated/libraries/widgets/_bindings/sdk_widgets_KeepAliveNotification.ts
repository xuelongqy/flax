// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"handle","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"target","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"description","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeepAliveNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __KeepAliveNotification: unique symbol;
readonly [_flaxDartTypeValue]: KeepAliveNotification;

}
defineObject("flax.core/sdk_widgets#type:KeepAliveNotification", ["handle"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:KeepAliveNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
const _KeepAliveNotificationProxy = {type: "flax.core/sdk_widgets#type:KeepAliveNotification", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"dispatch":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters3}, getters: ["handle"], setters: [], contextMembers: [], superMembers: ["get:handle","dispatch","toString","debugFillDescription"]} as const;
export interface KeepAliveNotification {
readonly [_flaxDartTypeValue]: KeepAliveNotification;

dispatch(target: upstream2.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get handle(): upstream1.Listenable;
}
export abstract class KeepAliveNotification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeepAliveNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: KeepAliveNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:KeepAliveNotification", readonly [], false];
constructor(handle: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>) { super(_KeepAliveNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(KeepAliveNotification.prototype, _KeepAliveNotificationProxy);
export namespace KeepAliveNotification { export function implement(args: [handle: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>], implementation: {}): KeepAliveNotification {
return constructProxy(_KeepAliveNotificationProxy, args, implementation) as KeepAliveNotification; } }
_flaxBindInstanceType<KeepAliveNotification, typeof KeepAliveNotification>(KeepAliveNotification, "flax.core/sdk_widgets#type:KeepAliveNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "handle" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";

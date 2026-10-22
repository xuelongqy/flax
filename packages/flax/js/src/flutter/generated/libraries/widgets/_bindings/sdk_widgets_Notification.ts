// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters109, _flaxMemberParameters2, _flaxMemberParameters110 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Notification extends Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __Notification: unique symbol;
readonly [_flaxDartTypeValue]: Notification;

}
defineObject("flax.core/sdk_widgets#type:Notification", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Notification", "object", {"dispatch":_flaxMemberParameters109,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters110}, {}), []);
const _NotificationProxy = {type: "flax.core/sdk_widgets#type:Notification", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"dispatch":_flaxMemberParameters109,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters110}, getters: [], setters: [], contextMembers: [], superMembers: ["dispatch","toString","debugFillDescription"]} as const;
export interface Notification {
readonly [_flaxDartTypeValue]: Notification;

dispatch(target: upstream0.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
export abstract class Notification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Notification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Notification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:Notification", readonly [], false];
constructor() { super(_NotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Notification.prototype, _NotificationProxy);
export namespace Notification { export function implement(args: [], implementation: {}): Notification {
return constructProxy(_NotificationProxy, args, implementation) as Notification; } }
_flaxBindInstanceType<Notification, typeof Notification>(Notification, "flax.core/sdk_widgets#type:Notification", ["dart:core::Object"]);

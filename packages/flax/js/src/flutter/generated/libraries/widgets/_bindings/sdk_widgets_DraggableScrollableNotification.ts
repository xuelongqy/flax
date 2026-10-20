// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters96, _flaxMemberParameters97, _flaxMemberParameters2, _flaxMemberParameters98 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DraggableScrollableNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __DraggableScrollableNotification: unique symbol;
readonly [_flaxDartTypeValue]: DraggableScrollableNotification;

readonly depth: number;
readonly extent: number;
readonly minExtent: number;
readonly maxExtent: number;
readonly initialExtent: number;
readonly context: upstream2.BuildContext;
readonly shouldCloseOnMinExtent: boolean;
dispatch(target: upstream2.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
defineObject("flax.core/sdk_widgets#type:DraggableScrollableNotification", ["depth","extent","minExtent","maxExtent","initialExtent","context","shouldCloseOnMinExtent"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DraggableScrollableNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
export function _DraggableScrollableNotificationFactory(options: { extent: number; minExtent: number; maxExtent: number; initialExtent: number; context: upstream2.BuildContext; shouldCloseOnMinExtent?: boolean | undefined }): DraggableScrollableNotification {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DraggableScrollableNotification", "", [{"name":"extent","required":true},{"name":"minExtent","required":true},{"name":"maxExtent","required":true},{"name":"initialExtent","required":true},{"name":"context","required":true},{"name":"shouldCloseOnMinExtent"}], [], options) as DraggableScrollableNotification;
}
const _DraggableScrollableNotificationProxy = {type: "flax.core/sdk_widgets#type:DraggableScrollableNotification", parameters: _flaxMemberParameters96, constructors: {"": _flaxMemberParameters96}, methods: {"dispatch":_flaxMemberParameters97,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters98}, getters: ["extent","minExtent","maxExtent","initialExtent","context","shouldCloseOnMinExtent","depth"], setters: [], contextMembers: [], superMembers: ["get:extent","get:minExtent","get:maxExtent","get:initialExtent","get:context","get:shouldCloseOnMinExtent","get:depth","dispatch","toString","debugFillDescription"]} as const;
export interface _DraggableScrollableNotificationNative extends DraggableScrollableNotification {
readonly [_flaxDartTypeValue]: _DraggableScrollableNotificationNative;

dispatch(target: upstream2.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get extent(): number;
get minExtent(): number;
get maxExtent(): number;
get initialExtent(): number;
get context(): upstream2.BuildContext;
get shouldCloseOnMinExtent(): boolean;
get depth(): number;
}
export abstract class _DraggableScrollableNotificationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DraggableScrollableNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DraggableScrollableNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DraggableScrollableNotification", readonly [], false];
constructor(options: {extent: number; minExtent: number; maxExtent: number; initialExtent: number; context: upstream2.BuildContext; shouldCloseOnMinExtent?: boolean | undefined}) { super(_DraggableScrollableNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DraggableScrollableNotificationNative.prototype, _DraggableScrollableNotificationProxy);
export namespace _DraggableScrollableNotificationFactory { export function implement(args: [options: {extent: number; minExtent: number; maxExtent: number; initialExtent: number; context: upstream2.BuildContext; shouldCloseOnMinExtent?: boolean | undefined}], implementation: {}): DraggableScrollableNotification {
return constructProxy(_DraggableScrollableNotificationProxy, args, implementation) as DraggableScrollableNotification; } }
const _DraggableScrollableNotificationBinding = _flaxProxyFactory(_DraggableScrollableNotificationFactory, _DraggableScrollableNotificationNative) as unknown as typeof _DraggableScrollableNotificationFactory & (new(options: {extent: number; minExtent: number; maxExtent: number; initialExtent: number; context: upstream2.BuildContext; shouldCloseOnMinExtent?: boolean | undefined}) => _DraggableScrollableNotificationNative);
export const DraggableScrollableNotification: typeof _DraggableScrollableNotificationBinding & _FlaxInstanceType<DraggableScrollableNotification> & _FlaxDartType<DraggableScrollableNotification, readonly ["class", "flax.core/sdk_widgets#type:DraggableScrollableNotification", readonly [], false]> = _flaxBindInstanceType<DraggableScrollableNotification, typeof _DraggableScrollableNotificationBinding>(_DraggableScrollableNotificationBinding, "flax.core/sdk_widgets#type:DraggableScrollableNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]) as typeof _DraggableScrollableNotificationBinding & _FlaxInstanceType<DraggableScrollableNotification> & _FlaxDartType<DraggableScrollableNotification, readonly ["class", "flax.core/sdk_widgets#type:DraggableScrollableNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "extent" | "minExtent" | "maxExtent" | "initialExtent" | "context" | "shouldCloseOnMinExtent" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

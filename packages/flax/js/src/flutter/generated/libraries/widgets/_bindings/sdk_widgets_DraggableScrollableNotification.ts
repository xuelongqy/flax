// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"target","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"description","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DraggableScrollableNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{ "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableNotification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }> { readonly __DraggableScrollableNotification: unique symbol;
readonly [_flaxDartTypeValue]: DraggableScrollableNotification;

}
defineObject("flax.core/sdk_widgets#type:DraggableScrollableNotification", ["depth","extent","minExtent","maxExtent","initialExtent","context","shouldCloseOnMinExtent"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DraggableScrollableNotification", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
const _DraggableScrollableNotificationProxy = {type: "flax.core/sdk_widgets#type:DraggableScrollableNotification", parameters: [{"name":"extent","required":true,"positional":false},{"name":"minExtent","required":true,"positional":false},{"name":"maxExtent","required":true,"positional":false},{"name":"initialExtent","required":true,"positional":false},{"name":"context","required":true,"positional":false},{"name":"shouldCloseOnMinExtent","required":false,"positional":false}], constructors: {"":[{"name":"extent","required":true,"positional":false},{"name":"minExtent","required":true,"positional":false},{"name":"maxExtent","required":true,"positional":false},{"name":"initialExtent","required":true,"positional":false},{"name":"context","required":true,"positional":false},{"name":"shouldCloseOnMinExtent","required":false,"positional":false}]}, methods: {"dispatch":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"debugFillDescription":_flaxMemberParameters2}, getters: ["extent","minExtent","maxExtent","initialExtent","context","shouldCloseOnMinExtent","depth"], setters: [], contextMembers: [], superMembers: ["get:extent","get:minExtent","get:maxExtent","get:initialExtent","get:context","get:shouldCloseOnMinExtent","get:depth","dispatch","toString","debugFillDescription"]} as const;
export interface DraggableScrollableNotification {
readonly [_flaxDartTypeValue]: DraggableScrollableNotification;

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
export abstract class DraggableScrollableNotification extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DraggableScrollableNotification>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DraggableScrollableNotification;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DraggableScrollableNotification", readonly [], false];
constructor(options: {extent: number; minExtent: number; maxExtent: number; initialExtent: number; context: upstream2.BuildContext; shouldCloseOnMinExtent?: boolean | undefined}) { super(_DraggableScrollableNotificationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DraggableScrollableNotification.prototype, _DraggableScrollableNotificationProxy);
export namespace DraggableScrollableNotification { export function implement(args: [options: {extent: number; minExtent: number; maxExtent: number; initialExtent: number; context: upstream2.BuildContext; shouldCloseOnMinExtent?: boolean | undefined}], implementation: {}): DraggableScrollableNotification {
return constructProxy(_DraggableScrollableNotificationProxy, args, implementation) as DraggableScrollableNotification; } }
_flaxBindInstanceType<DraggableScrollableNotification, typeof DraggableScrollableNotification>(DraggableScrollableNotification, "flax.core/sdk_widgets#type:DraggableScrollableNotification", ["flax.core/sdk_widgets#type:Notification","dart:core::Object","flax.core/sdk_widgets#type:ViewportNotificationMixin"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "extent" | "minExtent" | "maxExtent" | "initialExtent" | "context" | "shouldCloseOnMinExtent" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewportNotificationMixin extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> { readonly __ViewportNotificationMixin: unique symbol;
readonly [_flaxDartTypeValue]: ViewportNotificationMixin;

readonly depth: number;
dispatch(target: upstream1.BuildContext | null): void;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
defineObject("flax.core/sdk_widgets#type:ViewportNotificationMixin", ["depth"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ViewportNotificationMixin", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Notification");
export const ViewportNotificationMixin: object & _FlaxInstanceType<ViewportNotificationMixin> & _FlaxDartType<ViewportNotificationMixin, readonly ["class", "flax.core/sdk_widgets#type:ViewportNotificationMixin", readonly [], false]> = _flaxBindInstanceType<ViewportNotificationMixin, object>({}, "flax.core/sdk_widgets#type:ViewportNotificationMixin", ["flax.core/sdk_widgets#type:Notification"]) as object & _FlaxInstanceType<ViewportNotificationMixin> & _FlaxDartType<ViewportNotificationMixin, readonly ["class", "flax.core/sdk_widgets#type:ViewportNotificationMixin", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NotificationListener<T extends upstream0.Notification = upstream0.Notification> extends _FlaxDartWidget, Omit<upstream1.ProxyWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::NotificationListener": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __NotificationListener: unique symbol;
readonly [_flaxDartTypeValue]: NotificationListener<T>;

readonly onNotification: ((notification: (T | DartInput<T>)) => boolean) | null;
readonly child: Widget;
readonly key: upstream2.Key | null;
createElement(): upstream3.Element;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream5.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream6.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:NotificationListener", ["onNotification","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:NotificationListener", "object", {"createElement":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters5,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters8,"debugDescribeChildren":_flaxMemberParameters2}, {}), []);
export function _NotificationListenerFactory<T extends upstream0.Notification = upstream0.Notification>(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Widget; onNotification?: ((notification: T) => boolean) | null | undefined }): NotificationListener<T>;
export function _NotificationListenerFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Widget; onNotification?: ((notification: upstream0.Notification) => boolean) | null | undefined }): NotificationListener<upstream0.Notification>;
export function _NotificationListenerFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:NotificationListener", "", [{"name":"key"},{"name":"child","required":true},{"name":"onNotification"}], [], options) as NotificationListener<upstream0.Notification>;
}
export const NotificationListener: typeof _NotificationListenerFactory & _FlaxInstanceType<NotificationListener<upstream0.Notification>> & _FlaxDartType<NotificationListener<upstream0.Notification>, readonly ["class", "flax.core/sdk_widgets#type:NotificationListener", readonly [readonly ["class", "flax.core/sdk_widgets#type:Notification", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<NotificationListener<upstream0.Notification>, typeof _NotificationListenerFactory>(_NotificationListenerFactory, "flax.core/sdk_widgets#type:NotificationListener", ["flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _NotificationListenerFactory & _FlaxInstanceType<NotificationListener<upstream0.Notification>> & _FlaxDartType<NotificationListener<upstream0.Notification>, readonly ["class", "flax.core/sdk_widgets#type:NotificationListener", readonly [readonly ["class", "flax.core/sdk_widgets#type:Notification", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(NotificationListener, "flax.core/sdk_widgets#type:NotificationListener", {"category":"object","constructors":{"":[{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"onNotification","required":false,"positional":false}]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onNotification" | "child" | "key" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::NotificationListener" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Notification] ? {(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined;child: Widget;onNotification?: ((notification: _Selected0) => boolean) | null | undefined}): NotificationListener<_Selected0>;readonly prototype: NotificationListener<_Selected0>;} & _FlaxInstanceType<NotificationListener<_Selected0>> & _FlaxDartType<NotificationListener<_Selected0>> : never : never; }

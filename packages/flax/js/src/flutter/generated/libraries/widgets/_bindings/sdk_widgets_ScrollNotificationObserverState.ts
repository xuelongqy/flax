// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotificationObserver';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"oldWidget","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"fn","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollNotificationObserverState extends Omit<upstream0.State<upstream1.ScrollNotificationObserver>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.ScrollNotificationObserver>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification_observer.dart::ScrollNotificationObserverState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.ScrollNotificationObserver] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ScrollNotificationObserverState: unique symbol;
readonly [_flaxDartTypeValue]: ScrollNotificationObserverState;

readonly widget: upstream1.ScrollNotificationObserver;
readonly context: upstream3.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
addListener(listener: ((notification: upstream8.ScrollNotification) => void)): void;
removeListener(listener: ((notification: upstream8.ScrollNotification) => void)): void;
build(context: upstream3.BuildContext): Widget;
dispose(): void;
initState(): void;
didUpdateWidget(oldWidget: upstream1.ScrollNotificationObserver): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
didChangeDependencies(): void;
}
defineObject("flax.core/sdk_widgets#type:ScrollNotificationObserverState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollNotificationObserverState", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"build":_flaxMemberParameters1,"dispose":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters4,"deactivate":_flaxMemberParameters2,"activate":_flaxMemberParameters2,"didChangeDependencies":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ScrollNotificationObserverStateFactory(): ScrollNotificationObserverState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ScrollNotificationObserverState", "", [], [], {}) as ScrollNotificationObserverState;
}
export const ScrollNotificationObserverState: typeof _ScrollNotificationObserverStateFactory & _FlaxInstanceType<ScrollNotificationObserverState> & _FlaxDartType<ScrollNotificationObserverState, readonly ["class", "flax.core/sdk_widgets#type:ScrollNotificationObserverState", readonly [], false]> = _flaxBindInstanceType<ScrollNotificationObserverState, typeof _ScrollNotificationObserverStateFactory>(_ScrollNotificationObserverStateFactory, "flax.core/sdk_widgets#type:ScrollNotificationObserverState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScrollNotificationObserverStateFactory & _FlaxInstanceType<ScrollNotificationObserverState> & _FlaxDartType<ScrollNotificationObserverState, readonly ["class", "flax.core/sdk_widgets#type:ScrollNotificationObserverState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "addListener" | "removeListener" | "build" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/scroll_notification_observer.dart::ScrollNotificationObserverState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream6 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import { _flaxMemberParameters2, _flaxMemberParameters208, _flaxMemberParameters209, _flaxMemberParameters210, _flaxMemberParameters211, _flaxMemberParameters212, _flaxMemberParameters213 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverlayRoute<T extends unknown | null = unknown | null> extends Omit<upstream0.Route<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> { readonly __OverlayRoute: unique symbol;
readonly [_flaxDartTypeValue]: OverlayRoute<T>;

readonly requestFocus: boolean;
readonly navigator: upstream1.NavigatorState | null;
readonly settings: upstream2.RouteSettings;
readonly restorationScopeId: upstream3.ValueListenable<string | null>;
readonly overlayEntries: DartList<upstream4.OverlayEntry>;
readonly popDisposition: upstream5.RoutePopDisposition;
readonly willHandlePopInternally: boolean;
readonly currentResult: T | null;
readonly popped: Promise<T | null>;
readonly isCurrent: boolean;
readonly isFirst: boolean;
readonly hasActiveRouteBelow: boolean;
readonly isActive: boolean;
readonly finishedWhenPopped: boolean;
install(): void;
didPush(): upstream6.TickerFuture;
didAdd(): void;
didReplace(oldRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
willPop(): Promise<upstream5.RoutePopDisposition>;
onPopInvoked(didPop: boolean): void;
onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
didPop(result: (T | DartInput<T>) | null): boolean;
didComplete(result: (T | DartInput<T>) | null): void;
didPopNext(nextRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }>): void;
didChangeNext(nextRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
didChangePrevious(previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
changedInternalState(): void;
changedExternalState(): void;
dispose(): void;
createOverlayEntries(): DartIterable<upstream4.OverlayEntry>;
}
defineObject("flax.core/sdk_widgets#type:OverlayRoute", ["requestFocus","navigator","settings","restorationScopeId","overlayEntries","popDisposition","willHandlePopInternally","currentResult","popped","isCurrent","isFirst","hasActiveRouteBelow","isActive","finishedWhenPopped"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:OverlayRoute", "object", {"install":_flaxMemberParameters2,"didPush":_flaxMemberParameters2,"didAdd":_flaxMemberParameters2,"didReplace":_flaxMemberParameters208,"willPop":_flaxMemberParameters2,"onPopInvoked":_flaxMemberParameters209,"onPopInvokedWithResult":_flaxMemberParameters210,"didPop":_flaxMemberParameters211,"didComplete":_flaxMemberParameters211,"didPopNext":_flaxMemberParameters212,"didChangeNext":_flaxMemberParameters212,"didChangePrevious":_flaxMemberParameters213,"changedInternalState":_flaxMemberParameters2,"changedExternalState":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"createOverlayEntries":_flaxMemberParameters2}, {}), []);
export const OverlayRoute: object & _FlaxInstanceType<OverlayRoute<unknown | null>> & _FlaxDartType<OverlayRoute<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:OverlayRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<OverlayRoute<unknown | null>, object>({}, "flax.core/sdk_widgets#type:OverlayRoute", ["flax.core/flutter#type:Route","package:flutter/src/widgets/navigator.dart::_RoutePlaceholder","dart:core::Object"]) as object & _FlaxInstanceType<OverlayRoute<unknown | null>> & _FlaxDartType<OverlayRoute<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:OverlayRoute", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(OverlayRoute, "flax.core/sdk_widgets#type:OverlayRoute", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "overlayEntries" | "popDisposition" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "finishedWhenPopped" | "install" | "didPush" | "didAdd" | "didReplace" | "willPop" | "onPopInvoked" | "onPopInvokedWithResult" | "didPop" | "didComplete" | "didPopNext" | "didChangeNext" | "didChangePrevious" | "changedInternalState" | "changedExternalState" | "dispose" | "createOverlayEntries" | "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: OverlayRoute<_Selected0>;} & _FlaxInstanceType<OverlayRoute<_Selected0>> & _FlaxDartType<OverlayRoute<_Selected0>> : never : never; }

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RoutePopDisposition';
import type * as upstream5 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import { _flaxMemberParameters4, _flaxMemberParameters146, _flaxMemberParameters147, _flaxMemberParameters148, _flaxMemberParameters149, _flaxMemberParameters150, _flaxMemberParameters151 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Route<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> { readonly __Route: unique symbol;
readonly [_flaxDartTypeValue]: Route<T>;

readonly requestFocus: boolean;
readonly navigator: upstream0.NavigatorState | null;
readonly settings: upstream1.RouteSettings;
readonly restorationScopeId: upstream2.ValueListenable<string | null>;
readonly overlayEntries: DartList<upstream3.OverlayEntry>;
readonly popDisposition: upstream4.RoutePopDisposition;
readonly willHandlePopInternally: boolean;
readonly currentResult: T | null;
readonly popped: Promise<T | null>;
readonly isCurrent: boolean;
readonly isFirst: boolean;
readonly hasActiveRouteBelow: boolean;
readonly isActive: boolean;
install(): void;
didPush(): upstream5.TickerFuture;
didAdd(): void;
didReplace(oldRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> | null): void;
willPop(): Promise<upstream4.RoutePopDisposition>;
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
}
defineObject("flax.core/flutter#type:Route", ["requestFocus","navigator","settings","restorationScopeId","overlayEntries","popDisposition","willHandlePopInternally","currentResult","popped","isCurrent","isFirst","hasActiveRouteBelow","isActive"], [], _flaxBindingMethods("flax.core/flutter#type:Route", "object", {"install":_flaxMemberParameters4,"didPush":_flaxMemberParameters4,"didAdd":_flaxMemberParameters4,"didReplace":_flaxMemberParameters146,"willPop":_flaxMemberParameters4,"onPopInvoked":_flaxMemberParameters147,"onPopInvokedWithResult":_flaxMemberParameters148,"didPop":_flaxMemberParameters149,"didComplete":_flaxMemberParameters149,"didPopNext":_flaxMemberParameters150,"didChangeNext":_flaxMemberParameters150,"didChangePrevious":_flaxMemberParameters151,"changedInternalState":_flaxMemberParameters4,"changedExternalState":_flaxMemberParameters4,"dispose":_flaxMemberParameters4}, {}), []);
export const Route: object & _FlaxInstanceType<Route<unknown | null>> & _FlaxDartType<Route<unknown | null>, readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Route<unknown | null>, object>({}, "flax.core/flutter#type:Route", ["package:flutter/src/widgets/navigator.dart::_RoutePlaceholder","dart:core::Object"]) as object & _FlaxInstanceType<Route<unknown | null>> & _FlaxDartType<Route<unknown | null>, readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Route, "flax.core/flutter#type:Route", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "requestFocus" | "navigator" | "settings" | "restorationScopeId" | "overlayEntries" | "popDisposition" | "willHandlePopInternally" | "currentResult" | "popped" | "isCurrent" | "isFirst" | "hasActiveRouteBelow" | "isActive" | "install" | "didPush" | "didAdd" | "didReplace" | "willPop" | "onPopInvoked" | "onPopInvokedWithResult" | "didPop" | "didComplete" | "didPopNext" | "didChangeNext" | "didChangePrevious" | "changedInternalState" | "changedExternalState" | "dispose" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Route" | "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: Route<_Selected0>;} & _FlaxInstanceType<Route<_Selected0>> & _FlaxDartType<Route<_Selected0>> : never : never; }

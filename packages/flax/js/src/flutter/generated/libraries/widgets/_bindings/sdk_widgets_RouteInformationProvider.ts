// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationReportingType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationReportingType';
import { _flaxMemberParameters263, _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteInformationProvider extends Omit<upstream0.ValueListenable<upstream1.RouteInformation>, _flaxOwnMembers0>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueListenable<upstream1.RouteInformation>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.RouteInformation] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RouteInformationProvider: unique symbol;
readonly [_flaxDartTypeValue]: RouteInformationProvider;

}
defineObject("flax.core/sdk_widgets#type:RouteInformationProvider", ["value"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouteInformationProvider", "object", {"routerReportsNewRouteInformation":_flaxMemberParameters263}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
const _RouteInformationProviderProxy = {type: "flax.core/sdk_widgets#type:RouteInformationProvider", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"routerReportsNewRouteInformation":_flaxMemberParameters263}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["routerReportsNewRouteInformation"]} as const;
export interface RouteInformationProvider {
readonly [_flaxDartTypeValue]: RouteInformationProvider;

routerReportsNewRouteInformation(routeInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>, options?: {type?: upstream3.RouteInformationReportingType | undefined}): void;
}
export abstract class RouteInformationProvider extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteInformationProvider>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouteInformationProvider;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteInformationProvider", readonly [], false];
constructor() { super(_RouteInformationProviderProxy, Array.from(arguments)); }
abstract addListener(listener: (() => void)): void;
abstract removeListener(listener: (() => void)): void;
abstract get value(): upstream1.RouteInformation;
}
_flaxDefineProxyBase(RouteInformationProvider.prototype, _RouteInformationProviderProxy);
export namespace RouteInformationProvider { export function implement(args: [], implementation: {addListener: ((listener: (() => void)) => void); removeListener: ((listener: (() => void)) => void); get value(): Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>}): RouteInformationProvider {
return constructProxy(_RouteInformationProviderProxy, args, implementation) as RouteInformationProvider; } }
_flaxBindInstanceType<RouteInformationProvider, typeof RouteInformationProvider>(RouteInformationProvider, "flax.core/sdk_widgets#type:RouteInformationProvider", ["flax.core/flutter#type:ValueListenable","flax.core/flutter#type:Listenable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "addListener" | "removeListener" | "routerReportsNewRouteInformation" | "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";

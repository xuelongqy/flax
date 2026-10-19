// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteAware extends Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::RouteAware": readonly [] }> { readonly __RouteAware: unique symbol;
readonly [_flaxDartTypeValue]: RouteAware;

}
defineObject("flax.core/sdk_widgets#type:RouteAware", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouteAware", "object", {"didPopNext":_flaxMemberParameters2,"didPush":_flaxMemberParameters2,"didPop":_flaxMemberParameters2,"didPushNext":_flaxMemberParameters2}, {}), []);
const _RouteAwareProxy = {type: "flax.core/sdk_widgets#type:RouteAware", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"didPopNext":_flaxMemberParameters2,"didPush":_flaxMemberParameters2,"didPop":_flaxMemberParameters2,"didPushNext":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["didPopNext","didPush","didPop","didPushNext"]} as const;
export interface RouteAware {
readonly [_flaxDartTypeValue]: RouteAware;

didPopNext(): void;
didPush(): void;
didPop(): void;
didPushNext(): void;
}
export abstract class RouteAware extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteAware>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouteAware;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteAware", readonly [], false];
constructor() { super(_RouteAwareProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RouteAware.prototype, _RouteAwareProxy);
export namespace RouteAware { export function implement(args: [], implementation: {}): RouteAware {
return constructProxy(_RouteAwareProxy, args, implementation) as RouteAware; } }
_flaxBindInstanceType<RouteAware, typeof RouteAware>(RouteAware, "flax.core/sdk_widgets#type:RouteAware", ["dart:core::Object"]);

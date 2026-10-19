// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { _flaxMemberParameters342 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteInformation extends Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }> { readonly __RouteInformation: unique symbol;
readonly [_flaxDartTypeValue]: RouteInformation;

}
defineObject("flax.core/sdk_widgets#type:RouteInformation", ["location","uri","state"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouteInformation", "object", {}, {}), []);
const _RouteInformationProxy = {type: "flax.core/sdk_widgets#type:RouteInformation", parameters: _flaxMemberParameters342, constructors: {"": _flaxMemberParameters342}, methods: {}, getters: ["location","uri","state"], setters: [], contextMembers: [], superMembers: ["get:location","get:uri","get:state"]} as const;
export interface RouteInformation {
readonly [_flaxDartTypeValue]: RouteInformation;

get location(): string;
get uri(): upstream0.Uri;
get state(): unknown | null;
}
export abstract class RouteInformation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteInformation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouteInformation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteInformation", readonly [], false];
constructor(options?: {location?: string | null | undefined; uri?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined; state?: unknown | null | undefined}) { super(_RouteInformationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RouteInformation.prototype, _RouteInformationProxy);
export namespace RouteInformation { export function implement(args: [options?: {location?: string | null | undefined; uri?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined; state?: unknown | null | undefined}], implementation: {}): RouteInformation {
return constructProxy(_RouteInformationProxy, args, implementation) as RouteInformation; } }
_flaxBindInstanceType<RouteInformation, typeof RouteInformation>(RouteInformation, "flax.core/sdk_widgets#type:RouteInformation", ["dart:core::Object"]);

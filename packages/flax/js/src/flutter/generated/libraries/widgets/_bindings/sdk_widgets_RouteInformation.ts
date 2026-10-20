// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { _flaxMemberParameters327 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteInformation extends Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }> { readonly __RouteInformation: unique symbol;
readonly [_flaxDartTypeValue]: RouteInformation;

readonly location: string;
readonly uri: upstream0.Uri;
readonly state: unknown | null;
}
defineObject("flax.core/sdk_widgets#type:RouteInformation", ["location","uri","state"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouteInformation", "object", {}, {}), []);
export function _RouteInformationFactory(options: { location?: string | null | undefined; uri?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined; state?: unknown | null | undefined } = {}): RouteInformation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RouteInformation", "", [{"name":"location"},{"name":"uri"},{"name":"state"}], [], options) as RouteInformation;
}
const _RouteInformationProxy = {type: "flax.core/sdk_widgets#type:RouteInformation", parameters: _flaxMemberParameters327, constructors: {"": _flaxMemberParameters327}, methods: {}, getters: ["location","uri","state"], setters: [], contextMembers: [], superMembers: ["get:location","get:uri","get:state"]} as const;
export interface _RouteInformationNative extends RouteInformation {
readonly [_flaxDartTypeValue]: _RouteInformationNative;

get location(): string;
get uri(): upstream0.Uri;
get state(): unknown | null;
}
export abstract class _RouteInformationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteInformation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouteInformation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteInformation", readonly [], false];
constructor(options?: {location?: string | null | undefined; uri?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined; state?: unknown | null | undefined}) { super(_RouteInformationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RouteInformationNative.prototype, _RouteInformationProxy);
export namespace _RouteInformationFactory { export function implement(args: [options?: {location?: string | null | undefined; uri?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined; state?: unknown | null | undefined}], implementation: {}): RouteInformation {
return constructProxy(_RouteInformationProxy, args, implementation) as RouteInformation; } }
const _RouteInformationBinding = _flaxProxyFactory(_RouteInformationFactory, _RouteInformationNative) as unknown as typeof _RouteInformationFactory & (new(options?: {location?: string | null | undefined; uri?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined; state?: unknown | null | undefined}) => _RouteInformationNative);
export const RouteInformation: typeof _RouteInformationBinding & _FlaxInstanceType<RouteInformation> & _FlaxDartType<RouteInformation, readonly ["class", "flax.core/sdk_widgets#type:RouteInformation", readonly [], false]> = _flaxBindInstanceType<RouteInformation, typeof _RouteInformationBinding>(_RouteInformationBinding, "flax.core/sdk_widgets#type:RouteInformation", ["dart:core::Object"]) as typeof _RouteInformationBinding & _FlaxInstanceType<RouteInformation> & _FlaxDartType<RouteInformation, readonly ["class", "flax.core/sdk_widgets#type:RouteInformation", readonly [], false]>;

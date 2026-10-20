// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters9 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ApplicationSwitcherDescription extends Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::ApplicationSwitcherDescription": readonly [] }> { readonly __ApplicationSwitcherDescription: unique symbol;
readonly [_flaxDartTypeValue]: ApplicationSwitcherDescription;

readonly label: string | null;
readonly primaryColor: number | null;
}
defineObject("flax.core/sdk_services#type:ApplicationSwitcherDescription", ["label","primaryColor"], [], _flaxBindingMethods("flax.core/sdk_services#type:ApplicationSwitcherDescription", "object", {}, {}), []);
export function _ApplicationSwitcherDescriptionFactory(options: { label?: string | null | undefined; primaryColor?: number | null | undefined } = {}): ApplicationSwitcherDescription {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:ApplicationSwitcherDescription", "", [{"name":"label"},{"name":"primaryColor"}], [], options) as ApplicationSwitcherDescription;
}
const _ApplicationSwitcherDescriptionProxy = {type: "flax.core/sdk_services#type:ApplicationSwitcherDescription", parameters: _flaxMemberParameters9, constructors: {"": _flaxMemberParameters9}, methods: {}, getters: ["label","primaryColor"], setters: [], contextMembers: [], superMembers: ["get:label","get:primaryColor"]} as const;
export interface _ApplicationSwitcherDescriptionNative extends ApplicationSwitcherDescription {
readonly [_flaxDartTypeValue]: _ApplicationSwitcherDescriptionNative;

get label(): string | null;
get primaryColor(): number | null;
}
export abstract class _ApplicationSwitcherDescriptionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ApplicationSwitcherDescription>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ApplicationSwitcherDescription;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ApplicationSwitcherDescription", readonly [], false];
constructor(options?: {label?: string | null | undefined; primaryColor?: number | null | undefined}) { super(_ApplicationSwitcherDescriptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ApplicationSwitcherDescriptionNative.prototype, _ApplicationSwitcherDescriptionProxy);
export namespace _ApplicationSwitcherDescriptionFactory { export function implement(args: [options?: {label?: string | null | undefined; primaryColor?: number | null | undefined}], implementation: {}): ApplicationSwitcherDescription {
return constructProxy(_ApplicationSwitcherDescriptionProxy, args, implementation) as ApplicationSwitcherDescription; } }
const _ApplicationSwitcherDescriptionBinding = _flaxProxyFactory(_ApplicationSwitcherDescriptionFactory, _ApplicationSwitcherDescriptionNative) as unknown as typeof _ApplicationSwitcherDescriptionFactory & (new(options?: {label?: string | null | undefined; primaryColor?: number | null | undefined}) => _ApplicationSwitcherDescriptionNative);
export const ApplicationSwitcherDescription: typeof _ApplicationSwitcherDescriptionBinding & _FlaxInstanceType<ApplicationSwitcherDescription> & _FlaxDartType<ApplicationSwitcherDescription, readonly ["class", "flax.core/sdk_services#type:ApplicationSwitcherDescription", readonly [], false]> = _flaxBindInstanceType<ApplicationSwitcherDescription, typeof _ApplicationSwitcherDescriptionBinding>(_ApplicationSwitcherDescriptionBinding, "flax.core/sdk_services#type:ApplicationSwitcherDescription", ["dart:core::Object"]) as typeof _ApplicationSwitcherDescriptionBinding & _FlaxInstanceType<ApplicationSwitcherDescription> & _FlaxDartType<ApplicationSwitcherDescription, readonly ["class", "flax.core/sdk_services#type:ApplicationSwitcherDescription", readonly [], false]>;

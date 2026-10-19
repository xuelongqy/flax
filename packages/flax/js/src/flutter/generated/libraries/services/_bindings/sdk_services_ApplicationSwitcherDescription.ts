// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"label"},{"name":"primaryColor"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ApplicationSwitcherDescription extends Readonly<{ "__flaxBound:package:flutter/src/services/system_chrome.dart::ApplicationSwitcherDescription": readonly [] }> { readonly __ApplicationSwitcherDescription: unique symbol;
readonly [_flaxDartTypeValue]: ApplicationSwitcherDescription;

}
defineObject("flax.core/sdk_services#type:ApplicationSwitcherDescription", ["label","primaryColor"], [], _flaxBindingMethods("flax.core/sdk_services#type:ApplicationSwitcherDescription", "object", {}, {}), []);
const _ApplicationSwitcherDescriptionProxy = {type: "flax.core/sdk_services#type:ApplicationSwitcherDescription", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["label","primaryColor"], setters: [], contextMembers: [], superMembers: ["get:label","get:primaryColor"]} as const;
export interface ApplicationSwitcherDescription {
readonly [_flaxDartTypeValue]: ApplicationSwitcherDescription;

get label(): string | null;
get primaryColor(): number | null;
}
export abstract class ApplicationSwitcherDescription extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ApplicationSwitcherDescription>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ApplicationSwitcherDescription;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ApplicationSwitcherDescription", readonly [], false];
constructor(options?: {label?: string | null | undefined; primaryColor?: number | null | undefined}) { super(_ApplicationSwitcherDescriptionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ApplicationSwitcherDescription.prototype, _ApplicationSwitcherDescriptionProxy);
export namespace ApplicationSwitcherDescription { export function implement(args: [options?: {label?: string | null | undefined; primaryColor?: number | null | undefined}], implementation: {}): ApplicationSwitcherDescription {
return constructProxy(_ApplicationSwitcherDescriptionProxy, args, implementation) as ApplicationSwitcherDescription; } }
_flaxBindInstanceType<ApplicationSwitcherDescription, typeof ApplicationSwitcherDescription>(ApplicationSwitcherDescription, "flax.core/sdk_services#type:ApplicationSwitcherDescription", ["dart:core::Object"]);

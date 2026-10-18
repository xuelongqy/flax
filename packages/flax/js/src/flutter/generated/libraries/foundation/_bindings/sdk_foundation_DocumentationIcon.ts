// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DocumentationIcon extends Readonly<{ "__flaxBound:package:flutter/src/foundation/annotations.dart::DocumentationIcon": readonly [] }> { readonly __DocumentationIcon: unique symbol;
readonly [_flaxDartTypeValue]: DocumentationIcon;

}
defineObject("flax.core/sdk_foundation#type:DocumentationIcon", ["url"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DocumentationIcon", "object", {}, {}), []);
const _DocumentationIconProxy = {type: "flax.core/sdk_foundation#type:DocumentationIcon", parameters: [{"name":"url","required":true,"positional":true}], constructors: {"":[{"name":"url","required":true,"positional":true}]}, methods: {}, getters: ["url"], setters: [], contextMembers: [], superMembers: ["get:url"]} as const;
export interface DocumentationIcon {
readonly [_flaxDartTypeValue]: DocumentationIcon;

get url(): string;
}
export abstract class DocumentationIcon extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DocumentationIcon>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DocumentationIcon;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DocumentationIcon", readonly [], false];
constructor(url: string) { super(_DocumentationIconProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DocumentationIcon.prototype, _DocumentationIconProxy);
export namespace DocumentationIcon { export function implement(args: [url: string], implementation: {}): DocumentationIcon {
return constructProxy(_DocumentationIconProxy, args, implementation) as DocumentationIcon; } }
_flaxBindInstanceType<DocumentationIcon, typeof DocumentationIcon>(DocumentationIcon, "flax.core/sdk_foundation#type:DocumentationIcon", ["dart:core::Object"]);

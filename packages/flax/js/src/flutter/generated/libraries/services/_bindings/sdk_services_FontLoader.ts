// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters33, _flaxMemberParameters0, _flaxMemberParameters34 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FontLoader extends Readonly<{ "__flaxBound:package:flutter/src/services/font_loader.dart::FontLoader": readonly [] }> { readonly __FontLoader: unique symbol;
readonly [_flaxDartTypeValue]: FontLoader;

}
defineObject("flax.core/sdk_services#type:FontLoader", ["family"], [], _flaxBindingMethods("flax.core/sdk_services#type:FontLoader", "object", {"addFont":_flaxMemberParameters33,"load":_flaxMemberParameters0}, {}), []);
const _FontLoaderProxy = {type: "flax.core/sdk_services#type:FontLoader", parameters: _flaxMemberParameters34, constructors: {"": _flaxMemberParameters34}, methods: {"addFont":_flaxMemberParameters33,"load":_flaxMemberParameters0}, getters: ["family"], setters: [], contextMembers: [], superMembers: ["get:family","addFont","load"]} as const;
export interface FontLoader {
readonly [_flaxDartTypeValue]: FontLoader;

addFont(bytes: Promise<globalThis.DataView>): void;
load(): Promise<void>;
get family(): string;
}
export abstract class FontLoader extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontLoader>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FontLoader;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:FontLoader", readonly [], false];
constructor(family: string) { super(_FontLoaderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FontLoader.prototype, _FontLoaderProxy);
export namespace FontLoader { export function implement(args: [family: string], implementation: {}): FontLoader {
return constructProxy(_FontLoaderProxy, args, implementation) as FontLoader; } }
_flaxBindInstanceType<FontLoader, typeof FontLoader>(FontLoader, "flax.core/sdk_services#type:FontLoader", ["dart:core::Object"]);

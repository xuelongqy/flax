// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"sections","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Category extends Readonly<{ "__flaxBound:package:flutter/src/foundation/annotations.dart::Category": readonly [] }> { readonly __Category: unique symbol;
readonly [_flaxDartTypeValue]: Category;

}
defineObject("flax.core/sdk_foundation#type:Category", ["sections"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:Category", "object", {}, {}), []);
const _CategoryProxy = {type: "flax.core/sdk_foundation#type:Category", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["sections"], setters: [], contextMembers: [], superMembers: ["get:sections"]} as const;
export interface Category {
readonly [_flaxDartTypeValue]: Category;

get sections(): DartList<string>;
}
export abstract class Category extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Category>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Category;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Category", readonly [], false];
constructor(sections: DartListInput<string, string>) { super(_CategoryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Category.prototype, _CategoryProxy);
export namespace Category { export function implement(args: [sections: DartListInput<string, string>], implementation: {}): Category {
return constructProxy(_CategoryProxy, args, implementation) as Category; } }
_flaxBindInstanceType<Category, typeof Category>(Category, "flax.core/sdk_foundation#type:Category", ["dart:core::Object"]);

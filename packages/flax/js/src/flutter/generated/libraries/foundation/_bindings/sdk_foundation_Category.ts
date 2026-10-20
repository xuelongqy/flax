// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters25 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Category extends Readonly<{ "__flaxBound:package:flutter/src/foundation/annotations.dart::Category": readonly [] }> { readonly __Category: unique symbol;
readonly [_flaxDartTypeValue]: Category;

readonly sections: DartList<string>;
}
defineObject("flax.core/sdk_foundation#type:Category", ["sections"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:Category", "object", {}, {}), []);
export function _CategoryFactory(sections: DartListInput<string, string>): Category {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:Category", "", [{"name":"sections","required":true,"positional":true}], [sections], {}) as Category;
}
const _CategoryProxy = {type: "flax.core/sdk_foundation#type:Category", parameters: _flaxMemberParameters25, constructors: {"": _flaxMemberParameters25}, methods: {}, getters: ["sections"], setters: [], contextMembers: [], superMembers: ["get:sections"]} as const;
export interface _CategoryNative extends Category {
readonly [_flaxDartTypeValue]: _CategoryNative;

get sections(): DartList<string>;
}
export abstract class _CategoryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Category>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Category;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Category", readonly [], false];
constructor(sections: DartListInput<string, string>) { super(_CategoryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CategoryNative.prototype, _CategoryProxy);
export namespace _CategoryFactory { export function implement(args: [sections: DartListInput<string, string>], implementation: {}): Category {
return constructProxy(_CategoryProxy, args, implementation) as Category; } }
const _CategoryBinding = _flaxProxyFactory(_CategoryFactory, _CategoryNative) as unknown as typeof _CategoryFactory & (new(sections: DartListInput<string, string>) => _CategoryNative);
export const Category: typeof _CategoryBinding & _FlaxInstanceType<Category> & _FlaxDartType<Category, readonly ["class", "flax.core/sdk_foundation#type:Category", readonly [], false]> = _flaxBindInstanceType<Category, typeof _CategoryBinding>(_CategoryBinding, "flax.core/sdk_foundation#type:Category", ["dart:core::Object"]) as typeof _CategoryBinding & _FlaxInstanceType<Category> & _FlaxDartType<Category, readonly ["class", "flax.core/sdk_foundation#type:Category", readonly [], false]>;

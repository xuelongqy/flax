// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters55 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DocumentationIcon extends Readonly<{ "__flaxBound:package:flutter/src/foundation/annotations.dart::DocumentationIcon": readonly [] }> { readonly __DocumentationIcon: unique symbol;
readonly [_flaxDartTypeValue]: DocumentationIcon;

readonly url: string;
}
defineObject("flax.core/sdk_foundation#type:DocumentationIcon", ["url"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:DocumentationIcon", "object", {}, {}), []);
export function _DocumentationIconFactory(url: string): DocumentationIcon {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:DocumentationIcon", "", [{"name":"url","required":true,"positional":true}], [url], {}) as DocumentationIcon;
}
const _DocumentationIconProxy = {type: "flax.core/sdk_foundation#type:DocumentationIcon", parameters: _flaxMemberParameters55, constructors: {"": _flaxMemberParameters55}, methods: {}, getters: ["url"], setters: [], contextMembers: [], superMembers: ["get:url"]} as const;
export interface _DocumentationIconNative extends DocumentationIcon {
readonly [_flaxDartTypeValue]: _DocumentationIconNative;

get url(): string;
}
export abstract class _DocumentationIconNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DocumentationIcon>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DocumentationIcon;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DocumentationIcon", readonly [], false];
constructor(url: string) { super(_DocumentationIconProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DocumentationIconNative.prototype, _DocumentationIconProxy);
export namespace _DocumentationIconFactory { export function implement(args: [url: string], implementation: {}): DocumentationIcon {
return constructProxy(_DocumentationIconProxy, args, implementation) as DocumentationIcon; } }
const _DocumentationIconBinding = _flaxProxyFactory(_DocumentationIconFactory, _DocumentationIconNative) as unknown as typeof _DocumentationIconFactory & (new(url: string) => _DocumentationIconNative);
export const DocumentationIcon: typeof _DocumentationIconBinding & _FlaxInstanceType<DocumentationIcon> & _FlaxDartType<DocumentationIcon, readonly ["class", "flax.core/sdk_foundation#type:DocumentationIcon", readonly [], false]> = _flaxBindInstanceType<DocumentationIcon, typeof _DocumentationIconBinding>(_DocumentationIconBinding, "flax.core/sdk_foundation#type:DocumentationIcon", ["dart:core::Object"]) as typeof _DocumentationIconBinding & _FlaxInstanceType<DocumentationIcon> & _FlaxDartType<DocumentationIcon, readonly ["class", "flax.core/sdk_foundation#type:DocumentationIcon", readonly [], false]>;

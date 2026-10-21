// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters100 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Summary extends Readonly<{ "__flaxBound:package:flutter/src/foundation/annotations.dart::Summary": readonly [] }> { readonly __Summary: unique symbol;
readonly [_flaxDartTypeValue]: Summary;

readonly text: string;
}
defineObject("flax.core/sdk_foundation#type:Summary", ["text"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:Summary", "object", {}, {}), []);
export function _SummaryFactory(text: string): Summary {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:Summary", "", [{"name":"text","required":true,"positional":true}], [text], {}) as Summary;
}
const _SummaryProxy = {type: "flax.core/sdk_foundation#type:Summary", parameters: _flaxMemberParameters100, constructors: {"": _flaxMemberParameters100}, methods: {}, getters: ["text"], setters: [], contextMembers: [], superMembers: ["get:text"]} as const;
export interface _SummaryNative extends Summary {
readonly [_flaxDartTypeValue]: _SummaryNative;

get text(): string;
}
export abstract class _SummaryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Summary>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Summary;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Summary", readonly [], false];
constructor(text: string) { super(_SummaryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SummaryNative.prototype, _SummaryProxy);
export namespace _SummaryFactory { export function implement(args: [text: string], implementation: {}): Summary {
return constructProxy(_SummaryProxy, args, implementation) as Summary; } }
const _SummaryBinding = _flaxProxyFactory(_SummaryFactory, _SummaryNative) as unknown as typeof _SummaryFactory & (new(text: string) => _SummaryNative);
export const Summary: typeof _SummaryBinding & _FlaxInstanceType<Summary> & _FlaxDartType<Summary, readonly ["class", "flax.core/sdk_foundation#type:Summary", readonly [], false]> = _flaxBindInstanceType<Summary, typeof _SummaryBinding>(_SummaryBinding, "flax.core/sdk_foundation#type:Summary", ["dart:core::Object"]) as typeof _SummaryBinding & _FlaxInstanceType<Summary> & _FlaxDartType<Summary, readonly ["class", "flax.core/sdk_foundation#type:Summary", readonly [], false]>;

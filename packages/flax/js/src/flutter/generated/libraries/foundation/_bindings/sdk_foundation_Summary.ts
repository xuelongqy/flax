// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters82 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Summary extends Readonly<{ "__flaxBound:package:flutter/src/foundation/annotations.dart::Summary": readonly [] }> { readonly __Summary: unique symbol;
readonly [_flaxDartTypeValue]: Summary;

}
defineObject("flax.core/sdk_foundation#type:Summary", ["text"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:Summary", "object", {}, {}), []);
const _SummaryProxy = {type: "flax.core/sdk_foundation#type:Summary", parameters: _flaxMemberParameters82, constructors: {"": _flaxMemberParameters82}, methods: {}, getters: ["text"], setters: [], contextMembers: [], superMembers: ["get:text"]} as const;
export interface Summary {
readonly [_flaxDartTypeValue]: Summary;

get text(): string;
}
export abstract class Summary extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Summary>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Summary;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Summary", readonly [], false];
constructor(text: string) { super(_SummaryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Summary.prototype, _SummaryProxy);
export namespace Summary { export function implement(args: [text: string], implementation: {}): Summary {
return constructProxy(_SummaryProxy, args, implementation) as Summary; } }
_flaxBindInstanceType<Summary, typeof Summary>(Summary, "flax.core/sdk_foundation#type:Summary", ["dart:core::Object"]);

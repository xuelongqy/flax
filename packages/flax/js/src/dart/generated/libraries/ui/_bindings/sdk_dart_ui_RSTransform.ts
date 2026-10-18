// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RSTransform extends Readonly<{ "__flaxBound:dart:ui::RSTransform": readonly [] }> { readonly __RSTransform: unique symbol;
readonly [_flaxDartTypeValue]: RSTransform;

}
defineObject("flax.core/sdk_dart_ui#type:RSTransform", ["scos","ssin","tx","ty"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:RSTransform", "object", {}, {}), []);
const _RSTransformProxy = {type: "flax.core/sdk_dart_ui#type:RSTransform", parameters: [{"name":"scos","required":true,"positional":true},{"name":"ssin","required":true,"positional":true},{"name":"tx","required":true,"positional":true},{"name":"ty","required":true,"positional":true}], constructors: {"":[{"name":"scos","required":true,"positional":true},{"name":"ssin","required":true,"positional":true},{"name":"tx","required":true,"positional":true},{"name":"ty","required":true,"positional":true}]}, methods: {}, getters: ["scos","ssin","tx","ty"], setters: [], contextMembers: [], superMembers: ["get:scos","get:ssin","get:tx","get:ty"]} as const;
export interface RSTransform {
readonly [_flaxDartTypeValue]: RSTransform;

get scos(): number;
get ssin(): number;
get tx(): number;
get ty(): number;
}
export abstract class RSTransform extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RSTransform>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RSTransform;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:RSTransform", readonly [], false];
constructor(scos: number, ssin: number, tx: number, ty: number) { super(_RSTransformProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RSTransform.prototype, _RSTransformProxy);
export namespace RSTransform { export function implement(args: [scos: number, ssin: number, tx: number, ty: number], implementation: {}): RSTransform {
return constructProxy(_RSTransformProxy, args, implementation) as RSTransform; } }
_flaxBindInstanceType<RSTransform, typeof RSTransform>(RSTransform, "flax.core/sdk_dart_ui#type:RSTransform", ["dart:core::Object"]);

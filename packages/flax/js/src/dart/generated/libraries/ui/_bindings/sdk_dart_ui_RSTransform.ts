// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters131 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RSTransform extends Readonly<{ "__flaxBound:dart:ui::RSTransform": readonly [] }> { readonly __RSTransform: unique symbol;
readonly [_flaxDartTypeValue]: RSTransform;

readonly scos: number;
readonly ssin: number;
readonly tx: number;
readonly ty: number;
}
defineObject("flax.core/sdk_dart_ui#type:RSTransform", ["scos","ssin","tx","ty"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:RSTransform", "object", {}, {}), []);
export function _RSTransformFactory(scos: number, ssin: number, tx: number, ty: number): RSTransform {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RSTransform", "", [{"name":"scos","required":true,"positional":true},{"name":"ssin","required":true,"positional":true},{"name":"tx","required":true,"positional":true},{"name":"ty","required":true,"positional":true}], [scos, ssin, tx, ty], {}) as RSTransform;
}
export namespace _RSTransformFactory {
export function fromComponents(options: { rotation: number; scale: number; anchorX: number; anchorY: number; translateX: number; translateY: number }): RSTransform {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:RSTransform", "fromComponents", [{"name":"rotation","required":true},{"name":"scale","required":true},{"name":"anchorX","required":true},{"name":"anchorY","required":true},{"name":"translateX","required":true},{"name":"translateY","required":true}], [], options) as RSTransform;
}
}
const _RSTransformProxy = {type: "flax.core/sdk_dart_ui#type:RSTransform", parameters: _flaxMemberParameters131, constructors: {"": _flaxMemberParameters131}, methods: {}, getters: ["scos","ssin","tx","ty"], setters: [], contextMembers: [], superMembers: ["get:scos","get:ssin","get:tx","get:ty"]} as const;
export interface _RSTransformNative extends RSTransform {
readonly [_flaxDartTypeValue]: _RSTransformNative;

get scos(): number;
get ssin(): number;
get tx(): number;
get ty(): number;
}
export abstract class _RSTransformNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RSTransform>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RSTransform;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:RSTransform", readonly [], false];
constructor(scos: number, ssin: number, tx: number, ty: number) { super(_RSTransformProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RSTransformNative.prototype, _RSTransformProxy);
export namespace _RSTransformFactory { export function implement(args: [scos: number, ssin: number, tx: number, ty: number], implementation: {}): RSTransform {
return constructProxy(_RSTransformProxy, args, implementation) as RSTransform; } }
const _RSTransformBinding = _flaxProxyFactory(_RSTransformFactory, _RSTransformNative) as unknown as typeof _RSTransformFactory & (new(scos: number, ssin: number, tx: number, ty: number) => _RSTransformNative);
export const RSTransform: typeof _RSTransformBinding & _FlaxInstanceType<RSTransform> & _FlaxDartType<RSTransform, readonly ["class", "flax.core/sdk_dart_ui#type:RSTransform", readonly [], false]> = _flaxBindInstanceType<RSTransform, typeof _RSTransformBinding>(_RSTransformBinding, "flax.core/sdk_dart_ui#type:RSTransform", ["dart:core::Object"]) as typeof _RSTransformBinding & _FlaxInstanceType<RSTransform> & _FlaxDartType<RSTransform, readonly ["class", "flax.core/sdk_dart_ui#type:RSTransform", readonly [], false]>;

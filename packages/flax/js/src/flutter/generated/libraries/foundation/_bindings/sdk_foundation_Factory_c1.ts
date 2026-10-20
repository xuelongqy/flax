// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import { _flaxMemberParameters1, _flaxMemberParameters55 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Factory<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/foundation/basic_types.dart::Factory": readonly [T] }> { readonly __Factory: unique symbol;
readonly [_flaxDartTypeValue]: Factory<T>;

readonly constructor: (() => T);
readonly type: upstream0.Type;
toString(): string;
}
defineObject("flax.core/sdk_foundation#type:Factory", ["constructor","type"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:Factory", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _FactoryFactory<T extends unknown | null = unknown | null>(constructor: (() => (T | _FlaxDartOutput<T>))): Factory<T>;
export function _FactoryFactory(constructor: (() => unknown | null)): Factory<unknown | null>;
export function _FactoryFactory(constructor: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:Factory", "", [{"name":"constructor","required":true,"positional":true}], [constructor], {}) as Factory<unknown | null>;
}
const _FactoryProxy = {type: "flax.core/sdk_foundation#type:Factory", parameters: _flaxMemberParameters55, constructors: {"": _flaxMemberParameters55}, methods: {"toString":_flaxMemberParameters1}, getters: ["constructor","type"], setters: [], contextMembers: [], superMembers: ["get:constructor","get:type","toString"]} as const;
export interface _FactoryNative<T extends unknown | null = unknown | null> extends Factory<T> {
readonly [_flaxDartTypeValue]: _FactoryNative<T>;

toString(): string;
get constructor(): (() => T);
get type(): upstream0.Type;
}
export abstract class _FactoryNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Factory<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Factory<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:Factory", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(constructor: (() => unknown | null)) { super(_FactoryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_FactoryNative.prototype, _FactoryProxy);
export namespace _FactoryFactory { export function implement<T extends unknown | null = unknown | null>(args: [constructor: (() => unknown | null)], implementation: {}): Factory<T> {
return constructProxy(_FactoryProxy, args, implementation) as Factory<T>; } }
const _FactoryBinding = _flaxProxyFactory(_FactoryFactory, _FactoryNative) as unknown as typeof _FactoryFactory & (new<T extends unknown | null = unknown | null>(constructor: (() => unknown | null)) => _FactoryNative<T>);
export const Factory: typeof _FactoryBinding & _FlaxInstanceType<Factory<unknown | null>> & _FlaxDartType<Factory<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:Factory", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Factory<unknown | null>, typeof _FactoryBinding>(_FactoryBinding, "flax.core/sdk_foundation#type:Factory", ["dart:core::Object"]) as typeof _FactoryBinding & _FlaxInstanceType<Factory<unknown | null>> & _FlaxDartType<Factory<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:Factory", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Factory, "flax.core/sdk_foundation#type:Factory", {...{"category":"object","constructors":{"":[{"name":"constructor","required":true,"positional":true}]}}, proxy: _FactoryProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (constructor: (() => unknown | null)) => _FactoryNative<_Selected0>) & {(constructor: (() => (_Selected0 | DartInput<_Selected0>))): _FactoryNative<_Selected0>;readonly prototype: _FactoryNative<_Selected0>;implement(args: readonly [(() => unknown | null)], implementation: Partial<_FactoryNative<_Selected0>>): _FactoryNative<_Selected0>;} & _FlaxInstanceType<_FactoryNative<_Selected0>> & _FlaxDartType<_FactoryNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (constructor: (() => unknown | null)) => _FactoryNative<_Selected0>) & {(constructor: (() => (_Selected0 | DartInput<_Selected0>))): _FactoryNative<_Selected0>;readonly prototype: _FactoryNative<_Selected0>;implement(args: readonly [(() => unknown | null)], implementation: Partial<_FactoryNative<_Selected0>>): _FactoryNative<_Selected0>;} & _FlaxInstanceType<_FactoryNative<_Selected0>> & _FlaxDartType<_FactoryNative<_Selected0>> : never : never; }

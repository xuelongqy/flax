// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { _flaxMemberParameters454, _flaxMemberParameters2, _flaxMemberParameters33 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStatePropertyAll<T extends unknown | null = unknown | null> extends Omit<upstream0.WidgetStateProperty<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatePropertyAll": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T] }> { readonly __WidgetStatePropertyAll: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStatePropertyAll<T>;

readonly value: T;
resolve(states: DartSetInput<upstream1.WidgetState, upstream1.WidgetState>): T;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:WidgetStatePropertyAll", ["value"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStatePropertyAll", "object", {"resolve":_flaxMemberParameters454,"toString":_flaxMemberParameters2}, {}), []);
export function _WidgetStatePropertyAllFactory<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): WidgetStatePropertyAll<T>;
export function _WidgetStatePropertyAllFactory(value: unknown | null): WidgetStatePropertyAll<unknown | null>;
export function _WidgetStatePropertyAllFactory(value: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetStatePropertyAll", "", [{"name":"value","required":true,"positional":true}], [value], {}) as WidgetStatePropertyAll<unknown | null>;
}
const _WidgetStatePropertyAllProxy = {type: "flax.core/sdk_widgets#type:WidgetStatePropertyAll", parameters: _flaxMemberParameters33, constructors: {"": _flaxMemberParameters33}, methods: {"resolve":_flaxMemberParameters454,"toString":_flaxMemberParameters2}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["get:value","resolve","toString"]} as const;
export interface _WidgetStatePropertyAllNative<T extends unknown | null = unknown | null> extends WidgetStatePropertyAll<T> {
readonly [_flaxDartTypeValue]: _WidgetStatePropertyAllNative<T>;

resolve(states: DartSetInput<upstream1.WidgetState, upstream1.WidgetState>): T;
toString(): string;
get value(): T;
}
export abstract class _WidgetStatePropertyAllNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStatePropertyAll<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStatePropertyAll<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStatePropertyAll", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(value: unknown | null) { super(_WidgetStatePropertyAllProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_WidgetStatePropertyAllNative.prototype, _WidgetStatePropertyAllProxy);
export namespace _WidgetStatePropertyAllFactory { export function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): WidgetStatePropertyAll<T> {
return constructProxy(_WidgetStatePropertyAllProxy, args, implementation) as WidgetStatePropertyAll<T>; } }
const _WidgetStatePropertyAllBinding = _flaxProxyFactory(_WidgetStatePropertyAllFactory, _WidgetStatePropertyAllNative) as unknown as typeof _WidgetStatePropertyAllFactory & (new<T extends unknown | null = unknown | null>(value: unknown | null) => _WidgetStatePropertyAllNative<T>);
export const WidgetStatePropertyAll: typeof _WidgetStatePropertyAllBinding & _FlaxInstanceType<WidgetStatePropertyAll<unknown | null>> & _FlaxDartType<WidgetStatePropertyAll<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:WidgetStatePropertyAll", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<WidgetStatePropertyAll<unknown | null>, typeof _WidgetStatePropertyAllBinding>(_WidgetStatePropertyAllBinding, "flax.core/sdk_widgets#type:WidgetStatePropertyAll", ["dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]) as typeof _WidgetStatePropertyAllBinding & _FlaxInstanceType<WidgetStatePropertyAll<unknown | null>> & _FlaxDartType<WidgetStatePropertyAll<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:WidgetStatePropertyAll", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(WidgetStatePropertyAll, "flax.core/sdk_widgets#type:WidgetStatePropertyAll", {...{"category":"object","constructors":{"":[{"name":"value","required":true,"positional":true}]}}, proxy: _WidgetStatePropertyAllProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "resolve" | "toString" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatePropertyAll" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (value: unknown | null) => _WidgetStatePropertyAllNative<_Selected0>) & {(value: (_Selected0 | DartInput<_Selected0>)): _WidgetStatePropertyAllNative<_Selected0>;readonly prototype: _WidgetStatePropertyAllNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_WidgetStatePropertyAllNative<_Selected0>>): _WidgetStatePropertyAllNative<_Selected0>;} & _FlaxInstanceType<_WidgetStatePropertyAllNative<_Selected0>> & _FlaxDartType<_WidgetStatePropertyAllNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (value: unknown | null) => _WidgetStatePropertyAllNative<_Selected0>) & {(value: (_Selected0 | DartInput<_Selected0>)): _WidgetStatePropertyAllNative<_Selected0>;readonly prototype: _WidgetStatePropertyAllNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_WidgetStatePropertyAllNative<_Selected0>>): _WidgetStatePropertyAllNative<_Selected0>;} & _FlaxInstanceType<_WidgetStatePropertyAllNative<_Selected0>> & _FlaxDartType<_WidgetStatePropertyAllNative<_Selected0>> : never : never; }

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"value","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStatePropertyAll<T extends unknown | null = unknown | null> extends Omit<upstream0.WidgetStateProperty<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatePropertyAll": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T] }> { readonly __WidgetStatePropertyAll: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStatePropertyAll<T>;

}
defineObject("flax.core/sdk_widgets#type:WidgetStatePropertyAll", ["value"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStatePropertyAll", "object", {"resolve":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
const _WidgetStatePropertyAllProxy = {type: "flax.core/sdk_widgets#type:WidgetStatePropertyAll", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"resolve":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["get:value","resolve","toString"]} as const;
export interface WidgetStatePropertyAll<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: WidgetStatePropertyAll<T>;

resolve(states: DartSetInput<upstream1.WidgetState, upstream1.WidgetState>): T;
toString(): string;
get value(): T;
}
export abstract class WidgetStatePropertyAll<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStatePropertyAll<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStatePropertyAll<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStatePropertyAll", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(value: unknown | null) { super(_WidgetStatePropertyAllProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(WidgetStatePropertyAll.prototype, _WidgetStatePropertyAllProxy);
export namespace WidgetStatePropertyAll { export function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): WidgetStatePropertyAll<T> {
return constructProxy(_WidgetStatePropertyAllProxy, args, implementation) as WidgetStatePropertyAll<T>; } }
_flaxBindInstanceType<WidgetStatePropertyAll<unknown | null>, typeof WidgetStatePropertyAll>(WidgetStatePropertyAll, "flax.core/sdk_widgets#type:WidgetStatePropertyAll", ["dart:core::Object","flax.core/flutter#type:WidgetStateProperty"]);
_flaxDefineDartTypes(WidgetStatePropertyAll, "flax.core/sdk_widgets#type:WidgetStatePropertyAll", {...{"category":"object","constructors":{}}, proxy: _WidgetStatePropertyAllProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "resolve" | "toString" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatePropertyAll" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (value: unknown | null) => WidgetStatePropertyAll<_Selected0>) & {readonly prototype: WidgetStatePropertyAll<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<WidgetStatePropertyAll<_Selected0>>): WidgetStatePropertyAll<_Selected0>;} & _FlaxInstanceType<WidgetStatePropertyAll<_Selected0>> & _FlaxDartType<WidgetStatePropertyAll<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (value: unknown | null) => WidgetStatePropertyAll<_Selected0>) & {readonly prototype: WidgetStatePropertyAll<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<WidgetStatePropertyAll<_Selected0>>): WidgetStatePropertyAll<_Selected0>;} & _FlaxInstanceType<WidgetStatePropertyAll<_Selected0>> & _FlaxDartType<WidgetStatePropertyAll<_Selected0>> : never : never; }

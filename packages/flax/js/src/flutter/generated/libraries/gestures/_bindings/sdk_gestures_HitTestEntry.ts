// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters7, _flaxMemberParameters39 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestEntry<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> extends Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [T] }> { readonly __HitTestEntry: unique symbol;
readonly [_flaxDartTypeValue]: HitTestEntry<T>;

readonly target: T;
readonly transform: upstream1.Matrix4 | null;
toString(): string;
}
defineObject("flax.core/sdk_gestures#type:HitTestEntry", ["target","transform"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:HitTestEntry", "object", {"toString":_flaxMemberParameters7}, {}), []);
export function _HitTestEntryFactory<T extends upstream0.HitTestTarget = upstream0.HitTestTarget>(target: (T | DartInput<T>)): HitTestEntry<T>;
export function _HitTestEntryFactory(target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>): HitTestEntry<upstream0.HitTestTarget>;
export function _HitTestEntryFactory(target: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:HitTestEntry", "", [{"name":"target","required":true,"positional":true}], [target], {}) as HitTestEntry<upstream0.HitTestTarget>;
}
const _HitTestEntryProxy = {type: "flax.core/sdk_gestures#type:HitTestEntry", parameters: _flaxMemberParameters39, constructors: {"": _flaxMemberParameters39}, methods: {"toString":_flaxMemberParameters7}, getters: ["target","transform"], setters: [], contextMembers: [], superMembers: ["get:target","get:transform","toString"]} as const;
export interface _HitTestEntryNative<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> extends HitTestEntry<T> {
readonly [_flaxDartTypeValue]: _HitTestEntryNative<T>;

toString(): string;
get target(): T;
get transform(): upstream1.Matrix4 | null;
}
export abstract class _HitTestEntryNative<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestEntry<upstream0.HitTestTarget>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HitTestEntry<upstream0.HitTestTarget>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:HitTestEntry", readonly [readonly ["class", "flax.core/sdk_gestures#type:HitTestTarget", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>) { super(_HitTestEntryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_HitTestEntryNative.prototype, _HitTestEntryProxy);
export namespace _HitTestEntryFactory { export function implement<T extends upstream0.HitTestTarget = upstream0.HitTestTarget>(args: [target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>], implementation: {}): HitTestEntry<T> {
return constructProxy(_HitTestEntryProxy, args, implementation) as HitTestEntry<T>; } }
const _HitTestEntryBinding = _flaxProxyFactory(_HitTestEntryFactory, _HitTestEntryNative) as unknown as typeof _HitTestEntryFactory & (new<T extends upstream0.HitTestTarget = upstream0.HitTestTarget>(target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>) => _HitTestEntryNative<T>);
export const HitTestEntry: typeof _HitTestEntryBinding & _FlaxInstanceType<HitTestEntry<upstream0.HitTestTarget>> & _FlaxDartType<HitTestEntry<upstream0.HitTestTarget>, readonly ["class", "flax.core/sdk_gestures#type:HitTestEntry", readonly [readonly ["class", "flax.core/sdk_gestures#type:HitTestTarget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<HitTestEntry<upstream0.HitTestTarget>, typeof _HitTestEntryBinding>(_HitTestEntryBinding, "flax.core/sdk_gestures#type:HitTestEntry", ["dart:core::Object"]) as typeof _HitTestEntryBinding & _FlaxInstanceType<HitTestEntry<upstream0.HitTestTarget>> & _FlaxDartType<HitTestEntry<upstream0.HitTestTarget>, readonly ["class", "flax.core/sdk_gestures#type:HitTestEntry", readonly [readonly ["class", "flax.core/sdk_gestures#type:HitTestTarget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(HitTestEntry, "flax.core/sdk_gestures#type:HitTestEntry", {...{"category":"object","constructors":{"":[{"name":"target","required":true,"positional":true}]}}, proxy: _HitTestEntryProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.HitTestTarget] ? (new (target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>) => _HitTestEntryNative<_Selected0>) & {(target: (_Selected0 | DartInput<_Selected0>)): _HitTestEntryNative<_Selected0>;readonly prototype: _HitTestEntryNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>], implementation: Partial<_HitTestEntryNative<_Selected0>>): _HitTestEntryNative<_Selected0>;} & _FlaxInstanceType<_HitTestEntryNative<_Selected0>> & _FlaxDartType<_HitTestEntryNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.HitTestTarget] ? (new (target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>) => _HitTestEntryNative<_Selected0>) & {(target: (_Selected0 | DartInput<_Selected0>)): _HitTestEntryNative<_Selected0>;readonly prototype: _HitTestEntryNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>], implementation: Partial<_HitTestEntryNative<_Selected0>>): _HitTestEntryNative<_Selected0>;} & _FlaxInstanceType<_HitTestEntryNative<_Selected0>> & _FlaxDartType<_HitTestEntryNative<_Selected0>> : never : never; }

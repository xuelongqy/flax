// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"target","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestEntry<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> extends Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [T] }> { readonly __HitTestEntry: unique symbol;
readonly [_flaxDartTypeValue]: HitTestEntry<T>;

}
defineObject("flax.core/sdk_gestures#type:HitTestEntry", ["target","transform"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:HitTestEntry", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _HitTestEntryProxy = {type: "flax.core/sdk_gestures#type:HitTestEntry", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["target","transform"], setters: [], contextMembers: [], superMembers: ["get:target","get:transform","toString"]} as const;
export interface HitTestEntry<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> {
readonly [_flaxDartTypeValue]: HitTestEntry<T>;

toString(): string;
get target(): T;
get transform(): upstream1.Matrix4 | null;
}
export abstract class HitTestEntry<T extends upstream0.HitTestTarget = upstream0.HitTestTarget> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestEntry<upstream0.HitTestTarget>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HitTestEntry<upstream0.HitTestTarget>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:HitTestEntry", readonly [readonly ["class", "flax.core/sdk_gestures#type:HitTestTarget", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>) { super(_HitTestEntryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(HitTestEntry.prototype, _HitTestEntryProxy);
export namespace HitTestEntry { export function implement<T extends upstream0.HitTestTarget = upstream0.HitTestTarget>(args: [target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>], implementation: {}): HitTestEntry<T> {
return constructProxy(_HitTestEntryProxy, args, implementation) as HitTestEntry<T>; } }
_flaxBindInstanceType<HitTestEntry<upstream0.HitTestTarget>, typeof HitTestEntry>(HitTestEntry, "flax.core/sdk_gestures#type:HitTestEntry", ["dart:core::Object"]);
_flaxDefineDartTypes(HitTestEntry, "flax.core/sdk_gestures#type:HitTestEntry", {...{"category":"object","constructors":{}}, proxy: _HitTestEntryProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.HitTestTarget] ? (abstract new (target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>) => HitTestEntry<_Selected0>) & {readonly prototype: HitTestEntry<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>], implementation: Partial<HitTestEntry<_Selected0>>): HitTestEntry<_Selected0>;} & _FlaxInstanceType<HitTestEntry<_Selected0>> & _FlaxDartType<HitTestEntry<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.HitTestTarget] ? (abstract new (target: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>) => HitTestEntry<_Selected0>) & {readonly prototype: HitTestEntry<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>], implementation: Partial<HitTestEntry<_Selected0>>): HitTestEntry<_Selected0>;} & _FlaxInstanceType<HitTestEntry<_Selected0>> & _FlaxDartType<HitTestEntry<_Selected0>> : never : never; }

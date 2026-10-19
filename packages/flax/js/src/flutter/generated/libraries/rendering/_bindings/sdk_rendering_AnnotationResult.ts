// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationEntry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationEntry';
const _flaxMemberParameters0 = [{"name":"entry","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnnotationResult<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [T] }> { readonly __AnnotationResult: unique symbol;
readonly [_flaxDartTypeValue]: AnnotationResult<T>;

}
defineObject("flax.core/sdk_rendering#type:AnnotationResult", ["entries","annotations"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:AnnotationResult", "object", {"add":_flaxMemberParameters0}, {}), []);
const _AnnotationResultProxy = {type: "flax.core/sdk_rendering#type:AnnotationResult", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"add":_flaxMemberParameters0}, getters: ["entries","annotations"], setters: [], contextMembers: [], superMembers: ["get:entries","get:annotations","add"]} as const;
export interface AnnotationResult<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: AnnotationResult<T>;

add(entry: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationEntry": readonly [T] }>): void;
get entries(): DartIterable<upstream0.AnnotationEntry<T>>;
get annotations(): DartIterable<T>;
}
export abstract class AnnotationResult<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnotationResult<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AnnotationResult<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AnnotationResult", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_AnnotationResultProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AnnotationResult.prototype, _AnnotationResultProxy);
export namespace AnnotationResult { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): AnnotationResult<T> {
return constructProxy(_AnnotationResultProxy, args, implementation) as AnnotationResult<T>; } }
_flaxBindInstanceType<AnnotationResult<unknown | null>, typeof AnnotationResult>(AnnotationResult, "flax.core/sdk_rendering#type:AnnotationResult", ["dart:core::Object"]);
_flaxDefineDartTypes(AnnotationResult, "flax.core/sdk_rendering#type:AnnotationResult", {...{"category":"object","constructors":{}}, proxy: _AnnotationResultProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => AnnotationResult<_Selected0>) & {readonly prototype: AnnotationResult<_Selected0>;implement(args: readonly [], implementation: Partial<AnnotationResult<_Selected0>>): AnnotationResult<_Selected0>;} & _FlaxInstanceType<AnnotationResult<_Selected0>> & _FlaxDartType<AnnotationResult<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => AnnotationResult<_Selected0>) & {readonly prototype: AnnotationResult<_Selected0>;implement(args: readonly [], implementation: Partial<AnnotationResult<_Selected0>>): AnnotationResult<_Selected0>;} & _FlaxInstanceType<AnnotationResult<_Selected0>> & _FlaxDartType<AnnotationResult<_Selected0>> : never : never; }

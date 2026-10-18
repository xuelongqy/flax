// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnnotationEntry<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationEntry": readonly [T] }> { readonly __AnnotationEntry: unique symbol;
readonly [_flaxDartTypeValue]: AnnotationEntry<T>;

}
defineObject("flax.core/sdk_rendering#type:AnnotationEntry", ["annotation","localPosition"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:AnnotationEntry", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _AnnotationEntryProxy = {type: "flax.core/sdk_rendering#type:AnnotationEntry", parameters: [{"name":"annotation","required":true,"positional":false},{"name":"localPosition","required":true,"positional":false}], constructors: {"":[{"name":"annotation","required":true,"positional":false},{"name":"localPosition","required":true,"positional":false}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["annotation","localPosition"], setters: [], contextMembers: [], superMembers: ["get:annotation","get:localPosition","toString"]} as const;
export interface AnnotationEntry<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: AnnotationEntry<T>;

toString(): string;
get annotation(): T;
get localPosition(): upstream0.Offset;
}
export abstract class AnnotationEntry<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnotationEntry<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AnnotationEntry<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AnnotationEntry", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {annotation: unknown | null; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_AnnotationEntryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AnnotationEntry.prototype, _AnnotationEntryProxy);
export namespace AnnotationEntry { export function implement<T extends unknown | null = unknown | null>(args: [options: {annotation: unknown | null; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): AnnotationEntry<T> {
return constructProxy(_AnnotationEntryProxy, args, implementation) as AnnotationEntry<T>; } }
_flaxBindInstanceType<AnnotationEntry<unknown | null>, typeof AnnotationEntry>(AnnotationEntry, "flax.core/sdk_rendering#type:AnnotationEntry", ["dart:core::Object"]);
_flaxDefineDartTypes(AnnotationEntry, "flax.core/sdk_rendering#type:AnnotationEntry", {...{"category":"object","constructors":{}}, proxy: _AnnotationEntryProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {annotation: unknown | null;localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => AnnotationEntry<_Selected0>) & {readonly prototype: AnnotationEntry<_Selected0>;implement(args: readonly [options: {annotation: unknown | null; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: Partial<AnnotationEntry<_Selected0>>): AnnotationEntry<_Selected0>;} & _FlaxInstanceType<AnnotationEntry<_Selected0>> & _FlaxDartType<AnnotationEntry<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {annotation: unknown | null;localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => AnnotationEntry<_Selected0>) & {readonly prototype: AnnotationEntry<_Selected0>;implement(args: readonly [options: {annotation: unknown | null; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: Partial<AnnotationEntry<_Selected0>>): AnnotationEntry<_Selected0>;} & _FlaxInstanceType<AnnotationEntry<_Selected0>> & _FlaxDartType<AnnotationEntry<_Selected0>> : never : never; }

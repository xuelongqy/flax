// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters111 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragTargetDetails<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTargetDetails": readonly [T] }> { readonly __DragTargetDetails: unique symbol;
readonly [_flaxDartTypeValue]: DragTargetDetails<T>;

}
defineObject("flax.core/sdk_widgets#type:DragTargetDetails", ["data","offset"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DragTargetDetails", "object", {}, {}), []);
const _DragTargetDetailsProxy = {type: "flax.core/sdk_widgets#type:DragTargetDetails", parameters: _flaxMemberParameters111, constructors: {"": _flaxMemberParameters111}, methods: {}, getters: ["data","offset"], setters: [], contextMembers: [], superMembers: ["get:data","get:offset"]} as const;
export interface DragTargetDetails<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: DragTargetDetails<T>;

get data(): T;
get offset(): upstream0.Offset;
}
export abstract class DragTargetDetails<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DragTargetDetails<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DragTargetDetails<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DragTargetDetails", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_DragTargetDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DragTargetDetails.prototype, _DragTargetDetailsProxy);
export namespace DragTargetDetails { export function implement<T extends unknown | null = unknown | null>(args: [options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): DragTargetDetails<T> {
return constructProxy(_DragTargetDetailsProxy, args, implementation) as DragTargetDetails<T>; } }
_flaxBindInstanceType<DragTargetDetails<unknown | null>, typeof DragTargetDetails>(DragTargetDetails, "flax.core/sdk_widgets#type:DragTargetDetails", ["dart:core::Object"]);
_flaxDefineDartTypes(DragTargetDetails, "flax.core/sdk_widgets#type:DragTargetDetails", {...{"category":"object","constructors":{}}, proxy: _DragTargetDetailsProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {data: unknown | null;offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => DragTargetDetails<_Selected0>) & {readonly prototype: DragTargetDetails<_Selected0>;implement(args: readonly [options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: Partial<DragTargetDetails<_Selected0>>): DragTargetDetails<_Selected0>;} & _FlaxInstanceType<DragTargetDetails<_Selected0>> & _FlaxDartType<DragTargetDetails<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {data: unknown | null;offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => DragTargetDetails<_Selected0>) & {readonly prototype: DragTargetDetails<_Selected0>;implement(args: readonly [options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: Partial<DragTargetDetails<_Selected0>>): DragTargetDetails<_Selected0>;} & _FlaxInstanceType<DragTargetDetails<_Selected0>> & _FlaxDartType<DragTargetDetails<_Selected0>> : never : never; }

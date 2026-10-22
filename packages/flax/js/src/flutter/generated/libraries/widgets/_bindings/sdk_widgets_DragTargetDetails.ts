// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters102 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragTargetDetails<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTargetDetails": readonly [T] }> { readonly __DragTargetDetails: unique symbol;
readonly [_flaxDartTypeValue]: DragTargetDetails<T>;

readonly data: T;
readonly offset: upstream0.Offset;
}
defineObject("flax.core/sdk_widgets#type:DragTargetDetails", ["data","offset"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DragTargetDetails", "object", {}, {}), []);
export function _DragTargetDetailsFactory<T extends unknown | null = unknown | null>(options: { data: (T | _FlaxDartOutput<T>); offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): DragTargetDetails<T>;
export function _DragTargetDetailsFactory(options: { data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): DragTargetDetails<unknown | null>;
export function _DragTargetDetailsFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DragTargetDetails", "", [{"name":"data","required":true},{"name":"offset","required":true}], [], options) as DragTargetDetails<unknown | null>;
}
const _DragTargetDetailsProxy = {type: "flax.core/sdk_widgets#type:DragTargetDetails", parameters: _flaxMemberParameters102, constructors: {"": _flaxMemberParameters102}, methods: {}, getters: ["data","offset"], setters: [], contextMembers: [], superMembers: ["get:data","get:offset"]} as const;
export interface _DragTargetDetailsNative<T extends unknown | null = unknown | null> extends DragTargetDetails<T> {
readonly [_flaxDartTypeValue]: _DragTargetDetailsNative<T>;

get data(): T;
get offset(): upstream0.Offset;
}
export abstract class _DragTargetDetailsNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DragTargetDetails<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DragTargetDetails<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DragTargetDetails", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_DragTargetDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DragTargetDetailsNative.prototype, _DragTargetDetailsProxy);
export namespace _DragTargetDetailsFactory { export function implement<T extends unknown | null = unknown | null>(args: [options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): DragTargetDetails<T> {
return constructProxy(_DragTargetDetailsProxy, args, implementation) as DragTargetDetails<T>; } }
const _DragTargetDetailsBinding = _flaxProxyFactory(_DragTargetDetailsFactory, _DragTargetDetailsNative) as unknown as typeof _DragTargetDetailsFactory & (new<T extends unknown | null = unknown | null>(options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _DragTargetDetailsNative<T>);
export const DragTargetDetails: typeof _DragTargetDetailsBinding & _FlaxInstanceType<DragTargetDetails<unknown | null>> & _FlaxDartType<DragTargetDetails<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:DragTargetDetails", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<DragTargetDetails<unknown | null>, typeof _DragTargetDetailsBinding>(_DragTargetDetailsBinding, "flax.core/sdk_widgets#type:DragTargetDetails", ["dart:core::Object"]) as typeof _DragTargetDetailsBinding & _FlaxInstanceType<DragTargetDetails<unknown | null>> & _FlaxDartType<DragTargetDetails<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:DragTargetDetails", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(DragTargetDetails, "flax.core/sdk_widgets#type:DragTargetDetails", {...{"category":"object","constructors":{"":[{"name":"data","required":true,"positional":false},{"name":"offset","required":true,"positional":false}]}}, proxy: _DragTargetDetailsProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {data: unknown | null;offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _DragTargetDetailsNative<_Selected0>) & {(options: {data: (_Selected0 | DartInput<_Selected0>);offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}): _DragTargetDetailsNative<_Selected0>;readonly prototype: _DragTargetDetailsNative<_Selected0>;implement(args: readonly [options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: Partial<_DragTargetDetailsNative<_Selected0>>): _DragTargetDetailsNative<_Selected0>;} & _FlaxInstanceType<_DragTargetDetailsNative<_Selected0>> & _FlaxDartType<_DragTargetDetailsNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {data: unknown | null;offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _DragTargetDetailsNative<_Selected0>) & {(options: {data: (_Selected0 | DartInput<_Selected0>);offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}): _DragTargetDetailsNative<_Selected0>;readonly prototype: _DragTargetDetailsNative<_Selected0>;implement(args: readonly [options: {data: unknown | null; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: Partial<_DragTargetDetailsNative<_Selected0>>): _DragTargetDetailsNative<_Selected0>;} & _FlaxInstanceType<_DragTargetDetailsNative<_Selected0>> & _FlaxDartType<_DragTargetDetailsNative<_Selected0>> : never : never; }

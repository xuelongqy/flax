// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0, _flaxMemberParameters40, _flaxMemberParameters78 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OffsetBase extends Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> { readonly __OffsetBase: unique symbol;
readonly [_flaxDartTypeValue]: OffsetBase;

}
defineObject("flax.core/sdk_dart_ui#type:OffsetBase", ["isInfinite","isFinite"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:OffsetBase", "object", {"toString":_flaxMemberParameters0,"operatorLessThan":_flaxMemberParameters40,"operatorGreaterThan":_flaxMemberParameters40,"operatorLessThanOrEqual":_flaxMemberParameters40,"operatorGreaterThanOrEqual":_flaxMemberParameters40}, {}), []);
const _OffsetBaseProxy = {type: "flax.core/sdk_dart_ui#type:OffsetBase", parameters: _flaxMemberParameters78, constructors: {"": _flaxMemberParameters78}, methods: {"toString":_flaxMemberParameters0,"operatorLessThan":_flaxMemberParameters40,"operatorGreaterThan":_flaxMemberParameters40,"operatorLessThanOrEqual":_flaxMemberParameters40,"operatorGreaterThanOrEqual":_flaxMemberParameters40}, getters: ["isInfinite","isFinite"], setters: [], contextMembers: [], superMembers: ["get:isInfinite","get:isFinite","toString","operatorLessThan","operatorGreaterThan","operatorLessThanOrEqual","operatorGreaterThanOrEqual"]} as const;
export interface OffsetBase {
readonly [_flaxDartTypeValue]: OffsetBase;

toString(): string;
operatorLessThan(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorGreaterThan(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorLessThanOrEqual(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
operatorGreaterThanOrEqual(other: Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
get isInfinite(): boolean;
get isFinite(): boolean;
}
export abstract class OffsetBase extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OffsetBase>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OffsetBase;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:OffsetBase", readonly [], false];
constructor(_dx: number, _dy: number) { super(_OffsetBaseProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(OffsetBase.prototype, _OffsetBaseProxy);
export namespace OffsetBase { export function implement(args: [_dx: number, _dy: number], implementation: {}): OffsetBase {
return constructProxy(_OffsetBaseProxy, args, implementation) as OffsetBase; } }
_flaxBindInstanceType<OffsetBase, typeof OffsetBase>(OffsetBase, "flax.core/sdk_dart_ui#type:OffsetBase", ["dart:core::Object"]);

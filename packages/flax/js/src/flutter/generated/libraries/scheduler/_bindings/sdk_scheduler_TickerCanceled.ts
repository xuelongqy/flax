// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import { _flaxMemberParameters0, _flaxMemberParameters8 } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/scheduler/_bindings/sdk_scheduler.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TickerCanceled extends Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerCanceled": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Exception": readonly [] }> { readonly __TickerCanceled: unique symbol;
readonly [_flaxDartTypeValue]: TickerCanceled;

}
defineObject("flax.core/sdk_scheduler#type:TickerCanceled", ["ticker"], [], _flaxBindingMethods("flax.core/sdk_scheduler#type:TickerCanceled", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _TickerCanceledProxy = {type: "flax.core/sdk_scheduler#type:TickerCanceled", parameters: _flaxMemberParameters8, constructors: {"": _flaxMemberParameters8}, methods: {"toString":_flaxMemberParameters0}, getters: ["ticker"], setters: [], contextMembers: [], superMembers: ["get:ticker","toString"]} as const;
export interface TickerCanceled {
readonly [_flaxDartTypeValue]: TickerCanceled;

toString(): string;
get ticker(): upstream0.Ticker | null;
}
export abstract class TickerCanceled extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerCanceled>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TickerCanceled;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_scheduler#type:TickerCanceled", readonly [], false];
constructor(ticker?: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [] }> | null) { super(_TickerCanceledProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TickerCanceled.prototype, _TickerCanceledProxy);
export namespace TickerCanceled { export function implement(args: [ticker?: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [] }> | null], implementation: {}): TickerCanceled {
return constructProxy(_TickerCanceledProxy, args, implementation) as TickerCanceled; } }
_flaxBindInstanceType<TickerCanceled, typeof TickerCanceled>(TickerCanceled, "flax.core/sdk_scheduler#type:TickerCanceled", ["dart:core::Object","dart:core::Exception"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "ticker" | "toString" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerCanceled" | "__flaxBound:dart:core::Exception";

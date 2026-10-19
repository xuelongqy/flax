// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters2, _flaxMemberParameters81 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DateTimeRange<T extends upstream0.DateTime = upstream0.DateTime> extends Readonly<{ "__flaxBound:package:flutter/src/material/date.dart::DateTimeRange": readonly [T] }> { readonly __DateTimeRange: unique symbol;
readonly [_flaxDartTypeValue]: DateTimeRange<T>;

}
defineObject("flax.core/sdk_material#type:DateTimeRange", ["start","end","duration"], [], _flaxBindingMethods("flax.core/sdk_material#type:DateTimeRange", "object", {"toString":_flaxMemberParameters2}, {}), []);
const _DateTimeRangeProxy = {type: "flax.core/sdk_material#type:DateTimeRange", parameters: _flaxMemberParameters81, constructors: {"": _flaxMemberParameters81}, methods: {"toString":_flaxMemberParameters2}, getters: ["start","end","duration"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","get:duration","toString"]} as const;
export interface DateTimeRange<T extends upstream0.DateTime = upstream0.DateTime> {
readonly [_flaxDartTypeValue]: DateTimeRange<T>;

toString(): string;
get start(): T;
get end(): T;
get duration(): upstream1.Duration;
}
export abstract class DateTimeRange<T extends upstream0.DateTime = upstream0.DateTime> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DateTimeRange<upstream0.DateTime>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DateTimeRange<upstream0.DateTime>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DateTimeRange", readonly [readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}) { super(_DateTimeRangeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DateTimeRange.prototype, _DateTimeRangeProxy);
export namespace DateTimeRange { export function implement<T extends upstream0.DateTime = upstream0.DateTime>(args: [options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}], implementation: {}): DateTimeRange<T> {
return constructProxy(_DateTimeRangeProxy, args, implementation) as DateTimeRange<T>; } }
_flaxBindInstanceType<DateTimeRange<upstream0.DateTime>, typeof DateTimeRange>(DateTimeRange, "flax.core/sdk_material#type:DateTimeRange", ["dart:core::Object"]);
_flaxDefineDartTypes(DateTimeRange, "flax.core/sdk_material#type:DateTimeRange", {...{"category":"object","constructors":{}}, proxy: _DateTimeRangeProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (abstract new (options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>;end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}) => DateTimeRange<_Selected0>) & {readonly prototype: DateTimeRange<_Selected0>;implement(args: readonly [options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}], implementation: Partial<DateTimeRange<_Selected0>>): DateTimeRange<_Selected0>;} & _FlaxInstanceType<DateTimeRange<_Selected0>> & _FlaxDartType<DateTimeRange<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (abstract new (options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>;end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}) => DateTimeRange<_Selected0>) & {readonly prototype: DateTimeRange<_Selected0>;implement(args: readonly [options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}], implementation: Partial<DateTimeRange<_Selected0>>): DateTimeRange<_Selected0>;} & _FlaxInstanceType<DateTimeRange<_Selected0>> & _FlaxDartType<DateTimeRange<_Selected0>> : never : never; }

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters4, _flaxMemberParameters92 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DateTimeRange<T extends upstream0.DateTime = upstream0.DateTime> extends Readonly<{ "__flaxBound:package:material_ui/src/date.dart::DateTimeRange": readonly [T] }> { readonly __DateTimeRange: unique symbol;
readonly [_flaxDartTypeValue]: DateTimeRange<T>;

readonly start: T;
readonly end: T;
readonly duration: upstream1.Duration;
toString(): string;
}
defineObject("flax.material/material#type:DateTimeRange", ["start","end","duration"], [], _flaxBindingMethods("flax.material/material#type:DateTimeRange", "object", {"toString":_flaxMemberParameters4}, {}), []);
export function _DateTimeRangeFactory<T extends upstream0.DateTime = upstream0.DateTime>(options: { start: (T | DartInput<T>); end: (T | DartInput<T>) }): DateTimeRange<T>;
export function _DateTimeRangeFactory(options: { start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> }): DateTimeRange<upstream0.DateTime>;
export function _DateTimeRangeFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:DateTimeRange", "", [{"name":"start","required":true},{"name":"end","required":true}], [], options) as DateTimeRange<upstream0.DateTime>;
}
const _DateTimeRangeProxy = {type: "flax.material/material#type:DateTimeRange", parameters: _flaxMemberParameters92, constructors: {"": _flaxMemberParameters92}, methods: {"toString":_flaxMemberParameters4}, getters: ["start","end","duration"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","get:duration","toString"]} as const;
export interface _DateTimeRangeNative<T extends upstream0.DateTime = upstream0.DateTime> extends DateTimeRange<T> {
readonly [_flaxDartTypeValue]: _DateTimeRangeNative<T>;

toString(): string;
get start(): T;
get end(): T;
get duration(): upstream1.Duration;
}
export abstract class _DateTimeRangeNative<T extends upstream0.DateTime = upstream0.DateTime> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DateTimeRange<upstream0.DateTime>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DateTimeRange<upstream0.DateTime>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:DateTimeRange", readonly [readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}) { super(_DateTimeRangeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DateTimeRangeNative.prototype, _DateTimeRangeProxy);
export namespace _DateTimeRangeFactory { export function implement<T extends upstream0.DateTime = upstream0.DateTime>(args: [options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}], implementation: {}): DateTimeRange<T> {
return constructProxy(_DateTimeRangeProxy, args, implementation) as DateTimeRange<T>; } }
const _DateTimeRangeBinding = _flaxProxyFactory(_DateTimeRangeFactory, _DateTimeRangeNative) as unknown as typeof _DateTimeRangeFactory & (new<T extends upstream0.DateTime = upstream0.DateTime>(options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}) => _DateTimeRangeNative<T>);
export const DateTimeRange: typeof _DateTimeRangeBinding & _FlaxInstanceType<DateTimeRange<upstream0.DateTime>> & _FlaxDartType<DateTimeRange<upstream0.DateTime>, readonly ["class", "flax.material/material#type:DateTimeRange", readonly [readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<DateTimeRange<upstream0.DateTime>, typeof _DateTimeRangeBinding>(_DateTimeRangeBinding, "flax.material/material#type:DateTimeRange", ["dart:core::Object"]) as typeof _DateTimeRangeBinding & _FlaxInstanceType<DateTimeRange<upstream0.DateTime>> & _FlaxDartType<DateTimeRange<upstream0.DateTime>, readonly ["class", "flax.material/material#type:DateTimeRange", readonly [readonly ["class", "flax.core/flutter#type:DateTime", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(DateTimeRange, "flax.material/material#type:DateTimeRange", {...{"category":"object","constructors":{"":[{"name":"start","required":true,"positional":false},{"name":"end","required":true,"positional":false}]}}, proxy: _DateTimeRangeProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (new (options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>;end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}) => _DateTimeRangeNative<_Selected0>) & {(options: {start: (_Selected0 | DartInput<_Selected0>);end: (_Selected0 | DartInput<_Selected0>)}): _DateTimeRangeNative<_Selected0>;readonly prototype: _DateTimeRangeNative<_Selected0>;implement(args: readonly [options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}], implementation: Partial<_DateTimeRangeNative<_Selected0>>): _DateTimeRangeNative<_Selected0>;} & _FlaxInstanceType<_DateTimeRangeNative<_Selected0>> & _FlaxDartType<_DateTimeRangeNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.DateTime] ? (new (options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>;end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}) => _DateTimeRangeNative<_Selected0>) & {(options: {start: (_Selected0 | DartInput<_Selected0>);end: (_Selected0 | DartInput<_Selected0>)}): _DateTimeRangeNative<_Selected0>;readonly prototype: _DateTimeRangeNative<_Selected0>;implement(args: readonly [options: {start: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; end: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>}], implementation: Partial<_DateTimeRangeNative<_Selected0>>): _DateTimeRangeNative<_Selected0>;} & _FlaxInstanceType<_DateTimeRangeNative<_Selected0>> & _FlaxDartType<_DateTimeRangeNative<_Selected0>> : never : never; }

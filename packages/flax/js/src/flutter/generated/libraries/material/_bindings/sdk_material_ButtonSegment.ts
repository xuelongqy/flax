// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import { _flaxMemberParameters23 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonSegment<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/material/segmented_button.dart::ButtonSegment": readonly [T] }> { readonly __ButtonSegment: unique symbol;
readonly [_flaxDartTypeValue]: ButtonSegment<T>;

readonly value: T;
readonly icon: Widget | null;
readonly label: Widget | null;
readonly tooltip: string | null;
readonly enabled: boolean;
}
defineObject("flax.core/sdk_material#type:ButtonSegment", ["value","icon","label","tooltip","enabled"], [], _flaxBindingMethods("flax.core/sdk_material#type:ButtonSegment", "object", {}, {}), []);
export function _ButtonSegmentFactory<T extends unknown | null = unknown | null>(options: { value: (T | _FlaxDartOutput<T>); icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined }): ButtonSegment<T>;
export function _ButtonSegmentFactory(options: { value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined }): ButtonSegment<unknown | null>;
export function _ButtonSegmentFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:ButtonSegment", "", [{"name":"value","required":true},{"name":"icon"},{"name":"label"},{"name":"tooltip"},{"name":"enabled"}], [], options) as ButtonSegment<unknown | null>;
}
const _ButtonSegmentProxy = {type: "flax.core/sdk_material#type:ButtonSegment", parameters: _flaxMemberParameters23, constructors: {"": _flaxMemberParameters23}, methods: {}, getters: ["value","icon","label","tooltip","enabled"], setters: [], contextMembers: [], superMembers: ["get:value","get:icon","get:label","get:tooltip","get:enabled"]} as const;
export interface _ButtonSegmentNative<T extends unknown | null = unknown | null> extends ButtonSegment<T> {
readonly [_flaxDartTypeValue]: _ButtonSegmentNative<T>;

get value(): T;
get icon(): Widget | null;
get label(): Widget | null;
get tooltip(): string | null;
get enabled(): boolean;
}
export abstract class _ButtonSegmentNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonSegment<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ButtonSegment<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ButtonSegment", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}) { super(_ButtonSegmentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ButtonSegmentNative.prototype, _ButtonSegmentProxy);
export namespace _ButtonSegmentFactory { export function implement<T extends unknown | null = unknown | null>(args: [options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}], implementation: {}): ButtonSegment<T> {
return constructProxy(_ButtonSegmentProxy, args, implementation) as ButtonSegment<T>; } }
const _ButtonSegmentBinding = _flaxProxyFactory(_ButtonSegmentFactory, _ButtonSegmentNative) as unknown as typeof _ButtonSegmentFactory & (new<T extends unknown | null = unknown | null>(options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}) => _ButtonSegmentNative<T>);
export const ButtonSegment: typeof _ButtonSegmentBinding & _FlaxInstanceType<ButtonSegment<unknown | null>> & _FlaxDartType<ButtonSegment<unknown | null>, readonly ["class", "flax.core/sdk_material#type:ButtonSegment", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ButtonSegment<unknown | null>, typeof _ButtonSegmentBinding>(_ButtonSegmentBinding, "flax.core/sdk_material#type:ButtonSegment", ["dart:core::Object"]) as typeof _ButtonSegmentBinding & _FlaxInstanceType<ButtonSegment<unknown | null>> & _FlaxDartType<ButtonSegment<unknown | null>, readonly ["class", "flax.core/sdk_material#type:ButtonSegment", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ButtonSegment, "flax.core/sdk_material#type:ButtonSegment", {...{"category":"object","constructors":{"":[{"name":"value","required":true,"positional":false},{"name":"icon","required":false,"positional":false},{"name":"label","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"enabled","required":false,"positional":false}]}}, proxy: _ButtonSegmentProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {value: unknown | null;icon?: Widget | null | undefined;label?: Widget | null | undefined;tooltip?: string | null | undefined;enabled?: boolean | undefined}) => _ButtonSegmentNative<_Selected0>) & {(options: {value: (_Selected0 | DartInput<_Selected0>);icon?: Widget | null | undefined;label?: Widget | null | undefined;tooltip?: string | null | undefined;enabled?: boolean | undefined}): _ButtonSegmentNative<_Selected0>;readonly prototype: _ButtonSegmentNative<_Selected0>;implement(args: readonly [options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}], implementation: Partial<_ButtonSegmentNative<_Selected0>>): _ButtonSegmentNative<_Selected0>;} & _FlaxInstanceType<_ButtonSegmentNative<_Selected0>> & _FlaxDartType<_ButtonSegmentNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {value: unknown | null;icon?: Widget | null | undefined;label?: Widget | null | undefined;tooltip?: string | null | undefined;enabled?: boolean | undefined}) => _ButtonSegmentNative<_Selected0>) & {(options: {value: (_Selected0 | DartInput<_Selected0>);icon?: Widget | null | undefined;label?: Widget | null | undefined;tooltip?: string | null | undefined;enabled?: boolean | undefined}): _ButtonSegmentNative<_Selected0>;readonly prototype: _ButtonSegmentNative<_Selected0>;implement(args: readonly [options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}], implementation: Partial<_ButtonSegmentNative<_Selected0>>): _ButtonSegmentNative<_Selected0>;} & _FlaxInstanceType<_ButtonSegmentNative<_Selected0>> & _FlaxDartType<_ButtonSegmentNative<_Selected0>> : never : never; }

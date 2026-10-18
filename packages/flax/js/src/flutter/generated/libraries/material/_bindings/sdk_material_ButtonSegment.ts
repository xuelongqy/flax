// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonSegment<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/material/segmented_button.dart::ButtonSegment": readonly [T] }> { readonly __ButtonSegment: unique symbol;
readonly [_flaxDartTypeValue]: ButtonSegment<T>;

}
defineObject("flax.core/sdk_material#type:ButtonSegment", ["value","icon","label","tooltip","enabled"], [], _flaxBindingMethods("flax.core/sdk_material#type:ButtonSegment", "object", {}, {}), []);
const _ButtonSegmentProxy = {type: "flax.core/sdk_material#type:ButtonSegment", parameters: [{"name":"value","required":true,"positional":false},{"name":"icon","required":false,"positional":false},{"name":"label","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"enabled","required":false,"positional":false}], constructors: {"":[{"name":"value","required":true,"positional":false},{"name":"icon","required":false,"positional":false},{"name":"label","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"enabled","required":false,"positional":false}]}, methods: {}, getters: ["value","icon","label","tooltip","enabled"], setters: [], contextMembers: [], superMembers: ["get:value","get:icon","get:label","get:tooltip","get:enabled"]} as const;
export interface ButtonSegment<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: ButtonSegment<T>;

get value(): T;
get icon(): Widget | null;
get label(): Widget | null;
get tooltip(): string | null;
get enabled(): boolean;
}
export abstract class ButtonSegment<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonSegment<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ButtonSegment<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ButtonSegment", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}) { super(_ButtonSegmentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ButtonSegment.prototype, _ButtonSegmentProxy);
export namespace ButtonSegment { export function implement<T extends unknown | null = unknown | null>(args: [options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}], implementation: {}): ButtonSegment<T> {
return constructProxy(_ButtonSegmentProxy, args, implementation) as ButtonSegment<T>; } }
_flaxBindInstanceType<ButtonSegment<unknown | null>, typeof ButtonSegment>(ButtonSegment, "flax.core/sdk_material#type:ButtonSegment", ["dart:core::Object"]);
_flaxDefineDartTypes(ButtonSegment, "flax.core/sdk_material#type:ButtonSegment", {...{"category":"object","constructors":{}}, proxy: _ButtonSegmentProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {value: unknown | null;icon?: Widget | null | undefined;label?: Widget | null | undefined;tooltip?: string | null | undefined;enabled?: boolean | undefined}) => ButtonSegment<_Selected0>) & {readonly prototype: ButtonSegment<_Selected0>;implement(args: readonly [options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}], implementation: Partial<ButtonSegment<_Selected0>>): ButtonSegment<_Selected0>;} & _FlaxInstanceType<ButtonSegment<_Selected0>> & _FlaxDartType<ButtonSegment<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {value: unknown | null;icon?: Widget | null | undefined;label?: Widget | null | undefined;tooltip?: string | null | undefined;enabled?: boolean | undefined}) => ButtonSegment<_Selected0>) & {readonly prototype: ButtonSegment<_Selected0>;implement(args: readonly [options: {value: unknown | null; icon?: Widget | null | undefined; label?: Widget | null | undefined; tooltip?: string | null | undefined; enabled?: boolean | undefined}], implementation: Partial<ButtonSegment<_Selected0>>): ButtonSegment<_Selected0>;} & _FlaxInstanceType<ButtonSegment<_Selected0>> & _FlaxDartType<ButtonSegment<_Selected0>> : never : never; }

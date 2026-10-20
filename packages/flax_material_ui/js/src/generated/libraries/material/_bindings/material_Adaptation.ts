// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ThemeData';
import '@flax/material-ui/_bindings/material_ThemeData';
import { _flaxMemberParameters6, _flaxMemberParameters2 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Adaptation<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::Adaptation": readonly [T] }> { readonly __Adaptation: unique symbol;
readonly [_flaxDartTypeValue]: Adaptation<T>;

readonly type: upstream0.Type;
adapt(theme: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, defaultValue: (T | DartInput<T>)): T;
}
defineObject("flax.material/material#type:Adaptation", ["type"], [], _flaxBindingMethods("flax.material/material#type:Adaptation", "object", {"adapt":_flaxMemberParameters6}, {}), []);
export function _AdaptationFactory<T extends unknown | null = unknown | null>(): Adaptation<T>;
export function _AdaptationFactory(): Adaptation<unknown | null>;
export function _AdaptationFactory(): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:Adaptation", "", [], [], {}) as Adaptation<unknown | null>;
}
const _AdaptationProxy = {type: "flax.material/material#type:Adaptation", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"adapt":_flaxMemberParameters6}, getters: ["type"], setters: [], contextMembers: [], superMembers: ["get:type","adapt"]} as const;
export interface _AdaptationNative<T extends unknown | null = unknown | null> extends Adaptation<T> {
readonly [_flaxDartTypeValue]: _AdaptationNative<T>;

adapt(theme: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, defaultValue: (T | DartInput<T>)): T;
get type(): upstream0.Type;
}
export abstract class _AdaptationNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Adaptation<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Adaptation<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:Adaptation", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_AdaptationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AdaptationNative.prototype, _AdaptationProxy);
export namespace _AdaptationFactory { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): Adaptation<T> {
return constructProxy(_AdaptationProxy, args, implementation) as Adaptation<T>; } }
const _AdaptationBinding = _flaxProxyFactory(_AdaptationFactory, _AdaptationNative) as unknown as typeof _AdaptationFactory & (new<T extends unknown | null = unknown | null>() => _AdaptationNative<T>);
export const Adaptation: typeof _AdaptationBinding & _FlaxInstanceType<Adaptation<unknown | null>> & _FlaxDartType<Adaptation<unknown | null>, readonly ["class", "flax.material/material#type:Adaptation", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Adaptation<unknown | null>, typeof _AdaptationBinding>(_AdaptationBinding, "flax.material/material#type:Adaptation", ["dart:core::Object"]) as typeof _AdaptationBinding & _FlaxInstanceType<Adaptation<unknown | null>> & _FlaxDartType<Adaptation<unknown | null>, readonly ["class", "flax.material/material#type:Adaptation", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Adaptation, "flax.material/material#type:Adaptation", {...{"category":"object","constructors":{"":[]}}, proxy: _AdaptationProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _AdaptationNative<_Selected0>) & {(): _AdaptationNative<_Selected0>;readonly prototype: _AdaptationNative<_Selected0>;implement(args: readonly [], implementation: Partial<_AdaptationNative<_Selected0>>): _AdaptationNative<_Selected0>;} & _FlaxInstanceType<_AdaptationNative<_Selected0>> & _FlaxDartType<_AdaptationNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _AdaptationNative<_Selected0>) & {(): _AdaptationNative<_Selected0>;readonly prototype: _AdaptationNative<_Selected0>;implement(args: readonly [], implementation: Partial<_AdaptationNative<_Selected0>>): _AdaptationNative<_Selected0>;} & _FlaxInstanceType<_AdaptationNative<_Selected0>> & _FlaxDartType<_AdaptationNative<_Selected0>> : never : never; }

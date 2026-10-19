// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"data","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableListenable<T extends upstream0.Listenable = upstream0.Listenable> extends Omit<upstream1.RestorableProperty<T>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream1.RestorableProperty<T>>, Omit<upstream0.Listenable, _flaxOwnMembers0 | keyof upstream1.RestorableProperty<T> | keyof upstream2.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableListenable: unique symbol;
readonly [_flaxDartTypeValue]: RestorableListenable<T>;

}
defineObject("flax.core/sdk_widgets#type:RestorableListenable", ["enabled","state","isRegistered","hasListeners","value"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableListenable", "object", {"createDefaultValue":_flaxMemberParameters0,"fromPrimitives":_flaxMemberParameters1,"initWithValue":_flaxMemberParameters2,"toPrimitives":_flaxMemberParameters0,"dispose":_flaxMemberParameters0,"addListener":_flaxMemberParameters3,"removeListener":_flaxMemberParameters3}, {}), ["removeListener"]);
const _RestorableListenableProxy = {type: "flax.core/sdk_widgets#type:RestorableListenable", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"createDefaultValue":_flaxMemberParameters0,"fromPrimitives":_flaxMemberParameters1,"initWithValue":_flaxMemberParameters2,"toPrimitives":_flaxMemberParameters0,"dispose":_flaxMemberParameters0,"addListener":_flaxMemberParameters3,"removeListener":_flaxMemberParameters3}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","initWithValue","dispose","addListener","removeListener"]} as const;
export interface RestorableListenable<T extends upstream0.Listenable = upstream0.Listenable> {
readonly [_flaxDartTypeValue]: RestorableListenable<T>;

initWithValue(value: (T | DartInput<T>)): void;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): T;
get enabled(): boolean;
get state(): upstream4.State<upstream5.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
}
export abstract class RestorableListenable<T extends upstream0.Listenable = upstream0.Listenable> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableListenable<upstream0.Listenable>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableListenable<upstream0.Listenable>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableListenable", readonly [readonly ["class", "flax.core/flutter#type:Listenable", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_RestorableListenableProxy, Array.from(arguments)); }
abstract createDefaultValue(): T;
abstract fromPrimitives(data: unknown | null): T;
abstract toPrimitives(): unknown | null;
}
_flaxDefineProxyBase(RestorableListenable.prototype, _RestorableListenableProxy);
export namespace RestorableListenable { export function implement<T extends upstream0.Listenable = upstream0.Listenable>(args: [], implementation: {createDefaultValue: (() => (T | DartInput<T>)); fromPrimitives: ((data: unknown | null) => (T | DartInput<T>)); toPrimitives: (() => unknown | null)}): RestorableListenable<T> {
return constructProxy(_RestorableListenableProxy, args, implementation) as RestorableListenable<T>; } }
_flaxBindInstanceType<RestorableListenable<upstream0.Listenable>, typeof RestorableListenable>(RestorableListenable, "flax.core/sdk_widgets#type:RestorableListenable", ["flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
_flaxDefineDartTypes(RestorableListenable, "flax.core/sdk_widgets#type:RestorableListenable", {...{"category":"object","constructors":{}}, proxy: _RestorableListenableProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabled" | "state" | "isRegistered" | "hasListeners" | "value" | "createDefaultValue" | "fromPrimitives" | "initWithValue" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Listenable] ? (abstract new () => RestorableListenable<_Selected0>) & {readonly prototype: RestorableListenable<_Selected0>;implement(args: readonly [], implementation: Partial<RestorableListenable<_Selected0>>): RestorableListenable<_Selected0>;} & _FlaxInstanceType<RestorableListenable<_Selected0>> & _FlaxDartType<RestorableListenable<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Listenable] ? (abstract new () => RestorableListenable<_Selected0>) & {readonly prototype: RestorableListenable<_Selected0>;implement(args: readonly [], implementation: Partial<RestorableListenable<_Selected0>>): RestorableListenable<_Selected0>;} & _FlaxInstanceType<RestorableListenable<_Selected0>> & _FlaxDartType<RestorableListenable<_Selected0>> : never : never; }

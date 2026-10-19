// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { _flaxMemberParameters12, _flaxMemberParameters2, _flaxMemberParameters338, _flaxMemberParameters33 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableProperty<T extends unknown | null = unknown | null> extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableProperty: unique symbol;
readonly [_flaxDartTypeValue]: RestorableProperty<T>;

}
defineObject("flax.core/sdk_widgets#type:RestorableProperty", ["hasListeners","enabled","state","isRegistered"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableProperty", "object", {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters338,"initWithValue":_flaxMemberParameters33,"toPrimitives":_flaxMemberParameters2}, {}), ["removeListener"]);
const _RestorablePropertyProxy = {type: "flax.core/sdk_widgets#type:RestorableProperty", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters338,"initWithValue":_flaxMemberParameters33,"toPrimitives":_flaxMemberParameters2}, getters: ["enabled","state","isRegistered","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:enabled","get:state","get:isRegistered","get:hasListeners","addListener","removeListener","dispose"]} as const;
export interface RestorableProperty<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: RestorableProperty<T>;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get enabled(): boolean;
get state(): upstream4.State<upstream5.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
}
export abstract class RestorableProperty<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableProperty<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableProperty<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableProperty", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_RestorablePropertyProxy, Array.from(arguments)); }
abstract createDefaultValue(): T;
abstract fromPrimitives(data: unknown | null): T;
abstract initWithValue(value: (T | DartInput<T>)): void;
abstract toPrimitives(): unknown | null;
}
_flaxDefineProxyBase(RestorableProperty.prototype, _RestorablePropertyProxy);
export namespace RestorableProperty { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {createDefaultValue: (() => (T | DartInput<T>)); fromPrimitives: ((data: unknown | null) => (T | DartInput<T>)); initWithValue: ((value: T) => void); toPrimitives: (() => unknown | null)}): RestorableProperty<T> {
return constructProxy(_RestorablePropertyProxy, args, implementation) as RestorableProperty<T>; } }
_flaxBindInstanceType<RestorableProperty<unknown | null>, typeof RestorableProperty>(RestorableProperty, "flax.core/sdk_widgets#type:RestorableProperty", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
_flaxDefineDartTypes(RestorableProperty, "flax.core/sdk_widgets#type:RestorableProperty", {...{"category":"object","constructors":{}}, proxy: _RestorablePropertyProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "enabled" | "state" | "isRegistered" | "addListener" | "removeListener" | "dispose" | "createDefaultValue" | "fromPrimitives" | "initWithValue" | "toPrimitives" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RestorableProperty<_Selected0>) & {readonly prototype: RestorableProperty<_Selected0>;implement(args: readonly [], implementation: Partial<RestorableProperty<_Selected0>>): RestorableProperty<_Selected0>;} & _FlaxInstanceType<RestorableProperty<_Selected0>> & _FlaxDartType<RestorableProperty<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RestorableProperty<_Selected0>) & {readonly prototype: RestorableProperty<_Selected0>;implement(args: readonly [], implementation: Partial<RestorableProperty<_Selected0>>): RestorableProperty<_Selected0>;} & _FlaxInstanceType<RestorableProperty<_Selected0>> & _FlaxDartType<RestorableProperty<_Selected0>> : never : never; }

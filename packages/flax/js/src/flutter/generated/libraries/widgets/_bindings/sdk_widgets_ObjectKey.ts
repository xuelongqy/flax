// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"value","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObjectKey extends Omit<upstream0.LocalKey, _flaxOwnMembers0>, Omit<upstream1.Key, _flaxOwnMembers0 | keyof upstream0.LocalKey>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ObjectKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> { readonly __ObjectKey: unique symbol;
readonly [_flaxDartTypeValue]: ObjectKey;

}
defineObject("flax.core/sdk_widgets#type:ObjectKey", ["value"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ObjectKey", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _ObjectKeyProxy = {type: "flax.core/sdk_widgets#type:ObjectKey", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["get:value","toString"]} as const;
export interface ObjectKey {
readonly [_flaxDartTypeValue]: ObjectKey;

toString(): string;
get value(): unknown | null;
}
export abstract class ObjectKey extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObjectKey>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObjectKey;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ObjectKey", readonly [], false];
constructor(value: unknown | null) { super(_ObjectKeyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ObjectKey.prototype, _ObjectKeyProxy);
export namespace ObjectKey { export function implement(args: [value: unknown | null], implementation: {}): ObjectKey {
return constructProxy(_ObjectKeyProxy, args, implementation) as ObjectKey; } }
_flaxBindInstanceType<ObjectKey, typeof ObjectKey>(ObjectKey, "flax.core/sdk_widgets#type:ObjectKey", ["flax.core/flutter#type:LocalKey","flax.core/flutter#type:Key","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "toString" | "__flaxBound:package:flutter/src/widgets/framework.dart::ObjectKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";

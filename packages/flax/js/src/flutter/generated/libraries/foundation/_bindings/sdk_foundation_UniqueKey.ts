// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UniqueKey extends Omit<upstream0.LocalKey, _flaxOwnMembers0>, Omit<upstream1.Key, _flaxOwnMembers0 | keyof upstream0.LocalKey>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::UniqueKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> { readonly __UniqueKey: unique symbol;
readonly [_flaxDartTypeValue]: UniqueKey;

}
defineObject("flax.core/sdk_foundation#type:UniqueKey", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:UniqueKey", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _UniqueKeyProxy = {type: "flax.core/sdk_foundation#type:UniqueKey", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toString":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["toString"]} as const;
export interface UniqueKey {
readonly [_flaxDartTypeValue]: UniqueKey;

toString(): string;
}
export abstract class UniqueKey extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UniqueKey>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UniqueKey;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:UniqueKey", readonly [], false];
constructor() { super(_UniqueKeyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(UniqueKey.prototype, _UniqueKeyProxy);
export namespace UniqueKey { export function implement(args: [], implementation: {}): UniqueKey {
return constructProxy(_UniqueKeyProxy, args, implementation) as UniqueKey; } }
_flaxBindInstanceType<UniqueKey, typeof UniqueKey>(UniqueKey, "flax.core/sdk_foundation#type:UniqueKey", ["flax.core/flutter#type:LocalKey","flax.core/flutter#type:Key","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "toString" | "__flaxBound:package:flutter/src/foundation/key.dart::UniqueKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";

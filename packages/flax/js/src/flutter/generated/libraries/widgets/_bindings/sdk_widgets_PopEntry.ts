// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { _flaxMemberParameters209, _flaxMemberParameters210, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopEntry<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/routes.dart::PopEntry": readonly [T] }> { readonly __PopEntry: unique symbol;
readonly [_flaxDartTypeValue]: PopEntry<T>;

}
defineObject("flax.core/sdk_widgets#type:PopEntry", ["canPopNotifier"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PopEntry", "object", {"onPopInvoked":_flaxMemberParameters209,"onPopInvokedWithResult":_flaxMemberParameters210,"toString":_flaxMemberParameters2}, {}), []);
const _PopEntryProxy = {type: "flax.core/sdk_widgets#type:PopEntry", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"onPopInvoked":_flaxMemberParameters209,"onPopInvokedWithResult":_flaxMemberParameters210,"toString":_flaxMemberParameters2}, getters: ["canPopNotifier"], setters: [], contextMembers: [], superMembers: ["onPopInvoked","onPopInvokedWithResult","toString"]} as const;
export interface PopEntry<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: PopEntry<T>;

onPopInvoked(didPop: boolean): void;
onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
toString(): string;
}
export abstract class PopEntry<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PopEntry<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PopEntry<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PopEntry", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_PopEntryProxy, Array.from(arguments)); }
abstract get canPopNotifier(): upstream0.ValueListenable<boolean>;
}
_flaxDefineProxyBase(PopEntry.prototype, _PopEntryProxy);
export namespace PopEntry { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {get canPopNotifier(): Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [boolean] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>}): PopEntry<T> {
return constructProxy(_PopEntryProxy, args, implementation) as PopEntry<T>; } }
_flaxBindInstanceType<PopEntry<unknown | null>, typeof PopEntry>(PopEntry, "flax.core/sdk_widgets#type:PopEntry", ["dart:core::Object"]);
_flaxDefineDartTypes(PopEntry, "flax.core/sdk_widgets#type:PopEntry", {...{"category":"object","constructors":{}}, proxy: _PopEntryProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => PopEntry<_Selected0>) & {readonly prototype: PopEntry<_Selected0>;implement(args: readonly [], implementation: Partial<PopEntry<_Selected0>>): PopEntry<_Selected0>;} & _FlaxInstanceType<PopEntry<_Selected0>> & _FlaxDartType<PopEntry<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => PopEntry<_Selected0>) & {readonly prototype: PopEntry<_Selected0>;implement(args: readonly [], implementation: Partial<PopEntry<_Selected0>>): PopEntry<_Selected0>;} & _FlaxInstanceType<PopEntry<_Selected0>> & _FlaxDartType<PopEntry<_Selected0>> : never : never; }

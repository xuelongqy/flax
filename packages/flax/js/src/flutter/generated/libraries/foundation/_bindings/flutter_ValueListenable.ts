// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
import { FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface ValueListenable<T extends unknown | null = unknown | null> extends upstream0.Listenable, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T] }> { readonly __ValueListenable: unique symbol;
}
defineObject("flax.core/flutter#type:ValueListenable", ["value"], [], _flaxBindingMethods("flax.core/flutter#type:ValueListenable", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0}), ["removeListener"]);
const _ValueListenableProxy = {type: "flax.core/flutter#type:ValueListenable", parameters: [], methods: {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0}, getters: ["value"], setters: [], superMembers: []} as const;
export interface ValueListenable<T extends unknown | null = unknown | null> {
}
export abstract class ValueListenable<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
constructor() { super(ValueListenable.prototype, _ValueListenableProxy, Array.from(arguments)); }
abstract addListener(listener: (() => void)): void;
abstract removeListener(listener: (() => void)): void;
abstract get value(): T;
}
_flaxDefineProxyBase(ValueListenable.prototype, _ValueListenableProxy);
export namespace ValueListenable { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {addListener: ((listener: (() => void)) => void); removeListener: ((listener: (() => void)) => void); get value(): T}): ValueListenable<T> {
return constructProxy("flax.core/flutter#type:ValueListenable", [], args, implementation, ["addListener","removeListener"], ["value"], []) as ValueListenable<T>; } }

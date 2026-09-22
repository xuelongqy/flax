// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { constructExtendedProxy, invokeProxySuper } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface ValueListenable<T extends unknown | null = unknown | null> extends upstream0.Listenable, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T] }> { readonly __ValueListenable: unique symbol;
}
defineObject("flax.core/flutter#type:ValueListenable", ["value"], [], {addListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:ValueListenable", "addListener", [listener]);
},
removeListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:ValueListenable", "removeListener", [listener]);
},
}, ["removeListener"]);
export abstract class ValueListenable<T extends unknown | null = unknown | null> {
constructor() {
constructExtendedProxy(this, ValueListenable.prototype, "flax.core/flutter#type:ValueListenable", [], Array.from(arguments), ["addListener","removeListener"], ["value"], [], []);
}
abstract addListener(listener: (() => void)): void;
abstract removeListener(listener: (() => void)): void;
abstract get value(): T;
}
export namespace ValueListenable { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {addListener: ((listener: (() => void)) => void); removeListener: ((listener: (() => void)) => void); get value(): T}): ValueListenable<T> {
return constructProxy("flax.core/flutter#type:ValueListenable", [], args, implementation, ["addListener","removeListener"], ["value"], []) as ValueListenable<T>; } }

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface WidgetStateProperty<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T] }> { readonly __WidgetStateProperty: unique symbol;
resolve(states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): T;
}
defineObject("flax.core/flutter#type:WidgetStateProperty", [], [], {resolve(this: object, states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): unknown | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:WidgetStateProperty", "resolve", [states]);
return _flaxResult as unknown | null;
},
}, []);
export namespace WidgetStateProperty { export function resolveWith<T extends unknown | null = unknown | null>(callback: ((states: DartSet<upstream0.WidgetState>) => T)): WidgetStateProperty<T> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
return constructDeferredObject("flax.core/flutter#type:WidgetStateProperty", "resolveWith", [{"name":"callback","required":true,"positional":true}], [callback], {}) as WidgetStateProperty<T>;
} }

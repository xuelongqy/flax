// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface AsyncSnapshot<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/async.dart::AsyncSnapshot": readonly [T] }> { readonly __AsyncSnapshot: unique symbol;
readonly connectionState: upstream0.ConnectionState;
readonly data: T | null;
readonly error: unknown | null;
readonly stackTrace: upstream1.StackTrace | null;
readonly hasData: boolean;
readonly hasError: boolean;
readonly requireData: T;
inState(state: upstream0.ConnectionState): AsyncSnapshot<T>;
}
defineObject("flax.core/flutter#type:AsyncSnapshot", ["connectionState","data","error","stackTrace","hasData","hasError","requireData"], [], {inState(this: object, state: upstream0.ConnectionState): AsyncSnapshot<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:AsyncSnapshot", "inState", [state]);
return _flaxResult as AsyncSnapshot<unknown | null>;
},
}, []);
export namespace AsyncSnapshot {
export function nothing<T extends unknown | null = unknown | null>(): AsyncSnapshot<T> {
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "nothing", [], [], {}) as AsyncSnapshot<T>;
}
}
export namespace AsyncSnapshot {
export function waiting<T extends unknown | null = unknown | null>(): AsyncSnapshot<T> {
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "waiting", [], [], {}) as AsyncSnapshot<T>;
}
}
export namespace AsyncSnapshot {
export function withData<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, data: T): AsyncSnapshot<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "withData", [{"name":"state","required":true,"positional":true},{"name":"data","required":true,"positional":true}], [state, data], {}) as AsyncSnapshot<T>;
}
}
export namespace AsyncSnapshot {
export function withError<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, error: {}, stackTrace?: upstream1.StackTrace): AsyncSnapshot<T> {
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "withError", [{"name":"state","required":true,"positional":true},{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}], [state, error, stackTrace], {}) as AsyncSnapshot<T>;
}
}

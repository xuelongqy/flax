// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface EventSink<T extends unknown | null = unknown | null> extends upstream0.Sink<T>, Readonly<{ "__flaxBound:dart:async::EventSink": readonly [T] }> { readonly __EventSink: unique symbol;
add(event: T): void;
addError(error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): void;
close(): void;
}
defineObject("flax.core/flutter#type:EventSink", [], [], _flaxBindingMethods("flax.core/flutter#type:EventSink", "object", {"add":_flaxMemberParameters0,"addError":_flaxMemberParameters1,"close":_flaxMemberParameters2}), []);
export namespace EventSink { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {add: ((event: T) => void); addError: ((error: {}, stackTrace?: upstream1.StackTrace | null) => void); close: (() => void)}): EventSink<T> {
return constructProxy("flax.core/flutter#type:EventSink", [], args, implementation, ["add","addError","close"], [], []) as EventSink<T>; } }

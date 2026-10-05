// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"stream","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_Stream';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamSink<S extends unknown | null = unknown | null> extends upstream0.EventSink<S>, upstream1.Sink<S>, upstream2.StreamConsumer<S>, Readonly<{ "__flaxBound:dart:async::StreamSink": readonly [S] }> { readonly __StreamSink: unique symbol;
readonly done: Promise<unknown | null>;
add(event: S): void;
addError(error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): void;
close(): Promise<unknown | null>;
addStream(stream: upstream4.Stream<S>): Promise<unknown | null>;
}
defineObject("flax.core/flutter#type:StreamSink", ["done"], [], _flaxBindingMethods("flax.core/flutter#type:StreamSink", "object", {"add":_flaxMemberParameters0,"addError":_flaxMemberParameters1,"close":_flaxMemberParameters2,"addStream":_flaxMemberParameters3}), []);

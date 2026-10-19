// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_StreamController';
import '@flax/dart/async/_bindings/flutter_StreamController';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_StreamSink';
import '@flax/dart/async/_bindings/flutter_StreamSink';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream5 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
const _flaxMemberParameters0 = [{"name":"data","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"error","required":true,"positional":true},{"name":"stackTrace","positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"source","required":true,"positional":true},{"name":"cancelOnError"}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SynchronousStreamController<T extends unknown | null = unknown | null> extends Omit<upstream0.StreamController<T>, _flaxOwnMembers0>, Omit<upstream1.StreamSink<T>, _flaxOwnMembers0 | keyof upstream0.StreamController<T>>, Omit<upstream2.EventSink<T>, _flaxOwnMembers0 | keyof upstream0.StreamController<T> | keyof upstream1.StreamSink<T>>, Omit<upstream3.Sink<T>, _flaxOwnMembers0 | keyof upstream0.StreamController<T> | keyof upstream1.StreamSink<T> | keyof upstream2.EventSink<T>>, Omit<upstream4.StreamConsumer<T>, _flaxOwnMembers0 | keyof upstream0.StreamController<T> | keyof upstream1.StreamSink<T> | keyof upstream2.EventSink<T> | keyof upstream3.Sink<T>>, Readonly<{ "__flaxBound:dart:async::SynchronousStreamController": readonly [T] }>, Readonly<{ "__flaxBound:dart:async::StreamController": readonly [T] }>, Readonly<{ "__flaxBound:dart:async::StreamSink": readonly [T] }>, Readonly<{ "__flaxBound:dart:async::EventSink": readonly [T] }>, Readonly<{ "__flaxBound:dart:core::Sink": readonly [T] }>, Readonly<{ "__flaxBound:dart:async::StreamConsumer": readonly [T] }> { readonly __SynchronousStreamController: unique symbol;
readonly [_flaxDartTypeValue]: SynchronousStreamController<T>;

readonly stream: upstream5.Stream<T>;
get onListen(): (() => void) | null;
get onPause(): (() => void) | null;
get onResume(): (() => void) | null;
get onCancel(): (() => void | Promise<void>) | null;
readonly sink: upstream1.StreamSink<T>;
readonly isClosed: boolean;
readonly isPaused: boolean;
readonly hasListener: boolean;
readonly done: Promise<unknown | null>;
add(data: (T | DartInput<T>)): void;
addError(error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): void;
close(): Promise<unknown | null>;
addStream(source: (upstream5.Stream<T> | upstream5.Stream<(T | DartInput<T>)>), options?: {cancelOnError?: boolean | null | undefined}): Promise<unknown | null>;
set onListen(value: (() => void) | null);
set onPause(value: (() => void) | null);
set onResume(value: (() => void) | null);
set onCancel(value: (() => void | Promise<void>) | null);
}
defineObject("flax.core/flutter#type:SynchronousStreamController", ["stream","onListen","onPause","onResume","onCancel","sink","isClosed","isPaused","hasListener","done"], ["onListen","onPause","onResume","onCancel"], _flaxBindingMethods("flax.core/flutter#type:SynchronousStreamController", "object", {"add":_flaxMemberParameters0,"addError":_flaxMemberParameters1,"close":_flaxMemberParameters2,"addStream":_flaxMemberParameters3}, {}), []);
export const SynchronousStreamController: object & _FlaxInstanceType<SynchronousStreamController<unknown | null>> & _FlaxDartType<SynchronousStreamController<unknown | null>, readonly ["class", "flax.core/flutter#type:SynchronousStreamController", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<SynchronousStreamController<unknown | null>, object>({}, "flax.core/flutter#type:SynchronousStreamController", ["dart:core::Object","flax.core/flutter#type:StreamController","flax.core/flutter#type:StreamSink","flax.core/flutter#type:EventSink","flax.core/flutter#type:Sink","flax.core/flutter#type:StreamConsumer"]) as object & _FlaxInstanceType<SynchronousStreamController<unknown | null>> & _FlaxDartType<SynchronousStreamController<unknown | null>, readonly ["class", "flax.core/flutter#type:SynchronousStreamController", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(SynchronousStreamController, "flax.core/flutter#type:SynchronousStreamController", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "stream" | "onListen" | "onPause" | "onResume" | "onCancel" | "sink" | "isClosed" | "isPaused" | "hasListener" | "done" | "add" | "addError" | "close" | "addStream" | "__flaxBound:dart:async::SynchronousStreamController" | "__flaxBound:dart:async::StreamController" | "__flaxBound:dart:async::StreamSink" | "__flaxBound:dart:async::EventSink" | "__flaxBound:dart:core::Sink" | "__flaxBound:dart:async::StreamConsumer";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: SynchronousStreamController<_Selected0>;} & _FlaxInstanceType<SynchronousStreamController<_Selected0>> & _FlaxDartType<SynchronousStreamController<_Selected0>> : never : never; }

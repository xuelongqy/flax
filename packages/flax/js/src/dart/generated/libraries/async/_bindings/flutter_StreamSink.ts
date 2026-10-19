// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_Stream';
import { _flaxMemberParameters49, _flaxMemberParameters50, _flaxMemberParameters3, _flaxMemberParameters161 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamSink<S extends unknown | null = unknown | null> extends Omit<upstream0.EventSink<S>, _flaxOwnMembers0>, Omit<upstream1.Sink<S>, _flaxOwnMembers0 | keyof upstream0.EventSink<S>>, Omit<upstream2.StreamConsumer<S>, _flaxOwnMembers0 | keyof upstream0.EventSink<S> | keyof upstream1.Sink<S>>, Readonly<{ "__flaxBound:dart:async::StreamSink": readonly [S] }>, Readonly<{ "__flaxBound:dart:async::EventSink": readonly [S] }>, Readonly<{ "__flaxBound:dart:core::Sink": readonly [S] }>, Readonly<{ "__flaxBound:dart:async::StreamConsumer": readonly [S] }> { readonly __StreamSink: unique symbol;
readonly [_flaxDartTypeValue]: StreamSink<S>;

readonly done: Promise<unknown | null>;
add(event: (S | DartInput<S>)): void;
addError(error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): void;
close(): Promise<unknown | null>;
addStream(stream: (upstream4.Stream<S> | upstream4.Stream<(S | DartInput<S>)>)): Promise<unknown | null>;
}
defineObject("flax.core/flutter#type:StreamSink", ["done"], [], _flaxBindingMethods("flax.core/flutter#type:StreamSink", "object", {"add":_flaxMemberParameters49,"addError":_flaxMemberParameters50,"close":_flaxMemberParameters3,"addStream":_flaxMemberParameters161}, {}), []);
export const StreamSink: object & _FlaxInstanceType<StreamSink<unknown | null>> & _FlaxDartType<StreamSink<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamSink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<StreamSink<unknown | null>, object>({}, "flax.core/flutter#type:StreamSink", ["dart:core::Object","flax.core/flutter#type:EventSink","flax.core/flutter#type:Sink","flax.core/flutter#type:StreamConsumer"]) as object & _FlaxInstanceType<StreamSink<unknown | null>> & _FlaxDartType<StreamSink<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamSink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(StreamSink, "flax.core/flutter#type:StreamSink", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "done" | "add" | "addError" | "close" | "addStream" | "__flaxBound:dart:async::StreamSink" | "__flaxBound:dart:async::EventSink" | "__flaxBound:dart:core::Sink" | "__flaxBound:dart:async::StreamConsumer";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: StreamSink<_Selected0>;} & _FlaxInstanceType<StreamSink<_Selected0>> & _FlaxDartType<StreamSink<_Selected0>> : never : never; }

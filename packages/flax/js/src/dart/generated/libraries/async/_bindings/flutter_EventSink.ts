// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Sink';
import '@flax/dart/core/_bindings/flutter_Sink';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EventSink<T extends unknown | null = unknown | null> extends upstream0.Sink<T>, Readonly<{ "__flaxBound:dart:async::EventSink": readonly [T] }> { readonly __EventSink: unique symbol;

add(event: (T | DartInput<T>)): void;
addError(error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): void;
close(): void;
}
defineObject("flax.core/flutter#type:EventSink", [], [], _flaxBindingMethods("flax.core/flutter#type:EventSink", "object", {"add":_flaxMemberParameters0,"addError":_flaxMemberParameters1,"close":_flaxMemberParameters2}, {}), []);
const _EventSinkProxy = {type: "flax.core/flutter#type:EventSink", parameters: [], constructors: {}, methods: {"add":_flaxMemberParameters0,"addError":_flaxMemberParameters1,"close":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
namespace _EventSinkFactory { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {add: ((event: T) => void); addError: ((error: {}, stackTrace?: upstream1.StackTrace | null) => void); close: (() => void)}): EventSink<T> {
return constructProxy(_EventSinkProxy, args, implementation) as EventSink<T>; } }
export const EventSink: typeof _EventSinkFactory & _FlaxInstanceType<EventSink<unknown | null>> & _FlaxDartType<EventSink<unknown | null>, readonly ["class", "flax.core/flutter#type:EventSink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<EventSink<unknown | null>, typeof _EventSinkFactory>(_EventSinkFactory, "flax.core/flutter#type:EventSink", ["dart:core::Object","flax.core/flutter#type:Sink"]) as typeof _EventSinkFactory & _FlaxInstanceType<EventSink<unknown | null>> & _FlaxDartType<EventSink<unknown | null>, readonly ["class", "flax.core/flutter#type:EventSink", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(EventSink, "flax.core/flutter#type:EventSink", {...{"category":"object","constructors":{}}, proxy: _EventSinkProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: EventSink<_Selected0>;implement(args: readonly [], implementation: Partial<EventSink<_Selected0>>): EventSink<_Selected0>;} & _FlaxInstanceType<EventSink<_Selected0>> & _FlaxDartType<EventSink<_Selected0>> : never : never; }

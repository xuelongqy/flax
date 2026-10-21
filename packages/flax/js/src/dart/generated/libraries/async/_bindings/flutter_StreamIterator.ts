// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { _flaxMemberParameters4 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamIterator<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:dart:async::StreamIterator": readonly [T] }> { readonly __StreamIterator: unique symbol;
readonly [_flaxDartTypeValue]: StreamIterator<T>;

readonly current: T;
moveNext(): Promise<boolean>;
cancel(): Promise<unknown | null>;
}
defineObject("flax.core/flutter#type:StreamIterator", ["current"], [], _flaxBindingMethods("flax.core/flutter#type:StreamIterator", "object", {"moveNext":_flaxMemberParameters4,"cancel":_flaxMemberParameters4}, {}), []);
export function _StreamIteratorFactory<T extends unknown | null = unknown | null>(stream: (upstream0.Stream<_FlaxDartOutput<T>> | upstream0.Stream<(T | _FlaxDartOutput<T>)>)): StreamIterator<T>;
export function _StreamIteratorFactory(stream: upstream0.Stream<unknown | null>): StreamIterator<unknown | null>;
export function _StreamIteratorFactory(stream: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamIterator", "", [{"name":"stream","required":true,"positional":true}], [stream], {}) as StreamIterator<unknown | null>;
}
export const StreamIterator: typeof _StreamIteratorFactory & _FlaxInstanceType<StreamIterator<unknown | null>> & _FlaxDartType<StreamIterator<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamIterator", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<StreamIterator<unknown | null>, typeof _StreamIteratorFactory>(_StreamIteratorFactory, "flax.core/flutter#type:StreamIterator", ["dart:core::Object"]) as typeof _StreamIteratorFactory & _FlaxInstanceType<StreamIterator<unknown | null>> & _FlaxDartType<StreamIterator<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamIterator", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(StreamIterator, "flax.core/flutter#type:StreamIterator", {"category":"object","constructors":{"":[{"name":"stream","required":true,"positional":true}]}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(stream: (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>)): StreamIterator<_Selected0>;readonly prototype: StreamIterator<_Selected0>;} & _FlaxInstanceType<StreamIterator<_Selected0>> & _FlaxDartType<StreamIterator<_Selected0>> : never : never; }

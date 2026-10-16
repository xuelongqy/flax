// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"state","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import '@flax/flutter/widgets/_bindings/flutter_ConnectionState';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
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
defineObject("flax.core/flutter#type:AsyncSnapshot", ["connectionState","data","error","stackTrace","hasData","hasError","requireData"], [], _flaxBindingMethods("flax.core/flutter#type:AsyncSnapshot", "object", {"inState":_flaxMemberParameters0}, {}), []);
namespace _AsyncSnapshotFactory {
export function nothing<T extends unknown | null = unknown | null>(): AsyncSnapshot<T>;
export function nothing(): AsyncSnapshot<unknown | null>;
export function nothing(): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "nothing", [], [], {}) as AsyncSnapshot<unknown | null>;
}
}
namespace _AsyncSnapshotFactory {
export function waiting<T extends unknown | null = unknown | null>(): AsyncSnapshot<T>;
export function waiting(): AsyncSnapshot<unknown | null>;
export function waiting(): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "waiting", [], [], {}) as AsyncSnapshot<unknown | null>;
}
}
namespace _AsyncSnapshotFactory {
export function withData<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, data: (T | _FlaxDartOutput<T>)): AsyncSnapshot<T>;
export function withData(state: upstream0.ConnectionState, data: unknown | null): AsyncSnapshot<unknown | null>;
export function withData(state: unknown, data: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "withData", [{"name":"state","required":true,"positional":true},{"name":"data","required":true,"positional":true}], [state, data], {}) as AsyncSnapshot<unknown | null>;
}
}
namespace _AsyncSnapshotFactory {
export function withError<T extends unknown | null = unknown | null>(state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>): AsyncSnapshot<T>;
export function withError(state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>): AsyncSnapshot<unknown | null>;
export function withError(state: unknown, error: unknown, stackTrace?: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "withError", [{"name":"state","required":true,"positional":true},{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}], [state, error, stackTrace], {}) as AsyncSnapshot<unknown | null>;
}
}
export const AsyncSnapshot: typeof _AsyncSnapshotFactory & _FlaxInstanceType<AsyncSnapshot<unknown | null>> & _FlaxDartType<AsyncSnapshot<unknown | null>, readonly ["class", "flax.core/flutter#type:AsyncSnapshot", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<AsyncSnapshot<unknown | null>, typeof _AsyncSnapshotFactory>(_AsyncSnapshotFactory, "flax.core/flutter#type:AsyncSnapshot", ["dart:core::Object"]) as typeof _AsyncSnapshotFactory & _FlaxInstanceType<AsyncSnapshot<unknown | null>> & _FlaxDartType<AsyncSnapshot<unknown | null>, readonly ["class", "flax.core/flutter#type:AsyncSnapshot", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(AsyncSnapshot, "flax.core/flutter#type:AsyncSnapshot", {"category":"object","constructors":{"nothing":[],"waiting":[],"withData":[{"name":"state","required":true,"positional":true},{"name":"data","required":true,"positional":true}],"withError":[{"name":"state","required":true,"positional":true},{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}]}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {nothing: ()=> AsyncSnapshot<_Selected0>;waiting: ()=> AsyncSnapshot<_Selected0>;withData: (state: upstream0.ConnectionState, data: (_Selected0 | DartInput<_Selected0>))=> AsyncSnapshot<_Selected0>;withError: (state: upstream0.ConnectionState, error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>)=> AsyncSnapshot<_Selected0>;readonly prototype: AsyncSnapshot<_Selected0>;} & _FlaxInstanceType<AsyncSnapshot<_Selected0>> & _FlaxDartType<AsyncSnapshot<_Selected0>> : never : never; }

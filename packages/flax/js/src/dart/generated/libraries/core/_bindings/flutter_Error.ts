// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { _flaxMemberParameters3 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Error extends Readonly<{ "__flaxBound:dart:core::Error": readonly [] }> { readonly __Error: unique symbol;
readonly [_flaxDartTypeValue]: Error;

readonly stackTrace: upstream0.StackTrace | null;
toString(): string;
}
defineObject("flax.core/flutter#type:Error", ["stackTrace"], [], _flaxBindingMethods("flax.core/flutter#type:Error", "object", {"toString":_flaxMemberParameters3}, {}), []);
export function _ErrorFactory(): Error {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Error", "", _flaxMemberParameters3, [], {}) as Error;
}
export namespace _ErrorFactory { export function safeToString(object: unknown | null): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Error.safeToString", [object]);
return _flaxResult as string;
} }
export namespace _ErrorFactory { export function throwWithStackTrace(error: {}, stackTrace: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>): never {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Error.throwWithStackTrace", [error, stackTrace]);
return _flaxResult as never;
} }
export const Error: typeof _ErrorFactory & _FlaxInstanceType<Error> & _FlaxDartType<Error, readonly ["class", "flax.core/flutter#type:Error", readonly [], false]> = _flaxBindInstanceType<Error, typeof _ErrorFactory>(_ErrorFactory, "flax.core/flutter#type:Error", ["dart:core::Object"]) as typeof _ErrorFactory & _FlaxInstanceType<Error> & _FlaxDartType<Error, readonly ["class", "flax.core/flutter#type:Error", readonly [], false]>;

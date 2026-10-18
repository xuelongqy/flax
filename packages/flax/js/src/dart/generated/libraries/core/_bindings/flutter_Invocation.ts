// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Symbol';
import '@flax/dart/core/_bindings/flutter_Symbol';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Invocation extends Readonly<{ "__flaxBound:dart:core::Invocation": readonly [] }> { readonly __Invocation: unique symbol;
readonly [_flaxDartTypeValue]: Invocation;

readonly memberName: upstream0.Symbol;
readonly typeArguments: DartList<upstream1.Type>;
readonly positionalArguments: DartList<unknown | null>;
readonly namedArguments: DartMap<upstream0.Symbol, unknown | null>;
readonly isMethod: boolean;
readonly isGetter: boolean;
readonly isSetter: boolean;
readonly isAccessor: boolean;
}
defineObject("flax.core/flutter#type:Invocation", ["memberName","typeArguments","positionalArguments","namedArguments","isMethod","isGetter","isSetter","isAccessor"], [], _flaxBindingMethods("flax.core/flutter#type:Invocation", "object", {}, {}), []);
export namespace _InvocationFactory {
export function method(memberName: Readonly<{ "__flaxBound:dart:core::Symbol": readonly [] }>, positionalArguments: DartIterableInput<unknown | null, unknown | null> | null, namedArguments?: DartMapInput<upstream0.Symbol, unknown | null, Readonly<{ "__flaxBound:dart:core::Symbol": readonly [] }>, unknown | null> | null): Invocation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Invocation", "method", [{"name":"memberName","required":true,"positional":true},{"name":"positionalArguments","required":true,"positional":true},{"name":"namedArguments","required":false,"positional":true}], [memberName, positionalArguments, namedArguments], {}) as Invocation;
}
}
export namespace _InvocationFactory {
export function genericMethod(memberName: Readonly<{ "__flaxBound:dart:core::Symbol": readonly [] }>, typeArguments: DartIterableInput<upstream1.Type, Readonly<{ "__flaxBound:dart:core::Type": readonly [] }>> | null, positionalArguments: DartIterableInput<unknown | null, unknown | null> | null, namedArguments?: DartMapInput<upstream0.Symbol, unknown | null, Readonly<{ "__flaxBound:dart:core::Symbol": readonly [] }>, unknown | null> | null): Invocation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Invocation", "genericMethod", [{"name":"memberName","required":true,"positional":true},{"name":"typeArguments","required":true,"positional":true},{"name":"positionalArguments","required":true,"positional":true},{"name":"namedArguments","required":false,"positional":true}], [memberName, typeArguments, positionalArguments, namedArguments], {}) as Invocation;
}
}
export namespace _InvocationFactory {
export function getter(name: Readonly<{ "__flaxBound:dart:core::Symbol": readonly [] }>): Invocation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Invocation", "getter", [{"name":"name","required":true,"positional":true}], [name], {}) as Invocation;
}
}
export namespace _InvocationFactory {
export function setter(memberName: Readonly<{ "__flaxBound:dart:core::Symbol": readonly [] }>, argument: unknown | null): Invocation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Invocation", "setter", [{"name":"memberName","required":true,"positional":true},{"name":"argument","required":true,"positional":true}], [memberName, argument], {}) as Invocation;
}
}
export const Invocation: typeof _InvocationFactory & _FlaxInstanceType<Invocation> & _FlaxDartType<Invocation, readonly ["class", "flax.core/flutter#type:Invocation", readonly [], false]> = _flaxBindInstanceType<Invocation, typeof _InvocationFactory>(_InvocationFactory, "flax.core/flutter#type:Invocation", ["dart:core::Object"]) as typeof _InvocationFactory & _FlaxInstanceType<Invocation> & _FlaxDartType<Invocation, readonly ["class", "flax.core/flutter#type:Invocation", readonly [], false]>;

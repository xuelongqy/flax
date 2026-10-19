// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters3 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StackTrace extends Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> { readonly __StackTrace: unique symbol;
readonly [_flaxDartTypeValue]: StackTrace;

toString(): string;
}
defineObject("flax.core/flutter#type:StackTrace", [], [], _flaxBindingMethods("flax.core/flutter#type:StackTrace", "object", {"toString":_flaxMemberParameters3}, {}), []);
export namespace _StackTraceFactory {
export function fromString(stackTraceString: string): StackTrace {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StackTrace", "fromString", [{"name":"stackTraceString","required":true,"positional":true}], [stackTraceString], {}) as StackTrace;
}
}
export namespace _StackTraceFactory { export declare const empty: StackTrace; }
export namespace _StackTraceFactory { export declare const current: StackTrace; }
_flaxDefineStaticGetters(_StackTraceFactory, "flax.core/flutter#read:StackTrace.", ["empty","current"]);
export const StackTrace: typeof _StackTraceFactory & _FlaxInstanceType<StackTrace> & _FlaxDartType<StackTrace, readonly ["class", "flax.core/flutter#type:StackTrace", readonly [], false]> = _flaxBindInstanceType<StackTrace, typeof _StackTraceFactory>(_StackTraceFactory, "flax.core/flutter#type:StackTrace", ["dart:core::Object"]) as typeof _StackTraceFactory & _FlaxInstanceType<StackTrace> & _FlaxDartType<StackTrace, readonly ["class", "flax.core/flutter#type:StackTrace", readonly [], false]>;

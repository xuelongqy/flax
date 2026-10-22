// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters59, _flaxMemberParameters30, _flaxMemberParameters1 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ErrorToConsoleDumper extends Readonly<{ "__flaxBound:package:flutter/src/foundation/_error_dumper_io.dart::ErrorToConsoleDumper": readonly [] }> { readonly __ErrorToConsoleDumper: unique symbol;
readonly [_flaxDartTypeValue]: ErrorToConsoleDumper;

}
defineObject("flax.core/sdk_foundation#type:ErrorToConsoleDumper", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ErrorToConsoleDumper", "object", {}, {}), []);
export function _ErrorToConsoleDumperFactory(): ErrorToConsoleDumper {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:ErrorToConsoleDumper", "", _flaxMemberParameters1, [], {}) as ErrorToConsoleDumper;
}
export namespace _ErrorToConsoleDumperFactory { export function dump(message: string): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:ErrorToConsoleDumper.dump", [message], _flaxMemberParameters59);
} }
export namespace _ErrorToConsoleDumperFactory { export function addWebDumpListener(listener: ((message: string) => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:ErrorToConsoleDumper.addWebDumpListener", [listener], _flaxMemberParameters30);
} }
export namespace _ErrorToConsoleDumperFactory { export function clearWebDumpListeners(): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:ErrorToConsoleDumper.clearWebDumpListeners", [], _flaxMemberParameters1);
} }
export const ErrorToConsoleDumper: typeof _ErrorToConsoleDumperFactory & _FlaxInstanceType<ErrorToConsoleDumper> & _FlaxDartType<ErrorToConsoleDumper, readonly ["class", "flax.core/sdk_foundation#type:ErrorToConsoleDumper", readonly [], false]> = _flaxBindInstanceType<ErrorToConsoleDumper, typeof _ErrorToConsoleDumperFactory>(_ErrorToConsoleDumperFactory, "flax.core/sdk_foundation#type:ErrorToConsoleDumper", ["dart:core::Object"]) as typeof _ErrorToConsoleDumperFactory & _FlaxInstanceType<ErrorToConsoleDumper> & _FlaxDartType<ErrorToConsoleDumper, readonly ["class", "flax.core/sdk_foundation#type:ErrorToConsoleDumper", readonly [], false]>;

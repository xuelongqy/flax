// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawSocketOption extends Readonly<{ "__flaxBound:dart:io::RawSocketOption": readonly [] }> { readonly __RawSocketOption: unique symbol;
readonly [_flaxDartTypeValue]: RawSocketOption;

readonly level: number;
readonly option: number;
readonly value: globalThis.Uint8Array;
}
defineObject("flax.core/sdk_dependencies#type:RawSocketOption", ["level","option","value"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:RawSocketOption", "object", {}, {}), []);
export function _RawSocketOptionFactory(level: number, option: number, value: globalThis.Uint8Array): RawSocketOption {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:RawSocketOption", "", [{"name":"level","required":true,"positional":true},{"name":"option","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [level, option, value], {}) as RawSocketOption;
}
export namespace _RawSocketOptionFactory {
export function fromInt(level: number, option: number, value: number): RawSocketOption {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:RawSocketOption", "fromInt", [{"name":"level","required":true,"positional":true},{"name":"option","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [level, option, value], {}) as RawSocketOption;
}
}
export namespace _RawSocketOptionFactory {
export function fromBool(level: number, option: number, value: boolean): RawSocketOption {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:RawSocketOption", "fromBool", [{"name":"level","required":true,"positional":true},{"name":"option","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [level, option, value], {}) as RawSocketOption;
}
}
export namespace _RawSocketOptionFactory { export declare const levelSocket: number; }
export namespace _RawSocketOptionFactory { export declare const levelIPv4: number; }
export namespace _RawSocketOptionFactory { export declare const IPv4MulticastInterface: number; }
export namespace _RawSocketOptionFactory { export declare const levelIPv6: number; }
export namespace _RawSocketOptionFactory { export declare const IPv6MulticastInterface: number; }
export namespace _RawSocketOptionFactory { export declare const levelTcp: number; }
export namespace _RawSocketOptionFactory { export declare const levelUdp: number; }
_flaxDefineStaticGetters(_RawSocketOptionFactory, "flax.core/sdk_dependencies#read:RawSocketOption.", ["levelSocket","levelIPv4","IPv4MulticastInterface","levelIPv6","IPv6MulticastInterface","levelTcp","levelUdp"]);
export const RawSocketOption: typeof _RawSocketOptionFactory & _FlaxInstanceType<RawSocketOption> & _FlaxDartType<RawSocketOption, readonly ["class", "flax.core/sdk_dependencies#type:RawSocketOption", readonly [], false]> = _flaxBindInstanceType<RawSocketOption, typeof _RawSocketOptionFactory>(_RawSocketOptionFactory, "flax.core/sdk_dependencies#type:RawSocketOption", ["dart:core::Object"]) as typeof _RawSocketOptionFactory & _FlaxInstanceType<RawSocketOption> & _FlaxDartType<RawSocketOption, readonly ["class", "flax.core/sdk_dependencies#type:RawSocketOption", readonly [], false]>;

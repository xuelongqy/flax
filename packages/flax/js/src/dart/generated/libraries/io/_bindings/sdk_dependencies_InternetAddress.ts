// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_InternetAddressType';
import '@flax/dart/io/_bindings/sdk_dependencies_InternetAddressType';
import { _flaxMemberParameters2 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InternetAddress extends Readonly<{ "__flaxBound:dart:io::InternetAddress": readonly [] }> { readonly __InternetAddress: unique symbol;
readonly [_flaxDartTypeValue]: InternetAddress;

readonly type: upstream0.InternetAddressType;
readonly address: string;
readonly host: string;
readonly rawAddress: globalThis.Uint8Array;
readonly isLoopback: boolean;
readonly isLinkLocal: boolean;
readonly isMulticast: boolean;
reverse(): Promise<InternetAddress>;
}
defineObject("flax.core/sdk_dependencies#type:InternetAddress", ["type","address","host","rawAddress","isLoopback","isLinkLocal","isMulticast"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:InternetAddress", "object", {"reverse":_flaxMemberParameters2}, {}), []);
export function _InternetAddressFactory(address: string, options: { type?: Readonly<{ "__flaxBound:dart:io::InternetAddressType": readonly [] }> | null | undefined } = {}): InternetAddress {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:InternetAddress", "", [{"name":"address","required":true,"positional":true},{"name":"type"}], [address], options) as InternetAddress;
}
export namespace _InternetAddressFactory {
export function fromRawAddress(rawAddress: globalThis.Uint8Array, options: { type?: Readonly<{ "__flaxBound:dart:io::InternetAddressType": readonly [] }> | null | undefined } = {}): InternetAddress {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:InternetAddress", "fromRawAddress", [{"name":"rawAddress","required":true,"positional":true},{"name":"type"}], [rawAddress], options) as InternetAddress;
}
}
export namespace _InternetAddressFactory { export declare const loopbackIPv4: InternetAddress; }
export namespace _InternetAddressFactory { export declare const loopbackIPv6: InternetAddress; }
export namespace _InternetAddressFactory { export declare const anyIPv4: InternetAddress; }
export namespace _InternetAddressFactory { export declare const anyIPv6: InternetAddress; }
_flaxDefineStaticGetters(_InternetAddressFactory, "flax.core/sdk_dependencies#read:InternetAddress.", ["loopbackIPv4","loopbackIPv6","anyIPv4","anyIPv6"]);
export namespace _InternetAddressFactory { export function lookup(host: string, options: { type?: Readonly<{ "__flaxBound:dart:io::InternetAddressType": readonly [] }> | undefined } = {}): Promise<DartList<InternetAddress>> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["type"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:InternetAddress.lookup", [host, options.type]);
return _flaxResult as Promise<DartList<InternetAddress>>;
} }
export namespace _InternetAddressFactory { export function tryParse(address: string): InternetAddress | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:InternetAddress.tryParse", [address]);
return _flaxResult as InternetAddress | null;
} }
export const InternetAddress: typeof _InternetAddressFactory & _FlaxInstanceType<InternetAddress> & _FlaxDartType<InternetAddress, readonly ["class", "flax.core/sdk_dependencies#type:InternetAddress", readonly [], false]> = _flaxBindInstanceType<InternetAddress, typeof _InternetAddressFactory>(_InternetAddressFactory, "flax.core/sdk_dependencies#type:InternetAddress", ["dart:core::Object"]) as typeof _InternetAddressFactory & _FlaxInstanceType<InternetAddress> & _FlaxDartType<InternetAddress, readonly ["class", "flax.core/sdk_dependencies#type:InternetAddress", readonly [], false]>;

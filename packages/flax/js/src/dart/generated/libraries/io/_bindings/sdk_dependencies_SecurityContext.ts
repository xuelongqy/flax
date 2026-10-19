// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters94, _flaxMemberParameters95, _flaxMemberParameters96, _flaxMemberParameters97, _flaxMemberParameters98, _flaxMemberParameters99 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SecurityContext extends Readonly<{ "__flaxBound:dart:io::SecurityContext": readonly [] }> { readonly __SecurityContext: unique symbol;
readonly [_flaxDartTypeValue]: SecurityContext;

get allowLegacyUnsafeRenegotiation(): boolean;
usePrivateKey(file: string, options?: {password?: string | null | undefined}): void;
usePrivateKeyBytes(keyBytes: DartListInput<number, number>, options?: {password?: string | null | undefined}): void;
setTrustedCertificates(file: string, options?: {password?: string | null | undefined}): void;
setTrustedCertificatesBytes(certBytes: DartListInput<number, number>, options?: {password?: string | null | undefined}): void;
useCertificateChain(file: string, options?: {password?: string | null | undefined}): void;
useCertificateChainBytes(chainBytes: DartListInput<number, number>, options?: {password?: string | null | undefined}): void;
setClientAuthorities(file: string, options?: {password?: string | null | undefined}): void;
setClientAuthoritiesBytes(authCertBytes: DartListInput<number, number>, options?: {password?: string | null | undefined}): void;
setAlpnProtocols(protocols: DartListInput<string, string>, isServer: boolean): void;
set allowLegacyUnsafeRenegotiation(value: boolean);
}
defineObject("flax.core/sdk_dependencies#type:SecurityContext", ["allowLegacyUnsafeRenegotiation"], ["allowLegacyUnsafeRenegotiation"], _flaxBindingMethods("flax.core/sdk_dependencies#type:SecurityContext", "object", {"usePrivateKey":_flaxMemberParameters94,"usePrivateKeyBytes":_flaxMemberParameters95,"setTrustedCertificates":_flaxMemberParameters94,"setTrustedCertificatesBytes":_flaxMemberParameters96,"useCertificateChain":_flaxMemberParameters94,"useCertificateChainBytes":_flaxMemberParameters97,"setClientAuthorities":_flaxMemberParameters94,"setClientAuthoritiesBytes":_flaxMemberParameters98,"setAlpnProtocols":_flaxMemberParameters99}, {}), []);
export function _SecurityContextFactory(options: { withTrustedRoots?: boolean | undefined } = {}): SecurityContext {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:SecurityContext", "", [{"name":"withTrustedRoots"}], [], options) as SecurityContext;
}
export namespace _SecurityContextFactory { export declare const defaultContext: SecurityContext; }
export namespace _SecurityContextFactory { export declare const alpnSupported: boolean; }
_flaxDefineStaticGetters(_SecurityContextFactory, "flax.core/sdk_dependencies#read:SecurityContext.", ["defaultContext","alpnSupported"]);
export const SecurityContext: typeof _SecurityContextFactory & _FlaxInstanceType<SecurityContext> & _FlaxDartType<SecurityContext, readonly ["class", "flax.core/sdk_dependencies#type:SecurityContext", readonly [], false]> = _flaxBindInstanceType<SecurityContext, typeof _SecurityContextFactory>(_SecurityContextFactory, "flax.core/sdk_dependencies#type:SecurityContext", ["dart:core::Object"]) as typeof _SecurityContextFactory & _FlaxInstanceType<SecurityContext> & _FlaxDartType<SecurityContext, readonly ["class", "flax.core/sdk_dependencies#type:SecurityContext", readonly [], false]>;

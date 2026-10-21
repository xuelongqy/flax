// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_SecurityContext';
import '@flax/dart/io/_bindings/sdk_dependencies_SecurityContext';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream3 from '@flax/dart/io/_bindings/sdk_dependencies_X509Certificate';
import '@flax/dart/io/_bindings/sdk_dependencies_X509Certificate';
import type * as upstream4 from '@flax/dart/io/_bindings/sdk_dependencies_HttpClientRequest';
import '@flax/dart/io/_bindings/sdk_dependencies_HttpClientRequest';
import { _flaxMemberParameters3, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters28, _flaxMemberParameters29 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HttpClient extends Readonly<{ "__flaxBound:dart:_http::HttpClient": readonly [] }> { readonly __HttpClient: unique symbol;
readonly [_flaxDartTypeValue]: HttpClient;

get idleTimeout(): upstream1.Duration;
get connectionTimeout(): upstream1.Duration | null;
get maxConnectionsPerHost(): number | null;
get autoUncompress(): boolean;
get userAgent(): string | null;
open(method: string, host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
openUrl(method: string, url: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Promise<upstream4.HttpClientRequest>;
get(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
getUrl(url: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Promise<upstream4.HttpClientRequest>;
post(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
postUrl(url: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Promise<upstream4.HttpClientRequest>;
put(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
putUrl(url: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Promise<upstream4.HttpClientRequest>;
delete(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
deleteUrl(url: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Promise<upstream4.HttpClientRequest>;
patch(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
patchUrl(url: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Promise<upstream4.HttpClientRequest>;
head(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
headUrl(url: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Promise<upstream4.HttpClientRequest>;
close(options?: {force?: boolean | undefined}): void;
set idleTimeout(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }>);
set connectionTimeout(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null);
set maxConnectionsPerHost(value: number | null);
set autoUncompress(value: boolean);
set userAgent(value: string | null);
set authenticate(value: ((url: upstream2.Uri, scheme: string, realm: string | null) => Promise<boolean>) | null);
set findProxy(value: ((url: upstream2.Uri) => string) | null);
set authenticateProxy(value: ((host: string, port: number, scheme: string, realm: string | null) => Promise<boolean>) | null);
set badCertificateCallback(value: ((cert: upstream3.X509Certificate, host: string, port: number) => boolean) | null);
set keyLog(value: ((line: string) => unknown | null) | null);
}
defineObject("flax.core/sdk_dependencies#type:HttpClient", ["idleTimeout","connectionTimeout","maxConnectionsPerHost","autoUncompress","userAgent"], ["idleTimeout","connectionTimeout","maxConnectionsPerHost","autoUncompress","userAgent","authenticate","findProxy","authenticateProxy","badCertificateCallback","keyLog"], _flaxBindingMethods("flax.core/sdk_dependencies#type:HttpClient", "object", {"open":_flaxMemberParameters25,"openUrl":_flaxMemberParameters26,"get":_flaxMemberParameters27,"getUrl":_flaxMemberParameters28,"post":_flaxMemberParameters27,"postUrl":_flaxMemberParameters28,"put":_flaxMemberParameters27,"putUrl":_flaxMemberParameters28,"delete":_flaxMemberParameters27,"deleteUrl":_flaxMemberParameters28,"patch":_flaxMemberParameters27,"patchUrl":_flaxMemberParameters28,"head":_flaxMemberParameters27,"headUrl":_flaxMemberParameters28,"close":_flaxMemberParameters29}, {}), []);
export function _HttpClientFactory(options: { context?: Readonly<{ "__flaxBound:dart:io::SecurityContext": readonly [] }> | null | undefined } = {}): HttpClient {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:HttpClient", "", [{"name":"context"}], [], options) as HttpClient;
}
export namespace _HttpClientFactory { export function setEnableTimelineLogging(value: boolean): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:HttpClient.enableTimelineLogging%3D", [value], _flaxMemberParameters3);
} }
export namespace _HttpClientFactory { export declare const defaultHttpPort: number; }
export namespace _HttpClientFactory { export declare const defaultHttpsPort: number; }
export namespace _HttpClientFactory { export declare const enableTimelineLogging: boolean; }
_flaxDefineStaticGetters(_HttpClientFactory, "flax.core/sdk_dependencies#read:HttpClient.", ["defaultHttpPort","defaultHttpsPort","enableTimelineLogging"]);
export namespace _HttpClientFactory { export function findProxyFromEnvironment(url: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>, options: { environment?: DartMapInput<string, string, string, string> | null | undefined } = {}): string {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["environment"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:HttpClient.findProxyFromEnvironment", [url, options.environment], _flaxMemberParameters24);
return _flaxResult as string;
} }
export const HttpClient: typeof _HttpClientFactory & _FlaxInstanceType<HttpClient> & _FlaxDartType<HttpClient, readonly ["class", "flax.core/sdk_dependencies#type:HttpClient", readonly [], false]> = _flaxBindInstanceType<HttpClient, typeof _HttpClientFactory>(_HttpClientFactory, "flax.core/sdk_dependencies#type:HttpClient", ["dart:core::Object"]) as typeof _HttpClientFactory & _FlaxInstanceType<HttpClient> & _FlaxDartType<HttpClient, readonly ["class", "flax.core/sdk_dependencies#type:HttpClient", readonly [], false]>;

// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_UriData';
import '@flax/dart/core/_bindings/flutter_UriData';
import { _flaxMemberParameters222, _flaxMemberParameters223, _flaxMemberParameters224, _flaxMemberParameters225, _flaxMemberParameters226, _flaxMemberParameters227, _flaxMemberParameters228, _flaxMemberParameters229, _flaxMemberParameters230, _flaxMemberParameters231, _flaxMemberParameters4, _flaxMemberParameters232, _flaxMemberParameters233 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Uri extends Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }> { readonly __Uri: unique symbol;
readonly [_flaxDartTypeValue]: Uri;

readonly scheme: string;
readonly authority: string;
readonly userInfo: string;
readonly host: string;
readonly port: number;
readonly path: string;
readonly query: string;
readonly fragment: string;
readonly pathSegments: DartList<string>;
readonly queryParameters: DartMap<string, string>;
readonly queryParametersAll: DartMap<string, DartList<string>>;
readonly isAbsolute: boolean;
readonly hasScheme: boolean;
readonly hasAuthority: boolean;
readonly hasPort: boolean;
readonly hasQuery: boolean;
readonly hasFragment: boolean;
readonly hasEmptyPath: boolean;
readonly hasAbsolutePath: boolean;
readonly origin: string;
readonly data: upstream1.UriData | null;
isScheme(scheme: string): boolean;
toFilePath(options?: {windows?: boolean | null | undefined}): string;
toString(): string;
replace(options?: {fragment?: string | null | undefined; host?: string | null | undefined; path?: string | null | undefined; pathSegments?: DartIterableInput<string, string> | null | undefined; port?: number | null | undefined; query?: string | null | undefined; queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined; scheme?: string | null | undefined; userInfo?: string | null | undefined}): Uri;
removeFragment(): Uri;
resolve(reference: string): Uri;
resolveUri(reference: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Uri;
normalizePath(): Uri;
}
defineObject("flax.core/flutter#type:Uri", ["scheme","authority","userInfo","host","port","path","query","fragment","pathSegments","queryParameters","queryParametersAll","isAbsolute","hasScheme","hasAuthority","hasPort","hasQuery","hasFragment","hasEmptyPath","hasAbsolutePath","origin","data"], [], _flaxBindingMethods("flax.core/flutter#type:Uri", "object", {"isScheme":_flaxMemberParameters230,"toFilePath":_flaxMemberParameters231,"toString":_flaxMemberParameters4,"replace":_flaxMemberParameters232,"removeFragment":_flaxMemberParameters4,"resolve":_flaxMemberParameters233,"resolveUri":_flaxMemberParameters233,"normalizePath":_flaxMemberParameters4}, {}), []);
export function _UriFactory(options: { scheme?: string | null | undefined; userInfo?: string | null | undefined; host?: string | null | undefined; port?: number | null | undefined; path?: string | null | undefined; pathSegments?: DartIterableInput<string, string> | null | undefined; query?: string | null | undefined; queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined; fragment?: string | null | undefined } = {}): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Uri", "", [{"name":"scheme"},{"name":"userInfo"},{"name":"host"},{"name":"port"},{"name":"path"},{"name":"pathSegments"},{"name":"query"},{"name":"queryParameters"},{"name":"fragment"}], [], options) as Uri;
}
export namespace _UriFactory {
export function http(authority: string, unencodedPath?: string, queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
if (unencodedPath === undefined && (queryParameters !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/flutter#type:Uri", "http", [{"name":"authority","required":true,"positional":true},{"name":"unencodedPath","positional":true},{"name":"queryParameters","positional":true}], [authority, unencodedPath, queryParameters], {}) as Uri;
}
}
export namespace _UriFactory {
export function https(authority: string, unencodedPath?: string, queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
if (unencodedPath === undefined && (queryParameters !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/flutter#type:Uri", "https", [{"name":"authority","required":true,"positional":true},{"name":"unencodedPath","positional":true},{"name":"queryParameters","positional":true}], [authority, unencodedPath, queryParameters], {}) as Uri;
}
}
export namespace _UriFactory {
export function file(path: string, options: { windows?: boolean | null | undefined } = {}): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Uri", "file", [{"name":"path","required":true,"positional":true},{"name":"windows"}], [path], options) as Uri;
}
}
export namespace _UriFactory {
export function directory(path: string, options: { windows?: boolean | null | undefined } = {}): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Uri", "directory", [{"name":"path","required":true,"positional":true},{"name":"windows"}], [path], options) as Uri;
}
}
export namespace _UriFactory {
export function dataFromString(content: string, options: { mimeType?: string | null | undefined; encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | null | undefined; parameters?: DartMapInput<string, string, string, string> | null | undefined; base64?: boolean | undefined } = {}): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Uri", "dataFromString", [{"name":"content","required":true,"positional":true},{"name":"mimeType"},{"name":"encoding"},{"name":"parameters"},{"name":"base64"}], [content], options) as Uri;
}
}
export namespace _UriFactory {
export function dataFromBytes(bytes: DartListInput<number, number>, options: { mimeType?: string | undefined; parameters?: DartMapInput<string, string, string, string> | null | undefined; percentEncoded?: boolean | undefined } = {}): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Uri", "dataFromBytes", [{"name":"bytes","required":true,"positional":true},{"name":"mimeType"},{"name":"parameters"},{"name":"percentEncoded"}], [bytes], options) as Uri;
}
}
export namespace _UriFactory { export declare const base: Uri; }
_flaxDefineStaticGetters(_UriFactory, "flax.core/flutter#read:Uri.", ["base"]);
export namespace _UriFactory { export function parse(uri: string, start?: number, end?: number | null): Uri {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (start === undefined && (end !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.parse", [uri, start, end], _flaxMemberParameters222);
return _flaxResult as Uri;
} }
export namespace _UriFactory { export function tryParse(uri: string, start?: number, end?: number | null): Uri | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (start === undefined && (end !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.tryParse", [uri, start, end], _flaxMemberParameters222);
return _flaxResult as Uri | null;
} }
export namespace _UriFactory { export function encodeComponent(component: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.encodeComponent", [component], _flaxMemberParameters223);
return _flaxResult as string;
} }
export namespace _UriFactory { export function encodeQueryComponent(component: string, options: { encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined } = {}): string {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["encoding"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.encodeQueryComponent", [component, options.encoding], _flaxMemberParameters224);
return _flaxResult as string;
} }
export namespace _UriFactory { export function decodeComponent(encodedComponent: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.decodeComponent", [encodedComponent], _flaxMemberParameters225);
return _flaxResult as string;
} }
export namespace _UriFactory { export function decodeQueryComponent(encodedComponent: string, options: { encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined } = {}): string {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["encoding"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.decodeQueryComponent", [encodedComponent, options.encoding], _flaxMemberParameters226);
return _flaxResult as string;
} }
export namespace _UriFactory { export function encodeFull(uri: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.encodeFull", [uri], _flaxMemberParameters227);
return _flaxResult as string;
} }
export namespace _UriFactory { export function decodeFull(uri: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.decodeFull", [uri], _flaxMemberParameters227);
return _flaxResult as string;
} }
export namespace _UriFactory { export function splitQueryString(query: string, options: { encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined } = {}): DartMap<string, string> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["encoding"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.splitQueryString", [query, options.encoding], _flaxMemberParameters228);
return _flaxResult as DartMap<string, string>;
} }
export namespace _UriFactory { export function parseIPv4Address(host: string, start?: number, end?: number | null): DartList<number> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (start === undefined && (end !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.parseIPv4Address", [host, start, end], _flaxMemberParameters229);
return _flaxResult as DartList<number>;
} }
export namespace _UriFactory { export function parseIPv6Address(host: string, start?: number, end?: number | null): DartList<number> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (start === undefined && (end !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.parseIPv6Address", [host, start, end], _flaxMemberParameters229);
return _flaxResult as DartList<number>;
} }
export const Uri: typeof _UriFactory & _FlaxInstanceType<Uri> & _FlaxDartType<Uri, readonly ["class", "flax.core/flutter#type:Uri", readonly [], false]> = _flaxBindInstanceType<Uri, typeof _UriFactory>(_UriFactory, "flax.core/flutter#type:Uri", ["dart:core::Object"]) as typeof _UriFactory & _FlaxInstanceType<Uri> & _FlaxDartType<Uri, readonly ["class", "flax.core/flutter#type:Uri", readonly [], false]>;

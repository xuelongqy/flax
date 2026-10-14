// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, defineDartTypes as _flaxHostDefineDartTypes, bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"reference","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"fragment","required":false,"positional":false},{"name":"host","required":false,"positional":false},{"name":"path","required":false,"positional":false},{"name":"pathSegments","required":false,"positional":false},{"name":"port","required":false,"positional":false},{"name":"query","required":false,"positional":false},{"name":"queryParameters","required":false,"positional":false},{"name":"scheme","required":false,"positional":false},{"name":"userInfo","required":false,"positional":false}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Uri extends Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }> { readonly __Uri: unique symbol;

readonly scheme: string;
readonly host: string;
readonly port: number;
readonly userInfo: string;
readonly authority: string;
readonly path: string;
readonly pathSegments: DartList<string>;
readonly query: string;
readonly queryParameters: DartMap<string, string>;
readonly queryParametersAll: DartMap<string, DartList<string>>;
readonly fragment: string;
readonly isAbsolute: boolean;
readonly hasScheme: boolean;
readonly hasAuthority: boolean;
readonly hasPort: boolean;
readonly hasQuery: boolean;
readonly hasFragment: boolean;
toString(): string;
resolve(reference: string): Uri;
resolveUri(reference: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Uri;
replace(options?: {fragment?: string | null | undefined; host?: string | null | undefined; path?: string | null | undefined; pathSegments?: DartIterableInput<string, string> | null | undefined; port?: number | null | undefined; query?: string | null | undefined; queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined; scheme?: string | null | undefined; userInfo?: string | null | undefined}): Uri;
removeFragment(): Uri;
normalizePath(): Uri;
}
defineObject("flax.core/flutter#type:Uri", ["scheme","host","port","userInfo","authority","path","pathSegments","query","queryParameters","queryParametersAll","fragment","isAbsolute","hasScheme","hasAuthority","hasPort","hasQuery","hasFragment"], [], _flaxBindingMethods("flax.core/flutter#type:Uri", "object", {"toString":_flaxMemberParameters0,"resolve":_flaxMemberParameters1,"resolveUri":_flaxMemberParameters1,"replace":_flaxMemberParameters2,"removeFragment":_flaxMemberParameters0,"normalizePath":_flaxMemberParameters0}, {}), []);
function _UriFactory(options: { scheme?: string | null | undefined; userInfo?: string | null | undefined; host?: string | null | undefined; port?: number | null | undefined; path?: string | null | undefined; pathSegments?: DartIterableInput<string, string> | null | undefined; query?: string | null | undefined; queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined; fragment?: string | null | undefined } = {}): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Uri", "", [{"name":"scheme","required":false,"positional":false},{"name":"userInfo","required":false,"positional":false},{"name":"host","required":false,"positional":false},{"name":"port","required":false,"positional":false},{"name":"path","required":false,"positional":false},{"name":"pathSegments","required":false,"positional":false},{"name":"query","required":false,"positional":false},{"name":"queryParameters","required":false,"positional":false},{"name":"fragment","required":false,"positional":false}], [], options) as Uri;
}
namespace _UriFactory {
export function http(authority: string, unencodedPath?: string, queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
if (unencodedPath === undefined && (queryParameters !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/flutter#type:Uri", "http", [{"name":"authority","required":true,"positional":true},{"name":"unencodedPath","required":false,"positional":true},{"name":"queryParameters","required":false,"positional":true}], [authority, unencodedPath, queryParameters], {}) as Uri;
}
}
namespace _UriFactory {
export function https(authority: string, unencodedPath?: string, queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null): Uri {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
if (unencodedPath === undefined && (queryParameters !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
return constructObject("object", "flax.core/flutter#type:Uri", "https", [{"name":"authority","required":true,"positional":true},{"name":"unencodedPath","required":false,"positional":true},{"name":"queryParameters","required":false,"positional":true}], [authority, unencodedPath, queryParameters], {}) as Uri;
}
}
namespace _UriFactory { export function parse(uri: string, start?: number, end?: number | null): Uri {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (start === undefined && (end !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.parse", [uri, start, end]);
return _flaxResult as Uri;
} }
namespace _UriFactory { export function tryParse(uri: string, start?: number, end?: number | null): Uri | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (start === undefined && (end !== undefined)) throw new TypeError('Optional positional arguments must omit a trailing suffix');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.tryParse", [uri, start, end]);
return _flaxResult as Uri | null;
} }
namespace _UriFactory { export function encodeComponent(component: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.encodeComponent", [component]);
return _flaxResult as string;
} }
namespace _UriFactory { export function decodeComponent(encodedComponent: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.decodeComponent", [encodedComponent]);
return _flaxResult as string;
} }
namespace _UriFactory { export function encodeQueryComponent(component: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.encodeQueryComponent", [component]);
return _flaxResult as string;
} }
namespace _UriFactory { export function decodeQueryComponent(encodedComponent: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Uri.decodeQueryComponent", [encodedComponent]);
return _flaxResult as string;
} }
export const Uri: typeof _UriFactory & _FlaxInstanceType<Uri> & _FlaxDartType<Uri, readonly ["class", "flax.core/flutter#type:Uri", readonly [], false]> = _flaxBindInstanceType<Uri, typeof _UriFactory>(_UriFactory, "flax.core/flutter#type:Uri", ["dart:core::Object"]) as typeof _UriFactory & _FlaxInstanceType<Uri> & _FlaxDartType<Uri, readonly ["class", "flax.core/flutter#type:Uri", readonly [], false]>;

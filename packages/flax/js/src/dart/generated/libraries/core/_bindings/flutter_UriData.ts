// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
const _flaxMemberParameters0 = [{"name":"mimeType","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"charset","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UriData extends Readonly<{ "__flaxBound:dart:core::UriData": readonly [] }> { readonly __UriData: unique symbol;
readonly [_flaxDartTypeValue]: UriData;

readonly uri: upstream0.Uri;
readonly mimeType: string;
readonly charset: string;
readonly isBase64: boolean;
readonly contentText: string;
readonly parameters: DartMap<string, string>;
isMimeType(mimeType: string): boolean;
isCharset(charset: string): boolean;
contentAsBytes(): globalThis.Uint8Array;
contentAsString(): string;
toString(): string;
}
defineObject("flax.core/flutter#type:UriData", ["uri","mimeType","charset","isBase64","contentText","parameters"], [], _flaxBindingMethods("flax.core/flutter#type:UriData", "object", {"isMimeType":_flaxMemberParameters0,"isCharset":_flaxMemberParameters1,"contentAsBytes":_flaxMemberParameters2,"contentAsString":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
export namespace _UriDataFactory {
export function fromString(content: string, options: { mimeType?: string | null | undefined; parameters?: DartMapInput<string, string, string, string> | null | undefined; base64?: boolean | undefined } = {}): UriData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:UriData", "fromString", [{"name":"content","required":true,"positional":true},{"name":"mimeType","required":false,"positional":false},{"name":"parameters","required":false,"positional":false},{"name":"base64","required":false,"positional":false}], [content], options) as UriData;
}
}
export namespace _UriDataFactory {
export function fromBytes(bytes: DartListInput<number, number>, options: { mimeType?: string | undefined; parameters?: DartMapInput<string, string, string, string> | null | undefined; percentEncoded?: boolean | undefined } = {}): UriData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:UriData", "fromBytes", [{"name":"bytes","required":true,"positional":true},{"name":"mimeType","required":false,"positional":false},{"name":"parameters","required":false,"positional":false},{"name":"percentEncoded","required":false,"positional":false}], [bytes], options) as UriData;
}
}
export namespace _UriDataFactory {
export function fromUri(uri: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): UriData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:UriData", "fromUri", [{"name":"uri","required":true,"positional":true}], [uri], {}) as UriData;
}
}
export namespace _UriDataFactory { export function parse(uri: string): UriData {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:UriData.parse", [uri]);
return _flaxResult as UriData;
} }
export const UriData: typeof _UriDataFactory & _FlaxInstanceType<UriData> & _FlaxDartType<UriData, readonly ["class", "flax.core/flutter#type:UriData", readonly [], false]> = _flaxBindInstanceType<UriData, typeof _UriDataFactory>(_UriDataFactory, "flax.core/flutter#type:UriData", ["dart:core::Object"]) as typeof _UriDataFactory & _FlaxInstanceType<UriData> & _FlaxDartType<UriData, readonly ["class", "flax.core/flutter#type:UriData", readonly [], false]>;

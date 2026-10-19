// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
const _flaxMemberParameters0 = [{"name":"string","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"codeUnits","required":true,"positional":true},{"name":"allowMalformed"}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Utf8Codec extends Omit<upstream0.Encoding, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:convert::Utf8Codec": readonly [] }>, Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }>, Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> { readonly __Utf8Codec: unique symbol;
readonly [_flaxDartTypeValue]: Utf8Codec;

readonly name: string;
decodeStream(byteStream: (upstream1.Stream<DartList<number>> | upstream1.Stream<DartListInput<number, number>>)): Promise<string>;
encode(string: string): globalThis.Uint8Array;
decode(codeUnits: DartListInput<number, number>, options?: {allowMalformed?: boolean | null | undefined}): string;
}
defineObject("flax.core/sdk_dependencies#type:Utf8Codec", ["name"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:Utf8Codec", "object", {"encode":_flaxMemberParameters0,"decode":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_dependencies#type:Encoding");
export function _Utf8CodecFactory(options: { allowMalformed?: boolean | undefined } = {}): Utf8Codec {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Utf8Codec", "", [{"name":"allowMalformed"}], [], options) as Utf8Codec;
}
export const Utf8Codec: typeof _Utf8CodecFactory & _FlaxInstanceType<Utf8Codec> & _FlaxDartType<Utf8Codec, readonly ["class", "flax.core/sdk_dependencies#type:Utf8Codec", readonly [], false]> = _flaxBindInstanceType<Utf8Codec, typeof _Utf8CodecFactory>(_Utf8CodecFactory, "flax.core/sdk_dependencies#type:Utf8Codec", ["flax.core/sdk_dependencies#type:Encoding","dart:convert::Codec","dart:core::Object"]) as typeof _Utf8CodecFactory & _FlaxInstanceType<Utf8Codec> & _FlaxDartType<Utf8Codec, readonly ["class", "flax.core/sdk_dependencies#type:Utf8Codec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "decodeStream" | "encode" | "decode" | "__flaxBound:dart:convert::Utf8Codec" | "__flaxBound:dart:convert::Encoding" | "__flaxBound:dart:convert::Codec";

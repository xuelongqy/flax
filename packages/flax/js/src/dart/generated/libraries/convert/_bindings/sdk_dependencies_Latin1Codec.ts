// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Latin1Codec extends Omit<upstream0.Encoding, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:convert::Latin1Codec": readonly [] }>, Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }>, Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> { readonly __Latin1Codec: unique symbol;
readonly [_flaxDartTypeValue]: Latin1Codec;

readonly name: string;
decodeStream(byteStream: (upstream1.Stream<DartList<number>> | upstream1.Stream<DartListInput<number, number>>)): Promise<string>;
encode(source: string): globalThis.Uint8Array;
decode(bytes: DartListInput<number, number>, options?: {allowInvalid?: boolean | null | undefined}): string;
}
defineObject("flax.core/sdk_dependencies#type:Latin1Codec", ["name"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:Latin1Codec", "object", {"encode":_flaxMemberParameters0,"decode":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_dependencies#type:Encoding");
export function _Latin1CodecFactory(options: { allowInvalid?: boolean | undefined } = {}): Latin1Codec {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Latin1Codec", "", [{"name":"allowInvalid"}], [], options) as Latin1Codec;
}
export const Latin1Codec: typeof _Latin1CodecFactory & _FlaxInstanceType<Latin1Codec> & _FlaxDartType<Latin1Codec, readonly ["class", "flax.core/sdk_dependencies#type:Latin1Codec", readonly [], false]> = _flaxBindInstanceType<Latin1Codec, typeof _Latin1CodecFactory>(_Latin1CodecFactory, "flax.core/sdk_dependencies#type:Latin1Codec", ["flax.core/sdk_dependencies#type:Encoding","dart:convert::Codec","dart:core::Object"]) as typeof _Latin1CodecFactory & _FlaxInstanceType<Latin1Codec> & _FlaxDartType<Latin1Codec, readonly ["class", "flax.core/sdk_dependencies#type:Latin1Codec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "decodeStream" | "encode" | "decode" | "__flaxBound:dart:convert::Latin1Codec" | "__flaxBound:dart:convert::Encoding" | "__flaxBound:dart:convert::Codec";

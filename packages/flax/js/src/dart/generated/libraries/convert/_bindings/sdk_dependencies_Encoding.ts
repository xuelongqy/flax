// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { _flaxMemberParameters8, _flaxMemberParameters9, _flaxMemberParameters10, _flaxMemberParameters11 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Encoding extends Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }>, Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> { readonly __Encoding: unique symbol;
readonly [_flaxDartTypeValue]: Encoding;

readonly name: string;
decodeStream(byteStream: (upstream0.Stream<DartList<number>> | upstream0.Stream<DartListInput<number, number>>)): Promise<string>;
encode(input: string): DartList<number>;
decode(encoded: DartListInput<number, number>): string;
}
defineObject("flax.core/sdk_dependencies#type:Encoding", ["name"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:Encoding", "object", {"decodeStream":_flaxMemberParameters9,"encode":_flaxMemberParameters10,"decode":_flaxMemberParameters11}, {}), []);
export namespace _EncodingFactory { export function getByName(name: string | null): Encoding | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Encoding.getByName", [name], _flaxMemberParameters8);
return _flaxResult as Encoding | null;
} }
export const Encoding: typeof _EncodingFactory & _FlaxInstanceType<Encoding> & _FlaxDartType<Encoding, readonly ["class", "flax.core/sdk_dependencies#type:Encoding", readonly [], false]> = _flaxBindInstanceType<Encoding, typeof _EncodingFactory>(_EncodingFactory, "flax.core/sdk_dependencies#type:Encoding", ["dart:convert::Codec","dart:core::Object"]) as typeof _EncodingFactory & _FlaxInstanceType<Encoding> & _FlaxDartType<Encoding, readonly ["class", "flax.core/sdk_dependencies#type:Encoding", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "decodeStream" | "encode" | "decode" | "__flaxBound:dart:convert::Encoding" | "__flaxBound:dart:convert::Codec";

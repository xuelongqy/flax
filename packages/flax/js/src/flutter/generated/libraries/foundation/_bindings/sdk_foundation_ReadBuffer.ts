// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Endian';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Endian';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"endian"}] as const;
const _flaxMemberParameters2 = [{"name":"length","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"data","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ReadBuffer extends Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [] }> { readonly __ReadBuffer: unique symbol;
readonly [_flaxDartTypeValue]: ReadBuffer;

}
defineObject("flax.core/sdk_foundation#type:ReadBuffer", ["data","hasRemaining"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ReadBuffer", "object", {"getUint8":_flaxMemberParameters0,"getUint16":_flaxMemberParameters1,"getUint32":_flaxMemberParameters1,"getInt32":_flaxMemberParameters1,"getInt64":_flaxMemberParameters1,"getFloat64":_flaxMemberParameters1,"getUint8List":_flaxMemberParameters2,"getInt32List":_flaxMemberParameters2,"getInt64List":_flaxMemberParameters2,"getFloat32List":_flaxMemberParameters2,"getFloat64List":_flaxMemberParameters2}, {}), []);
const _ReadBufferProxy = {type: "flax.core/sdk_foundation#type:ReadBuffer", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"getUint8":_flaxMemberParameters0,"getUint16":_flaxMemberParameters1,"getUint32":_flaxMemberParameters1,"getInt32":_flaxMemberParameters1,"getInt64":_flaxMemberParameters1,"getFloat64":_flaxMemberParameters1,"getUint8List":_flaxMemberParameters2,"getInt32List":_flaxMemberParameters2,"getInt64List":_flaxMemberParameters2,"getFloat32List":_flaxMemberParameters2,"getFloat64List":_flaxMemberParameters2}, getters: ["data","hasRemaining"], setters: [], contextMembers: [], superMembers: ["get:data","get:hasRemaining","getUint8","getUint16","getUint32","getInt32","getInt64","getFloat64","getUint8List","getInt32List","getInt64List","getFloat32List","getFloat64List"]} as const;
export interface ReadBuffer {
readonly [_flaxDartTypeValue]: ReadBuffer;

getUint8(): number;
getUint16(options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): number;
getUint32(options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): number;
getInt32(options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): number;
getInt64(options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): number;
getFloat64(options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): number;
getUint8List(length: number): globalThis.Uint8Array;
getInt32List(length: number): globalThis.Int32Array;
getInt64List(length: number): globalThis.BigInt64Array;
getFloat32List(length: number): globalThis.Float32Array;
getFloat64List(length: number): globalThis.Float64Array;
get data(): globalThis.DataView;
get hasRemaining(): boolean;
}
export abstract class ReadBuffer extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ReadBuffer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ReadBuffer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ReadBuffer", readonly [], false];
constructor(data: globalThis.DataView) { super(_ReadBufferProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ReadBuffer.prototype, _ReadBufferProxy);
export namespace ReadBuffer { export function implement(args: [data: globalThis.DataView], implementation: {}): ReadBuffer {
return constructProxy(_ReadBufferProxy, args, implementation) as ReadBuffer; } }
_flaxBindInstanceType<ReadBuffer, typeof ReadBuffer>(ReadBuffer, "flax.core/sdk_foundation#type:ReadBuffer", ["dart:core::Object"]);

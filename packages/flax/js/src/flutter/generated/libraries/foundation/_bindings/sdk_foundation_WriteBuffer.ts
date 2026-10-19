// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Endian';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Endian';
import { _flaxMemberParameters90, _flaxMemberParameters91, _flaxMemberParameters92, _flaxMemberParameters1 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WriteBuffer extends Readonly<{ "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [] }> { readonly __WriteBuffer: unique symbol;
readonly [_flaxDartTypeValue]: WriteBuffer;

putUint8(byte: number): void;
putUint16(value: number, options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): void;
putUint32(value: number, options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): void;
putInt32(value: number, options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): void;
putInt64(value: number, options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): void;
putFloat64(value: number, options?: {endian?: Readonly<{ "__flaxBound:dart:typed_data::Endian": readonly [] }> | null | undefined}): void;
putUint8List(list: globalThis.Uint8Array): void;
putInt32List(list: globalThis.Int32Array): void;
putInt64List(list: globalThis.BigInt64Array): void;
putFloat32List(list: globalThis.Float32Array): void;
putFloat64List(list: globalThis.Float64Array): void;
done(): globalThis.DataView;
}
defineObject("flax.core/sdk_foundation#type:WriteBuffer", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:WriteBuffer", "object", {"putUint8":_flaxMemberParameters90,"putUint16":_flaxMemberParameters91,"putUint32":_flaxMemberParameters91,"putInt32":_flaxMemberParameters91,"putInt64":_flaxMemberParameters91,"putFloat64":_flaxMemberParameters91,"putUint8List":_flaxMemberParameters92,"putInt32List":_flaxMemberParameters92,"putInt64List":_flaxMemberParameters92,"putFloat32List":_flaxMemberParameters92,"putFloat64List":_flaxMemberParameters92,"done":_flaxMemberParameters1}, {}), []);
export function _WriteBufferFactory(options: { startCapacity?: number | undefined } = {}): WriteBuffer {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:WriteBuffer", "", [{"name":"startCapacity"}], [], options) as WriteBuffer;
}
export const WriteBuffer: typeof _WriteBufferFactory & _FlaxInstanceType<WriteBuffer> & _FlaxDartType<WriteBuffer, readonly ["class", "flax.core/sdk_foundation#type:WriteBuffer", readonly [], false]> = _flaxBindInstanceType<WriteBuffer, typeof _WriteBufferFactory>(_WriteBufferFactory, "flax.core/sdk_foundation#type:WriteBuffer", ["dart:core::Object"]) as typeof _WriteBufferFactory & _FlaxInstanceType<WriteBuffer> & _FlaxDartType<WriteBuffer, readonly ["class", "flax.core/sdk_foundation#type:WriteBuffer", readonly [], false]>;

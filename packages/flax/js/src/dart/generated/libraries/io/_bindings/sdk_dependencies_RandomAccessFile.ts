// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream1 from '@flax/dart/io/_bindings/sdk_dependencies_FileLock';
import '@flax/dart/io/_bindings/sdk_dependencies_FileLock';
import { _flaxMemberParameters2, _flaxMemberParameters52, _flaxMemberParameters97, _flaxMemberParameters3, _flaxMemberParameters98, _flaxMemberParameters99, _flaxMemberParameters100, _flaxMemberParameters101, _flaxMemberParameters15 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RandomAccessFile extends Readonly<{ "__flaxBound:dart:io::RandomAccessFile": readonly [] }> { readonly __RandomAccessFile: unique symbol;
readonly [_flaxDartTypeValue]: RandomAccessFile;

readonly path: string;
close(): Promise<void>;
closeSync(): void;
readByte(): Promise<number>;
readByteSync(): number;
read(count: number): Promise<globalThis.Uint8Array>;
readSync(count: number): globalThis.Uint8Array;
readInto(buffer: DartListInput<number, number>, start?: number, end?: number | null): Promise<number>;
readIntoSync(buffer: DartListInput<number, number>, start?: number, end?: number | null): number;
writeByte(value: number): Promise<RandomAccessFile>;
writeByteSync(value: number): number;
writeFrom(buffer: DartListInput<number, number>, start?: number, end?: number | null): Promise<RandomAccessFile>;
writeFromSync(buffer: DartListInput<number, number>, start?: number, end?: number | null): void;
writeString(string: string, options?: {encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined}): Promise<RandomAccessFile>;
writeStringSync(string: string, options?: {encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined}): void;
position(): Promise<number>;
positionSync(): number;
setPosition(position: number): Promise<RandomAccessFile>;
setPositionSync(position: number): void;
truncate(length: number): Promise<RandomAccessFile>;
truncateSync(length: number): void;
length(): Promise<number>;
lengthSync(): number;
flush(): Promise<RandomAccessFile>;
flushSync(): void;
lock(mode?: Readonly<{ "__flaxBound:dart:io::FileLock": readonly [] }>, start?: number, end?: number): Promise<RandomAccessFile>;
lockSync(mode?: Readonly<{ "__flaxBound:dart:io::FileLock": readonly [] }>, start?: number, end?: number): void;
unlock(start?: number, end?: number): Promise<RandomAccessFile>;
unlockSync(start?: number, end?: number): void;
toString(): string;
}
defineObject("flax.core/sdk_dependencies#type:RandomAccessFile", ["path"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:RandomAccessFile", "object", {"close":_flaxMemberParameters2,"closeSync":_flaxMemberParameters2,"readByte":_flaxMemberParameters2,"readByteSync":_flaxMemberParameters2,"read":_flaxMemberParameters52,"readSync":_flaxMemberParameters52,"readInto":_flaxMemberParameters97,"readIntoSync":_flaxMemberParameters97,"writeByte":_flaxMemberParameters3,"writeByteSync":_flaxMemberParameters3,"writeFrom":_flaxMemberParameters97,"writeFromSync":_flaxMemberParameters97,"writeString":_flaxMemberParameters98,"writeStringSync":_flaxMemberParameters98,"position":_flaxMemberParameters2,"positionSync":_flaxMemberParameters2,"setPosition":_flaxMemberParameters99,"setPositionSync":_flaxMemberParameters99,"truncate":_flaxMemberParameters100,"truncateSync":_flaxMemberParameters100,"length":_flaxMemberParameters2,"lengthSync":_flaxMemberParameters2,"flush":_flaxMemberParameters2,"flushSync":_flaxMemberParameters2,"lock":_flaxMemberParameters101,"lockSync":_flaxMemberParameters101,"unlock":_flaxMemberParameters15,"unlockSync":_flaxMemberParameters15,"toString":_flaxMemberParameters2}, {}), []);
export const RandomAccessFile: object & _FlaxInstanceType<RandomAccessFile> & _FlaxDartType<RandomAccessFile, readonly ["class", "flax.core/sdk_dependencies#type:RandomAccessFile", readonly [], false]> = _flaxBindInstanceType<RandomAccessFile, object>({}, "flax.core/sdk_dependencies#type:RandomAccessFile", ["dart:core::Object"]) as object & _FlaxInstanceType<RandomAccessFile> & _FlaxDartType<RandomAccessFile, readonly ["class", "flax.core/sdk_dependencies#type:RandomAccessFile", readonly [], false]>;

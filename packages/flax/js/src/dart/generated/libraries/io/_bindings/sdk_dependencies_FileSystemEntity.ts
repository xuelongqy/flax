// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream1 from '@flax/dart/io/_bindings/sdk_dependencies_Directory';
import '@flax/dart/io/_bindings/sdk_dependencies_Directory';
import type * as upstream2 from '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntityType';
import '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntityType';
import type * as upstream3 from '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import { _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FileSystemEntity extends Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }> { readonly __FileSystemEntity: unique symbol;
readonly [_flaxDartTypeValue]: FileSystemEntity;

readonly path: string;
readonly uri: upstream0.Uri;
readonly isAbsolute: boolean;
readonly absolute: FileSystemEntity;
readonly parent: upstream1.Directory;
exists(): Promise<boolean>;
existsSync(): boolean;
rename(newPath: string): Promise<FileSystemEntity>;
renameSync(newPath: string): FileSystemEntity;
resolveSymbolicLinks(): Promise<string>;
resolveSymbolicLinksSync(): string;
stat(): Promise<upstream3.FileStat>;
statSync(): upstream3.FileStat;
delete(options?: {recursive?: boolean | undefined}): Promise<FileSystemEntity>;
deleteSync(options?: {recursive?: boolean | undefined}): void;
}
defineObject("flax.core/sdk_dependencies#type:FileSystemEntity", ["path","uri","isAbsolute","absolute","parent"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:FileSystemEntity", "object", {"exists":_flaxMemberParameters2,"existsSync":_flaxMemberParameters2,"rename":_flaxMemberParameters3,"renameSync":_flaxMemberParameters3,"resolveSymbolicLinks":_flaxMemberParameters2,"resolveSymbolicLinksSync":_flaxMemberParameters2,"stat":_flaxMemberParameters2,"statSync":_flaxMemberParameters2,"delete":_flaxMemberParameters4,"deleteSync":_flaxMemberParameters4}, {}), []);
export namespace _FileSystemEntityFactory { export declare const isWatchSupported: boolean; }
_flaxDefineStaticGetters(_FileSystemEntityFactory, "flax.core/sdk_dependencies#read:FileSystemEntity.", ["isWatchSupported"]);
export namespace _FileSystemEntityFactory { export function identical(path1: string, path2: string): Promise<boolean> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.identical", [path1, path2]);
return _flaxResult as Promise<boolean>;
} }
export namespace _FileSystemEntityFactory { export function identicalSync(path1: string, path2: string): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.identicalSync", [path1, path2]);
return _flaxResult as boolean;
} }
export namespace _FileSystemEntityFactory { export function type(path: string, options: { followLinks?: boolean | undefined } = {}): Promise<upstream2.FileSystemEntityType> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["followLinks"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.type", [path, options.followLinks]);
return _flaxResult as Promise<upstream2.FileSystemEntityType>;
} }
export namespace _FileSystemEntityFactory { export function typeSync(path: string, options: { followLinks?: boolean | undefined } = {}): upstream2.FileSystemEntityType {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["followLinks"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.typeSync", [path, options.followLinks]);
return _flaxResult as upstream2.FileSystemEntityType;
} }
export namespace _FileSystemEntityFactory { export function isLink(path: string): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.isLink", [path]);
return _flaxResult as Promise<boolean>;
} }
export namespace _FileSystemEntityFactory { export function isFile(path: string): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.isFile", [path]);
return _flaxResult as Promise<boolean>;
} }
export namespace _FileSystemEntityFactory { export function isDirectory(path: string): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.isDirectory", [path]);
return _flaxResult as Promise<boolean>;
} }
export namespace _FileSystemEntityFactory { export function isLinkSync(path: string): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.isLinkSync", [path]);
return _flaxResult as boolean;
} }
export namespace _FileSystemEntityFactory { export function isFileSync(path: string): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.isFileSync", [path]);
return _flaxResult as boolean;
} }
export namespace _FileSystemEntityFactory { export function isDirectorySync(path: string): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.isDirectorySync", [path]);
return _flaxResult as boolean;
} }
export namespace _FileSystemEntityFactory { export function parentOf(path: string): string {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileSystemEntity.parentOf", [path]);
return _flaxResult as string;
} }
export const FileSystemEntity: typeof _FileSystemEntityFactory & _FlaxInstanceType<FileSystemEntity> & _FlaxDartType<FileSystemEntity, readonly ["class", "flax.core/sdk_dependencies#type:FileSystemEntity", readonly [], false]> = _flaxBindInstanceType<FileSystemEntity, typeof _FileSystemEntityFactory>(_FileSystemEntityFactory, "flax.core/sdk_dependencies#type:FileSystemEntity", ["dart:core::Object"]) as typeof _FileSystemEntityFactory & _FlaxInstanceType<FileSystemEntity> & _FlaxDartType<FileSystemEntity, readonly ["class", "flax.core/sdk_dependencies#type:FileSystemEntity", readonly [], false]>;

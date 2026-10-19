// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntity';
import '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntity';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream2 from '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_Stream';
import { _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters2 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Directory extends Omit<upstream0.FileSystemEntity, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:io::Directory": readonly [] }>, Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }> { readonly __Directory: unique symbol;
readonly [_flaxDartTypeValue]: Directory;

readonly path: string;
readonly uri: upstream1.Uri;
readonly isAbsolute: boolean;
readonly absolute: Directory;
readonly parent: Directory;
exists(): Promise<boolean>;
existsSync(): boolean;
rename(newPath: string): Promise<Directory>;
renameSync(newPath: string): Directory;
resolveSymbolicLinks(): Promise<string>;
resolveSymbolicLinksSync(): string;
stat(): Promise<upstream2.FileStat>;
statSync(): upstream2.FileStat;
delete(options?: {recursive?: boolean | undefined}): Promise<upstream0.FileSystemEntity>;
deleteSync(options?: {recursive?: boolean | undefined}): void;
create(options?: {recursive?: boolean | undefined}): Promise<Directory>;
createSync(options?: {recursive?: boolean | undefined}): void;
createTemp(prefix?: string | null): Promise<Directory>;
createTempSync(prefix?: string | null): Directory;
list(options?: {followLinks?: boolean | undefined; recursive?: boolean | undefined}): upstream3.Stream<upstream0.FileSystemEntity>;
listSync(options?: {followLinks?: boolean | undefined; recursive?: boolean | undefined}): DartList<upstream0.FileSystemEntity>;
toString(): string;
}
defineObject("flax.core/sdk_dependencies#type:Directory", ["path","uri","isAbsolute","absolute","parent"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:Directory", "object", {"rename":_flaxMemberParameters3,"renameSync":_flaxMemberParameters3,"create":_flaxMemberParameters4,"createSync":_flaxMemberParameters4,"createTemp":_flaxMemberParameters5,"createTempSync":_flaxMemberParameters5,"list":_flaxMemberParameters6,"listSync":_flaxMemberParameters6,"toString":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_dependencies#type:FileSystemEntity");
export function _DirectoryFactory(path: string): Directory {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Directory", "", [{"name":"path","required":true,"positional":true}], [path], {}) as Directory;
}
export namespace _DirectoryFactory {
export function fromRawPath(path: globalThis.Uint8Array): Directory {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Directory", "fromRawPath", [{"name":"path","required":true,"positional":true}], [path], {}) as Directory;
}
}
export namespace _DirectoryFactory {
export function fromUri(uri: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Directory {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Directory", "fromUri", [{"name":"uri","required":true,"positional":true}], [uri], {}) as Directory;
}
}
export namespace _DirectoryFactory { export function setCurrent(value: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:Directory.current%3D", [value]);
} }
export namespace _DirectoryFactory { export declare const current: Directory; }
export namespace _DirectoryFactory { export declare const systemTemp: Directory; }
_flaxDefineStaticGetters(_DirectoryFactory, "flax.core/sdk_dependencies#read:Directory.", ["current","systemTemp"]);
export const Directory: typeof _DirectoryFactory & _FlaxInstanceType<Directory> & _FlaxDartType<Directory, readonly ["class", "flax.core/sdk_dependencies#type:Directory", readonly [], false]> = _flaxBindInstanceType<Directory, typeof _DirectoryFactory>(_DirectoryFactory, "flax.core/sdk_dependencies#type:Directory", ["dart:core::Object","flax.core/sdk_dependencies#type:FileSystemEntity"]) as typeof _DirectoryFactory & _FlaxInstanceType<Directory> & _FlaxDartType<Directory, readonly ["class", "flax.core/sdk_dependencies#type:Directory", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "uri" | "isAbsolute" | "absolute" | "parent" | "exists" | "existsSync" | "rename" | "renameSync" | "resolveSymbolicLinks" | "resolveSymbolicLinksSync" | "stat" | "statSync" | "delete" | "deleteSync" | "create" | "createSync" | "createTemp" | "createTempSync" | "list" | "listSync" | "toString" | "__flaxBound:dart:io::Directory" | "__flaxBound:dart:io::FileSystemEntity";

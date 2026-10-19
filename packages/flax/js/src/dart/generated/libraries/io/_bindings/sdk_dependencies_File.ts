// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntity';
import '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntity';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream2 from '@flax/dart/io/_bindings/sdk_dependencies_Directory';
import '@flax/dart/io/_bindings/sdk_dependencies_Directory';
import type * as upstream3 from '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream5 from '@flax/dart/io/_bindings/sdk_dependencies_RandomAccessFile';
import '@flax/dart/io/_bindings/sdk_dependencies_RandomAccessFile';
import type * as upstream6 from '@flax/dart/io/_bindings/sdk_dependencies_FileMode';
import '@flax/dart/io/_bindings/sdk_dependencies_FileMode';
import type * as upstream7 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream8 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
const _flaxMemberParameters0 = [{"name":"newPath","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"exclusive"},{"name":"recursive"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"time","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"mode"}] as const;
const _flaxMemberParameters5 = [{"name":"start","positional":true},{"name":"end","positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"encoding"}] as const;
const _flaxMemberParameters7 = [{"name":"bytes","required":true,"positional":true},{"name":"flush"},{"name":"mode"}] as const;
const _flaxMemberParameters8 = [{"name":"contents","required":true,"positional":true},{"name":"encoding"},{"name":"flush"},{"name":"mode"}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface File extends Omit<upstream0.FileSystemEntity, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:io::File": readonly [] }>, Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }> { readonly __File: unique symbol;
readonly [_flaxDartTypeValue]: File;

readonly path: string;
readonly uri: upstream1.Uri;
readonly isAbsolute: boolean;
readonly absolute: File;
readonly parent: upstream2.Directory;
exists(): Promise<boolean>;
existsSync(): boolean;
rename(newPath: string): Promise<File>;
renameSync(newPath: string): File;
resolveSymbolicLinks(): Promise<string>;
resolveSymbolicLinksSync(): string;
stat(): Promise<upstream3.FileStat>;
statSync(): upstream3.FileStat;
delete(options?: {recursive?: boolean | undefined}): Promise<upstream0.FileSystemEntity>;
deleteSync(options?: {recursive?: boolean | undefined}): void;
create(options?: {exclusive?: boolean | undefined; recursive?: boolean | undefined}): Promise<File>;
createSync(options?: {exclusive?: boolean | undefined; recursive?: boolean | undefined}): void;
copy(newPath: string): Promise<File>;
copySync(newPath: string): File;
length(): Promise<number>;
lengthSync(): number;
lastAccessed(): Promise<upstream4.DateTime>;
lastAccessedSync(): upstream4.DateTime;
setLastAccessed(time: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): Promise<unknown | null>;
setLastAccessedSync(time: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): void;
lastModified(): Promise<upstream4.DateTime>;
lastModifiedSync(): upstream4.DateTime;
setLastModified(time: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): Promise<unknown | null>;
setLastModifiedSync(time: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): void;
open(options?: {mode?: Readonly<{ "__flaxBound:dart:io::FileMode": readonly [] }> | undefined}): Promise<upstream5.RandomAccessFile>;
openSync(options?: {mode?: Readonly<{ "__flaxBound:dart:io::FileMode": readonly [] }> | undefined}): upstream5.RandomAccessFile;
openRead(start?: number | null, end?: number | null): upstream7.Stream<DartList<number>>;
readAsBytes(): Promise<globalThis.Uint8Array>;
readAsBytesSync(): globalThis.Uint8Array;
readAsString(options?: {encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined}): Promise<string>;
readAsStringSync(options?: {encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined}): string;
readAsLines(options?: {encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined}): Promise<DartList<string>>;
readAsLinesSync(options?: {encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined}): DartList<string>;
writeAsBytes(bytes: DartListInput<number, number>, options?: {flush?: boolean | undefined; mode?: Readonly<{ "__flaxBound:dart:io::FileMode": readonly [] }> | undefined}): Promise<File>;
writeAsBytesSync(bytes: DartListInput<number, number>, options?: {flush?: boolean | undefined; mode?: Readonly<{ "__flaxBound:dart:io::FileMode": readonly [] }> | undefined}): void;
writeAsString(contents: string, options?: {encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined; flush?: boolean | undefined; mode?: Readonly<{ "__flaxBound:dart:io::FileMode": readonly [] }> | undefined}): Promise<File>;
writeAsStringSync(contents: string, options?: {encoding?: Readonly<{ "__flaxBound:dart:convert::Encoding": readonly [] }> & Readonly<{ "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>] }> | undefined; flush?: boolean | undefined; mode?: Readonly<{ "__flaxBound:dart:io::FileMode": readonly [] }> | undefined}): void;
}
defineObject("flax.core/sdk_dependencies#type:File", ["path","uri","isAbsolute","absolute","parent"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:File", "object", {"rename":_flaxMemberParameters0,"renameSync":_flaxMemberParameters0,"create":_flaxMemberParameters1,"createSync":_flaxMemberParameters1,"copy":_flaxMemberParameters0,"copySync":_flaxMemberParameters0,"length":_flaxMemberParameters2,"lengthSync":_flaxMemberParameters2,"lastAccessed":_flaxMemberParameters2,"lastAccessedSync":_flaxMemberParameters2,"setLastAccessed":_flaxMemberParameters3,"setLastAccessedSync":_flaxMemberParameters3,"lastModified":_flaxMemberParameters2,"lastModifiedSync":_flaxMemberParameters2,"setLastModified":_flaxMemberParameters3,"setLastModifiedSync":_flaxMemberParameters3,"open":_flaxMemberParameters4,"openSync":_flaxMemberParameters4,"openRead":_flaxMemberParameters5,"readAsBytes":_flaxMemberParameters2,"readAsBytesSync":_flaxMemberParameters2,"readAsString":_flaxMemberParameters6,"readAsStringSync":_flaxMemberParameters6,"readAsLines":_flaxMemberParameters6,"readAsLinesSync":_flaxMemberParameters6,"writeAsBytes":_flaxMemberParameters7,"writeAsBytesSync":_flaxMemberParameters7,"writeAsString":_flaxMemberParameters8,"writeAsStringSync":_flaxMemberParameters8}, {}), [], undefined, "flax.core/sdk_dependencies#type:FileSystemEntity");
export function _FileFactory(path: string): File {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:File", "", [{"name":"path","required":true,"positional":true}], [path], {}) as File;
}
export namespace _FileFactory {
export function fromUri(uri: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): File {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:File", "fromUri", [{"name":"uri","required":true,"positional":true}], [uri], {}) as File;
}
}
export namespace _FileFactory {
export function fromRawPath(rawPath: globalThis.Uint8Array): File {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:File", "fromRawPath", [{"name":"rawPath","required":true,"positional":true}], [rawPath], {}) as File;
}
}
export const File: typeof _FileFactory & _FlaxInstanceType<File> & _FlaxDartType<File, readonly ["class", "flax.core/sdk_dependencies#type:File", readonly [], false]> = _flaxBindInstanceType<File, typeof _FileFactory>(_FileFactory, "flax.core/sdk_dependencies#type:File", ["dart:core::Object","flax.core/sdk_dependencies#type:FileSystemEntity"]) as typeof _FileFactory & _FlaxInstanceType<File> & _FlaxDartType<File, readonly ["class", "flax.core/sdk_dependencies#type:File", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "uri" | "isAbsolute" | "absolute" | "parent" | "exists" | "existsSync" | "rename" | "renameSync" | "resolveSymbolicLinks" | "resolveSymbolicLinksSync" | "stat" | "statSync" | "delete" | "deleteSync" | "create" | "createSync" | "copy" | "copySync" | "length" | "lengthSync" | "lastAccessed" | "lastAccessedSync" | "setLastAccessed" | "setLastAccessedSync" | "lastModified" | "lastModifiedSync" | "setLastModified" | "setLastModifiedSync" | "open" | "openSync" | "openRead" | "readAsBytes" | "readAsBytesSync" | "readAsString" | "readAsStringSync" | "readAsLines" | "readAsLinesSync" | "writeAsBytes" | "writeAsBytesSync" | "writeAsString" | "writeAsStringSync" | "__flaxBound:dart:io::File" | "__flaxBound:dart:io::FileSystemEntity";

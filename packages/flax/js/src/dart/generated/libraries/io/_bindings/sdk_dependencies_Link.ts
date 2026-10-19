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
const _flaxMemberParameters0 = [{"name":"newPath","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"target","required":true,"positional":true},{"name":"recursive"}] as const;
const _flaxMemberParameters2 = [{"name":"target","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Link extends Omit<upstream0.FileSystemEntity, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:io::Link": readonly [] }>, Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }> { readonly __Link: unique symbol;
readonly [_flaxDartTypeValue]: Link;

readonly path: string;
readonly uri: upstream1.Uri;
readonly isAbsolute: boolean;
readonly absolute: Link;
readonly parent: upstream2.Directory;
exists(): Promise<boolean>;
existsSync(): boolean;
rename(newPath: string): Promise<Link>;
renameSync(newPath: string): Link;
resolveSymbolicLinks(): Promise<string>;
resolveSymbolicLinksSync(): string;
stat(): Promise<upstream3.FileStat>;
statSync(): upstream3.FileStat;
delete(options?: {recursive?: boolean | undefined}): Promise<upstream0.FileSystemEntity>;
deleteSync(options?: {recursive?: boolean | undefined}): void;
create(target: string, options?: {recursive?: boolean | undefined}): Promise<Link>;
createSync(target: string, options?: {recursive?: boolean | undefined}): void;
updateSync(target: string): void;
update(target: string): Promise<Link>;
target(): Promise<string>;
targetSync(): string;
}
defineObject("flax.core/sdk_dependencies#type:Link", ["path","uri","isAbsolute","absolute","parent"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:Link", "object", {"rename":_flaxMemberParameters0,"renameSync":_flaxMemberParameters0,"create":_flaxMemberParameters1,"createSync":_flaxMemberParameters1,"updateSync":_flaxMemberParameters2,"update":_flaxMemberParameters2,"target":_flaxMemberParameters3,"targetSync":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_dependencies#type:FileSystemEntity");
export function _LinkFactory(path: string): Link {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Link", "", [{"name":"path","required":true,"positional":true}], [path], {}) as Link;
}
export namespace _LinkFactory {
export function fromRawPath(rawPath: globalThis.Uint8Array): Link {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Link", "fromRawPath", [{"name":"rawPath","required":true,"positional":true}], [rawPath], {}) as Link;
}
}
export namespace _LinkFactory {
export function fromUri(uri: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>>): Link {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Link", "fromUri", [{"name":"uri","required":true,"positional":true}], [uri], {}) as Link;
}
}
export const Link: typeof _LinkFactory & _FlaxInstanceType<Link> & _FlaxDartType<Link, readonly ["class", "flax.core/sdk_dependencies#type:Link", readonly [], false]> = _flaxBindInstanceType<Link, typeof _LinkFactory>(_LinkFactory, "flax.core/sdk_dependencies#type:Link", ["dart:core::Object","flax.core/sdk_dependencies#type:FileSystemEntity"]) as typeof _LinkFactory & _FlaxInstanceType<Link> & _FlaxDartType<Link, readonly ["class", "flax.core/sdk_dependencies#type:Link", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "uri" | "isAbsolute" | "absolute" | "parent" | "exists" | "existsSync" | "rename" | "renameSync" | "resolveSymbolicLinks" | "resolveSymbolicLinksSync" | "stat" | "statSync" | "delete" | "deleteSync" | "create" | "createSync" | "updateSync" | "update" | "target" | "targetSync" | "__flaxBound:dart:io::Link" | "__flaxBound:dart:io::FileSystemEntity";

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntity';
import '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntity';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream2 from '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_Stream';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Directory extends Omit<upstream0.FileSystemEntity, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:io::Directory": readonly [];
}>, Readonly<{
    "__flaxBound:dart:io::FileSystemEntity": readonly [];
}> {
    readonly __Directory: unique symbol;
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
    delete(options?: {
        recursive?: boolean | undefined;
    }): Promise<upstream0.FileSystemEntity>;
    deleteSync(options?: {
        recursive?: boolean | undefined;
    }): void;
    create(options?: {
        recursive?: boolean | undefined;
    }): Promise<Directory>;
    createSync(options?: {
        recursive?: boolean | undefined;
    }): void;
    createTemp(prefix?: string | null): Promise<Directory>;
    createTempSync(prefix?: string | null): Directory;
    list(options?: {
        followLinks?: boolean | undefined;
        recursive?: boolean | undefined;
    }): upstream3.Stream<upstream0.FileSystemEntity>;
    listSync(options?: {
        followLinks?: boolean | undefined;
        recursive?: boolean | undefined;
    }): DartList<upstream0.FileSystemEntity>;
    toString(): string;
}
export declare function _DirectoryFactory(path: string): Directory;
export declare namespace _DirectoryFactory {
    function fromRawPath(path: globalThis.Uint8Array): Directory;
}
export declare namespace _DirectoryFactory {
    function fromUri(uri: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Directory;
}
export declare namespace _DirectoryFactory {
    function setCurrent(value: unknown | null): void;
}
export declare namespace _DirectoryFactory {
    const current: Directory;
}
export declare namespace _DirectoryFactory {
    const systemTemp: Directory;
}
export declare const Directory: typeof _DirectoryFactory & _FlaxInstanceType<Directory> & _FlaxDartType<Directory, readonly ["class", "flax.core/sdk_dependencies#type:Directory", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "uri" | "isAbsolute" | "absolute" | "parent" | "exists" | "existsSync" | "rename" | "renameSync" | "resolveSymbolicLinks" | "resolveSymbolicLinksSync" | "stat" | "statSync" | "delete" | "deleteSync" | "create" | "createSync" | "createTemp" | "createTempSync" | "list" | "listSync" | "toString" | "__flaxBound:dart:io::Directory" | "__flaxBound:dart:io::FileSystemEntity";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntity';
import '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntity';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream2 from '@flax/dart/io/_bindings/sdk_dependencies_Directory';
import '@flax/dart/io/_bindings/sdk_dependencies_Directory';
import type * as upstream3 from '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Link extends Omit<upstream0.FileSystemEntity, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:io::Link": readonly [];
}>, Readonly<{
    "__flaxBound:dart:io::FileSystemEntity": readonly [];
}> {
    readonly __Link: unique symbol;
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
    delete(options?: {
        recursive?: boolean | undefined;
    }): Promise<upstream0.FileSystemEntity>;
    deleteSync(options?: {
        recursive?: boolean | undefined;
    }): void;
    create(target: string, options?: {
        recursive?: boolean | undefined;
    }): Promise<Link>;
    createSync(target: string, options?: {
        recursive?: boolean | undefined;
    }): void;
    updateSync(target: string): void;
    update(target: string): Promise<Link>;
    target(): Promise<string>;
    targetSync(): string;
}
export declare function _LinkFactory(path: string): Link;
export declare namespace _LinkFactory {
    function fromRawPath(rawPath: globalThis.Uint8Array): Link;
}
export declare namespace _LinkFactory {
    function fromUri(uri: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Link;
}
export declare const Link: typeof _LinkFactory & _FlaxInstanceType<Link> & _FlaxDartType<Link, readonly ["class", "flax.core/sdk_dependencies#type:Link", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "uri" | "isAbsolute" | "absolute" | "parent" | "exists" | "existsSync" | "rename" | "renameSync" | "resolveSymbolicLinks" | "resolveSymbolicLinksSync" | "stat" | "statSync" | "delete" | "deleteSync" | "create" | "createSync" | "updateSync" | "update" | "target" | "targetSync" | "__flaxBound:dart:io::Link" | "__flaxBound:dart:io::FileSystemEntity";
export {};

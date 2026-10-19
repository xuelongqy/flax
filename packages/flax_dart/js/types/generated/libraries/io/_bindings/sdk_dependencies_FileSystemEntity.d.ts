import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream1 from '@flax/dart/io/_bindings/sdk_dependencies_Directory';
import '@flax/dart/io/_bindings/sdk_dependencies_Directory';
import type * as upstream2 from '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntityType';
import '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntityType';
import type * as upstream3 from '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import '@flax/dart/io/_bindings/sdk_dependencies_FileStat';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FileSystemEntity extends Readonly<{
    "__flaxBound:dart:io::FileSystemEntity": readonly [];
}> {
    readonly __FileSystemEntity: unique symbol;
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
    delete(options?: {
        recursive?: boolean | undefined;
    }): Promise<FileSystemEntity>;
    deleteSync(options?: {
        recursive?: boolean | undefined;
    }): void;
}
export declare namespace _FileSystemEntityFactory {
    const isWatchSupported: boolean;
}
export declare namespace _FileSystemEntityFactory {
    function identical(path1: string, path2: string): Promise<boolean>;
}
export declare namespace _FileSystemEntityFactory {
    function identicalSync(path1: string, path2: string): boolean;
}
export declare namespace _FileSystemEntityFactory {
    function type(path: string, options?: {
        followLinks?: boolean | undefined;
    }): Promise<upstream2.FileSystemEntityType>;
}
export declare namespace _FileSystemEntityFactory {
    function typeSync(path: string, options?: {
        followLinks?: boolean | undefined;
    }): upstream2.FileSystemEntityType;
}
export declare namespace _FileSystemEntityFactory {
    function isLink(path: string): Promise<boolean>;
}
export declare namespace _FileSystemEntityFactory {
    function isFile(path: string): Promise<boolean>;
}
export declare namespace _FileSystemEntityFactory {
    function isDirectory(path: string): Promise<boolean>;
}
export declare namespace _FileSystemEntityFactory {
    function isLinkSync(path: string): boolean;
}
export declare namespace _FileSystemEntityFactory {
    function isFileSync(path: string): boolean;
}
export declare namespace _FileSystemEntityFactory {
    function isDirectorySync(path: string): boolean;
}
export declare namespace _FileSystemEntityFactory {
    function parentOf(path: string): string;
}
export declare const FileSystemEntity: typeof _FileSystemEntityFactory & _FlaxInstanceType<FileSystemEntity> & _FlaxDartType<FileSystemEntity, readonly ["class", "flax.core/sdk_dependencies#type:FileSystemEntity", readonly [], false]>;

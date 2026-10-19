import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput } from '@flax/core/bindings';
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
import '@flax/dart/io/_bindings/sdk_dependencies_FileMode';
import type * as upstream7 from '@flax/dart/async/_bindings/flutter_Stream';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface File extends Omit<upstream0.FileSystemEntity, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:io::File": readonly [];
}>, Readonly<{
    "__flaxBound:dart:io::FileSystemEntity": readonly [];
}> {
    readonly __File: unique symbol;
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
    delete(options?: {
        recursive?: boolean | undefined;
    }): Promise<upstream0.FileSystemEntity>;
    deleteSync(options?: {
        recursive?: boolean | undefined;
    }): void;
    create(options?: {
        exclusive?: boolean | undefined;
        recursive?: boolean | undefined;
    }): Promise<File>;
    createSync(options?: {
        exclusive?: boolean | undefined;
        recursive?: boolean | undefined;
    }): void;
    copy(newPath: string): Promise<File>;
    copySync(newPath: string): File;
    length(): Promise<number>;
    lengthSync(): number;
    lastAccessed(): Promise<upstream4.DateTime>;
    lastAccessedSync(): upstream4.DateTime;
    setLastAccessed(time: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): Promise<unknown | null>;
    setLastAccessedSync(time: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): void;
    lastModified(): Promise<upstream4.DateTime>;
    lastModifiedSync(): upstream4.DateTime;
    setLastModified(time: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): Promise<unknown | null>;
    setLastModifiedSync(time: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>>): void;
    open(options?: {
        mode?: Readonly<{
            "__flaxBound:dart:io::FileMode": readonly [];
        }> | undefined;
    }): Promise<upstream5.RandomAccessFile>;
    openSync(options?: {
        mode?: Readonly<{
            "__flaxBound:dart:io::FileMode": readonly [];
        }> | undefined;
    }): upstream5.RandomAccessFile;
    openRead(start?: number | null, end?: number | null): upstream7.Stream<DartList<number>>;
    readAsBytes(): Promise<globalThis.Uint8Array>;
    readAsBytesSync(): globalThis.Uint8Array;
    readAsString(options?: {
        encoding?: (Readonly<{
            "__flaxBound:dart:convert::Encoding": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
        }>) | undefined;
    }): Promise<string>;
    readAsStringSync(options?: {
        encoding?: (Readonly<{
            "__flaxBound:dart:convert::Encoding": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
        }>) | undefined;
    }): string;
    readAsLines(options?: {
        encoding?: (Readonly<{
            "__flaxBound:dart:convert::Encoding": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
        }>) | undefined;
    }): Promise<DartList<string>>;
    readAsLinesSync(options?: {
        encoding?: (Readonly<{
            "__flaxBound:dart:convert::Encoding": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
        }>) | undefined;
    }): DartList<string>;
    writeAsBytes(bytes: DartListInput<number, number>, options?: {
        flush?: boolean | undefined;
        mode?: Readonly<{
            "__flaxBound:dart:io::FileMode": readonly [];
        }> | undefined;
    }): Promise<File>;
    writeAsBytesSync(bytes: DartListInput<number, number>, options?: {
        flush?: boolean | undefined;
        mode?: Readonly<{
            "__flaxBound:dart:io::FileMode": readonly [];
        }> | undefined;
    }): void;
    writeAsString(contents: string, options?: {
        encoding?: (Readonly<{
            "__flaxBound:dart:convert::Encoding": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
        }>) | undefined;
        flush?: boolean | undefined;
        mode?: Readonly<{
            "__flaxBound:dart:io::FileMode": readonly [];
        }> | undefined;
    }): Promise<File>;
    writeAsStringSync(contents: string, options?: {
        encoding?: (Readonly<{
            "__flaxBound:dart:convert::Encoding": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
        }>) | undefined;
        flush?: boolean | undefined;
        mode?: Readonly<{
            "__flaxBound:dart:io::FileMode": readonly [];
        }> | undefined;
    }): void;
}
export declare function _FileFactory(path: string): File;
export declare namespace _FileFactory {
    function fromUri(uri: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): File;
}
export declare namespace _FileFactory {
    function fromRawPath(rawPath: globalThis.Uint8Array): File;
}
export declare const File: typeof _FileFactory & _FlaxInstanceType<File> & _FlaxDartType<File, readonly ["class", "flax.core/sdk_dependencies#type:File", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "path" | "uri" | "isAbsolute" | "absolute" | "parent" | "exists" | "existsSync" | "rename" | "renameSync" | "resolveSymbolicLinks" | "resolveSymbolicLinksSync" | "stat" | "statSync" | "delete" | "deleteSync" | "create" | "createSync" | "copy" | "copySync" | "length" | "lengthSync" | "lastAccessed" | "lastAccessedSync" | "setLastAccessed" | "setLastAccessedSync" | "lastModified" | "lastModifiedSync" | "setLastModified" | "setLastModifiedSync" | "open" | "openSync" | "openRead" | "readAsBytes" | "readAsBytesSync" | "readAsString" | "readAsStringSync" | "readAsLines" | "readAsLinesSync" | "writeAsBytes" | "writeAsBytesSync" | "writeAsString" | "writeAsStringSync" | "__flaxBound:dart:io::File" | "__flaxBound:dart:io::FileSystemEntity";
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/io/_bindings/sdk_dependencies_FileLock';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RandomAccessFile extends Readonly<{
    "__flaxBound:dart:io::RandomAccessFile": readonly [];
}> {
    readonly __RandomAccessFile: unique symbol;
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
    writeString(string: string, options?: {
        encoding?: (Readonly<{
            "__flaxBound:dart:convert::Encoding": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
        }>) | undefined;
    }): Promise<RandomAccessFile>;
    writeStringSync(string: string, options?: {
        encoding?: (Readonly<{
            "__flaxBound:dart:convert::Encoding": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
        }>) | undefined;
    }): void;
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
    lock(mode?: Readonly<{
        "__flaxBound:dart:io::FileLock": readonly [];
    }>, start?: number, end?: number): Promise<RandomAccessFile>;
    lockSync(mode?: Readonly<{
        "__flaxBound:dart:io::FileLock": readonly [];
    }>, start?: number, end?: number): void;
    unlock(start?: number, end?: number): Promise<RandomAccessFile>;
    unlockSync(start?: number, end?: number): void;
    toString(): string;
}
export declare const RandomAccessFile: object & _FlaxInstanceType<RandomAccessFile> & _FlaxDartType<RandomAccessFile, readonly ["class", "flax.core/sdk_dependencies#type:RandomAccessFile", readonly [], false]>;

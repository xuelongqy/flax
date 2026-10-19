import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntityType';
import '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntityType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FileStat extends Readonly<{
    "__flaxBound:dart:io::FileStat": readonly [];
}> {
    readonly __FileStat: unique symbol;
    readonly [_flaxDartTypeValue]: FileStat;
    readonly changed: upstream0.DateTime;
    readonly modified: upstream0.DateTime;
    readonly accessed: upstream0.DateTime;
    readonly type: upstream1.FileSystemEntityType;
    readonly mode: number;
    readonly size: number;
    toString(): string;
    modeString(): string;
}
export declare namespace _FileStatFactory {
    function statSync(path: string): FileStat;
}
export declare namespace _FileStatFactory {
    function stat(path: string): Promise<FileStat>;
}
export declare const FileStat: typeof _FileStatFactory & _FlaxInstanceType<FileStat> & _FlaxDartType<FileStat, readonly ["class", "flax.core/sdk_dependencies#type:FileStat", readonly [], false]>;

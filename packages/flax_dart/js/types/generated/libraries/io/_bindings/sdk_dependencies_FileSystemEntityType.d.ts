import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FileSystemEntityType extends Readonly<{
    "__flaxBound:dart:io::FileSystemEntityType": readonly [];
}> {
    readonly __FileSystemEntityType: unique symbol;
    readonly [_flaxDartTypeValue]: FileSystemEntityType;
    toString(): string;
}
declare const _FileSystemEntityTypeFactory: {
    readonly file: FileSystemEntityType;
    readonly directory: FileSystemEntityType;
    readonly link: FileSystemEntityType;
    readonly unixDomainSock: FileSystemEntityType;
    readonly pipe: FileSystemEntityType;
    readonly notFound: FileSystemEntityType;
    readonly NOT_FOUND: FileSystemEntityType;
};
export declare const FileSystemEntityType: typeof _FileSystemEntityTypeFactory & _FlaxInstanceType<FileSystemEntityType> & _FlaxDartType<FileSystemEntityType, readonly ["class", "flax.core/sdk_dependencies#type:FileSystemEntityType", readonly [], false]>;
export {};

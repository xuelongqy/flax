import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FileLock extends Readonly<{
    "__flaxBound:dart:io::FileLock": readonly [];
}> {
    readonly __FileLock: unique symbol;
    readonly [_flaxDartTypeValue]: FileLock;
}
declare const _FileLockFactory: {
    readonly shared: FileLock;
    readonly exclusive: FileLock;
    readonly blockingShared: FileLock;
    readonly blockingExclusive: FileLock;
};
export declare const FileLock: typeof _FileLockFactory & _FlaxInstanceType<FileLock> & _FlaxDartType<FileLock, readonly ["class", "flax.core/sdk_dependencies#type:FileLock", readonly [], false]>;
export {};

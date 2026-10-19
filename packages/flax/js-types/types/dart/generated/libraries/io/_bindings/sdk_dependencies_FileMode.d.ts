import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FileMode extends Readonly<{
    "__flaxBound:dart:io::FileMode": readonly [];
}> {
    readonly __FileMode: unique symbol;
    readonly [_flaxDartTypeValue]: FileMode;
}
declare const _FileModeFactory: {
    readonly read: FileMode;
    readonly write: FileMode;
    readonly append: FileMode;
    readonly writeOnly: FileMode;
    readonly writeOnlyAppend: FileMode;
};
export declare const FileMode: typeof _FileModeFactory & _FlaxInstanceType<FileMode> & _FlaxDartType<FileMode, readonly ["class", "flax.core/sdk_dependencies#type:FileMode", readonly [], false]>;
export {};

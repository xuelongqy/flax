import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ErrorToConsoleDumper extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/_error_dumper_io.dart::ErrorToConsoleDumper": readonly [];
}> {
    readonly __ErrorToConsoleDumper: unique symbol;
    readonly [_flaxDartTypeValue]: ErrorToConsoleDumper;
}
export declare function _ErrorToConsoleDumperFactory(): ErrorToConsoleDumper;
export declare namespace _ErrorToConsoleDumperFactory {
    function dump(message: string): void;
}
export declare namespace _ErrorToConsoleDumperFactory {
    function addWebDumpListener(listener: ((message: string) => void)): void;
}
export declare namespace _ErrorToConsoleDumperFactory {
    function clearWebDumpListeners(): void;
}
export declare const ErrorToConsoleDumper: typeof _ErrorToConsoleDumperFactory & _FlaxInstanceType<ErrorToConsoleDumper> & _FlaxDartType<ErrorToConsoleDumper, readonly ["class", "flax.core/sdk_foundation#type:ErrorToConsoleDumper", readonly [], false]>;

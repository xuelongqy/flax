import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SocketOption extends Readonly<{
    "__flaxBound:dart:io::SocketOption": readonly [];
}> {
    readonly __SocketOption: unique symbol;
    readonly [_flaxDartTypeValue]: SocketOption;
}
declare const _SocketOptionFactory: {
    readonly tcpNoDelay: SocketOption;
};
export declare const SocketOption: typeof _SocketOptionFactory & _FlaxInstanceType<SocketOption> & _FlaxDartType<SocketOption, readonly ["class", "flax.core/sdk_dependencies#type:SocketOption", readonly [], false]>;
export {};

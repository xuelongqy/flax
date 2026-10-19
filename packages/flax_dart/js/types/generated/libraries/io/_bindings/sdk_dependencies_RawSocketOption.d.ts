import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawSocketOption extends Readonly<{
    "__flaxBound:dart:io::RawSocketOption": readonly [];
}> {
    readonly __RawSocketOption: unique symbol;
    readonly [_flaxDartTypeValue]: RawSocketOption;
    readonly level: number;
    readonly option: number;
    readonly value: globalThis.Uint8Array;
}
export declare function _RawSocketOptionFactory(level: number, option: number, value: globalThis.Uint8Array): RawSocketOption;
export declare namespace _RawSocketOptionFactory {
    function fromInt(level: number, option: number, value: number): RawSocketOption;
}
export declare namespace _RawSocketOptionFactory {
    function fromBool(level: number, option: number, value: boolean): RawSocketOption;
}
export declare namespace _RawSocketOptionFactory {
    const levelSocket: number;
}
export declare namespace _RawSocketOptionFactory {
    const levelIPv4: number;
}
export declare namespace _RawSocketOptionFactory {
    const IPv4MulticastInterface: number;
}
export declare namespace _RawSocketOptionFactory {
    const levelIPv6: number;
}
export declare namespace _RawSocketOptionFactory {
    const IPv6MulticastInterface: number;
}
export declare namespace _RawSocketOptionFactory {
    const levelTcp: number;
}
export declare namespace _RawSocketOptionFactory {
    const levelUdp: number;
}
export declare const RawSocketOption: typeof _RawSocketOptionFactory & _FlaxInstanceType<RawSocketOption> & _FlaxDartType<RawSocketOption, readonly ["class", "flax.core/sdk_dependencies#type:RawSocketOption", readonly [], false]>;

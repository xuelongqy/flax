import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_InternetAddressType';
import '@flax/dart/io/_bindings/sdk_dependencies_InternetAddressType';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InternetAddress extends Readonly<{
    "__flaxBound:dart:io::InternetAddress": readonly [];
}> {
    readonly __InternetAddress: unique symbol;
    readonly [_flaxDartTypeValue]: InternetAddress;
    readonly type: upstream0.InternetAddressType;
    readonly address: string;
    readonly host: string;
    readonly rawAddress: globalThis.Uint8Array;
    readonly isLoopback: boolean;
    readonly isLinkLocal: boolean;
    readonly isMulticast: boolean;
    reverse(): Promise<InternetAddress>;
}
export declare function _InternetAddressFactory(address: string, options?: {
    type?: Readonly<{
        "__flaxBound:dart:io::InternetAddressType": readonly [];
    }> | null | undefined;
}): InternetAddress;
export declare namespace _InternetAddressFactory {
    function fromRawAddress(rawAddress: globalThis.Uint8Array, options?: {
        type?: Readonly<{
            "__flaxBound:dart:io::InternetAddressType": readonly [];
        }> | null | undefined;
    }): InternetAddress;
}
export declare namespace _InternetAddressFactory {
    const loopbackIPv4: InternetAddress;
}
export declare namespace _InternetAddressFactory {
    const loopbackIPv6: InternetAddress;
}
export declare namespace _InternetAddressFactory {
    const anyIPv4: InternetAddress;
}
export declare namespace _InternetAddressFactory {
    const anyIPv6: InternetAddress;
}
export declare namespace _InternetAddressFactory {
    function lookup(host: string, options?: {
        type?: Readonly<{
            "__flaxBound:dart:io::InternetAddressType": readonly [];
        }> | undefined;
    }): Promise<DartList<InternetAddress>>;
}
export declare namespace _InternetAddressFactory {
    function tryParse(address: string): InternetAddress | null;
}
export declare const InternetAddress: typeof _InternetAddressFactory & _FlaxInstanceType<InternetAddress> & _FlaxDartType<InternetAddress, readonly ["class", "flax.core/sdk_dependencies#type:InternetAddress", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InternetAddressType extends Readonly<{
    "__flaxBound:dart:io::InternetAddressType": readonly [];
}> {
    readonly __InternetAddressType: unique symbol;
    readonly [_flaxDartTypeValue]: InternetAddressType;
    readonly name: string;
    toString(): string;
}
declare const _InternetAddressTypeFactory: {
    readonly IPv4: InternetAddressType;
    readonly IPv6: InternetAddressType;
    readonly unix: InternetAddressType;
    readonly any: InternetAddressType;
};
export declare const InternetAddressType: typeof _InternetAddressTypeFactory & _FlaxInstanceType<InternetAddressType> & _FlaxDartType<InternetAddressType, readonly ["class", "flax.core/sdk_dependencies#type:InternetAddressType", readonly [], false]>;
export {};

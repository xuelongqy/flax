import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface X509Certificate extends Readonly<{
    "__flaxBound:dart:io::X509Certificate": readonly [];
}> {
    readonly __X509Certificate: unique symbol;
    readonly [_flaxDartTypeValue]: X509Certificate;
    readonly der: globalThis.Uint8Array;
    readonly pem: string;
    readonly sha1: globalThis.Uint8Array;
    readonly subject: string;
    readonly issuer: string;
    readonly startValidity: upstream0.DateTime;
    readonly endValidity: upstream0.DateTime;
}
export declare const X509Certificate: object & _FlaxInstanceType<X509Certificate> & _FlaxDartType<X509Certificate, readonly ["class", "flax.core/sdk_dependencies#type:X509Certificate", readonly [], false]>;

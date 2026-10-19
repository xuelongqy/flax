import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SecurityContext extends Readonly<{
    "__flaxBound:dart:io::SecurityContext": readonly [];
}> {
    readonly __SecurityContext: unique symbol;
    readonly [_flaxDartTypeValue]: SecurityContext;
    get allowLegacyUnsafeRenegotiation(): boolean;
    usePrivateKey(file: string, options?: {
        password?: string | null | undefined;
    }): void;
    usePrivateKeyBytes(keyBytes: DartListInput<number, number>, options?: {
        password?: string | null | undefined;
    }): void;
    setTrustedCertificates(file: string, options?: {
        password?: string | null | undefined;
    }): void;
    setTrustedCertificatesBytes(certBytes: DartListInput<number, number>, options?: {
        password?: string | null | undefined;
    }): void;
    useCertificateChain(file: string, options?: {
        password?: string | null | undefined;
    }): void;
    useCertificateChainBytes(chainBytes: DartListInput<number, number>, options?: {
        password?: string | null | undefined;
    }): void;
    setClientAuthorities(file: string, options?: {
        password?: string | null | undefined;
    }): void;
    setClientAuthoritiesBytes(authCertBytes: DartListInput<number, number>, options?: {
        password?: string | null | undefined;
    }): void;
    setAlpnProtocols(protocols: DartListInput<string, string>, isServer: boolean): void;
    set allowLegacyUnsafeRenegotiation(value: boolean);
}
export declare function _SecurityContextFactory(options?: {
    withTrustedRoots?: boolean | undefined;
}): SecurityContext;
export declare namespace _SecurityContextFactory {
    const defaultContext: SecurityContext;
}
export declare namespace _SecurityContextFactory {
    const alpnSupported: boolean;
}
export declare const SecurityContext: typeof _SecurityContextFactory & _FlaxInstanceType<SecurityContext> & _FlaxDartType<SecurityContext, readonly ["class", "flax.core/sdk_dependencies#type:SecurityContext", readonly [], false]>;

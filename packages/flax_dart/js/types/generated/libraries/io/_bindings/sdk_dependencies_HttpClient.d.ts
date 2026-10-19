import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartInput } from '@flax/core/bindings';
import '@flax/dart/io/_bindings/sdk_dependencies_SecurityContext';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream3 from '@flax/dart/io/_bindings/sdk_dependencies_X509Certificate';
import '@flax/dart/io/_bindings/sdk_dependencies_X509Certificate';
import type * as upstream4 from '@flax/dart/io/_bindings/sdk_dependencies_HttpClientRequest';
import '@flax/dart/io/_bindings/sdk_dependencies_HttpClientRequest';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HttpClient extends Readonly<{
    "__flaxBound:dart:_http::HttpClient": readonly [];
}> {
    readonly __HttpClient: unique symbol;
    readonly [_flaxDartTypeValue]: HttpClient;
    get idleTimeout(): upstream1.Duration;
    get connectionTimeout(): upstream1.Duration | null;
    get maxConnectionsPerHost(): number | null;
    get autoUncompress(): boolean;
    get userAgent(): string | null;
    open(method: string, host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
    openUrl(method: string, url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Promise<upstream4.HttpClientRequest>;
    get(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
    getUrl(url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Promise<upstream4.HttpClientRequest>;
    post(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
    postUrl(url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Promise<upstream4.HttpClientRequest>;
    put(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
    putUrl(url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Promise<upstream4.HttpClientRequest>;
    delete(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
    deleteUrl(url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Promise<upstream4.HttpClientRequest>;
    patch(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
    patchUrl(url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Promise<upstream4.HttpClientRequest>;
    head(host: string, port: number, path: string): Promise<upstream4.HttpClientRequest>;
    headUrl(url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Promise<upstream4.HttpClientRequest>;
    close(options?: {
        force?: boolean | undefined;
    }): void;
    set idleTimeout(value: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>);
    set connectionTimeout(value: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | null);
    set maxConnectionsPerHost(value: number | null);
    set autoUncompress(value: boolean);
    set userAgent(value: string | null);
    set authenticate(value: ((url: upstream2.Uri, scheme: string, realm: string | null) => Promise<boolean>) | null);
    set findProxy(value: ((url: upstream2.Uri) => string) | null);
    set authenticateProxy(value: ((host: string, port: number, scheme: string, realm: string | null) => Promise<boolean>) | null);
    set badCertificateCallback(value: ((cert: upstream3.X509Certificate, host: string, port: number) => boolean) | null);
    set keyLog(value: ((line: string) => unknown | null) | null);
}
export declare function _HttpClientFactory(options?: {
    context?: Readonly<{
        "__flaxBound:dart:io::SecurityContext": readonly [];
    }> | null | undefined;
}): HttpClient;
export declare namespace _HttpClientFactory {
    function setEnableTimelineLogging(value: boolean): void;
}
export declare namespace _HttpClientFactory {
    const defaultHttpPort: number;
}
export declare namespace _HttpClientFactory {
    const defaultHttpsPort: number;
}
export declare namespace _HttpClientFactory {
    const enableTimelineLogging: boolean;
}
export declare namespace _HttpClientFactory {
    function findProxyFromEnvironment(url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>, options?: {
        environment?: DartMapInput<string, string, string, string> | null | undefined;
    }): string;
}
export declare const HttpClient: typeof _HttpClientFactory & _FlaxInstanceType<HttpClient> & _FlaxDartType<HttpClient, readonly ["class", "flax.core/sdk_dependencies#type:HttpClient", readonly [], false]>;

import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_UriData';
import '@flax/dart/core/_bindings/flutter_UriData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Uri extends Readonly<{
    "__flaxBound:dart:core::Uri": readonly [];
}> {
    readonly __Uri: unique symbol;
    readonly [_flaxDartTypeValue]: Uri;
    readonly scheme: string;
    readonly authority: string;
    readonly userInfo: string;
    readonly host: string;
    readonly port: number;
    readonly path: string;
    readonly query: string;
    readonly fragment: string;
    readonly pathSegments: DartList<string>;
    readonly queryParameters: DartMap<string, string>;
    readonly queryParametersAll: DartMap<string, DartList<string>>;
    readonly isAbsolute: boolean;
    readonly hasScheme: boolean;
    readonly hasAuthority: boolean;
    readonly hasPort: boolean;
    readonly hasQuery: boolean;
    readonly hasFragment: boolean;
    readonly hasEmptyPath: boolean;
    readonly hasAbsolutePath: boolean;
    readonly origin: string;
    readonly data: upstream0.UriData | null;
    isScheme(scheme: string): boolean;
    toFilePath(options?: {
        windows?: boolean | null | undefined;
    }): string;
    toString(): string;
    replace(options?: {
        fragment?: string | null | undefined;
        host?: string | null | undefined;
        path?: string | null | undefined;
        pathSegments?: DartIterableInput<string, string> | null | undefined;
        port?: number | null | undefined;
        query?: string | null | undefined;
        queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined;
        scheme?: string | null | undefined;
        userInfo?: string | null | undefined;
    }): Uri;
    removeFragment(): Uri;
    resolve(reference: string): Uri;
    resolveUri(reference: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Uri;
    normalizePath(): Uri;
}
export declare function _UriFactory(options?: {
    scheme?: string | null | undefined;
    userInfo?: string | null | undefined;
    host?: string | null | undefined;
    port?: number | null | undefined;
    path?: string | null | undefined;
    pathSegments?: DartIterableInput<string, string> | null | undefined;
    query?: string | null | undefined;
    queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined;
    fragment?: string | null | undefined;
}): Uri;
export declare namespace _UriFactory {
    function http(authority: string, unencodedPath?: string, queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null): Uri;
}
export declare namespace _UriFactory {
    function https(authority: string, unencodedPath?: string, queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null): Uri;
}
export declare namespace _UriFactory {
    function file(path: string, options?: {
        windows?: boolean | null | undefined;
    }): Uri;
}
export declare namespace _UriFactory {
    function directory(path: string, options?: {
        windows?: boolean | null | undefined;
    }): Uri;
}
export declare namespace _UriFactory {
    function dataFromString(content: string, options?: {
        mimeType?: string | null | undefined;
        parameters?: DartMapInput<string, string, string, string> | null | undefined;
        base64?: boolean | undefined;
    }): Uri;
}
export declare namespace _UriFactory {
    function dataFromBytes(bytes: DartListInput<number, number>, options?: {
        mimeType?: string | undefined;
        parameters?: DartMapInput<string, string, string, string> | null | undefined;
        percentEncoded?: boolean | undefined;
    }): Uri;
}
export declare namespace _UriFactory {
    const base: Uri;
}
export declare namespace _UriFactory {
    function parse(uri: string, start?: number, end?: number | null): Uri;
}
export declare namespace _UriFactory {
    function tryParse(uri: string, start?: number, end?: number | null): Uri | null;
}
export declare namespace _UriFactory {
    function encodeComponent(component: string): string;
}
export declare namespace _UriFactory {
    function encodeQueryComponent(component: string): string;
}
export declare namespace _UriFactory {
    function decodeComponent(encodedComponent: string): string;
}
export declare namespace _UriFactory {
    function decodeQueryComponent(encodedComponent: string): string;
}
export declare namespace _UriFactory {
    function encodeFull(uri: string): string;
}
export declare namespace _UriFactory {
    function decodeFull(uri: string): string;
}
export declare namespace _UriFactory {
    function splitQueryString(query: string): DartMap<string, string>;
}
export declare namespace _UriFactory {
    function parseIPv4Address(host: string, start?: number, end?: number | null): DartList<number>;
}
export declare namespace _UriFactory {
    function parseIPv6Address(host: string, start?: number, end?: number | null): DartList<number>;
}
export declare const Uri: typeof _UriFactory & _FlaxInstanceType<Uri> & _FlaxDartType<Uri, readonly ["class", "flax.core/flutter#type:Uri", readonly [], false]>;

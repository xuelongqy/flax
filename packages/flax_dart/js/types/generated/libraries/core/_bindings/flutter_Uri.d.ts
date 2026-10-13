import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
export interface Uri extends Readonly<{
    "__flaxBound:dart:core::Uri": readonly [];
}> {
    readonly __Uri: unique symbol;
    readonly scheme: string;
    readonly host: string;
    readonly port: number;
    readonly userInfo: string;
    readonly authority: string;
    readonly path: string;
    readonly pathSegments: DartList<string>;
    readonly query: string;
    readonly queryParameters: DartMap<string, string>;
    readonly queryParametersAll: DartMap<string, DartList<string>>;
    readonly fragment: string;
    readonly isAbsolute: boolean;
    readonly hasScheme: boolean;
    readonly hasAuthority: boolean;
    readonly hasPort: boolean;
    readonly hasQuery: boolean;
    readonly hasFragment: boolean;
    toString(): string;
    resolve(reference: string): Uri;
    resolveUri(reference: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): Uri;
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
    normalizePath(): Uri;
}
declare function _UriFactory(options?: {
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
declare namespace _UriFactory {
    function http(authority: string, unencodedPath?: string, queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null): Uri;
}
declare namespace _UriFactory {
    function https(authority: string, unencodedPath?: string, queryParameters?: DartMapInput<string, unknown | null, string, unknown | null> | null): Uri;
}
declare namespace _UriFactory {
    function parse(uri: string, start?: number, end?: number | null): Uri;
}
declare namespace _UriFactory {
    function tryParse(uri: string, start?: number, end?: number | null): Uri | null;
}
declare namespace _UriFactory {
    function encodeComponent(component: string): string;
}
declare namespace _UriFactory {
    function decodeComponent(encodedComponent: string): string;
}
declare namespace _UriFactory {
    function encodeQueryComponent(component: string): string;
}
declare namespace _UriFactory {
    function decodeQueryComponent(encodedComponent: string): string;
}
export declare const Uri: typeof _UriFactory & _FlaxInstanceType<Uri>;
export {};

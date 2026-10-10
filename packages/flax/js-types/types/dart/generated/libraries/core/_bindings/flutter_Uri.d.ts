import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface Uri extends Readonly<{
    "__flaxBound:dart:core::Uri": readonly [];
}> {
    readonly __Uri: unique symbol;
    readonly scheme: string;
    readonly host: string;
}
declare namespace _UriFactory {
    function parse(uri: string, start?: number, end?: number | null): Uri;
}
export declare const Uri: typeof _UriFactory & _FlaxInstanceType<Uri>;
export {};

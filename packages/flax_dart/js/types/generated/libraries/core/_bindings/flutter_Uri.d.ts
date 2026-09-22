export interface Uri extends Readonly<{
    "__flaxBound:dart:core::Uri": readonly [];
}> {
    readonly __Uri: unique symbol;
    readonly scheme: string;
    readonly host: string;
}
export declare namespace Uri {
    function parse(uri: string, start?: number, end?: number | null): Uri;
}

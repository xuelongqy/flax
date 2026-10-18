import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UriData extends Readonly<{
    "__flaxBound:dart:core::UriData": readonly [];
}> {
    readonly __UriData: unique symbol;
    readonly [_flaxDartTypeValue]: UriData;
    readonly uri: upstream0.Uri;
    readonly mimeType: string;
    readonly charset: string;
    readonly isBase64: boolean;
    readonly contentText: string;
    readonly parameters: DartMap<string, string>;
    isMimeType(mimeType: string): boolean;
    isCharset(charset: string): boolean;
    contentAsBytes(): globalThis.Uint8Array;
    contentAsString(): string;
    toString(): string;
}
export declare namespace _UriDataFactory {
    function fromString(content: string, options?: {
        mimeType?: string | null | undefined;
        parameters?: DartMapInput<string, string, string, string> | null | undefined;
        base64?: boolean | undefined;
    }): UriData;
}
export declare namespace _UriDataFactory {
    function fromBytes(bytes: DartListInput<number, number>, options?: {
        mimeType?: string | undefined;
        parameters?: DartMapInput<string, string, string, string> | null | undefined;
        percentEncoded?: boolean | undefined;
    }): UriData;
}
export declare namespace _UriDataFactory {
    function fromUri(uri: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): UriData;
}
export declare namespace _UriDataFactory {
    function parse(uri: string): UriData;
}
export declare const UriData: typeof _UriDataFactory & _FlaxInstanceType<UriData> & _FlaxDartType<UriData, readonly ["class", "flax.core/flutter#type:UriData", readonly [], false]>;

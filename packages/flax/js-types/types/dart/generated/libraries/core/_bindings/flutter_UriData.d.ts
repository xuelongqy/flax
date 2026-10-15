import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UriData extends Readonly<{
    "__flaxBound:dart:core::UriData": readonly [];
}> {
    readonly __UriData: unique symbol;
    readonly uri: upstream0.Uri;
    readonly mimeType: string;
    readonly contentText: string;
    readonly isBase64: boolean;
}
declare namespace _UriDataFactory {
    function fromUri(uri: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>): UriData;
}
export declare const UriData: typeof _UriDataFactory & _FlaxInstanceType<UriData> & _FlaxDartType<UriData, readonly ["class", "flax.core/flutter#type:UriData", readonly [], false]>;
export {};

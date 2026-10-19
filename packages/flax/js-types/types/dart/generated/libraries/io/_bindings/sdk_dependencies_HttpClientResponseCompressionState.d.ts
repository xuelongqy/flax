import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HttpClientResponseCompressionState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:_http::HttpClientResponseCompressionState">, Readonly<{
    "__flaxBound:dart:_http::HttpClientResponseCompressionState": readonly [];
}> {
    readonly __HttpClientResponseCompressionState: unique symbol;
    readonly [_flaxDartTypeValue]: HttpClientResponseCompressionState;
    readonly name: string;
    readonly index: number;
}
export declare const HttpClientResponseCompressionState: Readonly<{
    notCompressed: HttpClientResponseCompressionState;
    decompressed: HttpClientResponseCompressionState;
    compressed: HttpClientResponseCompressionState;
    values: readonly HttpClientResponseCompressionState[];
} & _FlaxInstanceType<HttpClientResponseCompressionState> & _FlaxDartType<HttpClientResponseCompressionState, readonly ["class", "flax.core/sdk_dependencies#type:HttpClientResponseCompressionState", readonly [], false]>>;

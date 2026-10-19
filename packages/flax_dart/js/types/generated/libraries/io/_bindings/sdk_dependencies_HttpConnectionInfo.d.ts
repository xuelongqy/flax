import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/io/_bindings/sdk_dependencies_InternetAddress';
import '@flax/dart/io/_bindings/sdk_dependencies_InternetAddress';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HttpConnectionInfo extends Readonly<{
    "__flaxBound:dart:_http::HttpConnectionInfo": readonly [];
}> {
    readonly __HttpConnectionInfo: unique symbol;
    readonly [_flaxDartTypeValue]: HttpConnectionInfo;
    readonly remoteAddress: upstream0.InternetAddress;
    readonly remotePort: number;
    readonly localPort: number;
}
export declare const HttpConnectionInfo: object & _FlaxInstanceType<HttpConnectionInfo> & _FlaxDartType<HttpConnectionInfo, readonly ["class", "flax.core/sdk_dependencies#type:HttpConnectionInfo", readonly [], false]>;

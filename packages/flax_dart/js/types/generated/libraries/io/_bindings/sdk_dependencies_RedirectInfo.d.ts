import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RedirectInfo extends Readonly<{
    "__flaxBound:dart:_http::RedirectInfo": readonly [];
}> {
    readonly __RedirectInfo: unique symbol;
    readonly [_flaxDartTypeValue]: RedirectInfo;
    readonly statusCode: number;
    readonly method: string;
    readonly location: upstream0.Uri;
}
export declare const RedirectInfo: object & _FlaxInstanceType<RedirectInfo> & _FlaxDartType<RedirectInfo, readonly ["class", "flax.core/sdk_dependencies#type:RedirectInfo", readonly [], false]>;

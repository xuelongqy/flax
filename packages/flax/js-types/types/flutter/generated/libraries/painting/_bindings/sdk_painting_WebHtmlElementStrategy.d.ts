import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WebHtmlElementStrategy extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/painting/image_provider.dart::WebHtmlElementStrategy">, Readonly<{
    "__flaxBound:package:flutter/src/painting/image_provider.dart::WebHtmlElementStrategy": readonly [];
}> {
    readonly __WebHtmlElementStrategy: unique symbol;
    readonly [_flaxDartTypeValue]: WebHtmlElementStrategy;
    readonly name: string;
    readonly index: number;
}
export declare const WebHtmlElementStrategy: Readonly<{
    never: WebHtmlElementStrategy;
    fallback: WebHtmlElementStrategy;
    prefer: WebHtmlElementStrategy;
    values: readonly WebHtmlElementStrategy[];
} & _FlaxInstanceType<WebHtmlElementStrategy> & _FlaxDartType<WebHtmlElementStrategy, readonly ["class", "flax.core/sdk_painting#type:WebHtmlElementStrategy", readonly [], false]>>;

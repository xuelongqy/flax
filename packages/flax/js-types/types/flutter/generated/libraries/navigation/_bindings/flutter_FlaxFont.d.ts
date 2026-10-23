import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlaxFont extends Readonly<{
    "__flaxBound:package:flax/bindings.dart::FlaxFont": readonly [];
}> {
    readonly __FlaxFont: unique symbol;
    readonly [_flaxDartTypeValue]: FlaxFont;
    readonly ready: Promise<string>;
    dispose(): void;
}
export declare const FlaxFont: object & _FlaxInstanceType<FlaxFont> & _FlaxDartType<FlaxFont, readonly ["class", "flax.core/flutter#type:FlaxFont", readonly [], false]>;

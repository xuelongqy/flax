import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FloatingLabelAlignment extends Readonly<{
    "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelAlignment": readonly [];
}> {
    readonly __FloatingLabelAlignment: unique symbol;
    readonly [_flaxDartTypeValue]: FloatingLabelAlignment;
    toString(): string;
}
declare const _FloatingLabelAlignmentFactory: {
    readonly start: FloatingLabelAlignment;
    readonly center: FloatingLabelAlignment;
};
export declare const FloatingLabelAlignment: typeof _FloatingLabelAlignmentFactory & _FlaxInstanceType<FloatingLabelAlignment> & _FlaxDartType<FloatingLabelAlignment, readonly ["class", "flax.material/material#type:FloatingLabelAlignment", readonly [], false]>;
export {};

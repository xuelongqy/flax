import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ViewPadding extends Readonly<{
    "__flaxBound:dart:ui::ViewPadding": readonly [];
}> {
    readonly __ViewPadding: unique symbol;
    readonly [_flaxDartTypeValue]: ViewPadding;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    toString(): string;
}
export declare namespace _ViewPaddingFactory {
    function implement(args: [], implementation: {
        toString: (() => string);
        get left(): number;
        get top(): number;
        get right(): number;
        get bottom(): number;
    }): ViewPadding;
}
export declare namespace _ViewPaddingFactory {
    const zero: ViewPadding;
}
export declare const ViewPadding: typeof _ViewPaddingFactory & _FlaxInstanceType<ViewPadding> & _FlaxDartType<ViewPadding, readonly ["class", "flax.core/sdk_dart_ui#type:ViewPadding", readonly [], false]>;

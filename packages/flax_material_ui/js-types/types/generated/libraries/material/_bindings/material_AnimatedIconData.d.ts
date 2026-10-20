import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AnimatedIconData extends Readonly<{
    "__flaxBound:package:material_ui/src/animated_icons.dart::AnimatedIconData": readonly [];
}> {
    readonly __AnimatedIconData: unique symbol;
    readonly [_flaxDartTypeValue]: AnimatedIconData;
    readonly matchTextDirection: boolean;
}
export declare namespace _AnimatedIconDataFactory {
    function implement(args: [], implementation: {
        get matchTextDirection(): boolean;
    }): AnimatedIconData;
}
export declare const AnimatedIconData: typeof _AnimatedIconDataFactory & _FlaxInstanceType<AnimatedIconData> & _FlaxDartType<AnimatedIconData, readonly ["class", "flax.material/material#type:AnimatedIconData", readonly [], false]>;

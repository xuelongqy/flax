import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Radius extends Readonly<{
    "__flaxBound:dart:ui::Radius": readonly [];
}> {
    readonly __Radius: unique symbol;
    readonly x: number;
    readonly y: number;
}
declare namespace _RadiusFactory {
    function circular(radius: number): Radius;
}
declare namespace _RadiusFactory {
    function elliptical(x: number, y: number): Radius;
}
declare namespace _RadiusFactory {
    const zero: Radius;
}
export declare const Radius: typeof _RadiusFactory & _FlaxInstanceType<Radius> & _FlaxDartType<Radius, readonly ["class", "flax.core/flutter#type:Radius", readonly [], false]>;
export {};

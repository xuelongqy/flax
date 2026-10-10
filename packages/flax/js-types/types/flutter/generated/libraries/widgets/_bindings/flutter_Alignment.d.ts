import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
export interface Alignment extends upstream0.AlignmentGeometry, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::Alignment": readonly [];
}> {
    readonly __Alignment: unique symbol;
    readonly x: number;
    readonly y: number;
}
declare function _AlignmentFactory(x: number, y: number): Alignment;
declare namespace _AlignmentFactory {
    const topLeft: Alignment;
}
declare namespace _AlignmentFactory {
    const topCenter: Alignment;
}
declare namespace _AlignmentFactory {
    const topRight: Alignment;
}
declare namespace _AlignmentFactory {
    const centerLeft: Alignment;
}
declare namespace _AlignmentFactory {
    const center: Alignment;
}
declare namespace _AlignmentFactory {
    const centerRight: Alignment;
}
declare namespace _AlignmentFactory {
    const bottomLeft: Alignment;
}
declare namespace _AlignmentFactory {
    const bottomCenter: Alignment;
}
declare namespace _AlignmentFactory {
    const bottomRight: Alignment;
}
export declare const Alignment: typeof _AlignmentFactory & _FlaxInstanceType<Alignment>;
export {};

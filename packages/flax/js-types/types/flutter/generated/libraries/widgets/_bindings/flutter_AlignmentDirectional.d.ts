import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
export interface AlignmentDirectional extends upstream0.AlignmentGeometry, Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
}> {
    readonly __AlignmentDirectional: unique symbol;
    readonly start: number;
    readonly y: number;
}
declare function _AlignmentDirectionalFactory(start: number, y: number): AlignmentDirectional;
declare namespace _AlignmentDirectionalFactory {
    const topStart: AlignmentDirectional;
}
declare namespace _AlignmentDirectionalFactory {
    const topCenter: AlignmentDirectional;
}
declare namespace _AlignmentDirectionalFactory {
    const topEnd: AlignmentDirectional;
}
declare namespace _AlignmentDirectionalFactory {
    const centerStart: AlignmentDirectional;
}
declare namespace _AlignmentDirectionalFactory {
    const center: AlignmentDirectional;
}
declare namespace _AlignmentDirectionalFactory {
    const centerEnd: AlignmentDirectional;
}
declare namespace _AlignmentDirectionalFactory {
    const bottomStart: AlignmentDirectional;
}
declare namespace _AlignmentDirectionalFactory {
    const bottomCenter: AlignmentDirectional;
}
declare namespace _AlignmentDirectionalFactory {
    const bottomEnd: AlignmentDirectional;
}
export declare const AlignmentDirectional: typeof _AlignmentDirectionalFactory & _FlaxInstanceType<AlignmentDirectional>;
export {};

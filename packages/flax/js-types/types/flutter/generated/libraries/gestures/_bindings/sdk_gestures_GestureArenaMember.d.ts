import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GestureArenaMember extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
}> {
    readonly __GestureArenaMember: unique symbol;
    readonly [_flaxDartTypeValue]: GestureArenaMember;
    acceptGesture(pointer: number): void;
    rejectGesture(pointer: number): void;
}
export declare namespace _GestureArenaMemberFactory {
    function implement(args: [], implementation: {
        acceptGesture: ((pointer: number) => void);
        rejectGesture: ((pointer: number) => void);
    }): GestureArenaMember;
}
export declare const GestureArenaMember: typeof _GestureArenaMemberFactory & _FlaxInstanceType<GestureArenaMember> & _FlaxDartType<GestureArenaMember, readonly ["class", "flax.core/sdk_gestures#type:GestureArenaMember", readonly [], false]>;

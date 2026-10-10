import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
export interface BouncingScrollPhysics extends upstream0.ScrollPhysics, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::BouncingScrollPhysics": readonly [];
}> {
    readonly __BouncingScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
}
declare function _BouncingScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): BouncingScrollPhysics;
export declare const BouncingScrollPhysics: typeof _BouncingScrollPhysicsFactory & _FlaxInstanceType<BouncingScrollPhysics>;
export {};

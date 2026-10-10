import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
export interface NeverScrollableScrollPhysics extends upstream0.ScrollPhysics, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::NeverScrollableScrollPhysics": readonly [];
}> {
    readonly __NeverScrollableScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
}
declare function _NeverScrollableScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): NeverScrollableScrollPhysics;
export declare const NeverScrollableScrollPhysics: typeof _NeverScrollableScrollPhysicsFactory & _FlaxInstanceType<NeverScrollableScrollPhysics>;
export {};

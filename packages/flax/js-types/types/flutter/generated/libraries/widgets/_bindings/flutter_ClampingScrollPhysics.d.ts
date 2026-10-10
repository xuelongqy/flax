import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
export interface ClampingScrollPhysics extends upstream0.ScrollPhysics, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ClampingScrollPhysics": readonly [];
}> {
    readonly __ClampingScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
}
declare function _ClampingScrollPhysicsFactory(options?: {
    parent?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
}): ClampingScrollPhysics;
export declare const ClampingScrollPhysics: typeof _ClampingScrollPhysicsFactory & _FlaxInstanceType<ClampingScrollPhysics>;
export {};

import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
export interface BouncingScrollPhysics extends upstream0.ScrollPhysics, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::BouncingScrollPhysics": readonly [];
}> {
    readonly __BouncingScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
}
export declare function BouncingScrollPhysics(options?: {
    parent?: upstream0.ScrollPhysics | null | undefined;
}): BouncingScrollPhysics;

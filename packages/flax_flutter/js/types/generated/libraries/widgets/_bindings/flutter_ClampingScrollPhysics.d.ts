import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
export interface ClampingScrollPhysics extends upstream0.ScrollPhysics, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ClampingScrollPhysics": readonly [];
}> {
    readonly __ClampingScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
}
export declare function ClampingScrollPhysics(options?: {
    parent?: upstream0.ScrollPhysics | null | undefined;
}): ClampingScrollPhysics;

import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
export interface AlwaysScrollableScrollPhysics extends upstream0.ScrollPhysics, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::AlwaysScrollableScrollPhysics": readonly [];
}> {
    readonly __AlwaysScrollableScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
}
export declare function AlwaysScrollableScrollPhysics(options?: {
    parent?: upstream0.ScrollPhysics | null | undefined;
}): AlwaysScrollableScrollPhysics;

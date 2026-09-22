import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
export interface NeverScrollableScrollPhysics extends upstream0.ScrollPhysics, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::NeverScrollableScrollPhysics": readonly [];
}> {
    readonly __NeverScrollableScrollPhysics: unique symbol;
    readonly parent: upstream0.ScrollPhysics | null;
}
export declare function NeverScrollableScrollPhysics(options?: {
    parent?: upstream0.ScrollPhysics | null | undefined;
}): NeverScrollableScrollPhysics;

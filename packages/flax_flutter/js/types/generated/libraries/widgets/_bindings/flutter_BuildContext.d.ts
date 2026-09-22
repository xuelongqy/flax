import { type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
export interface BuildContext extends ComponentContext {
    readonly __BuildContext: unique symbol;
    readonly mounted: boolean;
    readonly size: upstream0.Size | null;
}

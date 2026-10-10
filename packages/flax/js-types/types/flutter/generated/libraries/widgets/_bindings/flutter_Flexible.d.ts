import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_FlexFit';
export interface Flexible extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Flexible";
}
declare function _FlexibleFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    flex?: Bindable<number> | undefined;
    fit?: Bindable<upstream1.FlexFit> | undefined;
    child: Bindable<Widget>;
}): Flexible;
export declare const Flexible: typeof _FlexibleFactory & _FlaxInstanceType<Flexible>;
export {};

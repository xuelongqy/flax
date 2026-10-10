import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Spacer extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Spacer";
}
declare function _SpacerFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    flex?: Bindable<number> | undefined;
}): Spacer;
export declare const Spacer: typeof _SpacerFactory & _FlaxInstanceType<Spacer>;
export {};

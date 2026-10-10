import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface SizedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:SizedBox";
}
declare function _SizedBoxFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): SizedBox;
export declare const SizedBox: typeof _SizedBoxFactory & _FlaxInstanceType<SizedBox>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface AspectRatio extends WidgetDescription {
    readonly type: "flax.core/flutter#type:AspectRatio";
}
declare function _AspectRatioFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    aspectRatio: Bindable<number>;
    child?: Bindable<Widget | null> | undefined;
}): AspectRatio;
export declare const AspectRatio: typeof _AspectRatioFactory & _FlaxInstanceType<AspectRatio>;
export {};

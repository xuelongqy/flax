import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IgnorePointer extends WidgetDescription {
    readonly type: "flax.core/flutter#type:IgnorePointer";
}
declare function _IgnorePointerFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    ignoring?: Bindable<boolean> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): IgnorePointer;
export declare const IgnorePointer: typeof _IgnorePointerFactory & _FlaxInstanceType<IgnorePointer> & _FlaxDartType<IgnorePointer, readonly ["class", "flax.core/flutter#type:IgnorePointer", readonly [], false]>;
export {};

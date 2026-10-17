import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Expanded extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Expanded";
}
export declare function _ExpandedFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    flex?: Bindable<number> | undefined;
    child: Bindable<Widget>;
}): Expanded;
export declare const Expanded: typeof _ExpandedFactory & _FlaxInstanceType<Expanded> & _FlaxDartType<Expanded, readonly ["class", "flax.core/flutter#type:Expanded", readonly [], false]>;

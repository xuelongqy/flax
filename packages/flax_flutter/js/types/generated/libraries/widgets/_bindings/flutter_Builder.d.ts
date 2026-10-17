import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Builder extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Builder";
}
export declare function _BuilderFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    builder: Bindable<((context: upstream1.BuildContext) => Widget)>;
}): Builder;
export declare const Builder: typeof _BuilderFactory & _FlaxInstanceType<Builder> & _FlaxDartType<Builder, readonly ["class", "flax.core/flutter#type:Builder", readonly [], false]>;

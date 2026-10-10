import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
export interface LayoutBuilder extends WidgetDescription {
    readonly type: "flax.core/flutter#type:LayoutBuilder";
}
declare function _LayoutBuilderFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    builder: Bindable<((context: upstream1.BuildContext, constraints: upstream2.BoxConstraints) => Widget)>;
}): LayoutBuilder;
export declare const LayoutBuilder: typeof _LayoutBuilderFactory & _FlaxInstanceType<LayoutBuilder>;
export {};

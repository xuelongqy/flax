import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_Decoration';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_DecorationPosition';
export interface DecoratedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:DecoratedBox";
}
export declare function DecoratedBox(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    decoration: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }>>;
    position?: Bindable<upstream2.DecorationPosition> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): DecoratedBox;

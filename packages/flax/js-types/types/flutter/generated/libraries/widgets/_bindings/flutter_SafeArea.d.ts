import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
export interface SafeArea extends WidgetDescription {
    readonly type: "flax.core/flutter#type:SafeArea";
}
export declare function SafeArea(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    left?: Bindable<boolean> | undefined;
    top?: Bindable<boolean> | undefined;
    right?: Bindable<boolean> | undefined;
    bottom?: Bindable<boolean> | undefined;
    minimum?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }>> | undefined;
    maintainBottomViewPadding?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): SafeArea;

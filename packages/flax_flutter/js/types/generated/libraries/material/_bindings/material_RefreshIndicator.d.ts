import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface RefreshIndicator extends WidgetDescription {
    readonly type: "flax.material/material#type:RefreshIndicator";
}
export declare function RefreshIndicator(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onRefresh: Bindable<(() => Promise<void>)>;
    child: Bindable<Widget>;
}): RefreshIndicator;

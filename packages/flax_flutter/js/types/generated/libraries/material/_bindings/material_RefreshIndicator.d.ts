import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface RefreshIndicator extends WidgetDescription {
    readonly type: "flax.material/material#type:RefreshIndicator";
}
export declare function RefreshIndicator(options: {
    key?: upstream0.Key | null | undefined;
    onRefresh: Bindable<(() => Promise<void>)>;
    child: Bindable<Widget>;
}): RefreshIndicator;

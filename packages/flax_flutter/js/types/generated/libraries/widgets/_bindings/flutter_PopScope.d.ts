import { type NavigationData, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface PopScope<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:PopScope";
}
export declare function PopScope<T extends unknown | null = unknown | null>(options: {
    key?: upstream0.Key | null | undefined;
    child: Bindable<Widget>;
    canPop?: Bindable<boolean> | undefined;
    onPopInvokedWithResult?: Bindable<((didPop: boolean, result: NavigationData | null) => void) | null> | undefined;
}): PopScope<T>;

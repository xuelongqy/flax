import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface PopScope<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:PopScope";
}
declare function _PopScopeFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    canPop?: Bindable<boolean> | undefined;
    onPopInvokedWithResult?: Bindable<((didPop: boolean, result: NavigationData | null) => void) | null> | undefined;
}): PopScope<T>;
export declare const PopScope: typeof _PopScopeFactory & _FlaxInstanceType<PopScope<any>>;
export {};

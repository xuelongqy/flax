import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
export interface CircularProgressIndicator extends WidgetDescription {
    readonly type: "flax.material/material#type:CircularProgressIndicator";
}
declare function _CircularProgressIndicatorFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value?: Bindable<number | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    strokeWidth?: Bindable<number | null> | undefined;
    semanticsLabel?: Bindable<string | null> | undefined;
}): CircularProgressIndicator;
export declare const CircularProgressIndicator: typeof _CircularProgressIndicatorFactory & _FlaxInstanceType<CircularProgressIndicator>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
export interface Positioned extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Positioned";
}
declare function _PositionedFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    left?: Bindable<number | null> | undefined;
    top?: Bindable<number | null> | undefined;
    right?: Bindable<number | null> | undefined;
    bottom?: Bindable<number | null> | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
    child: Bindable<Widget>;
}): Positioned;
export declare const Positioned: typeof _PositionedFactory & _FlaxInstanceType<Positioned>;
export {};

import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Positioned extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Positioned";
}
export declare function _PositionedFactory(options: {
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
export declare namespace _PositionedFactory {
    function fill(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        left?: Bindable<number | null> | undefined;
        top?: Bindable<number | null> | undefined;
        right?: Bindable<number | null> | undefined;
        bottom?: Bindable<number | null> | undefined;
        child: Bindable<Widget>;
    }): Positioned;
}
export declare namespace _PositionedFactory {
    function directional(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        textDirection: Bindable<upstream1.TextDirection>;
        start?: Bindable<number | null> | undefined;
        top?: Bindable<number | null> | undefined;
        end?: Bindable<number | null> | undefined;
        bottom?: Bindable<number | null> | undefined;
        width?: Bindable<number | null> | undefined;
        height?: Bindable<number | null> | undefined;
        child: Bindable<Widget>;
    }): Positioned;
}
export declare const Positioned: typeof _PositionedFactory & _FlaxInstanceType<Positioned> & _FlaxDartType<Positioned, readonly ["class", "flax.core/flutter#type:Positioned", readonly [], false]>;

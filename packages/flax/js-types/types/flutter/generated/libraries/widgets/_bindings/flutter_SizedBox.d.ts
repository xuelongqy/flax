import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Size';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SizedBox extends WidgetDescription {
    readonly type: "flax.core/flutter#type:SizedBox";
}
export declare function _SizedBoxFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    width?: Bindable<number | null> | undefined;
    height?: Bindable<number | null> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): SizedBox;
export declare namespace _SizedBoxFactory {
    function expand(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
    }): SizedBox;
}
export declare namespace _SizedBoxFactory {
    function shrink(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
    }): SizedBox;
}
export declare namespace _SizedBoxFactory {
    function fromSize(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        size?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> | null> | undefined;
    }): SizedBox;
}
export declare namespace _SizedBoxFactory {
    function square(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        dimension?: Bindable<number | null> | undefined;
    }): SizedBox;
}
export declare const SizedBox: typeof _SizedBoxFactory & _FlaxInstanceType<SizedBox> & _FlaxDartType<SizedBox, readonly ["class", "flax.core/flutter#type:SizedBox", readonly [], false]>;

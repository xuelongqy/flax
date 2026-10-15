import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Widget } from '@flax/core/bindings';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AppBar extends _FlaxDartWidget, Omit<upstream0.PreferredSizeWidget, 'kind'> {
    readonly __AppBar: unique symbol;
}
declare function _AppBarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    leading?: Widget | null | undefined;
    automaticallyImplyLeading?: boolean | undefined;
    title?: Widget | null | undefined;
    actions?: DartListInput<Widget, Widget> | null | undefined;
    bottom?: upstream0.PreferredSizeWidget | null | undefined;
    elevation?: number | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    foregroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primary?: boolean | undefined;
    centerTitle?: boolean | null | undefined;
    toolbarHeight?: number | null | undefined;
}): AppBar;
export declare const AppBar: typeof _AppBarFactory & _FlaxInstanceType<AppBar> & _FlaxDartType<AppBar, readonly ["class", "flax.material/material#type:AppBar", readonly [], false]>;
export {};

import { type DartListInput, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
export type AppBar = WidgetDescription & {
    readonly type: "flax.material/material#type:AppBar";
} & upstream0.PreferredSizeWidget;
export declare function AppBar(options?: {
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

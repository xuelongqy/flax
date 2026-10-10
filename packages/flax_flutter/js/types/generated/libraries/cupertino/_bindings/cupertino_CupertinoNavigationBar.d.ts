import { type FlaxInstanceType as _FlaxInstanceType, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_Border';
import '@flax/flutter/services/_bindings/flutter_Color';
export type CupertinoNavigationBar = WidgetDescription & {
    readonly type: "flax.cupertino/cupertino#type:CupertinoNavigationBar";
} & upstream0.ObstructingPreferredSizeWidget;
declare function _CupertinoNavigationBarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    leading?: Widget | null | undefined;
    automaticallyImplyLeading?: boolean | undefined;
    middle?: Widget | null | undefined;
    trailing?: Widget | null | undefined;
    border?: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    transitionBetweenRoutes?: boolean | undefined;
}): CupertinoNavigationBar;
export declare const CupertinoNavigationBar: typeof _CupertinoNavigationBarFactory & _FlaxInstanceType<CupertinoNavigationBar>;
export {};

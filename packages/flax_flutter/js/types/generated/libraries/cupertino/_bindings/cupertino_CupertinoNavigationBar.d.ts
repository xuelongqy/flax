import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_Border';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoNavigationBar extends _FlaxDartWidget, Omit<upstream0.ObstructingPreferredSizeWidget, 'kind'> {
    readonly __CupertinoNavigationBar: unique symbol;
    readonly preferredSize: upstream4.Size;
    shouldFullyObstruct(context: upstream5.BuildContext): boolean;
}
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
export declare const CupertinoNavigationBar: typeof _CupertinoNavigationBarFactory & _FlaxInstanceType<CupertinoNavigationBar> & _FlaxDartType<CupertinoNavigationBar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoNavigationBar", readonly [], false]>;
export {};

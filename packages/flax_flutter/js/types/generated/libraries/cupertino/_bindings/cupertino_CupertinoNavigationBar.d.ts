import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Border';
import '@flax/flutter/widgets/_bindings/flutter_Border';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsDirectional';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsDirectional';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoNavigationBar extends _FlaxDartWidget, upstream0.StatefulWidget, Omit<upstream1.ObstructingPreferredSizeWidget, 'kind'> {
    readonly __CupertinoNavigationBar: unique symbol;
    readonly preferredSize: upstream7.Size;
    readonly largeTitle: Widget | null;
    readonly leading: Widget | null;
    readonly automaticallyImplyLeading: boolean;
    readonly automaticallyImplyMiddle: boolean;
    readonly previousPageTitle: string | null;
    readonly middle: Widget | null;
    readonly trailing: Widget | null;
    readonly backgroundColor: upstream4.Color | null;
    readonly automaticBackgroundVisibility: boolean;
    readonly padding: upstream5.EdgeInsetsDirectional | null;
    readonly border: upstream3.Border | null;
    readonly transitionBetweenRoutes: boolean;
    readonly enableBackgroundFilterBlur: boolean;
    readonly heroTag: {};
    readonly bottom: upstream6.PreferredSizeWidget | null;
    readonly key: upstream2.Key | null;
    shouldFullyObstruct(context: upstream8.BuildContext): boolean;
    createState(): upstream9.State<CupertinoNavigationBar>;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
}
export declare function _CupertinoNavigationBarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    leading?: Widget | null | undefined;
    automaticallyImplyLeading?: boolean | undefined;
    automaticallyImplyMiddle?: boolean | undefined;
    previousPageTitle?: string | null | undefined;
    middle?: Widget | null | undefined;
    trailing?: Widget | null | undefined;
    border?: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    automaticBackgroundVisibility?: boolean | undefined;
    enableBackgroundFilterBlur?: boolean | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
    }> | null | undefined;
    transitionBetweenRoutes?: boolean | undefined;
    heroTag?: {} | undefined;
    bottom?: upstream6.PreferredSizeWidget | null | undefined;
}): CupertinoNavigationBar;
export declare namespace _CupertinoNavigationBarFactory {
    function large(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        largeTitle?: Widget | null | undefined;
        leading?: Widget | null | undefined;
        automaticallyImplyLeading?: boolean | undefined;
        automaticallyImplyTitle?: boolean | undefined;
        previousPageTitle?: string | null | undefined;
        trailing?: Widget | null | undefined;
        border?: Readonly<{
            "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        automaticBackgroundVisibility?: boolean | undefined;
        enableBackgroundFilterBlur?: boolean | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
        }> | null | undefined;
        transitionBetweenRoutes?: boolean | undefined;
        heroTag?: {} | undefined;
        bottom?: upstream6.PreferredSizeWidget | null | undefined;
    }): CupertinoNavigationBar;
}
export declare const CupertinoNavigationBar: typeof _CupertinoNavigationBarFactory & _FlaxInstanceType<CupertinoNavigationBar> & _FlaxDartType<CupertinoNavigationBar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoNavigationBar", readonly [], false]>;

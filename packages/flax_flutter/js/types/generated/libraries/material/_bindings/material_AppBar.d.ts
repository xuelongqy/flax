import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AppBar extends _FlaxDartWidget, upstream0.StatefulWidget, Omit<upstream1.PreferredSizeWidget, 'kind'> {
    readonly __AppBar: unique symbol;
    readonly preferredSize: upstream8.Size;
    readonly leading: Widget | null;
    readonly automaticallyImplyLeading: boolean;
    readonly title: Widget | null;
    readonly actions: DartList<Widget> | null;
    readonly automaticallyImplyActions: boolean;
    readonly flexibleSpace: Widget | null;
    readonly bottom: upstream1.PreferredSizeWidget | null;
    readonly elevation: number | null;
    readonly scrolledUnderElevation: number | null;
    readonly shadowColor: upstream3.Color | null;
    readonly surfaceTintColor: upstream3.Color | null;
    readonly shape: upstream4.ShapeBorder | null;
    readonly backgroundColor: upstream3.Color | null;
    readonly foregroundColor: upstream3.Color | null;
    readonly primary: boolean;
    readonly centerTitle: boolean | null;
    readonly excludeHeaderSemantics: boolean;
    readonly titleSpacing: number | null;
    readonly toolbarOpacity: number;
    readonly bottomOpacity: number;
    readonly toolbarHeight: number | null;
    readonly leadingWidth: number | null;
    readonly toolbarTextStyle: upstream5.TextStyle | null;
    readonly titleTextStyle: upstream5.TextStyle | null;
    readonly forceMaterialTransparency: boolean;
    readonly useDefaultSemanticsOrder: boolean;
    readonly clipBehavior: upstream6.Clip | null;
    readonly actionsPadding: upstream7.EdgeInsetsGeometry | null;
    readonly animateColor: boolean;
    readonly key: upstream2.Key | null;
    createState(): upstream10.State<AppBar>;
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
export declare function _AppBarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    leading?: Widget | null | undefined;
    automaticallyImplyLeading?: boolean | undefined;
    title?: Widget | null | undefined;
    actions?: DartListInput<Widget, Widget> | null | undefined;
    automaticallyImplyActions?: boolean | undefined;
    flexibleSpace?: Widget | null | undefined;
    bottom?: upstream1.PreferredSizeWidget | null | undefined;
    elevation?: number | null | undefined;
    scrolledUnderElevation?: number | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    foregroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primary?: boolean | undefined;
    centerTitle?: boolean | null | undefined;
    excludeHeaderSemantics?: boolean | undefined;
    titleSpacing?: number | null | undefined;
    toolbarOpacity?: number | undefined;
    bottomOpacity?: number | undefined;
    toolbarHeight?: number | null | undefined;
    leadingWidth?: number | null | undefined;
    toolbarTextStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    titleTextStyle?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null | undefined;
    forceMaterialTransparency?: boolean | undefined;
    useDefaultSemanticsOrder?: boolean | undefined;
    clipBehavior?: upstream6.Clip | null | undefined;
    actionsPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    animateColor?: boolean | undefined;
}): AppBar;
export declare namespace _AppBarFactory {
    function preferredHeightFor(context: upstream9.BuildContext, preferredSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): number;
}
export declare const AppBar: typeof _AppBarFactory & _FlaxInstanceType<AppBar> & _FlaxDartType<AppBar, readonly ["class", "flax.material/material#type:AppBar", readonly [], false]>;

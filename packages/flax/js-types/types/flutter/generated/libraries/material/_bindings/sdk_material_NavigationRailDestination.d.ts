import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface NavigationRailDestination extends Readonly<{
    "__flaxBound:package:flutter/src/material/navigation_rail.dart::NavigationRailDestination": readonly [];
}> {
    readonly __NavigationRailDestination: unique symbol;
    readonly [_flaxDartTypeValue]: NavigationRailDestination;
}
export interface NavigationRailDestination {
    readonly [_flaxDartTypeValue]: NavigationRailDestination;
    get icon(): Widget;
    get selectedIcon(): Widget;
    get indicatorColor(): upstream0.Color | null;
    get indicatorShape(): upstream1.ShapeBorder | null;
    get label(): Widget;
    get padding(): upstream2.EdgeInsetsGeometry | null;
    get disabled(): boolean;
}
export declare abstract class NavigationRailDestination extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NavigationRailDestination>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NavigationRailDestination;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:NavigationRailDestination", readonly [], false];
    constructor(options: {
        icon: Widget;
        selectedIcon?: Widget | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        label: Widget;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        disabled?: boolean | undefined;
    });
}
export declare namespace NavigationRailDestination {
    function implement(args: [options: {
        icon: Widget;
        selectedIcon?: Widget | null | undefined;
        indicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        indicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        label: Widget;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        disabled?: boolean | undefined;
    }], implementation: {}): NavigationRailDestination;
}

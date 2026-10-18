import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScaffoldPrelayoutGeometry extends Readonly<{
    "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
}> {
    readonly __ScaffoldPrelayoutGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: ScaffoldPrelayoutGeometry;
}
export interface ScaffoldPrelayoutGeometry {
    readonly [_flaxDartTypeValue]: ScaffoldPrelayoutGeometry;
    get floatingActionButtonSize(): upstream0.Size;
    get bottomSheetSize(): upstream0.Size;
    get contentBottom(): number;
    get contentTop(): number;
    get minInsets(): upstream1.EdgeInsets;
    get minViewPadding(): upstream1.EdgeInsets;
    get scaffoldSize(): upstream0.Size;
    get snackBarSize(): upstream0.Size;
    get materialBannerSize(): upstream0.Size;
    get textDirection(): upstream2.TextDirection;
}
export declare abstract class ScaffoldPrelayoutGeometry extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaffoldPrelayoutGeometry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScaffoldPrelayoutGeometry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ScaffoldPrelayoutGeometry", readonly [], false];
    constructor(options: {
        bottomSheetSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        contentBottom: number;
        contentTop: number;
        floatingActionButtonSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        minInsets: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>;
        minViewPadding: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>;
        scaffoldSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        snackBarSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        materialBannerSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        textDirection: upstream2.TextDirection;
    });
}
export declare namespace ScaffoldPrelayoutGeometry {
    function implement(args: [options: {
        bottomSheetSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        contentBottom: number;
        contentTop: number;
        floatingActionButtonSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        minInsets: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>;
        minViewPadding: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>;
        scaffoldSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        snackBarSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        materialBannerSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        textDirection: upstream2.TextDirection;
    }], implementation: {}): ScaffoldPrelayoutGeometry;
}

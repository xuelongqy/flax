import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScaffoldPrelayoutGeometry extends Readonly<{
    "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [];
}> {
    readonly __ScaffoldPrelayoutGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: ScaffoldPrelayoutGeometry;
    readonly floatingActionButtonSize: upstream0.Size;
    readonly bottomSheetSize: upstream0.Size;
    readonly contentBottom: number;
    readonly contentTop: number;
    readonly minInsets: upstream1.EdgeInsets;
    readonly minViewPadding: upstream1.EdgeInsets;
    readonly scaffoldSize: upstream0.Size;
    readonly snackBarSize: upstream0.Size;
    readonly materialBannerSize: upstream0.Size;
    readonly textDirection: upstream2.TextDirection;
}
export declare function _ScaffoldPrelayoutGeometryFactory(options: {
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
}): ScaffoldPrelayoutGeometry;
export interface _ScaffoldPrelayoutGeometryNative extends ScaffoldPrelayoutGeometry {
    readonly [_flaxDartTypeValue]: _ScaffoldPrelayoutGeometryNative;
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
export declare abstract class _ScaffoldPrelayoutGeometryNative extends _FlaxProxyBase {
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
export declare namespace _ScaffoldPrelayoutGeometryFactory {
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
declare const _ScaffoldPrelayoutGeometryBinding: typeof _ScaffoldPrelayoutGeometryFactory & (new (options: {
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
}) => _ScaffoldPrelayoutGeometryNative);
export declare const ScaffoldPrelayoutGeometry: typeof _ScaffoldPrelayoutGeometryBinding & _FlaxInstanceType<ScaffoldPrelayoutGeometry> & _FlaxDartType<ScaffoldPrelayoutGeometry, readonly ["class", "flax.core/sdk_material#type:ScaffoldPrelayoutGeometry", readonly [], false]>;
export {};

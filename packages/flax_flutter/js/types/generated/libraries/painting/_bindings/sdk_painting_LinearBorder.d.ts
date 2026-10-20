import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_LinearBorderEdge';
import '@flax/flutter/painting/_bindings/sdk_painting_LinearBorderEdge';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LinearBorder extends Omit<upstream0.OutlinedBorder, _flaxOwnMembers0>, Omit<upstream1.ShapeBorder, _flaxOwnMembers0 | keyof upstream0.OutlinedBorder>, Readonly<{
    "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> {
    readonly __LinearBorder: unique symbol;
    readonly [_flaxDartTypeValue]: LinearBorder;
    readonly dimensions: upstream4.EdgeInsetsGeometry;
    readonly side: upstream2.BorderSide;
    readonly preferPaintInterior: boolean;
    readonly start: upstream3.LinearBorderEdge | null;
    readonly end: upstream3.LinearBorderEdge | null;
    readonly top: upstream3.LinearBorderEdge | null;
    readonly bottom: upstream3.LinearBorderEdge | null;
    copyWith(options?: {
        bottom?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        start?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        top?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
    }): LinearBorder;
    scale(t: number): LinearBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream1.ShapeBorder | null;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
}
export declare function _LinearBorderFactory(options?: {
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    start?: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null | undefined;
    end?: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null | undefined;
    top?: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null | undefined;
    bottom?: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null | undefined;
}): LinearBorder;
export declare namespace _LinearBorderFactory {
    function start(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        alignment?: number | undefined;
        size?: number | undefined;
    }): LinearBorder;
}
export declare namespace _LinearBorderFactory {
    function end(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        alignment?: number | undefined;
        size?: number | undefined;
    }): LinearBorder;
}
export declare namespace _LinearBorderFactory {
    function top(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        alignment?: number | undefined;
        size?: number | undefined;
    }): LinearBorder;
}
export declare namespace _LinearBorderFactory {
    function bottom(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        alignment?: number | undefined;
        size?: number | undefined;
    }): LinearBorder;
}
export interface _LinearBorderNative extends LinearBorder {
    readonly [_flaxDartTypeValue]: _LinearBorderNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | undefined;
            start?: Readonly<{
                "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
            }> | null | undefined;
            end?: Readonly<{
                "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
            }> | null | undefined;
            top?: Readonly<{
                "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
            }> | null | undefined;
            bottom?: Readonly<{
                "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
            }> | null | undefined;
        }) => void;
        "start": (options?: {
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | undefined;
            alignment?: number | undefined;
            size?: number | undefined;
        }) => void;
        "end": (options?: {
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | undefined;
            alignment?: number | undefined;
            size?: number | undefined;
        }) => void;
        "top": (options?: {
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | undefined;
            alignment?: number | undefined;
            size?: number | undefined;
        }) => void;
        "bottom": (options?: {
            side?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | undefined;
            alignment?: number | undefined;
            size?: number | undefined;
        }) => void;
    };
    copyWith(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        start?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        top?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        bottom?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
    }): LinearBorder;
    scale(t: number): LinearBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream1.ShapeBorder | null;
    getOuterPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    getInnerPath(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): upstream5.Path;
    paintInterior(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        textDirection?: upstream7.TextDirection | null | undefined;
    }): void;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
    get start(): upstream3.LinearBorderEdge | null;
    get end(): upstream3.LinearBorderEdge | null;
    get top(): upstream3.LinearBorderEdge | null;
    get bottom(): upstream3.LinearBorderEdge | null;
    get dimensions(): upstream4.EdgeInsetsGeometry;
    get side(): upstream2.BorderSide;
    get preferPaintInterior(): boolean;
}
export declare abstract class _LinearBorderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearBorder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LinearBorder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearBorder", readonly [], false];
    constructor(options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        start?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        top?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        bottom?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_LinearBorderNative>);
}
export declare namespace _LinearBorderFactory {
    function implement(args: [options?: {
        side?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | undefined;
        start?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        top?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
        bottom?: Readonly<{
            "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
        }> | null | undefined;
    }], implementation: {}): LinearBorder;
}
declare const _LinearBorderBinding: typeof _LinearBorderFactory & (new (options?: {
    side?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | undefined;
    start?: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null | undefined;
    end?: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null | undefined;
    top?: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null | undefined;
    bottom?: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null | undefined;
}) => _LinearBorderNative) & (new (call: _FlaxProxySuper<_LinearBorderNative>) => _LinearBorderNative);
export declare namespace _LinearBorderFactory {
    const none: LinearBorder;
}
export declare const LinearBorder: typeof _LinearBorderBinding & _FlaxInstanceType<LinearBorder> & _FlaxDartType<LinearBorder, readonly ["class", "flax.core/sdk_painting#type:LinearBorder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "start" | "end" | "top" | "bottom" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "getOuterPath" | "getInnerPath" | "paintInterior" | "paint" | "toString" | "operatorAdd" | "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder" | "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder";
export {};

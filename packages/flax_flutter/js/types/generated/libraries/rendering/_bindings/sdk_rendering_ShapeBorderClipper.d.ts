import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomClipper';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomClipper';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ShapeBorderClipper extends Omit<upstream0.CustomClipper<upstream1.Path>, _flaxOwnMembers0>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.CustomClipper<upstream1.Path>>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/proxy_box.dart::ShapeBorderClipper": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream1.Path];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ShapeBorderClipper: unique symbol;
    readonly [_flaxDartTypeValue]: ShapeBorderClipper;
}
export interface ShapeBorderClipper {
    readonly [_flaxDartTypeValue]: ShapeBorderClipper;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    getClip(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Path;
    getApproximateClipRect(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream6.Rect;
    shouldReclip(oldClipper: Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream1.Path];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
    toString(): string;
    get shape(): upstream3.ShapeBorder;
    get textDirection(): upstream4.TextDirection | null;
}
export declare abstract class ShapeBorderClipper extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapeBorderClipper>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ShapeBorderClipper;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ShapeBorderClipper", readonly [], false];
    constructor(options: {
        shape: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>;
        textDirection?: upstream4.TextDirection | null | undefined;
    });
}
export declare namespace ShapeBorderClipper {
    function implement(args: [options: {
        shape: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>;
        textDirection?: upstream4.TextDirection | null | undefined;
    }], implementation: {}): ShapeBorderClipper;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "shape" | "textDirection" | "addListener" | "removeListener" | "getClip" | "getApproximateClipRect" | "shouldReclip" | "toString" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::ShapeBorderClipper" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};

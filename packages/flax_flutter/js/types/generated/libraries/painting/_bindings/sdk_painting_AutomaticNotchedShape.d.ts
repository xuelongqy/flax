import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AutomaticNotchedShape extends Omit<upstream0.NotchedShape, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/notched_shapes.dart::AutomaticNotchedShape": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
}> {
    readonly __AutomaticNotchedShape: unique symbol;
    readonly [_flaxDartTypeValue]: AutomaticNotchedShape;
    readonly host: upstream1.ShapeBorder;
    readonly guest: upstream1.ShapeBorder | null;
    getOuterPath(hostRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, guestRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null): upstream2.Path;
}
export declare function _AutomaticNotchedShapeFactory(host: Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}>, guest?: Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> | null): AutomaticNotchedShape;
export interface _AutomaticNotchedShapeNative extends AutomaticNotchedShape {
    readonly [_flaxDartTypeValue]: _AutomaticNotchedShapeNative;
    getOuterPath(hostRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, guestRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null): upstream2.Path;
    get host(): upstream1.ShapeBorder;
    get guest(): upstream1.ShapeBorder | null;
}
export declare abstract class _AutomaticNotchedShapeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutomaticNotchedShape>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AutomaticNotchedShape;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:AutomaticNotchedShape", readonly [], false];
    constructor(host: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, guest?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null);
}
export declare namespace _AutomaticNotchedShapeFactory {
    function implement(args: [host: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, guest?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null], implementation: {}): AutomaticNotchedShape;
}
declare const _AutomaticNotchedShapeBinding: typeof _AutomaticNotchedShapeFactory & (new (host: Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}>, guest?: Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> | null) => _AutomaticNotchedShapeNative);
export declare const AutomaticNotchedShape: typeof _AutomaticNotchedShapeBinding & _FlaxInstanceType<AutomaticNotchedShape> & _FlaxDartType<AutomaticNotchedShape, readonly ["class", "flax.core/sdk_painting#type:AutomaticNotchedShape", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "host" | "guest" | "getOuterPath" | "__flaxBound:package:flutter/src/painting/notched_shapes.dart::AutomaticNotchedShape" | "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape";
export {};

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import '@flax/flutter/painting/_bindings/sdk_painting_NotchedShape';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CircularNotchedRectangle extends Omit<upstream0.NotchedShape, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/notched_shapes.dart::CircularNotchedRectangle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
}> {
    readonly __CircularNotchedRectangle: unique symbol;
    readonly [_flaxDartTypeValue]: CircularNotchedRectangle;
}
export interface CircularNotchedRectangle {
    readonly [_flaxDartTypeValue]: CircularNotchedRectangle;
    getOuterPath(host: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, guest: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null): upstream1.Path;
    get inverted(): boolean;
}
export declare abstract class CircularNotchedRectangle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CircularNotchedRectangle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CircularNotchedRectangle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:CircularNotchedRectangle", readonly [], false];
    constructor(options?: {
        inverted?: boolean | undefined;
    });
}
export declare namespace CircularNotchedRectangle {
    function implement(args: [options?: {
        inverted?: boolean | undefined;
    }], implementation: {}): CircularNotchedRectangle;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "inverted" | "getOuterPath" | "__flaxBound:package:flutter/src/painting/notched_shapes.dart::CircularNotchedRectangle" | "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape";
export {};

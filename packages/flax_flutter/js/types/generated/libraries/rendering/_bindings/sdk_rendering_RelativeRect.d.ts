import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RelativeRect extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
}> {
    readonly __RelativeRect: unique symbol;
    readonly [_flaxDartTypeValue]: RelativeRect;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly hasInsets: boolean;
    shift(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): RelativeRect;
    inflate(delta: number): RelativeRect;
    deflate(delta: number): RelativeRect;
    intersect(other: Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }>): RelativeRect;
    toRect(container: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream2.Rect;
    toSize(container: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream3.Size;
    toString(): string;
}
export declare namespace _RelativeRectFactory {
    function fromDirectional(options: {
        textDirection: upstream0.TextDirection;
        start: number;
        top: number;
        end: number;
        bottom: number;
    }): RelativeRect;
}
export declare namespace _RelativeRectFactory {
    function implement(args: [], implementation: {
        shift: ((offset: upstream1.Offset) => Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }>);
        inflate: ((delta: number) => Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }>);
        deflate: ((delta: number) => Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }>);
        intersect: ((other: RelativeRect) => Readonly<{
            "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
        }>);
        toRect: ((container: upstream2.Rect) => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>);
        toSize: ((container: upstream3.Size) => Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>);
        toString: (() => string);
        get left(): number;
        get top(): number;
        get right(): number;
        get bottom(): number;
        get hasInsets(): boolean;
        get hashCode(): number;
    }): RelativeRect;
}
export declare namespace _RelativeRectFactory {
    const fill: RelativeRect;
}
export declare namespace _RelativeRectFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }> | null, t: number): RelativeRect | null;
}
export declare const RelativeRect: typeof _RelativeRectFactory & _FlaxInstanceType<RelativeRect> & _FlaxDartType<RelativeRect, readonly ["class", "flax.core/sdk_rendering#type:RelativeRect", readonly [], false]>;

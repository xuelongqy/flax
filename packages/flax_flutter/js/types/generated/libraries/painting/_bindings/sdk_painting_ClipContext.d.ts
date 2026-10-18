import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ClipContext extends Readonly<{
    "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
}> {
    readonly __ClipContext: unique symbol;
    readonly [_flaxDartTypeValue]: ClipContext;
}
export interface ClipContext {
    readonly [_flaxDartTypeValue]: ClipContext;
    clipPathAndPaint(path: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, clipBehavior: upstream2.Clip, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: (() => void)): void;
    clipRRectAndPaint(rrect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream4.RRect];
    }>, clipBehavior: upstream2.Clip, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: (() => void)): void;
    clipRSuperellipseAndPaint(rse: Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RSuperellipse];
    }>, clipBehavior: upstream2.Clip, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: (() => void)): void;
    clipRectAndPaint(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, clipBehavior: upstream2.Clip, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: (() => void)): void;
}
export declare abstract class ClipContext extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClipContext>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ClipContext;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ClipContext", readonly [], false];
    constructor();
    abstract get canvas(): upstream0.Canvas;
}
export declare namespace ClipContext {
    function implement(args: [], implementation: {
        get canvas(): Readonly<{
            "__flaxBound:dart:ui::Canvas": readonly [];
        }>;
    }): ClipContext;
}

import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BoxPainter extends Readonly<{
    "__flaxBound:package:flutter/src/painting/decoration.dart::BoxPainter": readonly [];
}> {
    readonly __BoxPainter: unique symbol;
    readonly [_flaxDartTypeValue]: BoxPainter;
}
export interface BoxPainter {
    readonly [_flaxDartTypeValue]: BoxPainter;
    dispose(): void;
    get onChanged(): (() => void) | null;
}
export declare abstract class BoxPainter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxPainter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BoxPainter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:BoxPainter", readonly [], false];
    constructor(onChanged?: (() => void) | null);
    abstract paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, configuration: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [];
    }>): void;
}
export declare namespace BoxPainter {
    function implement(args: [onChanged?: (() => void) | null], implementation: {
        paint: ((canvas: upstream0.Canvas, offset: upstream1.Offset, configuration: upstream2.ImageConfiguration) => void);
    }): BoxPainter;
}

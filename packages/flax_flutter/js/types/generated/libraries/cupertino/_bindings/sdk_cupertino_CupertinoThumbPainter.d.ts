import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CupertinoThumbPainter extends Readonly<{
    "__flaxBound:package:flutter/src/cupertino/thumb_painter.dart::CupertinoThumbPainter": readonly [];
}> {
    readonly __CupertinoThumbPainter: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoThumbPainter;
}
export interface CupertinoThumbPainter {
    readonly [_flaxDartTypeValue]: CupertinoThumbPainter;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
    get color(): upstream0.Color;
    get shadows(): DartList<upstream1.BoxShadow>;
}
export declare abstract class CupertinoThumbPainter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoThumbPainter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoThumbPainter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoThumbPainter", readonly [], false];
    constructor(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        shadows?: DartListInput<upstream1.BoxShadow, Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | undefined;
    });
}
export declare namespace CupertinoThumbPainter {
    function implement(args: [options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        shadows?: DartListInput<upstream1.BoxShadow, Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | undefined;
    }], implementation: {}): CupertinoThumbPainter;
}
export declare namespace CupertinoThumbPainter {
    const radius: number;
}
export declare namespace CupertinoThumbPainter {
    const extension: number;
}

import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoThumbPainter extends Readonly<{
    "__flaxBound:package:flutter/src/cupertino/thumb_painter.dart::CupertinoThumbPainter": readonly [];
}> {
    readonly __CupertinoThumbPainter: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoThumbPainter;
    readonly color: upstream0.Color;
    readonly shadows: DartList<upstream1.BoxShadow>;
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
}
export declare function _CupertinoThumbPainterFactory(options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    shadows?: DartListInput<upstream1.BoxShadow, Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | undefined;
}): CupertinoThumbPainter;
export declare namespace _CupertinoThumbPainterFactory {
    function switchThumb(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        shadows?: DartListInput<upstream1.BoxShadow, Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | undefined;
    }): CupertinoThumbPainter;
}
export interface _CupertinoThumbPainterNative extends CupertinoThumbPainter {
    readonly [_flaxDartTypeValue]: _CupertinoThumbPainterNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            color?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            shadows?: DartListInput<upstream1.BoxShadow, Readonly<{
                "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::Shadow": readonly [];
            }>> | undefined;
        }) => void;
        "switchThumb": (options?: {
            color?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | undefined;
            shadows?: DartListInput<upstream1.BoxShadow, Readonly<{
                "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::Shadow": readonly [];
            }>> | undefined;
        }) => void;
    };
    paint(canvas: Readonly<{
        "__flaxBound:dart:ui::Canvas": readonly [];
    }>, rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
    get color(): upstream0.Color;
    get shadows(): DartList<upstream1.BoxShadow>;
}
export declare abstract class _CupertinoThumbPainterNative extends _FlaxProxyBase {
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
    constructor(call: _FlaxProxySuper<_CupertinoThumbPainterNative>);
}
export declare namespace _CupertinoThumbPainterFactory {
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
declare const _CupertinoThumbPainterBinding: typeof _CupertinoThumbPainterFactory & (new (options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    shadows?: DartListInput<upstream1.BoxShadow, Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | undefined;
}) => _CupertinoThumbPainterNative) & (new (call: _FlaxProxySuper<_CupertinoThumbPainterNative>) => _CupertinoThumbPainterNative);
export declare namespace _CupertinoThumbPainterFactory {
    const radius: number;
}
export declare namespace _CupertinoThumbPainterFactory {
    const extension: number;
}
export declare const CupertinoThumbPainter: typeof _CupertinoThumbPainterBinding & _FlaxInstanceType<CupertinoThumbPainter> & _FlaxDartType<CupertinoThumbPainter, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoThumbPainter", readonly [], false]>;
export {};
